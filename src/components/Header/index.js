import React from 'react';
import Navbar from "../Navbar"
import logo from '../../logo.png';
import {Link} from 'react-router-dom'


const Header = () => {
	return (
		<header className="App-header">
			
			<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
			<Navbar/>
		</header>
	);
};

export default Header;