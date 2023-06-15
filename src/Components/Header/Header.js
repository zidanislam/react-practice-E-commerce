import React from 'react';
import logo from "./../../logo.svg";
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="logo" />
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/cart">Cart</a>
                <a href="/log-in">Login</a>
            </nav>
        </div>
    );
};

export default Header;