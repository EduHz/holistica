import React, { Fragment } from "react";
import "./Home.css";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => (
  <Fragment>
    <div className="imagen-portada text-center my-5"></div>
    <Content />
    <Footer />
  </Fragment>
);

export default Home;
