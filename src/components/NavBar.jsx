import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand logo" href="/">
        Holistica Suyay
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quien-soy">
              ¿Quién soy?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">
              Contáctame
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/acerca-de">
              Acerca de
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
