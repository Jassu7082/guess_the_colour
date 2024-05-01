import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Home = () => {
    const handleExit = () => {
        window.close(); // Close the webpage
    };

    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8">
                    <img className="w-64 h-auto" src={logo} alt="logo" />
                </h1>
                <div className="menu flex flex-col item-center justify-center gap-4">
                    <Link to="/sp">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Singleplayer
                        </button>
                    </Link>
                    <Link to="/learn">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded">
                            Learn
                        </button>
                    </Link>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleExit}>
                        Exit
                    </button>
                </div>
            </div>
            <footer className="mt-auto text-center text-sm">
                GTC 1.0
                <br />
                Copyright © GTC.
            </footer>
        </div>
    );
};

export default Home;
