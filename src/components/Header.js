import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">FixMyResume</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#" className="sign-in">Sign In</a>
            </nav>
        </header>
    );
}

export default Header;
