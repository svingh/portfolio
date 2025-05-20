import React, { useEffect, useState } from 'react'
import { navLinks } from '../Constants'

const NavBar = () => {
    const  [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} >
            <div className='inner'>
                <a className='logo' href='#hero'>
                Vikramjeet Singh
                </a>
                
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link, name})=>(
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>

            
        </header>
    )
}

export default NavBar