import React from 'react';
import './band.css';
import Albums from '../albums/albums.js';


export default class Band extends React.Component {

    constructor() {
        super();
        this.state = {
            band: []
        };
    }

    componentDidMount() {
        fetch('https://iws-recruiting-bands.herokuapp.com/api' + this.props.match.url)
            .then(res => res.json())
            .then(band => this.setState({
                band: band
            }));
    }

    render() {
        let band = this.state.band;
        return (
            <div id="band">
                <div className="header">
                    <span className="name">{band.name}</span>
                    <img className="main-image" src={band.image} alt={band.name} />
                    <ul class="clearfix">
                        <li className="additional-info">{band.genre}</li>
                        <li><img className="thumb" src={band.image} alt={band.name} /></li>
                        <li className="additional-info">{band.numPlays} plays</li>
                    </ul>
                </div>
                <p className="biography">
                    {band.biography}
                </p>


                <Albums arthistAlbums={band.albums} />
            </div>
        );
    }

}
