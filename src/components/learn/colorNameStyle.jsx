import React, { useEffect, useState } from "react";
import './colorNameStyle.css';

function ColorNameStyle({ name }) {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        setLetters(name.toUpperCase().split(''));
    }, [name]);
    return (
        <div className="color-dup-name">
            {letters.map((e, index) => e === ' ' ? <br key={index} /> : (
                <div className="each-letter" key={index}>
                    <h1>{e}</h1>
                </div>
            ))}
        </div>
    );
}

export default ColorNameStyle;
