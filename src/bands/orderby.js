import React from 'react';
import './bands.css';
import orderIcon from '../assets/order_by.png';

export default class OrderBands extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOrderOptions: false
        }

        this.toggleBox = this.toggleBox.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
    }

    toggleBox() {
        this.setState({ showOrderOptions: !this.state.showOrderOptions })
    }

    handleOrderChange(e) {
        this.props.onOrderChange(e.target.value);
    }

    render() {
        return (
            <div id='order-bands'>
                <button onClick={this.toggleBox}>
                    <img src={orderIcon} alt="order by" />
                </button>
                {this.state.showOrderOptions &&
                    <ul>
                        <li>
                            <input type='radio' name='order' value="name" id='alfabetica' onChange={this.handleOrderChange} />
                            <label htmlFor='alfabetica'>ordem alfabética</label>
                        </li>
                        <li>
                            <input type='radio' name='order' value="numPlays" id='popularidade' onChange={this.handleOrderChange} />
                            <label htmlFor='popularidade'>popularidade</label>
                        </li>
                    </ul>
                }
            </div>
        );
    }

}
