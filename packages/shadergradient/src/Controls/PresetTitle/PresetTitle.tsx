import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useUIStore, useCursorStore, PRESETS } from '@/store'
import styles from './PresetTitle.module.scss'
import { TextAnimation } from '@/ui'

export function PresetTitle({
  color = '#FF430A',
  title = 'title',
  index = 0,
  fontSize = 120,
  isMobile = false,
  arrowOn = true,
  isDefaultPreset = false,
}) {
  const activePreset = useUIStore((state) => state.activePreset)
  const setActivePreset = useUIStore((state) => state.setActivePreset)

  const activeUp = () => {
    if (isDefaultPreset) setActivePreset(1)
    else {
      if (activePreset !== PRESETS.length - 1) {
        setActivePreset(activePreset + 1)
      } else {
        setActivePreset(0)
      }
    }
  }

  const activeDown = () => {
    if (isDefaultPreset) setActivePreset(PRESETS.length - 1)
    else {
      if (activePreset !== 0) {
        setActivePreset(activePreset - 1)
      } else {
        setActivePreset(PRESETS.length - 1)
      }
    }
  }

  React.useEffect(() => {
    arrowDownAnim.start({ opacity: 1, transition: { delay: 0.3 } })
    arrowUpAnim.start({ opacity: 1, transition: { delay: 0.3 } })
  }, [])

  const arrowUpAnim = useAnimation()
  const arrowDownAnim = useAnimation()
  const fogUpAnim = useAnimation()
  const fogDownAnim = useAnimation()

  return (
    <div className={styles.presetWrapper}>
      <div
        className={styles.presetTitle}
        style={{
          display: index === activePreset || isDefaultPreset ? 'flex' : 'none',
          gap: 25,
          flexDirection: isMobile === true ? 'column' : 'row',
        }}
      >
        <div
          style={{
            width: 'fit-content',
            height: 'fit-content',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 10,
            }}
          >
            <motion.div
              className={styles.clickOnTitle}
              style={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              animate={fogUpAnim}
              onClick={activeUp}
              onMouseMove={() => {
                useCursorStore.setState({ hover: 'arrowUp' })
                arrowUpAnim.start({
                  opacity: 1,
                })
                arrowDownAnim.start({
                  opacity: 0.4,
                })
              }}
              onMouseLeave={() => {
                useCursorStore.setState({ hover: 'default' })
                arrowUpAnim.start({
                  opacity: 1,
                })
                arrowDownAnim.start({
                  opacity: 1,
                })
              }}
            ></motion.div>
            <motion.div
              className={styles.clickOnTitle}
              style={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              animate={fogDownAnim}
              onClick={activeDown}
              onMouseMove={() => {
                useCursorStore.setState({ hover: 'arrowDown' })
                arrowDownAnim.start({
                  opacity: 1,
                })
                arrowUpAnim.start({
                  opacity: 0.4,
                })
              }}
              onMouseLeave={() => {
                useCursorStore.setState({ hover: 'default' })
                arrowDownAnim.start({
                  opacity: 1,
                })
                arrowUpAnim.start({
                  opacity: 1,
                })
              }}
            ></motion.div>
          </div>
          <TextAnimation
            delay={0}
            font='"Lora", serif'
            color={color}
            fontSize={fontSize}
            yBefore={50}
            //default 120, for mobile title 80, for customize 50
            content={isMobile === true ? title.substring(3) : title}
          />
        </div>
        <div
          className={styles.slideBtns}
          style={{
            color: color,
            fontSize: isMobile === true ? 22 : 30,
            display: arrowOn === false ? 'none' : 'flex',
          }}
        >
          <motion.div
            className={styles.slideBtn}
            initial={{ opacity: 0 }}
            animate={arrowDownAnim}
            onMouseOver={() => {
              fogDownAnim.start({
                opacity: 0.4,
              })
              arrowUpAnim.start({
                opacity: 0.4,
              })
              useCursorStore.setState({ hover: 'arrowDown' })
            }}
            onMouseLeave={() => {
              fogUpAnim.start({
                opacity: 0,
              })
              fogDownAnim.start({
                opacity: 0,
              })
              arrowDownAnim.start({
                opacity: 1,
              })
              arrowUpAnim.start({
                opacity: 1,
              })
              useCursorStore.setState({ hover: 'default' })
            }}
            onClick={activeDown}
            style={{ width: isMobile ? 35 : 40, height: isMobile ? 35 : 40 }}
          >
            ↓
          </motion.div>
          <motion.div
            className={styles.slideBtn}
            animate={arrowUpAnim}
            initial={{ opacity: 0 }}
            onMouseOver={() => {
              fogUpAnim.start({
                opacity: 0.4,
              })
              arrowDownAnim.start({
                opacity: 0.4,
              })
              useCursorStore.setState({ hover: 'arrowUp' })
            }}
            onMouseLeave={() => {
              fogUpAnim.start({
                opacity: 0,
              })
              fogDownAnim.start({
                opacity: 0,
              })
              arrowDownAnim.start({
                opacity: 1,
              })
              arrowUpAnim.start({
                opacity: 1,
              })
              useCursorStore.setState({ hover: 'default' })
            }}
            onClick={activeUp}
            style={{
              width: isMobile === true ? 35 : 40,
              height: isMobile === true ? 35 : 40,
            }}
          >
            ↑
          </motion.div>
        </div>
      </div>
    </div>
  )
}
