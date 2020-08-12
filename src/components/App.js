import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header'
import Landing from './Landing'
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
          <Header />
          <ProjectList />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;



