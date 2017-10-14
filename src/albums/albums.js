import React from 'react';
import './albums.css';

//manual search for arthists albums in all albums list
export const getAlbums = (arthistList, fullAlbumsList) => {
    let albums = [],
        currentAlbum = -1;

    arthistList.forEach(albumId => {
        currentAlbum = fullAlbumsList.find(fullListItem => {
            return fullListItem.id === albumId
        });

        if(currentAlbum !== -1)
            albums.push(currentAlbum);

    });

    return albums;    
};

export default class Albums extends React.Component {

    constructor() {
        super();
        this.state = {
            albums: [],
            currentAlbums: []
        };
    }

    componentDidMount() {
        //because the WS has no way to filter, avoid to retrive the entire list of albums all the time.
        //the problem with that is no getting album updates while app is not restarted
        if(this.state.albums.length === 0) {
            let self = this;
            fetch('https://iws-recruiting-bands.herokuapp.com/api/albums')
                .then(res => res.json())
                .then(albums => {
                    self.setState({ albums: albums });
                });
        }
    }

    componentWillReceiveProps() {
        //when recive arthistAlbums as prop, keep waiting for all albums list
        let stateCheck = setInterval( () => {
            if(this.state.albums.length > 0) {
                this.setState({
                    'currentAlbums': getAlbums(this.props.arthistAlbums, this.state.albums)
                });
                clearInterval(stateCheck);
            }
        }, 250);        
    }

    render() {
        let albums;
        if(this.state.currentAlbums.length > 0) {
            albums = this.state.currentAlbums.map((item) =>
                <li>
                    <img key={item.id} src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                </li>
            )
        } else {
            albums = <div className="loader">LOADING...</div>
        }
        return (
            <div id="albums">
                <h1>ALBUNS</h1>
                <ul className="clearfix">
                    {albums}
                </ul>
            </div>
        );
    }

}
