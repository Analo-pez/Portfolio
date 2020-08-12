import React from 'react';
import Project from './Project';
import ateam from "../images/ateam.png";
import Botánical from "../images/Botánical.png";
import RickMorty from "../images/RickMorty.png";
import quoteGenerator from "../images/quoteGenerator.png";
import futuramas from "../images/futuramas.png";
import pokecards from "../images/pokecards.png";
import seryes from "../images/seryes.png";
import zapas from "../images/zapas.png";



const ProjectList = props => {

    return (
        <section className="main wrapper">
            <Project
                classArticle="project project1"
                link="https://analo-pez.github.io/The-A-Team-project/"
                titleLink="A-Team web"
                srcImg={ateam}
                title="A-Team Web"
                text="Web de presentación con diseño responsive y formulario de contacto de perfil profesional. Realizado con HTML5, CSS3, SASS"
            />
            <Project
                classArticle="project project2"
                link="http://analo-pez.github.io/Characters-Rick-y-Morty/"
                titleLink="Characters Rick y Morty web"
                srcImg={RickMorty}
                title="Personajes Rick y Morty"
                text="App web diseñada con React. Conectada a una API pública de personajes de la serie Rick y Morty, permite buscar y conocer a cada uno de ellos"
            />
            <Project
                classArticle="project project3"
                link="https://analo-pez.github.io/Botanical-2.0-App/"
                titleLink="Botánical web"
                srcImg={Botánical}
                title="Botánical 2.0 Profile-Card"
                text="Proyecto de código heredado realizado en equipo utilizando REACT"
            />
            <Project
                classArticle="project project4"
                link="https://analo-pez.github.io/QuotesGenerator/"
                titleLink="QuotesGenerator web"
                srcImg={quoteGenerator}
                title="Quotes Generator"
                text="Generador de frases del día, con contenido propio. Desarrollado con JavaScript, HTML5, CSS3, SASS"
            />
            <Project
                classArticle="project project5"
                link="https://analo-pez.github.io/FuturAmas-Card-Profile/"
                titleLink="Futuramas web"
                srcImg={futuramas}
                title="FuturAmas del Code"
                text="Web para diseño de profile cards personalizadas. Diseñado con JavaScript, HTML5, CSS3, SASS"
            />
            <Project
                classArticle="project project6"
                link="http://analo-pez.github.io/PokeCards/"
                titleLink="Pokecards web"
                srcImg={pokecards}
                title="PokeCards"
                text="Web app realizada utilando API´s públicas y desarrollada
                con REACT"
            />
            <Project
                classArticle="project project7"
                link="http://analo-pez.github.io/SerYes-finder/"
                titleLink="Ser-yes web"
                srcImg={seryes}
                title="Ser¡yes!"
                text="Buscador de series realizado utilizando API´s públicas y
                desarrollado con JavaScript, HTML5, CSS3, SASS"
            />
            <Project
                classArticle="project project8"
                link="https://analo-pez.github.io/The-A-Team-project/"
                titleLink="A-Team web"
                srcImg={zapas}
                title="Portfolio"
                text="Portfolio profesional realizado con React, en el que se implementa el uso de React Router"
            />
        </section>
    );
}

export default ProjectList;