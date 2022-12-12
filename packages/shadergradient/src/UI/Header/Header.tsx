import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { mainLoading } from '../../consts'
import { PRESETS } from '../../presets'
import { useUIStore } from '../../store'
import styles from './Header.module.scss'
import { TextLogo } from './TextLogo'

export function Header({
  mode = 'full',
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  loadingMotion = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
  onBackClick = () => void 0,
}) {
  const activePreset = useUIStore((state: any) => state.activePreset)
  const color = mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color
  const [loadingReady, setLoadingReady] = useState(false)

  useEffect(() => {
    if (loadingMotion === true) {
      setTimeout(() => {
        setLoadingReady(true) // about btn timing
      }, (mainLoading.logoTransition + 0.6) * 1000)
    }
  }, [])
  return (
    <motion.div
      className={styles.header}
      initial={{ top: loadingMotion === true ? '46%' : 0 }}
      animate={{
        top: 0,
      }}
      transition={{
        duration: 0.5,
        delay: mainLoading.logoTransition,
        type: 'spring',
      }}
    >
      {(inAbout !== true || isMobile === true) && (
        <TextLogo
          color={color}
          size={isMobile === true ? 15 : 18}
          onClick={onLogoClick}
          delay={loadingMotion === true ? 1.5 : 0}
        />
      )}

      {/* {aboutBtn && loadingReady === true && (
        <AboutBtn
          inAbout={inAbout}
          color={color}
          onAboutClick={onAboutClick}
          onBackClick={onBackClick}
          isMobile={isMobile}
        />
      )} */}
    </motion.div>
  )
}
