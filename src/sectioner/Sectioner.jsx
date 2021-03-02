import React from 'react'

import SectionerBuilder from './builder/SectionerBuilder'

import { Tabs, Tab } from './tabs'
import { Sections, Section } from './sections'

import ErrorBuilder from './guard'

class Sectioner extends React.Component {
  state = {
    tabs: [],
    sections: [],
  }

  constructor(props) {
    super(props)

    const { children } = props

    if (!children) return

    let tabsAmountCounter = 0,
      sectionsAmountCounter = 0
    React.Children.forEach(children, child => {
      const { name } = child.type

      // check if it is a sub-component
      if (!name) ErrorBuilder.childTypeDepth1(name)

      // check if it is either Tabs or Sections
      if (['Tab', 'Section'].includes(name))
        ErrorBuilder.childTyepNotAllowed(name)

      // Check if only one Tabs and one Sections
      if (name === 'Tabs') {
        tabsAmountCounter++
        if (tabsAmountCounter > 1) ErrorBuilder.tooManyOfType(name)
      }
      if (name === 'Sections') {
        sectionsAmountCounter++
        if (sectionsAmountCounter > 1) ErrorBuilder.tooManyOfType(name)
      }

      // Iterare through each Tab and save the content in state
      if (name === 'Tabs') {
        React.Children.forEach(child.props.children, child => {
          const { name } = child.type

          // if (!name) ErrorBuilder.childTypeDepth2(name)

          if (['Tabs', 'Sections', 'Section'].includes(name))
            ErrorBuilder.childTypeNotAllowed(name)

          this.state.tabs.push(child.props.children)
        })
      }

      if (name === 'Sections') {
        React.Children.forEach(child.props.children, child => {
          const { name } = child.type

          // if (!name) ErrorBuilder.childTypeDepth2(name)

          if (['Tabs', 'Sections', 'Tab'].includes(name))
            ErrorBuilder.childTypeNotAllowed(name)

          this.state.sections.push(child.props.children)
        })
      }
    })
  }

  componentDidMount() {
    if (this.state.tabs.length !== this.state.sections.length)
      ErrorBuilder.tabsNotLinkedToSections()
  }

  render() {
    const { width, height } = this.props
    const { tabs, sections } = this.state
    return (
      <SectionerBuilder
        width={width}
        height={height}
        tabs={tabs}
        sections={sections}
      />
    )
  }
}

Sectioner.Tabs = Tabs
Sectioner.Tab = Tab
Sectioner.Sections = Sections
Sectioner.Section = Section

export default Sectioner
