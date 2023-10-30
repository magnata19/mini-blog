//CSS
import styles from './Navbar.module.css'

//Router
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>
            Mini<span><strong>Blog</strong></span>
        </NavLink>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>Sobre</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar