import React, { useState, useEffect } from 'react';
import {url_base, apikey} from "../.secret.js";
import {Link} from 'react-router-dom';
import axios from 'axios';

const People = id => {

const [celeb, setCeleb] = useState({});

useEffect(() => {
	const generatedUrl = `${url_base}en/API/Name/${apikey}/${id}`;

	// https://imdb-api.com/en/API/Name/k_qjztqrcj/nm0000154
	axios({
		method: 'GET',
		url : generatedUrl
	}).then(res => {
		console.log(res.data.results);
		setCeleb(res.data.results)
	}
	).catch(err => console.log(err))
},[])

return (
	<div>
		Films
		
			<span>
					{/* TODO : Creer un styled component */}
					<p>{celeb.name}</p>
					<p>{celeb.role}</p>
					<img src={celeb.image} alt={`${celeb.name}`}/>
					<p>{celeb.summary}</p>
			</span>
	</div>
);
};

export default People;