import React from 'react';
import ordenador from "../images/ordenador.png";
import Header from "./Header";
import Footer from "./Footer";

function Information() {
    return (
        <section className="infoPage">
            <Header
                route1="./Home"
                link1="Proyectos"
                route2="./About"
                link2="Sobre mí"
                sectionName="Tecnologías"
            />
            <div className="infoPage__box ">
                <img className="infoPage__box--img" src={ordenador} alt="Landing del proyecto" />
            </div>
            <Footer />
        </section>
    );
}

export default Information;