import * as React from 'react'
import { IconHoverBox } from '../../HoverBox/IconHoverBox'

type CopyBtnPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const CopyButton: React.FC<CopyBtnPropsT> = () => {
  const [copyUrlText, setCopyUrl] = React.useState('Copy')
  const [isHovered, setIsHovered] = React.useState(false)
  const initial = async () => {
    await setTimeout(() => {
      setIsHovered(false)
    }, 3000)
  }
  React.useEffect(() => {
    setIsHovered(true)
    initial()
  }, [])
  return (
    <div
      className='flex flex-col justify-center items-center'
      style={{ marginLeft: 5 }}
    >
      <div
        className='flex items-center cursor-pointer text-large font-medium bg-primary p-1.5 w-[70px] text-white rounded-sm justify-center'
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('Copied!')
          await setTimeout(() => {
            setCopyUrl('Copy')
          }, 2000)
        }}
        onMouseOver={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        {copyUrlText}
      </div>
      <IconHoverBox
        content={'Share it, or use it in Figma/Framer'}
        isHovered={isHovered}
        bottom={90}
      />
    </div>
  )
}
