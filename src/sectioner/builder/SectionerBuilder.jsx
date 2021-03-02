import React from 'react'
import TabsBuilder from './TabsBuilder'
import SectionsBuilder from './SectionsBuilder'

function SectionerBuilder({
  width = '100vw',
  height = '100%',
  tabs,
  sections,
}) {
  const styleWrapper = { width, height, backgroundColor: 'yellow' }

  return (
    <div style={styleWrapper}>
      <TabsBuilder tabs={tabs} />
      <SectionsBuilder sections={sections} />
    </div>
  )
}

export default SectionerBuilder
