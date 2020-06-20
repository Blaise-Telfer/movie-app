import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./tools/auth";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Navigation from "./pages/navigation";
import MovieDetails from "./pages/details";
import Profile from "./pages/profile";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navigation />
      <div style={{ paddingTop:"40px", minHeight:"calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(Landing, null)} />
		  <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
		  <Route exact path="/profile" component={Auth(Profile, true)} />
		  <Route exact path="/movie/:movieId" component={Auth(MovieDetails, true)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
