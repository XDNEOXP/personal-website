import React from 'react';
import Icons from '../Icons/Icons';
import './Footer.css';

const Footer = () => (
    <footer className="Footer">
        <ul>
            <li>
                <a href="/fb">
                    <Icons name="Facebook" />
                </a>
            </li>
            <li>
                <a href="tw">
                    <Icons name="Twitter" />
                </a>
            </li>
        </ul>
        
        <span className="copyright">
              © 2021. All rights reserved. 
        </span>
    </footer>
)

export default Footer;