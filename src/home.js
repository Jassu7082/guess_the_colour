import React from 'react';
import logo from './logo.png';
import { Link} from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className='whloe-div'>
            <div className="App-header">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="hover1">

            </div>
            <div className="button-container">
                <Link to="/sp" className="minecraft-button single-player">SinglePlayer</Link>
            
                <Link to="/mp" className="minecraft-button multi-player">Multiplayer</Link>

                <Link to="/" className="minecraft-button third-button">Exit</Link>
            </div>
        </div>
    );
}

export default Home;
