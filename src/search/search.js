import React from 'react';
import './search.css';
import { Link } from 'react-router-dom';
import Header from '../header/header.js';
import searchIcon from '../assets/search.png';
import logo from '../assets/logo.png';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
        <div>
        <Header />
        <form id='search'>
            <input className="search-text"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            />
            <img className="search-icon" src={searchIcon} alt="search button" />
        </form>        
        </div>
    );
  }
}