import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Tile from './Tile';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Banner />
                <div className="tiles">
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
                <div className='footer'>
                    <p>© Gerät. All rights reserved.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default App;