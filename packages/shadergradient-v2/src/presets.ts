import { animateT, EnvironmentPresetT, LightTypeT, typeT } from './types'

export const presets = {
  base: {
    title: 'Base',
    color: 'white',
    props: {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      uAmplitude: 2,

      color1: '#ff5005',
      color2: '#dbba95',
      color3: '#d0bce1',
    },
  },
  halo: {
    title: 'Halo',
    color: 'white',
    props: {
      type: 'plane' as typeT,

      uAmplitude: 1,
      uDensity: 1.3,
      uSpeed: 0.4,
      uStrength: 4,
      uTime: 0,
      uFrequency: 5.5,
      range: 'enabled',
      rangeStart: 0,
      rangeEnd: 40,
      frameRate: 10,
      destination: 'onCanvas',
      format: 'gif',
      axesHelper: 'off',
      brightness: 1.2,
      cAzimuthAngle: 180,
      cDistance: 3.6,
      cPolarAngle: 90,
      cameraZoom: 1,
      color1: '#ff5005',
      color2: '#dbba95',
      color3: '#d0bce1',
      embedMode: 'off',
      envPreset: 'city' as EnvironmentPresetT,
      gizmoHelper: 'hide',
      grain: 'on',
      lightType: '3d' as LightTypeT,
      pixelDensity: 1,
      fov: 45,
      positionX: -1.4,
      positionY: 0,
      positionZ: 0,
      reflection: 0.1,
      rotationX: 0,
      rotationY: 10,
      rotationZ: 50,
      shader: 'defaults',

      animate: 'on' as animateT,

      wireframe: false,
    },
  },
  pensive: {
    title: 'Pensive',
    color: 'white',
    props: {
      range: 'enabled',
      rangeStart: 0,
      rangeEnd: 40,
      frameRate: 10,
      destination: 'onCanvas',
      format: 'gif',
      animate: 'on',
      axesHelper: 'off',
      brightness: 1.5,
      cAzimuthAngle: 250,
      cDistance: 1.5,
      cPolarAngle: 140,
      cameraZoom: 12.5,
      color1: '#809bd6',
      color2: '#910aff',
      color3: '#af38ff',
      embedMode: 'off',
      envPreset: 'city',
      gizmoHelper: 'hide',
      grain: 'on',
      lightType: '3d',
      pixelDensity: 1,
      fov: 45,
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      reflection: 0.5,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 140,
      shader: 'defaults',
      type: 'sphere',
      uAmplitude: 7,
      uDensity: 0.8,
      uFrequency: 5.5,
      uSpeed: 0.3,
      uStrength: 0.4,
      uTime: 0,
      wireframe: false,
    },
  },
  mint: {
    title: 'Mint',
    color: 'white',
    props: {
      range: 'enabled',
      rangeStart: 0,
      rangeEnd: 40,
      frameRate: 10,
      destination: 'onCanvas',
      format: 'gif',
      animate: 'on',
      axesHelper: 'off',
      brightness: 1.2,
      cAzimuthAngle: 170,
      cDistance: 4.4,
      cPolarAngle: 70,
      cameraZoom: 1,
      color1: '#94ffd1',
      color2: '#6bf5ff',
      color3: '#ffffff',
      embedMode: 'off',
      envPreset: 'city',
      gizmoHelper: 'hide',
      grain: 'off',
      lightType: '3d',
      pixelDensity: 1,
      fov: 45,
      positionX: 0,
      positionY: 0.9,
      positionZ: -0.3,
      reflection: 0.1,
      rotationX: 45,
      rotationY: 0,
      rotationZ: 0,
      shader: 'defaults',
      type: 'waterPlane',
      uAmplitude: 0,
      uDensity: 1.2,
      uFrequency: 0,
      uSpeed: 0.2,
      uStrength: 3.4,
      uTime: 0,
      wireframe: false,
    },
  },
  interstella: {
    title: 'Interstella',
    color: 'white',
    props: {
      range: 'enabled',
      rangeStart: 0,
      rangeEnd: 40,
      frameRate: 10,
      destination: 'onCanvas',
      format: 'gif',
      animate: 'on',
      axesHelper: 'off',
      brightness: 0.8,
      cAzimuthAngle: 270,
      cDistance: 0.5,
      cPolarAngle: 180,
      cameraZoom: 15.1,
      color1: '#73bfc4',
      color2: '#ff810a',
      color3: '#8da0ce',
      embedMode: 'off',
      envPreset: 'city',
      gizmoHelper: 'hide',
      grain: 'on',
      lightType: 'env',
      pixelDensity: 1,
      fov: 45,
      positionX: -0.1,
      positionY: 0,
      positionZ: 0,
      reflection: 0.4,
      rotationX: 0,
      rotationY: 130,
      rotationZ: 70,
      shader: 'defaults',
      type: 'sphere',
      uAmplitude: 3.2,
      uDensity: 0.8,
      uFrequency: 5.5,
      uSpeed: 0.3,
      uStrength: 0.3,
      uTime: 0,
      wireframe: false,
    },
  },
}

export const initialActivePreset = 0

export const presetsArray = Object.values(presets)
