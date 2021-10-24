import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button'
import logo  from './logo.jpeg';
import './Header.css';

const Header = () => {
    const { pathname } = useLocation()

    return (
        <div className="Header">
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li className={pathname === '/' && 'active'}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={pathname === '/about' && 'active'}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className={pathname === '/portfolio' && 'active'}>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className={pathname === '/contact' && 'active'}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Button>
                Download Resume
            </Button>
        </div>
    )
}

export default Header;