import {
  ChildTypeDepth1,
  ChildTypeDepth2,
  ChildTypeNotAllowed,
  TooManyOfType,
  TabsNotLinkedToSections,
} from './errors'

const guards = {
  childTypeDepth1(fault) {
    throw new ChildTypeDepth1(fault)
  },
  childTypeDepth2(fault) {
    throw new ChildTypeDepth2(fault)
  },
  childTypeNotAllowed(fault) {
    throw new ChildTypeNotAllowed(fault)
  },
  tooManyOfType(fault) {
    throw new TooManyOfType(fault)
  },
  tabsNotLinkedToSections() {
    throw new TabsNotLinkedToSections()
  },
}

export default guards
