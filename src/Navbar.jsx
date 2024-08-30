import './Navbar.css'
import logo from './logo1.png'
import under from "./underline1.jpeg"
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RiMenuFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useRef } from 'react'
const Navbar=()=>{
    const[menu,Setmenu]=useState("home");
    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }
    return(
        <>
        <div className='navbar'>
      <img src={logo}></img>
      <p className='nav-mob-open'onClick={openMenu}>{<RiMenuFill size={40}/>}</p>
     
      <ul className="nav-menu" ref={menuRef}>
      <p className='nav-mob-close'onClick={closeMenu}>{< ImCross/>}</p>
  <li><AnchorLink className='anchor-link' href='#home'   smooth={true}><p onClick={()=>Setmenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={under}height="10px"width="100%"></img>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#about'  smooth={true}><p onClick={()=>Setmenu('about')}>About Me</p></AnchorLink>{menu==='about'? <img src={under}height="10px"width="100%"></img>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#home'  smooth={true}><p onClick={()=>Setmenu('home')}>Portfolio</p></AnchorLink>{menu==='portfolio'? <img src={under}height="10px"width="100%"></img>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>Setmenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <img src={under}height="10px"width="100%"></img>:<></>}</li>
 </ul>
<div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
        </>
    )
}
export default Navbar;