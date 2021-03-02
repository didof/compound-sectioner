import React from 'react'

import Tab from '../tabs/Tab'

const TabsBuilder = ({ tabs }) => {
  return (
    <nav>
      {tabs.map((element, index) => (
        <Tab key={index}>{element}</Tab>
      ))}
    </nav>
  )
}

export default TabsBuilder
