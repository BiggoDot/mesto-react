import React from 'react';
import logo from "../images/logo.svg";

function Header (){
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Место" />
        </header>)
}

export default Header;