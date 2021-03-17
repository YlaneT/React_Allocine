import React from 'react';
import styled from 'styled-components'
import {Link, useHistory} from "react-router-dom"

const Navbar = () => {

	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem('token');
		history.push('/');
		window.location.reload();
	}

	const handleLogin = () => {
		history.push('/Login');
	}

	const isLogged =  localStorage.getItem('token')

	return (
		<nav class="navbar">
				<Link to="/Films">Films</Link>
				<Link to="/Favorites">Favs</Link>
				
				{isLogged ? (<LogButton backColor='red' onClick={handleLogout}>Logout</LogButton>) : <LogButton backColor='pink'  onClick={handleLogin}>Login</LogButton>}
		</nav>
	);
};


const LogButton = styled.button `
	height : 35px;
	font-size : 22px;
	padding-left : 10px;
	padding-right : 10px;
	background-color : ${props => props.backColor};
	font-weight : bold;
	border-radius  : 8px;
	position :absolute;
	right: 15px;
	color: white;
	border : solid black 1px;
	box-shadow : 2px 2px 2px black;
`

export default Navbar;