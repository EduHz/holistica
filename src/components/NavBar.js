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

const scrollToSection = (position) => {
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const scrollToTop = () => {
    scrollToSection(0);
  };

  const scrollToQuienSoy = () => {
    scrollToSection(500);
  };

  const ProfileDropdown = () => (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret id="profileDropDown">
        <img
          src={user.picture}
          alt="Profile"
          className="nav-user-profile rounded-circle"
          width="50"
        />
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-right">
        <DropdownItem header>{user.name}</DropdownItem>
        <DropdownItem href="/profile">
          <FontAwesomeIcon icon="user" className="mr-3" /> Profile
        </DropdownItem>
        <DropdownItem id="qsLogoutBtn" onClick={logoutWithRedirect}>
          <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md" className="fixed-top navbar-sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto justify-content-center" navbar>
            <NavItem>
              <NavLink onClick={scrollToTop}>Holistica Suyay</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={scrollToQuienSoy}>¿Quién soy?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Cursos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contacto</NavLink>
            </NavItem>
          </Nav>
          <Nav className="d-none d-md-block" navbar>
            {!isAuthenticated && (
              <NavItem>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  className="btn-margin btn-sm"
                  onClick={() => loginWithRedirect()}
                >
                  Registrarse
                </Button>
              </NavItem>
            )}
            {isAuthenticated && <ProfileDropdown />}
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
                  Desconectarse
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
