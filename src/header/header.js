import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Header extends React.Component {
  render() {
    return (
        <header id="header" className="App-header">
            <Link to="/bands/">
              <span className="home" >&lt;</span>
            </Link>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
  }
}