import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../logo.svg";
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <Link to="/"><img
             src={logo}
             alt="logo"
            /></Link>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    );
};

export default Header;