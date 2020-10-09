import React from "react";
import "./App.css";
import Home from "./components/pages/home";
import UserContext from "./context/UserContext";

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <UserContext.Provider >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </UserContext.Provider>
    </Router>
  </div>
  );
}

export default App;
