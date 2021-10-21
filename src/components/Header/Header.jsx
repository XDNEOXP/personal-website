import React from 'react';
import Button from '../Button/Button'
import logo  from './logo.jpeg';
import './Header.css';

const Header = () => (
    <div className="Header">
        <img src={logo} alt="logo" />
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Portfolio
            </li>
            <li>
                Contact
            </li>
        </ul>
        <Button>
            Download Resume
        </Button>
    </div>
)

export default Header;