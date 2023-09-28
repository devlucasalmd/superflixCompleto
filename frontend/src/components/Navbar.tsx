import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
interface NavbarProps{
    cor: string,
    fonte: string
}

function Navbar(props: NavbarProps) {
  return (
    <nav className={props.cor}>
        <Link to='/'><div className={`${props.fonte} link `}>Home</div></Link>
        <Link to='/videos'><div className={`${props.fonte} link `}>Videos</div></Link>
    </nav>
  )
}

export default Navbar