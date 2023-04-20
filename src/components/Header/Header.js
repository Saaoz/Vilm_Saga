import React from 'react';
import Logo from '../Content_header/Logo';
import './Header_style.css';
import SearchBar from '../Content_header/SearchBar';

function Header() {
    return (
        <header>
            <Logo />
            <SearchBar />
        </header>
    );
}

export default Header;
