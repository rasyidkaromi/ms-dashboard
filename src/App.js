import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import DashHome from './components/Dashboard/DashHome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={DashHome} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
