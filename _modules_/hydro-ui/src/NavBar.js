// navbar.js
import React from 'react';
import './NavBar.module.css';

function NavBar() {
    const pages = ['Home', 'About us', 'Contact us'];
    const navLinks = pages.map(page => {
        return (
            <a href={'/' + page} className="nav-button">
                {page}
            </a>
        )
    });

    return <nav>{navLinks}</nav>;
};
export default NavBar;
