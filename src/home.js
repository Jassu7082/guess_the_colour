import React from 'react';
import logo from './logo.png';
import { Link} from 'react-router-dom'; // Import the useHistory hook
import './home.css';

function Home() {
    return (
        <div className='whloe-div'>
            <header className="App-header">
                <img className="logo" src={logo} alt="logo" />
            </header>
            <div className="button-container">
                <Link to="/sp" className="minecraft-button">SinglePlayer</Link>
            
                <Link to="/mp" className="minecraft-button">Multiplayer</Link>
                {/* <button className="minecraft-button" onClick={}>Stop Server and Go Back</button>
                 */}
                <Link to="/" className="minecraft-button">Exit</Link>
            </div>
        </div>
    );
}

export default Home;
