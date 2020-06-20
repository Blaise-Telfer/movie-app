import React, {useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import {API_URL, API_KEY} from "../tools/config";

function MainImage(props) {
	
	return (
	
		<div style={{background:`url("${props.image}")`, height:"500px", width:"100%", position:"relative"}}>
		
		<div>
			<div style={{position:"absolute", maxWidth:"500px", color:"#fff" }}>
				<p>{props.title}</p>
				<p>{props.text}</p>
			</div>
			
		</div>
		
		</div>
		
    )
}

export default MainImage
