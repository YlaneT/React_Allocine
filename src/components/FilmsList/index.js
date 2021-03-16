import React, {useState,useEffect} from 'react';
import {url_base, apikey} from "../../.secret.js";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';


const FilmsList = () => {

	const [films, setFilms] = useState([]);

	useEffect(() => {
		const generatedUrl = `${url_base}en/API/Top250Movies/${apikey}`;

		// https://imdb-api.com/en/API/Top250Movies/k_qjztqrcj
		axios({
			method: 'GET',
			url : generatedUrl
		}).then(res => {
			console.log(res.data.items);
			setFilms(res.data.items)
		}
		).catch(err => console.log(err))
	},[])

	return (
		<Liste>
				
			{films.map(f => (
				<Film key={f.id}>
					<Titre>{f.title} ({f.year})</Titre>
					<Link to={`/Films/${f.id}`}>
						<Poster src={f.image}/>
					</Link> 
						<p>Note : {f.imDbRating}/10</p>
				</Film>
			))}
		</Liste>
	);
};

const Liste = styled.div`
	width : 95%;
	margin : auto;
	display : grid;
	grid-template-columns : 49% 49%;
	grid-column-gap : 2%;
	grid-row-gap : 10px;
`

const Film = styled.div`
	display:inline-grid;
	border : solid red 3px;
	border-radius : 30px;
	background-color : rgb(255,225,100);
	text-decoration : none;
	grid-template-rows : 1fr 3fr auto;
`

const Titre = styled.h1`
	display:inline-grid;
	font-size : 15px;
	color : red;
	text-decoration : none;
`

const Poster = styled.img`
	display:inline-grid;
	width : 80%
`


export default FilmsList