import React from "react";
import home from "../src/screens/home"
import resume from "../src/screens/resume"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/resume" component={resume} />
        </Switch>
      </div>
    </Router>
  );
}
