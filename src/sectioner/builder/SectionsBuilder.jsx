import React from 'react'

import Section from '../sections/Section'

const SectionsBuilder = ({ sections }) => {
  return (
    <nav>
      {sections.map((element, index) => (
        <Section key={index}>{element}</Section>
      ))}
    </nav>
  )
}

export default SectionsBuilder
