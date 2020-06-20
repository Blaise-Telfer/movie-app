import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { Card } from 'react-bootstrap';

function Grid(props) {
	
	const [Movies, setMovies] = useState([]);
	
	return (
	
			<Card style={{background:`url("${props.image}")`, backgroundSize:"cover", 
			backgroundRepeat:"no-repeat", height:"100%", width:"100%"}}>
				<Card.Body>
					<h1 style={{color:"#fff"}}  > {`${props.title}`} </h1>
					<a href={`/movie/${props.movieId}`}>
						<img style={{width:"25%", height:"300px"}} 
						src={props.image}
						/>
					</a>
				</Card.Body>
				<Card.Footer>
				  <small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		
    )
}

export default Grid
