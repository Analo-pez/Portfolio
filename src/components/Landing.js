import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <main className="page">
            <h1 className="landingText tracking-in-contract">Ana López</h1>
            <Link to="/Home" className="box-button">
                <button className="start-button">Ver portfolio</button>
            </Link >
        </main>
    );
}

export default Landing;