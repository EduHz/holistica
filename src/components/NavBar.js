import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Holistica Suyay</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#inicio">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#quien-soy">¿Quién soy?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contacto">Contáctame</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#acerca-de">Acerca de</NavLink>
            </NavItem>
          </Nav>
          <Nav className="d-none d-md-block" navbar>
            {!isAuthenticated && (
              <NavItem>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  className="btn-margin"
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </Button>
              </NavItem>
            )}
            {isAuthenticated && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="profileDropDown">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{user.name}</DropdownItem>
                  <DropdownItem href="/profile">
                    <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                  </DropdownItem>
                  <DropdownItem id="qsLogoutBtn" onClick={logoutWithRedirect}>
                    <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                    out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
          {!isAuthenticated && (
            <Nav className="d-md-none" navbar>
              <NavItem>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  block
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </Button>
              </NavItem>
            </Nav>
          )}
          {isAuthenticated && (
            <Nav
              className="d-md-none justify-content-between"
              navbar
              style={{ minHeight: 170 }}
            >
              <NavItem>
                <span className="user-info">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile d-inline-block rounded-circle mr-3"
                    width="50"
                  />
                  <h6 className="d-inline-block">{user.name}</h6>
                </span>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon="user" className="mr-3" />
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon="power-off" className="mr-3" />
                <NavLink href="#" id="qsLogoutBtn" onClick={logoutWithRedirect}>
                  Log out
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
