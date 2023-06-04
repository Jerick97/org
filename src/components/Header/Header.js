import React from 'react';
import '../../assets/css/Header.css';
const Header = () => {
return (
    <header className='header'>
        <img src={process.env.PUBLIC_URL + '/img/header.png'} alt="Header Org"/>
    </header>
);
};

export default Header;