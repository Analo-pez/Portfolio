import React from 'react';


function Footer() {
    return (
        <footer className="page__footer">
            {/* <p className="page__footer--text wrapper">Portfolio v0.9 beta</p> */}
            <div className="page__footer--icons wrapper">
                <a href="https://twitter.com/DeveloperAna" title="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter icons"></i>
                </a>
                <a href="https://www.linkedin.com/in/ana-l%C3%B3pez-3621911ab/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in icons"></i>
                </a>
                <a href="https://github.com/Analo-pez" title="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-alt icons"></i>
                </a>
                <a href="mailto:ana.ts.lopez@gmail.com" title="Correo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope icons"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;