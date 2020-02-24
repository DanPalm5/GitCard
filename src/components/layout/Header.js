import React from 'react';
import {Link} from 'react-router-dom'; 

function Header() {
    return (
        <header style={headerStyle}>
            <h1>G I T C A R D</h1>
            <h2 style = {subtitle}>Powered by React.js</h2>
            <Link style = {linkStyle}  to="/">H O M E</Link> 
            <Link style = {linkStyle}>|</Link><Link  style = {linkStyle} 
            to = "/about">A B O U T</Link>
        </header>
    )
}



const headerStyle = {
    background: '#222',
    color: 'skyBlue',
    textAlign: 'center',
    padding: '10px'
}


const linkStyle = {
    color: 'skyBlue',
    textDecoration: 'underline',
    padding: '10px'
}


const subtitle = {
    fontSize: '15px',
    padding: '10px',
    color: 'white'
}
export default Header;