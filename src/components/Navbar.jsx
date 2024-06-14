import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
/* import './Navbar.css' */

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
                        AGORI
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={() => setClick(!click)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick={() => setClick(!click)}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-links" onClick={() => setClick(!click)}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
