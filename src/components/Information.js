import React from 'react';
import { Link } from 'react-router-dom';
import zapas from "../images/zapas.png";
import Header from "./Header";

function Information() {
    return (
        <section className="infoPage">
            <Header />
            <div className="infoPage__box ">
                <h1 className="infoPage__box--title ">Tecnologías</h1>
                <img className="infoPage__box--img" src={zapas} alt="Landing del proyecto" />
            </div>
            <Link to="/Home" className="buttonHome">
                <button>Home</button>
            </Link >
        </section>
    );
}

export default Information;