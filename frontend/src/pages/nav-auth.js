import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../tools/config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div mode={props.mode} style={{display:"flex", justifyContent:"center", padding:"20px", listStyle:"none" }}>
        <li style={{padding:"0 20px"}}>
          <a href="/login">Login</a>
        </li>
        <li style={{padding:"0 20px"}}>
          <a href="/register">Register</a>
        </li>
      </div>
    )
  } else {
    return (
      <div mode={props.mode} style={{display:"flex", justifyContent:"s", padding:"20px", listStyle:"none" }}>
        <li style={{padding:"0 20px"}}>
          <a href="/profile">User Profile</a>
        </li>
		<li style={{padding:"0 20px"}}>
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </div>
    )
  }
  
}

export default withRouter(RightMenu);