import React from 'react';
import { Link } from 'react-router-dom';
import AnaFrontEndCV from "../images/Ana CV Front-end.pdf"


const Header = props => {

    return (
        <header className="page__header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list--item">
                        <a href={AnaFrontEndCV} download>Descargar CV</a>
                    </li>
                    <Link to={props.route1} className="aboutRoute">
                        <li className="menu__list--item">
                            {props.link1}
                        </li>
                    </Link>
                    <Link to={props.route2} className="infoRoute">
                        <li className="menu__list--item">
                            <p>{props.link2}</p>
                        </li>
                    </Link>
                </ul>
            </nav>
            <h1 className="menu__selected">{props.sectionName}</h1>
        </header>
    );
}

export default Header;