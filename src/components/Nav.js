import React, {useState} from "react";
import logo from '../images/Logo.svg'; // Assuming you have a logo image in the assets folder
import { Link } from "wouter";



const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false); //MenuOpen is a state variable to track if the menu is open or closed
    //setMenuOpen is a function to update the menuOpen state variable and automatically re-render the component when the state changes
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); //Toggle the menuOpen state variable when the menu button is clicked
    }

/** <nav
  className={
    menuOpen
      ? "navbar open"
      : "navbar"
  }>
Inside, you put a static class "navbar", followed by a space and a dynamic segment ${menuOpen ? "open" : ""}.

If menuOpen is true, that segment becomes "open", so the full string is "navbar open".

If false, it becomes "", resulting in just "navbar " (without the extra class).




*/
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/'>
            <img src={logo} alt='logo'/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                
                <li>
                    <Link href='/'>About</Link>
                </li>                
                
                <li>
                    <Link href='/'>Services</Link>
                </li>                

                <li>
                    <Link href='/'>Menu</Link>
                </li>                
                
                <li>
                    <Link href='/booking'>Reservations</Link>                    
                </li>

                <li>
                    <Link href='/'>Order Online</Link>
                </li>
                                
                <li>
                    <Link href='/'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;