import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MovieListing from './components/MovieListing/MovieListing';
import PersonListing from './components/PersonListing/PersonListing';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="heading-container">
          <span className="heading">
            <Link to="/" title="Home">
              <h1>Movie Browser</h1>
            </Link>
          </span>
        </div>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/movie/:id" component={MovieListing} />
          <Route path="/person/:id" component={PersonListing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;