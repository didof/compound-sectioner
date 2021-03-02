import React from 'react'

import Section from '../sections/Section'

const SectionsBuilder = ({ height, sections, onEnter, onLeave }) => {
  const style = {
    height,
  }

  return (
    <article style={style}>
      {sections.map((element, index) => (
        <Section
          key={index}
          title={`Section ${index + 1}`}
          onEnter={onEnter.bind(null, index)}
          onLeave={onLeave.bind(null, index)}
        >
          {element}
        </Section>
      ))}
    </article>
  )
}

export default SectionsBuilder
