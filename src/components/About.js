import React from 'react';
import { Link } from 'react-router-dom';
import imageAna from "../images/imageAna.png";
import Header from "./Header";

function About() {
    return (
        <section className="aboutPage">
            <Header />
            <div className="aboutPage__box ">
                <h1 className="aboutPage__box--title ">Sobre mí</h1>
                <img className="aboutPage__box--img" src={imageAna} alt="Landing del proyecto" />
            </div>
            <Link to="/Home" className="buttonHome">
                <button>Home</button>
            </Link >
        </section>
    );
}

export default About;