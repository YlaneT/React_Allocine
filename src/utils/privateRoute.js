import React from 'react';
import {Route, Redirect} from 'react-router-dom'

// component : Component => rename pour pouvoir invoquer la props comme un composant
// ...rest => toutes les autres props
const PrivateRoute = ({component : Component, ...rest}) => {
	return (
	<Route
		{...rest}
		render = {
			props => localStorage.getItem('token') ? ( // TODO
				<Component {...props}/>
			) : (
				<Redirect to='/Login'/>
			)
		}
	/>
	);
};

export default PrivateRoute;