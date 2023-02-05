import * as React from 'react'
import { useQueryState } from '@/store'
import { Slider, Radio } from '@/ui'
import { InputPanel } from './InputPanel'

type ShapeControlsPropsT = {
  isFigma?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ShapeControls: React.FC<ShapeControlsPropsT> = ({ isFigma }) => {
  const [type, setType] = useQueryState('type')
  const [shader, setShader] = useQueryState('shader')
  const [animate, setAnimate] = useQueryState('animate')
  const [uTime, setUTime] = useQueryState('uTime')
  const [uSpeed, setUSpeed] = useQueryState('uSpeed')
  const [uStrength, setUStrength] = useQueryState('uStrength')
  const [uDensity, setUDensity] = useQueryState('uDensity')
  const [uFrequency, setUFrequency] = useQueryState('uFrequency')
  const [uAmplitude, setUAmplitude] = useQueryState('uAmplitude')
  const [pixelDensity, setPixelDensity] = useQueryState('pixelDensity')

  const [isHovered, setIsHovered] = React.useState('')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel title='Type'>
        <Radio
          name='type'
          value='plane'
          setValue={setType}
          check={type === 'plane'}
          label='Plane'
        />
        <Radio
          name='type'
          value='sphere'
          setValue={setType}
          check={type === 'sphere'}
          label='Sphere'
        />
        <Radio
          name='type'
          value='waterPlane'
          setValue={setType}
          check={type === 'waterPlane'}
          label='Water'
        />
      </InputPanel>
      {/* @ts-ignore */}
      {['plane', 'waterPlane'].includes(type) && (
        <InputPanel title='Shader'>
          <Radio
            name='shader'
            value='defaults'
            setValue={setShader}
            check={shader === 'defaults'}
            label='A'
          />
          <Radio
            name='shader'
            value='positionMix'
            setValue={setShader}
            check={shader === 'positionMix'}
            label='B'
          />
          {/* <Radio
     name='shader'
     value='snakeHalftone'
     setValue={setShader}
     check={shader === 'snakeHalftone'}
     label='SnakeHalftone'
   />
   <Radio
     name='shader'
     value='noise'
     setValue={setShader}
     check={shader === 'noise'}
     label='noise'
   />
   <Radio
     name='shader'
     value='grain'
     setValue={setShader}
     check={shader === 'grain'}
     label='grain'
   />
   <Radio
     name='shader'
     value='whatthe'
     setValue={setShader}
     check={shader === 'whatthe'}
     label='whatthe'
   /> */}
        </InputPanel>
      )}

      <InputPanel title='Animate'>
        <Radio
          name='animate'
          value='on'
          setValue={setAnimate}
          check={animate === 'on'}
          label='On'
        />
        <Radio
          name='animate'
          value='off'
          setValue={setAnimate}
          check={animate === 'off'}
          label='Off'
        />
      </InputPanel>

      {animate === 'off' && (
        <InputPanel title='Movements'>
          <Slider
            defaultValue={uTime}
            setValue={setUTime}
            step={0.1}
            min={0}
            max={9}
          />
        </InputPanel>
      )}

      {animate === 'on' && (
        <InputPanel title='Speed'>
          <Slider
            defaultValue={uSpeed}
            setValue={setUSpeed}
            step={0.1}
            min={0}
            max={2}
          />
        </InputPanel>
      )}

      <InputPanel
        title='Noise Strength'
        info={true}
        isFigma={isFigma}
        hoverContent='Control the height of the bumps'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Noise Strength')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={uStrength}
          setValue={setUStrength}
          step={0.1}
          min={0}
          max={10}
        />
      </InputPanel>

      <InputPanel
        title='Noise Density'
        info={true}
        isFigma={isFigma}
        hoverContent='Control the frequency of the bumps'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Noise Density')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={uDensity}
          setValue={setUDensity}
          step={0.1}
          min={0}
          max={7}
        />
      </InputPanel>

      {type === 'sphere' && (
        <InputPanel title='Spiral'>
          <Slider
            defaultValue={uAmplitude || 0}
            setValue={setUAmplitude}
            step={0.1}
            min={0}
            max={7}
          />
        </InputPanel>
      )}

      {/* Pixel-ratio */}
      <InputPanel title='Pixel Density'>
        <Slider
          defaultValue={pixelDensity}
          setValue={setPixelDensity}
          step={0.1}
          min={0}
          max={3}
        />
      </InputPanel>
    </div>
  )
}
