import React from "react";
import {BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to="">Home</link>
            </li>

             <li>
              <link to="/about">About</link>
            </li>

             <li>
              <link to="/users">Users</link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

             <Route path="/users">
            <Users />
          </Route>

            <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
     
    </Router>
  );
}

function Home(){
return(
  <div>
    <h2>Home</h2>
    <p>This is home</p>
  </div>
);
}

function About(){
  return <h2>About</h2>;
}

function Users(){
  return <h2>Users</h2>
}