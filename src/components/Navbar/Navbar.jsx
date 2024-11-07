import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/snkrs-logo.png' 
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import hamburgerIcon from '../../assets/hamburger-icon.svg'

const Navbar = () => {
  let [isOpen,setIsOpen]=useState(false);
  const togglemenu=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header>
        <nav>
            <div className="logo">
                <Link to="/"><img src={LogoImg}  alt="" /></Link>
            </div>
            <ul className={isOpen?"nav-link open":"nav-link"}>
                <li><NavLink to="/" className={({isActive})=>
                  isActive?'active':''
                }>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>
                  isActive?'active':''
                }>About</NavLink></li>
                <li><NavLink to="/products" className={({isActive})=>
                  isActive?'active':''
                }>Products</NavLink></li>
            </ul>
            <div className="hamburger" onClick={togglemenu}>
              <img  src={hamburgerIcon} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar