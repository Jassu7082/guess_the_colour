import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styling

function Home() {
    return (
        <div>
            <header className="App-header">
                <img className="logo" src={logo} alt="logo" />
            </header>
            <div className="button-container">
                <Link to="/sp" className="minecraft-button">Single Player</Link>
                <br />
                <Link to="/mp" className="minecraft-button">Multiplayer</Link>
            </div>
        </div>
    );
}

export default Home;
