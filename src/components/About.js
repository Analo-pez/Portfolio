import React from 'react';
import imageAna from "../images/imageAna.png";
import Header from "./Header";
import Footer from "./Footer";

function About(props) {
    return (
        <section className="aboutPage">
            <Header
                route1="./Information"
                link1="Tecnologías"
                route2="./Home"
                link2="Proyectos"
                sectionName="Sobre mí"
            />
            <div className="aboutPage__box wrapper2">
                <img className="aboutPage__box--img" src={imageAna} alt="Landing del proyecto" />
                <section className="aboutPage__box--text">
                    <p className="aboutPage__box--paragraph">Me defino como una aprendiz de la vida,
			creciendo con cada experiencia transitada.</p>
                    <p className="aboutPage__box--paragraph">He comenzado mi andadura en el mundo de la programación y mi aspiración es trabajar
                    en proyectos que implementan grandes equipos
                    humanos, donde compartir conocimientos y
			diversidad.</p>
                    <p className="aboutPage__box--paragraph">Defiendo que los resultados son mejores
                    cuantas más perspectivas contemplan
			porque "muchos pocos hacen un mucho".</p>
                    <p className="aboutPage__box--paragraph">Como Desarrolladora Front-End puedo
                    seguir creando, compartiendo y explotando
                    mi creatividad al máximo.  ¡Quiero aportar lo mejor de mí y recalcular
			mis límites!</p>
                </section>
                <Footer />
            </div>
        </section>
    );
}

export default About;