import React, {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Signin = ({submit}) => {
	const [formState,setFormState] = useState({username:'',password:''});
	const [errorMessage,setErrorMessage] = useState('');

	const history = useHistory();
	var errMsg = null;
	if (errorMessage !== ''){
		errMsg = <StyledError>{errorMessage}</StyledError>
	}

	return (
		<div>
			<StyledTitle>Authentication form</StyledTitle>
			<StyledForm onSubmit={ e=>submit (e, formState, setErrorMessage,history)} >
				<StyledLabel for="UN">Username : </StyledLabel>
			
				<StyledInput type="text" name="UN" onChange={e => setFormState({...formState, username : e.target.value})}></StyledInput>

				<StyledLabel for="PW">Password : </StyledLabel>
				<StyledInput type="password" name="PW" onChange={e => setFormState({...formState, password : e.target.value})}></StyledInput>
				{errMsg}
				<StyledSubmit type="submit" name="Submit">Sign in</StyledSubmit>
			</StyledForm>
		</div>
	);
};


const StyledTitle = styled.h2`
	margin: 5px;
	color: red;
	text-transform: capitalize;
	font-size:30px;
`

const StyledForm = styled.form`
	margin: 5px;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
`

const StyledLabel = styled.label`
	margin: 5px;
	color: blue;
	font-style:italic;
	margin-top : 5px;
`
	
const StyledInput = styled.input`
	margin: 5px;
	border: 2px orangered solid;
	border-radius: 5px;
	background-color : #334;
	height:30px;
	color: white;
`

const StyledSubmit = styled.button`
	margin: 5px;
	border-radius : 5px;
	background-color : #334;
	height: 30px;
	width: 100px;
	color : white;
`

const StyledError = styled.span`
	width : 1000px;
	border-radius : 20px;
	padding : 10px;
	margin: 15px;
	background-color : rgba(50,0,25,0.7);
	color : red;
	text-transform:uppercase;
	font-weight:bold;
	font-size: 200%;
`

export default Signin;