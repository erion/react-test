import React from 'react';
import './bands.css';
import { Link } from 'react-router-dom';
import noResult from '../assets/no_results.png';


//I could and should break the header and the total results in more components...
const totalSearchJSX = (searchResultArray) => {
    return <div className="total-search-box">
        <span>{searchResultArray.length} resultado(s)</span>
    </div>
}

const orderList = (itemsList, orderKey) => {
    switch (orderKey) {
        case 'name':
            return itemsList.sort((a, b) => {
                if (a[orderKey].toLowerCase() < b[orderKey].toLowerCase())
                    return -1;
                if (a[orderKey].toLowerCase() > b[orderKey].toLowerCase())
                    return 1;
                return 0;
            });
            break;
        case 'numPlays':
            return itemsList.sort((a, b) => { return parseInt(b[orderKey]) - parseInt(a[orderKey]) });
            break;
        default:
            return itemsList;
            break;
    }
}

export default class Bands extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let bandsToRender = [],
            filterText = this.props.filterText,
            bandsToFilter, totalSearch = '';

        if (this.props.bands && this.props.bands.length > 0) {
            bandsToFilter = this.props.bands.filter(band => { return band.name.indexOf(filterText) !== -1 });
            if (filterText.length > 0)
                totalSearch = totalSearchJSX(bandsToFilter);

            if (totalSearch.length === 0) {
                bandsToRender =
                    <div className='no-result'>
                        Sem resultados...
                        <img src={noResult} alt="sem resultados" />
                    </div>
            } else {
                bandsToFilter = orderList(bandsToFilter, this.props.orderBy);
                bandsToFilter.map((item) => {
                    bandsToRender.push(
                        <li className="clearfix" key={item.id}>
                            <Link to={"/bands/:id".replace(':id', item.id)} className="clearfix" >
                                <img className="rounded-image" src={item.image} alt={item.name} />
                                <div className="band-info">
                                    <span>{item.name}</span><br />
                                    <span className="band-plays">{item.numPlays} plays</span>
                                </div>
                            </Link>
                        </li>
                    );
                })
            }
        } else {
            bandsToRender = "LOADING...";
        }
        return (
            <div>
                {totalSearch}
                <ul id="bands">
                    {bandsToRender}
                </ul>
            </div>
        );
    }

}
