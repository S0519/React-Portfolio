import React from "react";
import Home from "../pages/home/home";
import NotFound from "../pages/notfound/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
