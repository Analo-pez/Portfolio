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
                        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                    </li>
                </ul>
            </nav>
            {/* <img className="page__header--profile bounce-top" src="../images/zapas.png" alt="Imagen de perfil" /> */}
        </header>
    );
}

export default Header;