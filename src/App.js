import React from 'react';
import Nav from './navbar/Nav';
import Footer from './footer/Footer';
import TvSeries from './views/TvSeries'
import Overview from './views/Overview'

import {
  Switch,
  Route
} from "react-router-dom";

/* component*/

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch >
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/tv_series">
        <TvSeries />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
