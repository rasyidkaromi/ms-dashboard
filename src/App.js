import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './components/Login/Login';
import DashHome from './components/Dashboard/DashHome';
import { AuthProvider } from './Auth';
import '../src/assets/style/login.scss';
import '../src/assets/style/dashboard.scss';
import '../src/assets/style/general.scss';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/dashboard" component={DashHome} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
