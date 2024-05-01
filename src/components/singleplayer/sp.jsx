import React, { useState, useEffect } from 'react';
import color_dict from '../../colours';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Sp = () => {
    const [temp_colors, setTempColors] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60); // Initial time: 60 seconds
    const [currentColorIndex, setCurrentColorIndex] = useState(0); // Index of current color displayed

    useEffect(() => {
        generateColors();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : prevTime));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time === 0) {
            gameOver();
        }
    }, [time]);

    const generateColors = () => {
        const colorsArray = Object.values(color_dict);
        const randomIndexes = [];
        while (randomIndexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * colorsArray.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }
        setTempColors(randomIndexes.map(index => colorsArray[index]));
        setCurrentColorIndex(Math.floor(Math.random() * 3));
    };

    const handleClick = (index) => {
        if (index === currentColorIndex) {
            setScore(score + 3);
            showToast('Correct! +3 points', 'success');
        } else {
            setScore(score - 1);
            showToast('Wrong! -1 point', 'error');
        }
        generateColors();
    };

    const gameOver = () => {
        toast.error(`Game Over! Your score: ${score}`);
    };

    const showToast = (message, type) => {
        toast[type](message);
    };

    const handleRetry = () => {
        window.location.reload(); // Reload the page
    };

    return (
        <div className='flex flex-col justify-center text-white items-center h-screen'>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="absolute top-0 right-0 m-4">
                <Link to="/" className="back-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Back</Link>
            </div>
            <div className="text-xl"><b>Score:</b> {score}</div>
            <div className="m-4 text-xl"><b>Time:</b> {time}</div>
            <h1 className="text-[100px] mb-4">{Object.keys(color_dict).find(key => color_dict[key] === temp_colors[currentColorIndex])}</h1>
            <div className='mt-8'>
                {temp_colors.map((color, index) => (
                    <button key={index} style={{ backgroundColor: color, width: '150px', height: '150px', margin: '5px', border: 'none' }} onClick={() => handleClick(index)}>
                    </button>
                ))}
            </div>
            {time === 0 && (
                <button className="mt-4 mr-4 p-2 bg-blue-500 text-white rounded" onClick={handleRetry}>Retry</button>
            )}
        </div>
    );
};

export default Sp;
