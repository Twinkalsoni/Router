import React,{useState} from 'react'
import './Navbar.css'
import {  Menulist } from './Menulist'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [clicked, setclicked]=useState(false)
  const menulist = Menulist.map(({url,title},index)=> {
    return(
      <li key={index}>
        <a href={url} >{title}</a>
      </li>
    )
  });
  const handleClick=()=> {
    setclicked(!clicked);
  }
  return (
   <nav>
     <div className='logo'>
       VPN<font>Lab</font>

     </div>
     <div className='menu-icon' onClick={handleClick}>
<i className= {clicked ? "fas fa-times":"fas fa-bars"}></i>
     </div>
     <ul className={clicked ? "menu-list":"menu-list close"}>
{menulist}
     </ul>
   </nav>
  )
}

export default Navbar