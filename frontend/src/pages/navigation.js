import React, {useEffect, useState} from 'react'
import RightMenu from "./nav-auth";

function Navigation() {
	
	return (
		<div style={{display:"flex", justifyContent:"center", padding:"20px", listStyle:"none", fontSize:"20px" }}>
			
			<div style={{display:"flex", justifyContent:"center", padding:"20px", listStyle:"none" }}>
				<li>
					<a href="/">Home</a>
				</li>
			</div>
			<li>
				<RightMenu />
			</li>
			
		</div>
    )
	
}

export default Navigation
