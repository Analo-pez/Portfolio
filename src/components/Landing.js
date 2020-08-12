import React from 'react';
import { Link } from 'react-router-dom';
// import ordenador from "../images/ordenador.png";

function Landing() {
    return (
        <main className="page">
            <div className="title ">
                <h1 className="title__principal ">Ana López</h1>
                <h2 className="title__sub">Desarrolladora Front-end</h2>
            </div>
            <Link to="/Home" className="box-button">
                {/* <img className="project__img" src={ordenador} alt="Landing del proyecto" /> */}
                <button className="start-button">Ver portfolio</button>
            </Link >
        </main>
    );
}

export default Landing;