import React from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import  firebase from 'firebase/app';

const SideNav = (props) => {
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
          <NavItem>
            <Button onClick={ logout }>Log out</Button>
          </NavItem>
        </Nav>
      </div>
    );

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default SideNav;