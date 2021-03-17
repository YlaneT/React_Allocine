import React, { useState, useEffect } from 'react';
import {url_base, apikey} from "../.secret.js";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import axios from 'axios';




const DetailsFilm = props => {

	const [film, setFilm]						= useState({});
	const [threeActors, set3actors] = useState([]);
	const [fav, setFav]	=	useState(JSON.parse(localStorage.getItem("Favorites")))

	const setFilmAndActors = film => {
		setFilm(film);
		if (film.actorList.length >= 3){
			film.actorList.length = 3;
		}
		set3actors(film.actorList);
		setFav({id : film.id, title : film.title, image : film.image, plot : film.plot, directors : film.directors})


	}

	useEffect(() => {
		const generatedUrl = `${url_base}en/API/Title/${apikey}/${props.match.params.id}`;

		// https://imdb-api.com/en/API/Title/k_qjztqrcj/{id}
		// https://imdb-api.com/en/API/Title/k_qjztqrcj/tt1375666
		axios({
			method: 'GET',
			url : generatedUrl
		}).then(res => {
			setFilmAndActors(res.data)
			console.log(fav)
			console.log(isFavorited(fav))
		}).catch(err => console.log(err))
	},[])

	const isFavorited = (film) => {
		const currentFavorites = localStorage.getItem('Favorites') ? JSON.parse(localStorage.getItem('Favorites')) : []
		var isPresent = false
		currentFavorites.forEach(fav => {
			if (fav.id === film.id) {
				isPresent = true;
			}
		})
		return isPresent
	}

	// const toggleFavorite = (film) => {
	// 	var currentFavorites = localStorage.getItem('Favorites')? JSON.parse(localStorage.getItem('Favorites')): [];
	// 	currentFavorites.includes(film) ? removeFavorite(film, currentFavorites) : addFavorite(film, currentFavorites);
	// }

	const addFavorite = (film) => {
		var currentFavorites = localStorage.getItem('Favorites')? JSON.parse(localStorage.getItem('Favorites')): [];
		if (isFavorited (film)) {
			alert("Le film est déjà dans vos favoris");
		} else {
		currentFavorites.push(film);
		localStorage.setItem('Favorites',JSON.stringify(currentFavorites));
		console.log(currentFavorites);
		alert (`${film.title} a été ajouté aux favoris`)
		}

	}

	// const removeFavorite = (film) => {
	// 	var currentFavorites = localStorage.getItem('Favorites')? JSON.parse(localStorage.getItem('Favorites')): [];
	// 	currentFavorites.splice(currentFavorites.indexOf(film),1)
	// 	localStorage.setItem('Favorites',JSON.stringify(currentFavorites))
	// }

	return (
		<Details>
					<FilmTitle>{film.title}</FilmTitle>
					<Poster src={film.image} alt={`${film.fullTitle}`}/>
					
					{/* {
						isFavorited(fav) ?
						<FavButton backColor="Red" onClick={() => removeFavorite(fav)}> Remove from Favorites</FavButton> : */}
						<FavButton backColor="Yellow" onClick={() => addFavorite(fav)}> Add to Favorites</FavButton>
					{/* } */}
					


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
	grid-template-rows : 75px 200px auto auto 200px;
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
	max-width : 100%;
	display : inline-grid;
	grid-column-start : 1;
	grid-column-end : 2;
	grid-row-start : 2;
	grid-row-end:3;
`

const FavButton = styled.button`
	max-width : 100%;
	height : auto;
	margin : auto;
	padding : 5px 5px;
	font-size : 120%;
	display : inline-grid;
	border-radius : 8px;
	grid-column-start : 1;
	grid-column-end : 2;
	grid-row : 3;
	background-color : ${props => props.backColor};
	border : solid black 1px;
	box-shadow : 2px 2px 2px black;
`

const Synopsis = styled.span`
	font-style: italic;
	text-align: justify;
	grid-column-start:2;
	grid-column-end:3;
	grid-row: 2 / 4;
`


const StarsList = styled.div`
	display:inline-grid;
	grid-column-start:1;
	grid-column-end:3;
	grid-row : 5;
	width : 95%;
	margin:auto;
	justify-content:center;
	grid-template-columns : 1fr 1fr 1fr;
	grid-gap : 5px;
`

const Star = styled.div`
width : 90%;
`

const StarImage = styled.img`
	width : 80%;
	margin : auto;
`

const DirectorsList = styled.span`
	display:inline-grid;
	padding-top : 15px;
	grid-column : 1 / 3;
	grid-row : 4;
`

export default DetailsFilm;