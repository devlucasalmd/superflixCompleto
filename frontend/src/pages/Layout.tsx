import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
function Layout() {
  return (
    <div>
      <Navbar cor="dark" fonte='letter'/>
      <Outlet/>
    </div>
  )
}

export default Layout