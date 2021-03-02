import { useRef } from 'react'
import './style.css'
import useIO from '../../hooks/useIO'

const Section = ({ children, title, onEnter, onLeave }) => {
  const elRef = useRef()
  const { isVisible } = useIO(elRef)

  if (isVisible) {
    onEnter()
  } else {
    onLeave()
  }

  return (
    <section className='sectioner-section' ref={elRef}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

export default Section
