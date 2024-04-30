import React, { useState, useEffect } from 'react';

const Sp = () => {
    // Color distribution object
    const color_dict = {
        "Red": "#ff0000",
        "Blue": "#0000ff",
        "Green": "#00ff00",
        "Orange": "#ffa500",
        "White": "#ffffff",
        "Black": "#000000",
        "Yellow": "#ffff00",
        "Purple": "#800080",
        "Silver": "#c0c0c0",
        "Brown": "#a52a2a",
        "Gray": "#808080",
        "Pink": "#ffc0cb",
        "Olive": "#808000",
        "Maroon": "#800000",
        "Violet": "#ee82ee",
        "Charcoal": "#36454f",
        "Magenta": "#ff00ff",
        "Bronze": "#cd7f32",
        "Cream": "#fffdd0",
        "Gold": "#ffd700",
        "Tan": "#d2b48c",
        "Teal": "#008080",
        "Mustard": "#ffdb58",
        "Navy Blue": "#000080",
        "Coral": "#ff7f50",
        "Burgundy": "#800020",
        "Lavender": "#e6e6fa",
        "Mauve": "#e0b0ff",
        "Cyan": "#e0f7fa",
        "Peach": "#ffe5b4",
        "Rust": "#b7410e",
        "Indigo": "#4b0082",
        "Ruby": "#e0115f",
        "Lime Green": "#32cd32",
        "Salmon": "#fa8072",
        "Azure": "#007fff",
        "Beige": "#f5f5dc",
        "Copper Rose": "#996666",
        "Turquoise": "#40e0d0",
        "Aqua": "#00ffff",
        "Mint": "#3eb489",
        "Sky Blue": "#87ceeb",
        "Crimson": "#dc143c",
        "Saffron": "#f4c430",
        "Lemon Yellow": "#fff44f",
        "Grapevine": "#43254f",
        "Fuschia": "#ff00ff",
        "Amber": "#ffbf00",
        "Sea Green": "#2e8b57",
        "Dark Green": "#006400",
        "Pearl": "#eae0c8",
        "Ivory": "#fffff0",
        "Tangerine": "#f28500",
        "Garnet": "#733635",
        "Cherry Red": "#de3163",
        "Emerald": "#50c878",
        "Brunette": "#664238",
        "Sapphire": "#0f52ba",
        "Lilac": "#c8a2c8",
        "Rosewood": "#65000b",
        "Arctic Blue": "#0000ff",
        "Ash": "#808080",
        "Mocha": "#C0A392",
        "Coffee Brown": "#6f4e37",
        "Jet Black": "#0a0a0a",
        "Pista Green": "#00ff00",
        "Umber": "#635147"
    };

    // State variables
    const [colors, setColors] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60); // 60 seconds

    // Generate random colors
    const generateColors = () => {
        const colorKeys = Object.keys(colorDict);
        const randomColors = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colorKeys.length);
            randomColors.push(colorDict[colorKeys[randomIndex]]);
        }
        setColors(randomColors);
    };

    // Timer function
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Check answer and update score
    const checkAnswer = (selectedColor, index) => {
        if (selectedColor === colors[index]) {
            setScore(prevScore => prevScore + 1);
        } else {
            setScore(prevScore => prevScore - 1);
        }
        generateColors(); // Generate new colors
    };

    // Modal component for when time runs out
    const TimeOutModal = () => {
        // Redirect back to home page after 3 seconds
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);

        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Time's Up!</h2>
                    <p className="text-lg">Redirecting back to home page...</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Timer display */}
            <div>Time: {time}</div>
            {/* Score display */}
            <div>Score: {score}</div>
            {/* Generate random colors */}
            <button onClick={generateColors}>Generate Colors</button>
            {/* Display colored boxes */}
            <div>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`inline-block w-24 h-24 m-2 bg-${color.substring(1)} cursor-pointer`}
                        onClick={() => checkAnswer(color, index)}
                    ></div>
                ))}
            </div>
            {/* Display time-out modal */}
            {time === 0 && <TimeOutModal />}
        </div>
    );
};

export default Sp;