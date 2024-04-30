import React, { useState,useEffect } from 'react';
import logo from '../../assets/logo.png';
import './learn.css';
import ColorNameStyle from './colorNameStyle';

function Learn() {
    const colorDict = { 1: "Red", 2: "Blue", 3: "Green", 4: "Orange", 5: "White", 6: "Black", 7: "Yellow", 8: "Purple", 9: "Silver", 10: "Brown", 11: "Gray", 12: "Pink", 13: "Olive", 14: "Maroon", 15: "Violet", 16: "Charcoal", 17: "Magenta", 18: "Bronze", 19: "Cream", 20: "Gold", 21: "Tan", 22: "Teal", 23: "Mustard", 24: "Navy Blue", 25: "Coral", 26: "Burgundy", 27: "Lavender", 28: "Mauve", 29: "Cyan", 30: "Peach", 31: "Rust", 32: "Indigo", 33: "Ruby", 34: "Lime Green", 35: "Salmon", 36: "Azure", 37: "Beige", 38: "Copper Rose", 39: "Turquoise", 40: "Aqua", 41: "Mint", 42: "Sky Blue", 43: "Crimson", 44: "Saffron", 45: "Plum", 46: "Grapevine", 47: "Fuschia", 48: "Amber", 49: "Sea Green", 50: "Dark Green", 51: "Pearl", 52: "Ivory", 53: "Tangerine", 54: "Garnet", 55: "Cherry Red", 56: "Emerald", 57: "Brunette", 58: "Sapphire", 59: "Lilac", 60: "Rosewood", 61: "Arctic Blue", 62: "Ash", 63: "Mocha", 64: "Coffee Brown", 65: "Jet Black", 66: "Pista Green", 67: "Umber" };
    const colorHex = { "Red": "#ff0000", "Blue": "#0000ff", "Green": "#00ff00", "Orange": "#ffa500", "White": "#ffffff", "Black": "#000000", "Yellow": "#ffff00", "Purple": "#800080", "Silver": "#c0c0c0", "Brown": "#a52a2a", "Gray": "#808080", "Pink": "#ffc0cb", "Olive": "#808000", "Maroon": "#800000", "Violet": "#ee82ee", "Charcoal": "#36454f", "Magenta": "#ff00ff", "Bronze": "#cd7f32", "Cream": "#fffdd0", "Gold": "#ffd700", "Tan": "#d2b48c", "Teal": "#008080", "Mustard": "#ffdb58", "Navy Blue": "#000080", "Coral": "#ff7f50", "Burgundy": "#800020", "Lavender": "#e6e6fa", "Mauve": "#e0b0ff", "Cyan": "#e0f7fa", "Peach": "#ffe5b4", "Rust": "#b7410e", "Indigo": "#4b0082", "Ruby": "#e0115f", "Lime Green": "#32cd32", "Salmon": "#fa8072", "Azure": "#007fff", "Beige": "#f5f5dc", "Copper Rose": "#996666", "Turquoise": "#40e0d0", "Aqua": "#00ffff", "Mint": "#3eb489", "Sky Blue": "#87ceeb", "Crimson": "#dc143c", "Saffron": "#f4c430", "Plum": "#DDA0DD", "Grapevine": "#43254f", "Fuschia": "#ff00ff", "Amber": "#ffbf00", "Sea Green": "#2e8b57", "Dark Green": "#006400", "Pearl": "#eae0c8", "Ivory": "#fffff0", "Tangerine": "#f28500", "Garnet": "#733635", "Cherry Red": "#de3163", "Emerald": "#50c878", "Brunette": "#664238", "Sapphire": "#0f52ba", "Lilac": "#c8a2c8", "Rosewood": "#65000b", "Arctic Blue": "#0000ff", "Ash": "#808080", "Mocha": "#C0A392", "Coffee Brown": "#6f4e37", "Jet Black": "#0a0a0a", "Pista Green": "#00ff00", "Umber": "#635147" };
    const [index, setIndex] = useState(1);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowRight') {
                increaseIndex();
            } else if (event.key === 'ArrowLeft') {
                decreaseIndex();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const increaseIndex = () => {
        setIndex((prevIndex) => (prevIndex % 67) + 1);
    };

    const decreaseIndex = () => {
        setIndex((prevIndex) => (prevIndex - 2 + 67) % 67 + 1);
    };

    return (
        <div>
            <div className="App-header">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className='App-Body'>
                <div className="colour">
                    <h1>Learn</h1>
                    <p className='fill' style={{backgroundColor: colorHex[colorDict[index]]}}>
                    </p>
                </div>
                <div className="colour-name">
                    <ColorNameStyle name={colorDict[index]} />
                    <div className='btn-divs'>
                        <button className="btn" onClick={decreaseIndex}>Previous</button>
                        <button className="btn" onClick={increaseIndex} >Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;