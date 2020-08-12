import React from 'react';
import { Link } from 'react-router-dom';
import ordenador from "../images/ordenador.png";
import Header from "./Header";

function Information() {
    return (
        <section className="infoPage">
            <Header />
            <div className="infoPage__box ">
                <h1 className="infoPage__box--title ">Tecnologías</h1>
                <img className="infoPage__box--img" src={ordenador} alt="Landing del proyecto" />
                <Link to="/Home" className="buttonHome">
                    <button>Home</button>
                </Link >
            </div>
        </section>
    );
}

export default Information;