import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Favorites = () => {

	const removeFav = (film) => {
		var favsToModify = JSON.parse(localStorage.getItem('Favorites'));
		favsToModify.splice(favsToModify.indexOf(film),1)
		localStorage.setItem('Favorites',JSON.stringify(favsToModify))
	}	

	return (
		<div>
			<Titre>Liste de Favoris</Titre>
			{	JSON.parse(localStorage.getItem('Favorites')) === [] ? <p>Votre liste de favoris est vide : </p> :
			<ListeFavoris>
				{JSON.parse(localStorage.getItem('Favorites')).map(film =>
					<Film key={film.id}>
						<Synopsis>
							<TitreFilm>{film.title}</TitreFilm> : {film.plot}<br/>Directed by : {film.directors}
						</Synopsis>
						<Poster src={film.image}/>
						<UnfavButton onClick={removeFav(film)}>Remove from favorites</UnfavButton>
					</Film>	
				)}
			</ListeFavoris>
			}
		</div>
	);
};

const Titre = styled.h1`
	font-size : 20px;
`

const ListeFavoris = styled.div`
	grid-auto-rows : auto;
	grid-gap : 10px;
`

const Film = styled.div`
	height : 200px;
	grid-template-columns : 30% 70%;
	grid-template-rows : 200px auto;

`

const Synopsis = styled.p`
	display : inline-grid;
	font-style : italic;
	font-family : "Times New Roman";
	margin : 0px 10px;
	grid-row : 1 / 3;
	grid-column : 2;
`

const TitreFilm = styled.em`
	font-family : "Algerian" "Arial";
	font-size : 120%;
	font-style : normal;
	text-decoration : underline;
`

const Poster = styled.img`
	display : inline-grid;
	grid-column : 1;
	grid-row : 1;
	max-width : 100%;
	margin : auto;
`

const UnfavButton = styled.button`
	display : inline-grid;
	max-width : 100%;
	height : auto;
	margin : auto;
	padding : 5px 5px;
	font-size : 120%;
	display : inline-grid;
	border-radius : 8px;
	grid-column : 1 ;
	grid-row : 2 ;
	background-color : orange;
	border : solid black 1px;
	box-shadow : 2px 2px 2px black;
`

export default Favorites;