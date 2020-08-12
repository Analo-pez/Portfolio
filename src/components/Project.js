import React from 'react';


function Project(props) {
    return (
        <article className={props.classArticle}>
            <a className="project__link" href={props.link} title={props.titleLink} target="_blank" rel="noopener noreferrer">
                <img className="project__img" src={props.srcImg} alt={props.titleLink} />
            </a>
            <div className="project__box">
                <h3 className="project__box--title">{props.title}</h3>
                <p className="project__box--text">{props.text} </p>
            </div>
        </article>
    );
}

export default Project;