import React from 'react'

import Tab from '../tabs/Tab'

const TabsBuilder = ({ tabs, activeIndex, onClick }) => {
  const style = {}

  return (
    <nav style={style}>
      <ul>
        {tabs.map((element, index) => {
          return (
            <Tab
              key={index}
              isActive={activeIndex === index}
              onClick={onClick.bind(null, index)}
            >
              {element}
            </Tab>
          )
        })}
      </ul>
    </nav>
  )
}

export default TabsBuilder
