import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { mainLoading } from '@/consts'
import { usePropertyStore } from '@/store'
import { dToRArr } from '@/utils'
import { lineMaterial } from './lineMaterial'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'
import useQueryState from '@/useQueryState'
import { useFrame, extend } from '@react-three/fiber'
import { animated, useSpring, useSprings } from '@react-spring/three'

const { to, rotDur, meshDur, rotDelay, meshDelay } = mainLoading

const clock = new THREE.Clock()
//t = current time
//b = start value
//c = change in value
//d = duration

// @ts-ignore
Math.easeInOutCubic = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}

const increment = 20

export const Mesh: React.FC<any> = ({
  type,
  animate,
  uTime,
  uSpeed,
  uStrength,
  uDensity,
  uFrequency,
  uAmplitude,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  color1,
  color2,
  color3,
  reflection,
  wireframe,
  shader,
  rotSpringOption = ({ rotation }) => ({
    to: async (next, cancel) => {
      await next({ animatedRotation: rotation })
    },
    from: { rotation: dToRArr([0, 0, 0]) },
    config: { duration: 300 }, // default transition
  }),
  posSpringOption = ({ position }) => ({
    to: async (next, cancel) => {
      await next({ animatedPosition: position })
    },
    from: { position: [0, 0, 0] },
    config: { duration: 300 }, // default transition
  }),
}) => {
  // when color is hovered
  // const hoverState = usePropertyStore((state: any) => state.hoverState)
  const [, setZoomOut] = useQueryState('zoomOut')
  const meshCount = 192
  const meshLineCount = 36

  // useEffect(() => {
  //   if (hoverState !== 0) setZoomOut(true)
  //   else setZoomOut(false)
  // }, [hoverState])

  const materialMounted = useMaterials({
    type,
    shader,
    color1,
    color2,
    color3,
    uTime,
    uSpeed,
    uDensity,
    uStrength,
    uFrequency,
    uAmplitude,
  })

  const material: any = useRef()
  const linemat: any = useRef()

  let currentTime = 0
  useFrame((state, delta) => {
    if (material.current) {
      const elapsed = clock.getElapsedTime()

      // loading animation
      if (elapsed > meshDelay) {
        const current = material.current.userData.uLoadingTime.value
        const val =
          elapsed < meshDur + meshDelay
            ? // @ts-ignore
              Math.easeInOutCubic(
                currentTime,
                current,
                to - current,
                meshDur * 1000
              )
            : to
        material.current.userData.uLoadingTime.value = val

        if (elapsed < meshDur + meshDelay) {
          currentTime += increment
          // console.log({ elapsed, val })
        }
      }

      // loop animation
      if (animate === 'on') {
        material.current.userData.uTime.value = elapsed
        if (linemat.current !== undefined) {
          linemat.current.userData.uTime.value = elapsed
        }
      }
    }
  })

  useEffect(() => {
    if (material.current) {
      material.current.userData.uTime.value = uTime
      material.current.roughness = 1 - reflection
    }

    if (linemat.current !== undefined) {
      linemat.current.userData.uTime.value = uTime
    }
  }, [uTime, reflection, material.current])

  // change position/rotation for about page
  const position = [positionX, positionY, positionZ]
  const rotation = dToRArr([rotationX, rotationY, rotationZ])

  const { animatedPosition } = useSpring(posSpringOption({ position }))
  const { animatedRotation } = useSpring(rotSpringOption({ rotation }))

  return (
    <group>
      {/* @ts-ignore */}
      <animated.mesh position={animatedPosition} rotation={animatedRotation}>
        {type === 'plane' && <planeGeometry args={[10, 10, 1, meshCount]} />}
        {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
        {type === 'waterPlane' && (
          <planeGeometry args={[10, 10, meshCount, meshCount]} />
        )}
        {/* @ts-ignore */}
        {materialMounted && <colorShiftMaterial ref={material} />}
      </animated.mesh>

      {/* show the line mesh when color is hovered */}
      <mesh>
        <lineSegments
          renderOrder={1}
          position={position}
          rotation={rotation}
          // visible={hoverState !== 0 ? true : false}
          visible={false}
        >
          {type === 'plane' && (
            <planeGeometry args={[10, 10, 1, meshLineCount]} />
          )}
          {type === 'sphere' && (
            <icosahedronGeometry args={[1, meshLineCount / 3]} />
          )}
          {type === 'waterPlane' && (
            <planeGeometry args={[10, 10, meshLineCount, meshLineCount]} />
          )}
          {/* @ts-ignore */}
          {materialMounted && <hoveredLineMaterial ref={linemat} />}
        </lineSegments>
      </mesh>
    </group>
  )
}

function getHoverColor(hoverState: number, colors: any) {
  if (hoverState === 1) return [colors[0], '#000000', '#000000']
  else if (hoverState === 2) return ['#000000', colors[1], '#000000']
  else if (hoverState === 3) return ['#000000', '#000000', colors[2]]
  else return [colors[0], colors[1], colors[2]]
}

function useMaterials({
  type,
  shader,
  color1,
  color2,
  color3,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude,
}) {
  const [mounted, setMounted] = useState(false)
  const shaderType = type ?? 'plane'
  let sceneShader = shaders.defaults[shaderType] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader][shaderType]

  // extend only once when the component is mounted
  // this Mesh component always gets mounted when prop changes on the parent (Gradient.tsx)
  useEffect(() => {
    const ColorShiftMaterial = shaderMaterial(
      {
        // colors: getHoverColor(hoverState, [color1, color2, color3]),
        colors: [color1, color2, color3],
        uTime,
        uSpeed,

        uLoadingTime: 0,

        uNoiseDensity: uDensity,
        uNoiseStrength: uStrength,
        uFrequency,
        uAmplitude,
        uIntensity: 0.5,
      },
      sceneShader.vertex,
      sceneShader.fragment
    )

    const HoveredLineMaterial = lineMaterial(
      {
        uTime,
        uSpeed,
        uNoiseDensity: uDensity,
        uNoiseStrength: uStrength,
        uFrequency,
        uAmplitude,
        uIntensity: 0.5,
      },
      sceneShader.vertex
    )

    extend({ ColorShiftMaterial })
    extend({ HoveredLineMaterial })

    setMounted(true)
  }, [])

  return mounted
}
