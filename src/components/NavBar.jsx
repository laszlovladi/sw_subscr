import React from 'react';
import { Link } from 'react-router-dom'
import {  Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

export default function NavBar(){

  return (
    <div className="navBar">
      <Navbar color="primary" light expand="md"> 
        <Nav className="mr-auto" navbar>
            <NavItem>
              <div className="nav-item">
                <Link className="nav-link" to='/'>
                  <div className="navbar-link">Home</div>
                </Link>
              </div>
            </NavItem>
        </Nav>
        <NavbarBrand>
          <div className="brand">
            <div style={{color: 'white'}}>Awesome Software</div>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
