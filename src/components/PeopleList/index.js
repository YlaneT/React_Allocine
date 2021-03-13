import React, {useState,useEffect} from 'react';
import {url_base, apikey} from "../../.secret.js"
import axios from 'axios';


const Actors = () => {

	const [people, setPeople] = useState([]);

	useEffect(() => {
		const generatedUrl = `${url_base}en/API/Top250Movies/${apikey}`;

		axios({
			method: 'GET',
			url : generatedUrl
		}).then(res => {
			console.log(res.data);
			setPeople(res.data)
		}
		).catch(err => console.log(err))
	},[])

	return (
		<div>
			People
			{/* {people.map(p => (
				<span>
					<p>{p.name}</p>
					<p>{p.role}</p>
					<p>{p.summary}</p>
				</span>
			))} */}
		</div>
	);
};

export default Actors;