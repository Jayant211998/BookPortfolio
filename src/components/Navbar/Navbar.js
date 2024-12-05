import React, { useState, useEffect } from 'react'
import './navbar.css';
import logo from "../../assets/applogo.png";
import { Link } from "react-scroll";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [ menu, showMenu ] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', updateScreenWidth);
  
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }, []);
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className="logo"/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} className="desktopMenuListItem" duration={500}>Home</Link>
            <Link activeClass='active' to='about' spy={true} className="desktopMenuListItem" duration={500}>Experience</Link>
            <Link activeClass='active' to='skills' spy={true} className="desktopMenuListItem" duration={500}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} className="desktopMenuListItem" duration={500}>Projects</Link>
        </div>
        <Link activeClass='active' to='contact' spy={true}><button className='desktopMenuBtn' duration={500}>
            <ChatBubbleOutlineIcon />
            Contact Me
        </button></Link>

        <MenuIcon style={{display: screenWidth<=720?'flex':'none'}} onClick={()=>{showMenu(!menu)}} />
        <div className='navMenu' style={{display: menu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} className="desktopMenuListItem" duration={500} onClick={()=>{showMenu(false)}}>Home</Link>
            <Link activeClass='active' to='about' spy={true} className="desktopMenuListItem" duration={500} onClick={()=>{showMenu(false)}}>Experience</Link>
            <Link activeClass='active' to='skills' spy={true} className="desktopMenuListItem" duration={500} onClick={()=>{showMenu(false)}}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} className="desktopMenuListItem" duration={500} onClick={()=>{showMenu(false)}}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} className="desktopMenuListItem" duration={500} onClick={()=>{showMenu(false)}}>Contact</Link>
        </div>

    </nav>
    );
}

export default Navbar;