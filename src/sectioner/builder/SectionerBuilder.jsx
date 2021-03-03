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
  const heights = useRef([0])
  const priority = useRef()

  const handleOnTabClick = index => {
    priority.current = true
    setActiveIndex(index)
  }

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
    if (!priority.current && first !== activeIndex) setActiveIndex(first)
  }

  const informOfHeight = (index, height) => {
    console.log(index, height)
    heights.current[index + 1] = height + heights.current[index]
    console.log(heights.current)
  }

  const handleScroll = node => {
    if (node) {
      node.addEventListener('scroll', () => {
        priority.current = false
      })
    }
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
        scrollH={priority.current && heights.current[activeIndex]}
        onScroll={handleScroll}
        onEnter={handleEnter}
        onLeave={handleLeave}
        onSectionMount={informOfHeight}
      />
    </div>
  )
}

export default SectionerBuilder
