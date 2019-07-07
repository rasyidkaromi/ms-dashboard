import React, { Component } from 'react';
import Login from '../Login/Login';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import firebase from 'firebase';

class SideNav extends Component {
  state = {
    isSignedIn: true
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => true
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: user })
    })
  }

  render() {
    return (
      <div className="side-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>

          {this.state.isSignedIn ? (
            <div>

              <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
            </div>
          ) : (
              <Login />
            )}

        </Nav>
      </div>

    );
  }
}

export default SideNav;