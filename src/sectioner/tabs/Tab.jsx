import './style.css'

const Tab = ({ children, isActive, onClick }) => {
  const isActiveClass = isActive ? 'active' : ''
  return (
    <li className={`sectioner-tab ${isActiveClass}`} onClick={onClick}>
      {children}
    </li>
  )
}

export default Tab
