import React, { useState, useEffect } from 'react'
import {
  useUIStore,
  PRESETS,
  // PreviewBtn,
  // PreviewWrapper,
  PresetTitles,
  AllControls,
  StoreGradient,
} from 'shadergradient/with-store'
import styles from '../home/Home.module.scss'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
export default function Page() {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const loadingPercentage = useUIStore((state: any) => state.loadingPercentage)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    setMode('full')
  }, [])
  // const [embedMode] = useQueryState('embedMode')

  // console.log('loadingPercentage', loadingPercentage)

  return (
    <>
      {/* <PreviewWrapper /> */}

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div
            className={styles.presetTitleWrapper}
            style={{
              display: mode === 'full' ? 'block' : 'none',
              marginTop: isMobile === true ? '-35vh' : null,
            }}
          >
            <PresetTitles isMobile={isMobile} fontSize={50} />
          </div>
          <div className='fixed bottom-0'>
            <AllControls isMobile={isMobile} />
          </div>
        </div>

        <div className={styles.footer}>
          {/* <PreviewBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
            display={isMobile === true ? false : true}
          /> */}
        </div>
      </div>
    </>
  )
}

Page.canvas = (props) => (
  <>
    <StoreGradient />
  </>
)

export async function getStaticProps() {
  return {
    props: {
      title: 'Shadergradient - customize',
    },
  }
}
