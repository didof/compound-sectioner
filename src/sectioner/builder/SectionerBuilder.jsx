import React, { useState, useRef, useEffect } from 'react'
import TabsBuilder from './TabsBuilder'
import SectionsBuilder from './SectionsBuilder'

import './style.css'

const SectionerBuilder = ({
  width = '100vw',
  height = '100%',
  tabs,
  sections,
}) => {
  const style = {
    width,
    height,
    gridAutoRows: height,
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const listener = useRef([])

  const handleOnTabClick = index => setActiveIndex(index)

  const handleEnter = index => {
    if (listener) {
      listener.current[index] = true
      setFirstInView()
    }
  }

  const handleLeave = index => {
    if (listener) {
      listener.current[index] = false
      setFirstInView()
    }
  }

  const setFirstInView = () => {
    const first = listener.current.indexOf(true)
    if (first !== activeIndex) setActiveIndex(first)
  }

  return (
    <div style={style} className='sectioner'>
      <TabsBuilder
        tabs={tabs}
        activeIndex={activeIndex}
        onClick={handleOnTabClick}
      />
      <SectionsBuilder
        height={height}
        sections={sections}
        activeIndex={activeIndex}
        onEnter={handleEnter}
        onLeave={handleLeave}
      />
    </div>
  )
}

export default SectionerBuilder
