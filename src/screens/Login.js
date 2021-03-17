import React, {useEffect} from 'react';
import Signin from '../components/Signin';
import axios from 'axios';

const submit = (evenement,formState,setErrorMessage,history) => {

	evenement.preventDefault();

	if (!formState.username || !formState.password) {
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
		history.push('/')
		window.location.reload();
	}).catch(err => {
		console.log(err);
		setErrorMessage("une erreur est survenue, veuillez réessayer plus tard.")
	})
}

const Login = ({history}) => {
	useEffect(()=>{
		const token = localStorage.getItem('token');
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