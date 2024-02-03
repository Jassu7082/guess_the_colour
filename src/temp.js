import React from "react";
import "./temp.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1 className="title">
                <img className="logo" src={logo} alt="logo" />
            </h1>
            <div className="menu">
                <Link to="/sp"><button>Singleplayer</button></Link>
                <Link to="/mp"><button>Join Multiplayer</button></Link>
                <Link to="/mp"><button>Create Multiplayer </button></Link>
                <Link to="/learn"><button>Learn</button></Link>
                <Link to="/sp"><button>Options...</button></Link>
            </div>
            <footer>
                GTC 1.0
                <br />
                Copyright © GTC.
            </footer>
        </div>
    );
};

export default Home;
