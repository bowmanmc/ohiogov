import React from 'react';
import { Map, TileLayer } from 'react-leaflet';


const HomePage = () => {
    const position = [39.7589, -84.1916];

    return (
        <div className="page page__home">
            <Map center={position} zoom={13}>
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            </Map>
        </div>
    );
};

export default HomePage;
