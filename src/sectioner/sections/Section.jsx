import { useEffect, useRef } from 'react'
import './style.css'
import useIO from '../../hooks/useIO'

const Section = ({ children, title, onEnter, onLeave, onSectionMount }) => {
  const elRef = useRef()
  const { isVisible } = useIO(elRef)

  if (isVisible) {
    onEnter()
  } else {
    onLeave()
  }

  useEffect(() => {
    const { y } = elRef.current.getBoundingClientRect()
    onSectionMount(y)
  }, [])

  return (
    <section className='sectioner-section' ref={elRef}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

export default Section
