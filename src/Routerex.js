import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./Banner";
function Search() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Banner" component={Banner} />
      </Switch>
    </Router>
  );
}

export default Search;
