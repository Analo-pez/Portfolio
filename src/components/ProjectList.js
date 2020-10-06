import React from 'react';
import Project from './Project';
import ateam from "../images/ateam.png";
import Botánical from "../images/Botánical.png";
import RickMorty from "../images/RickMorty.png";
import quoteGenerator from "../images/quoteGenerator.png";
import futuramas from "../images/futuramas1.png";
import pokecards from "../images/pokecards.png";
// import seryes from "../images/seryes.png";
import svelteFilms from "../images/svelte-films.png";
import portfolio from "../images/Portfolio.png";
import ScrollAnimation from 'react-animate-on-scroll';

function ShowScroll(visible) {
    if (visible.inViewport) {
        // Part of the element is in the viewport (the area defined by the offset property)
    } else if (visible.onScreen) {
        // Part of the element is visible on the screen
    } else {
        // Element is no longer visible
    }
}


const ProjectList = props => {

    return (
        <section className="main wrapper">
            <ScrollAnimation animateIn="fadeInRight" onChange={ShowScroll}>
                <Project
                    classArticle="project project1"
                    link="https://analo-pez.github.io/The-A-Team-project/"
                    titleLink="A-Team web"
                    srcImg={ateam}
                    codeUrl="https://github.com/Analo-pez/The-A-Team-project"
                    title="A-Team Web"
                    text="Web de presentación con diseño responsive y formulario de contacto de perfil profesional. Realizado con HTML5, CSS3, SASS"
                />
            </ScrollAnimation >
            <ScrollAnimation animateIn="fadeInLeft" onChange={ShowScroll}>
                <Project
                    classArticle="project project2"
                    link="http://analo-pez.github.io/Characters-Rick-y-Morty/"
                    titleLink="Characters Rick y Morty web"
                    srcImg={RickMorty}
                    codeUrl="https://github.com/Analo-pez/Characters-Rick-y-Morty"
                    title="Personajes Rick y Morty"
                    text="App web diseñada con React. Conectada a una API pública de personajes de la serie Rick y Morty"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" onChange={ShowScroll}>
                <Project
                    classArticle="project project3"
                    link="https://analo-pez.github.io/Botanical-2.0-App/"
                    titleLink="Botánical web"
                    srcImg={Botánical}
                    codeUrl="https://github.com/Analo-pez/Botanical-2.0-App"
                    title="Botánical 2.0 Profile-Card"
                    text="Proyecto de código heredado realizado en equipo utilizando REACT"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" onChange={ShowScroll}>
                <Project
                    classArticle="project project4"
                    link="https://analo-pez.github.io/QuotesGenerator/"
                    titleLink="QuotesGenerator web"
                    srcImg={quoteGenerator}
                    codeUrl="https://github.com/Analo-pez/QuotesGenerator"
                    title="Quotes Generator"
                    text="Generador de frases del día, con contenido propio. Desarrollado con JavaScript, HTML5, CSS3, SASS"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" onChange={ShowScroll}>
                <Project
                    classArticle="project project5"
                    link="https://analo-pez.github.io/FuturAmas-Card-Profile/"
                    titleLink="Futuramas web"
                    srcImg={futuramas}
                    codeUrl="https://github.com/Analo-pez/FuturAmas-Card-Profile"
                    title="FuturAmas del Code"
                    text="Web para diseño de profile cards personalizadas. Diseñado con JavaScript, HTML5, CSS3, SASS"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" onChange={ShowScroll}>
                <Project
                    classArticle="project project6"
                    link="http://analo-pez.github.io/PokeCards/"
                    titleLink="Pokecards web"
                    srcImg={pokecards}
                    codeUrl="https://github.com/Analo-pez/PokeCards"
                    title="PokeCards"
                    text="Web app realizada utilando API´s públicas y desarrollada
                con REACT"
                />
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn="fadeInRight" onChange={ShowScroll}>
                <Project
                    classArticle="project project7"
                    link="http://analo-pez.github.io/SerYes-finder/"
                    titleLink="Ser-yes web"
                    srcImg={seryes}
                    codeUrl="https://github.com/Analo-pez/SerYes-finder"
                    title="Ser¡yes!"
                    text="Buscador de series realizado utilizando API´s públicas y
                desarrollado con JavaScript, HTML5, CSS3, SASS"
                />
            </ScrollAnimation> */}
            <ScrollAnimation animateIn="fadeInRight" onChange={ShowScroll}>
                <Project
                    classArticle="project project7"
                    link="https://app-svelte-films.vercel.app/"
                    titleLink="Ser-yes web"
                    srcImg={svelteFilms}
                    codeUrl="https://github.com/Analo-pez/App-Svelte-Films"
                    title="Svelte-Films"
                    text="Aplicación de películas favoritas realizada utilizando API´s públicas y compilado con Svelte"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" onChange={ShowScroll}>
                <Project
                    classArticle="project project8"
                    link="./"
                    titleLink="Portfolio web"
                    srcImg={portfolio}
                    codeUrl="https://github.com/Analo-pez/Portfolio"
                    title="Portfolio"
                    text="¡Este mismo! Portfolio profesional realizado con React, en el que se implementa el uso de React Router"
                />
            </ScrollAnimation>
        </section>
    );
}

export default ProjectList;