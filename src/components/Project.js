import React from 'react';
import ateam from "../images/ateam.png";

function Project() {
    return (
        <article className="project">
            <a className="project__link" href="https://analo-pez.github.io/The-A-Team-project/" title="" target="_blank" rel="noopener noreferrer">
                <img className="project__img" src={ateam} alt="Landing del proyecto" />
            </a>
            <div className="project__box">
                <h3 className="project__box--title">Web grupal</h3>
                <p className="project__box--text">Web de presentación para dar a conocer el perfil profesional.
					Realizado con HTML5, CSS3, SASS. </p>
            </div>
        </article>
    );
}

export default Project;