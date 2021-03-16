import React, { useState, useEffect } from 'react';
import {url_base, apikey} from "../.secret.js";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import axios from 'axios';

const People = props => {

const [celeb, setCeleb] = useState({});
const [threeFilms, set3films] = useState([]);

const setCelebAndFilms = celeb => {
	setCeleb(celeb);
	if (celeb.knownFor.length >= 3){
		celeb.knownFor.length = 3;
	}
	set3films(celeb.knownFor)
}

useEffect(() => {
	const generatedUrl = `${url_base}en/API/Name/${apikey}/${props.match.params.id}`;

	// https://imdb-api.com/en/API/Name/k_qjztqrcj/nm0000154
	axios({
		method: 'GET',
		url : generatedUrl
	}).then(res => {
		console.log(generatedUrl);
		console.log(res.data);
		setCelebAndFilms(res.data)
	}
	).catch(err => console.log(err))
},[])

return (
	<Personne>
		<Nom>{celeb.name}<br/></Nom>
		<Role>{celeb.role}</Role>
		<Photo src={celeb.image} alt={`${celeb.name}, ${celeb.role}`}/>

		<Infos>
			<p>
				{Moment(celeb.birthDate).calendar()}
				{celeb.deathDate === null ? null  : ` - ${Moment(celeb.deathDate).calendar()}` }
			</p>
			
			{celeb.awards === null ? null : <p>{celeb.awards}</p>}
			<p></p>
			<p></p>
		</Infos>
		<Summary>{celeb.summary}</Summary>

		<Filmographie>
			{threeFilms.map(f => (
				<Film>
					<Link to={`/Films/${f.id}`}>
						<PhotoFilm src={f.image} alt={f.title}></PhotoFilm>
						<p>as {f.role}</p>
					</Link>
				</Film>
			))}
		</Filmographie>

		

	</Personne>
);
};
const Personne = styled.div`
	width : 90%;
	margin:auto;
	display:grid;
	grid-gap : 10px;
	grid-template-columns:50% 50%;
	grid-template-rows : auto auto 300px auto 200px;
	justify-content:center;
`

const Nom = styled.h1`
	font-size : 20px;
	display:inline-grid;
	grid-column : 1 / 3;
	grid-row : 1;
`

const Role = styled.h2`
	font-size : 15px;
	display:inline-grid;
	grid-column : 1 / 3;
	grid-row : 2;
	font-style : italic;
`

const Photo = styled.img`
	display:inline-grid;
	margin : auto;
	height:100%;
	grid-column : 1 / 3;
	grid-row : 3;
`

const Infos = styled.div`
	display:inline-grid;
	grid-column : 1;
	grid-row : 4;
`

const Summary = styled.p`
	display:inline-grid;
	grid-column : 2;
	grid-row : 4;
`

const Filmographie = styled.div`
	display:inline-grid;
	width : 95%;
	margin:auto;
	grid-column : 1 / 3;
	grid-row : 5;
	grid-template-columns : 1fr 1fr 1fr;
	grid-gap : 5px;
`

const Film = styled.div`
	display:inline-grid;
	height : 200px;
	text-decoration:none;
	color : #fa0;
`

const PhotoFilm = styled.img`
max-width : 100%
`

export default People;