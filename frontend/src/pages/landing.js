import React, {useEffect, useState} from 'react'
import { Button, Card, CardDeck } from 'react-bootstrap';
import {API_URL, API_KEY, IMAGE_URL} from "../tools/config";
import { FaCode } from "react-icons/fa";
import MainImage from "./main-image";
import Grid from "./grid";

function Landing() {
    
	const [Movies, setMovies] = useState([]);
	
	useEffect( () => {
		fetch(`${API_URL}movie/popular/?api_key=${API_KEY}&language=en-US&page=1`)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			setMovies(response.results)
		})
		
	}, []);
	
	return (
		<div className="App">
		
			<div style={{width:"80%", margin:"auto"}}>
				<h1>The Movie App</h1>
				<h2>Get info on the newest releases</h2>
				<hr/>
			</div>
			
			<div>
				{Movies[0] &&
					<MainImage image={`${IMAGE_URL}w1280${Movies[0].backdrop_path}`} 
					title={Movies[0].original_title} text={Movies[0].overview} />
				}
			</div>
			
			<div style={{width:"80%", margin:"auto"}}>
				<h2>Movies</h2>
				<hr/>
				
				<div style={{}}>
					{Movies && Movies.map((movie, index) => (
						<div key={index} style={{border:"#000 solid 2px", height:"500px"}}>
						<Grid 
							title={movie.original_title}
							image={movie.poster_path && `${IMAGE_URL}w400${movie.poster_path}`}
							movieId={movie.id}
						/>
						</div>
					))}
				</div>
				
				<hr/>
				<div style={{display:"flex", justifyContent:"center"}}>
					<button onClick="">Load More</button>
				</div>
			</div>
			
		
		</div>
    )
	
}

export default Landing
