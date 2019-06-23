import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import DashHome from './components/Dashboard/DashHome';
import { Container } from 'reactstrap';
import firebaseConfig from './firebaseConfig';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={DashHome} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App;
