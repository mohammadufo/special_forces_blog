import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./Components/topbar/TopBar";
import Register from "./Components/pages/home/register/Register";
import Login from "./Components/pages/home/Login/Login";
import Write from "./Components/pages/home/single/write/Write";
import Settings from "./Components/pages/home/settings/Settings";
import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/home/single/Single";
import Posts from "./Components/posts/Posts";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/post">
            <Single />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
