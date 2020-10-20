import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import UserContext from "./context/UserContext";
import Axios from "axios";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  let token = localStorage.getItem("auth-token");

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token: token,
          username: userRes.data.username,
          displayName: userRes.data.displayName,
          avatar: userRes.data.avatar,
          user_id: userRes.data.id,
          cover: userRes.data.cover,
          description: userRes.data.description,
          verified: userRes.data.verified
        });
      }
    };

    checkLoggedIn();
  }, [userData.token]);

  return (
    <div className="App">
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </UserContext.Provider>
    </Router>
  </div>
  );
}

export default App;
