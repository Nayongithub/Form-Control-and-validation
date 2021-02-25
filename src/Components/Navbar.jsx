import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";
import ReactHookValidation from './ReactHookValidation'
import FormControls from './FormControls'


const Navbar = () => {
  return (
    <>
      <Router>
        
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">FormControls</Link>
            </li>
            <li>
              <Link to="/ReactHookValidation">ReactHookValidation</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ReactHookValidation">
            <ReactHookValidation />
          </Route>
          <Route path="/">
            <FormControls />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
};

export default Navbar;
