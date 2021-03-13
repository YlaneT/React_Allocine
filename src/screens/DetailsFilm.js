import React, { useState, useEffect } from 'react';
import {url_base, apikey} from "../.secret.js";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import axios from 'axios';




const DetailsFilm = props => {

	const [film, setFilm] = useState({});
	const [threeActors, set3actors] = useState([]);

	const setFilmAndActors = film => {
		setFilm(film);
		if (film.actorList.length >= 3){
			film.actorList.length = 3;
		}
		set3actors(film.actorList)
	}

	useEffect(() => {
		const generatedUrl = `${url_base}en/API/Title/${apikey}/${props.match.params.id}`;

		// https://imdb-api.com/en/API/Title/k_qjztqrcj/{id}
		// https://imdb-api.com/en/API/Title/k_qjztqrcj/tt1375666
		axios({
			method: 'GET',
			url : generatedUrl
		}).then(res => {
			// console.log("props ", props);
			// console.log(props.match.params.id);
			console.log(res.data);
			// console.log(generatedUrl);
			setFilmAndActors(res.data)
			// console.log("film ", film);
			// console.log("film.actorList ", film.actorList);
			// console.log(threeActors);
			// console.log(threeActors);
		}).catch(err => console.log(err))
	},[])

	console.log(threeActors);


	return (
		<Details>
					<FilmTitle>{film.title}</FilmTitle>
					<Poster src={film.image} alt={`${film.fullTitle}`}/>
					<Synopsis>{film.plot}</Synopsis>
					<StarsList>
						
						{threeActors.map(actor => (
							<Star>
								<Link to={`/People/${actor.id}`}>
									<p>{actor.name}</p>
									<StarImage src={actor.image} alt={actor.name}/> 
								</Link>
							</Star>
						))}
					</StarsList>
					<DirectorsList>
						Director(s) : {film?.directorList?.map(dir => ( dir.name ))}
					</DirectorsList>
					
					

		</Details>
	);
};



const Details = styled.div`
	width : 90%;
	margin:auto;
	display:grid;
	grid-gap : 10px;
	grid-template-columns:30% 70%;
	grid-template-rows : 75px auto 200px 100px;
	justify-content:center;
`

const FilmTitle = styled.h1`
	font-size : 20px;
	display:inline-grid;
	grid-column-start:1;
	grid-column-end:3;
	grid-row-start : 1;
	grid-row-end : 2;
`

const Poster = styled.img`
	max-width:100%;
	display:inline-grid;
	grid-column-start : 1;
	grid-column-end : 2;
	grid-row-start : 2;
	grid-row-end:3;
`

const Synopsis = styled.span`
	font-style: italic;
	text-align: justify;
	grid-column-start:2;
	grid-column-end:3;
	grid-row-start : 2;
	grid-row-end : 3;
`


const StarsList = styled.div`
	display:inline-grid;
	grid-column-start:1;
	grid-column-end:3;
	grid-row-start : 3;
	grid-row-end : 4;
	width : 90%;
	margin:auto;
	justify-content:center;
	grid-template-columns : 1fr 1fr 1fr;
	grid-gap : 5px;
`

const Star = styled.div`
width : 80%;
`

const StarImage = styled.img`
	width : 80%;
`

const DirectorsList = styled.span`
	display:inline-grid;
	grid-column-start:1;
	grid-column-end:3;
	grid-row-start : 4;
	grid-row-end : 5;
`

export default DetailsFilm;