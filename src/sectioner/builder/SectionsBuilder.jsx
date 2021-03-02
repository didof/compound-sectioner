import { useRef, useEffect } from 'react'

import Section from '../sections/Section'

const SectionsBuilder = ({
  height,
  sections,
  onEnter,
  onLeave,
  onSectionMount,
  scrollH,
  onScroll,
}) => {
  const style = {
    height,
  }

  const elRef = useRef()

  let el
  useEffect(() => {
    if (!scrollH || isNaN(scrollH * 1)) return
    if (!el) {
      el = document.getElementById('scrollable')
      console.log(scrollH)
      el.scrollTo({
        top: scrollH,
        behavior: 'smooth',
      })
    }
  }, [scrollH])

  return (
    <article style={style} ref={onScroll} id='scrollable'>
      {sections.map((element, index) => (
        <Section
          key={index}
          title={`Section ${index + 1}`}
          onEnter={onEnter.bind(null, index)}
          onLeave={onLeave.bind(null, index)}
          onSectionMount={onSectionMount.bind(null, index)}
        >
          {element}
        </Section>
      ))}
    </article>
  )
}

export default SectionsBuilder
