import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/header.js';
import Bands from './bands/bands.js';
import Band from './band/band.js';
import Albums from './albums/albums.js';
import SearchBar from './search/search.js';
import FilterableBands from './index.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* 
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          */}

          <div className="main-content">

            <Route exact path="/" component={FilterableBands} />
            <Route exact path="/bands" component={FilterableBands} />
            <Route path="/bands/:id" component={Band} />
            <Route path="/albums" component={Albums} />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
