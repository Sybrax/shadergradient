import * as React from 'react'
import { motion } from 'framer-motion'

import { useQueryState } from '@/store'
import { cx } from '@/utils'
import {
  ColorControls,
  EffectControls,
  ShapeControls,
  ViewControls,
} from '../index'

type Props = {
  // All other props
  [x: string]: any
}

export const PropertyControls: React.FC<Props> = ({
  // isMobile,
  activeTab,
  setActiveTab,
  isFigma,
}) => {
  const [type] = useQueryState('type')
  // even if there is activeTab, queryState should be have value before return below controls
  if (!type) return null

  return (
    <motion.div
      className={cx(
        'w-full bg-controls-panel-mobile text-primary mx-auto md:h-full relative hide-scrollbar'
      )}
      style={{
        originY: 1,
      }}
      animate={{
        height: 'fit-content',
        maxHeight: activeTab === 'none' ? 0 : 600,
        padding: activeTab === 'none' ? 0 : 20,
        overflow: activeTab === 'none' ? 'hidden' : 'visible',
        borderRadius: '4px 4px 0 0',
      }}
      transition={{
        duration: 0.72,
        overflow: { delay: activeTab !== 'none' ? 0.72 : 0 },
      }}
    >
      {activeTab === 'shape' && <ShapeControls />}
      {activeTab === 'colors' && <ColorControls isFigma={isFigma} />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
    </motion.div>
  )
}
