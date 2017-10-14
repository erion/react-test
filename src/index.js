import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './search/search.js';
import Bands from './bands/bands.js';
import OrderBands from './bands/orderby.js';
import registerServiceWorker from './registerServiceWorker';


export default class FilterableBands extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleOrderBy(order) {
    this.setState({
      orderBy: order
    });
  }

  componentDidMount() {
    fetch('https://iws-recruiting-bands.herokuapp.com/api/bands')
      .then(res => res.json())
      .then(bands => this.setState({
        bands: bands
      }));
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <OrderBands onOrderChange={this.handleOrderBy} />
        <Bands
          bands={this.state.bands}
          filterText={this.state.filterText}
          orderBy={this.state.orderBy}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();