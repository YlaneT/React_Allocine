import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import PrivateRoute from "../utils/privateRoute"

import Home from "../screens/Home"
import Films from "../screens/Films"
import Login from "../screens/Login"
import People from "../screens/People"
import Favorites from "../screens/Favorites"
import DetailsFilm from "../screens/DetailsFilm"

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
				<PrivateRoute exact path =  "/Favorites" component = {Favorites}/>

				<Redirect to = "/"/>

			</Switch>
		</Router>
	);
};

export default Routes;