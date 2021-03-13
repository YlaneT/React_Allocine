import React, {useEffect} from 'react';
import Signin from '../components/Signin';
import axios from 'axios';

const submit = (evenement,formState,setErrorMessage,history) => {

	// prévient JS de ne pas utiliser le comportement de base, à savoir raffraichir la page
	evenement.preventDefault();

	if (!formState.username || !formState.password) {
		// Si à la validation, il manque le username ou password
		setErrorMessage("Les champs ne doivent pas être vides");
		return;
	}

	axios({
			method: "POST",
			url:'https://easy-login-api.herokuapp.com/users/login',
			data: {
				username: formState.username,
				password: formState.password
		}
	}).then(res => {
		localStorage.setItem('token', res.headers['x-access-token']);
		/* Redirige le user vers la page Characters */
		history.push('/Home')
		window.location.reload();
	}).catch(err => {
		console.log(err);
		setErrorMessage("une erreur est survenue, veuillez réessayer plus tard.")
	})
}

const Login = ({history}) => {
	useEffect(()=>{
		const token = localStorage.getItem('token');
		console.log('Login token -> ', token);
		if (token){
			history.push('/')
		}
	},[history])
	
	return (
		<div>
			<Signin submit={submit}/>
		</div>
	);
};

export default Login;