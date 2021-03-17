import React, {useState} from 'react';
import styled from 'styled-components';

const Reviews = (props) => {

	const [comments, upd_reviews] = useState(JSON.parse(localStorage.getItem(`${props.idFilm}`)));

	const add_comment = (new_comm) => {
		upd_reviews([...comments,new_comm])
		localStorage.setItem(`${props.idFilm}`,comments)

	}

	return (
		<div>
			<ReviewList>
				Comments about the film :

				{comments.map(comm =>
				<Comment>
					{comm}
				</Comment>
				)}

			</ReviewList>

			{localStorage.getItem('token') ? 
			<Form>
				<h2>You can add a review here</h2>

				<form onSubmit={(e) => {
					e.preventDefault();
					if (!comments){
						alert("Vide")
					}
					add_comment(document.getElementById("new_comm").value)}}>
					<label>Comment : </label>
					<input type="text-area" id="new_comm" name="comm" />
					<button type="submit" className="modify" > Add</button>
				</form>
			</Form>
			:
			<p>You must be logged in to comment</p> }
		</div>
	);
};

const ReviewList = styled.div`
	grid-auto-rows : auto;
	grid-gap : 15px;
	margin : 15px;
	border : red solid 2px;
	border-radius : 15px;
`
const Comment = styled.div`

`

const Form = styled.div`
	margin-bottom : 100px;
`

export default Reviews;