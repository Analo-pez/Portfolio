import React from 'react';


function Header() {
    return (
        <header className="page__header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list--item">
                        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                    </li>
                    <li className="menu__list--item">
                        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Sobre mí</a>
                    </li>
                    <li className="menu__list--item">
                        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Tecnologías</a>
                    </li>
                </ul>
            </nav>
            <h1 className="menu__selected">Proyectos</h1>
        </header>
    );
}

export default Header;