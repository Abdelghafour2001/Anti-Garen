import React, {useState} from 'react'
import './Navbar.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [click,setClick]= useState(false);
  const handleClick=()=>setClick(!click);
    return (


    <div className='navbar'>
        <div className='container'>
            <h1 style={{marginLeft:'1rem',color:'#00d8ff'}}>!Garen</h1>
            <ul className={click ? 'nav active' : 'nav'}>
                <li className='nav-item'>
                    <a href='/'>Platform</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Solo Mid</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>ADC</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Jungle</a>
                </li>
                <li className='nav-item'>
                   <a className='btn' href='/'>Ban Garen</a>
                </li>
            </ul>
            <div onClick={handleClick} className='hamburger'>
                {click ? (<AiOutlineClose className='icon'/>): <AiOutlineMenu className='icon'/>}
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar