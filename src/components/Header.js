import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="page__header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list--item">
                        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                    </li>
                    <Link to="/About" className="aboutRoute">
                        <li className="menu__list--item">
                            <p>Sobre mí</p>
                        </li>
                    </Link>
                    <Link to="/Information" className="infoRoute">
                        <li className="menu__list--item">
                            <p>Tecnologías</p>
                        </li>
                    </Link>
                </ul>
            </nav>
            <h1 className="menu__selected">Proyectos</h1>
        </header>
    );
}

export default Header;