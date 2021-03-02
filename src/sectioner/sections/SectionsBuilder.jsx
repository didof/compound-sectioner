import React from 'react'

import TabUI from '../builder/sectionsBuilder/SectionUI'

const TabsBuilder = ({ tabs }) => {
  console.log(tabs)
  return (
    <nav>
      {tabs.map((element, index) => (
        <TabUI key={index}>{element}</TabUI>
      ))}
    </nav>
  )
}

export default TabsBuilder
