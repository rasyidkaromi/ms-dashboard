import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import DashHome from './components/Dashboard/DashHome';
import firebaseConfig from './firebaseConfig';
import './Style/login.scss';
import './Style/dashboard.scss';
import './Style/general.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={DashHome} />
            <Redirect from="*" to="/" />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
