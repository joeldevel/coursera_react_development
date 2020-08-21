import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,
   Collapse, NavItem,Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state={
      isNavOpen: false
    }
    // bind the method to make it work!
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState( { isNavOpen: !this.state.isNavOpen } );
  }

  render() {
    return(
      <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="30" width="41"
              alt="Ristorante Con Fusion"
            />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info"></span> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card"></span> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-md-6">
              <h1>Ristorante Con Fusion</h1>
              <p>Nous devons...</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      </>
    )
  }
}

export default Header