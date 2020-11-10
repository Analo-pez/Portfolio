import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header'
import Landing from './Landing'
import About from './About'
import Information from './Information'
import ProjectList from './ProjectList'
import Footer from './Footer'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/Home">
          <Header
            route1="./About"
            link1="Sobre mí"
            route2="./Information"
            link2="Tecnologías"
            sectionName="Proyectos"
          />
          <ProjectList />
          <Footer />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Information">
          <Information />
        </Route>
      </Switch>
    </>
  );
}

export default App;



