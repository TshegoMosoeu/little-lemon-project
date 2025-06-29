import React, {useState} from "react";
import logo from '../images/Logo.svg'; 
import { Link } from "wouter";



const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    }


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
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;