import React from "react";
import logo from  '../images/Logo.svg'; 
import { Link } from "wouter";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className="">
                    <h3>Important Links</h3>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>   
                        <li>
                            <Link href='/'>About</Link>
                        </li>   
                                                <li>
                            <Link href='/'>Menu</Link>
                        </li>   
                                                <li>
                            <Link href='/booking'>Reservation</Link>
                        </li>   
                                                <li>
                            <Link href='/'>Order Online</Link>
                        </li>   
                                                <li>
                            <Link href='/'>Login</Link>
                        </li>   
                    </ul>

                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li><strong>Address:</strong> <br/> 123 Main St, Anytown, USA</li>
                        <li><strong>Phone:</strong> <br/> 123 456-7890</li>
                        <li><strong>Email: </strong> <br/> littlelemon@hotmail.com </li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <Link href='/'>Facebook</Link>
                        </li> 
                        <li>
                            <Link href='/'>Instagram</Link>
                        </li> 
                        <li>
                            <Link href='/'>LinkedIn</Link>
                        </li> 
                    </ul>
                </div>
            </section>

        </footer>
    );
}

export default Footer;