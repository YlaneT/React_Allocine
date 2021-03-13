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
	border-radius  : 5px;
	position :absolute;
	right: 15px;
	color: white;
`

export default Navbar;