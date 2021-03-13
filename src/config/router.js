import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Home from "../screens/Home"
import Films from "../screens/Films"
import Login from "../screens/Login"
import People from "../screens/People"
import DetailsFilm from "../screens/DetailsFilm.js"
import Header from "../components/Header"


const Routes = () => {
	return (
		<Router>
			<Header/>
			<Switch>
				<Route exact path = "/" component = {Home}/>
				<Route exact path = "/Login" component = {Login}/>
				<Route exact path = "/Films" component = {Films}/>
				<Route exact path = "/Films/:id" component = {DetailsFilm}/>
				<Route exact path = "/People/:id" component = {People}/>

				<Redirect to = "/"/>

			</Switch>
		</Router>
	);
};

export default Routes;