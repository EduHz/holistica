import React, { Fragment } from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => (
  <Fragment>
    <div className="imagen-portada">
      <Hero />
    </div>
    <hr />
    <Content />
  </Fragment>
);

export default Home;
