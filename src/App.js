import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import DashHome from './components/Dashboard/DashHome';
import firebaseConfig from './firebaseConfig';
import './style/login.scss';
import './style/dashboard.scss';
import './style/general.scss';

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
