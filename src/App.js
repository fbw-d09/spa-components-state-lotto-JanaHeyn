import React, { useState } from "react";
import LuckyNumbers from './components/LuckyNumbers/LuckyNumbers';
import "./App.scss";

function App() {
    const [ numbers, setNumbers ] = useState([]);

    const generateLuckyNumbers = () => {
        const luckyNumbers = [];
        while(luckyNumbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 49 ) + 1;
            if(!luckyNumbers.includes(randomNumber)) {
                luckyNumbers.push(randomNumber);
            }
        }

        const superNumber = Math.floor(Math.random() * 10 ) + 1;
        setNumbers([...luckyNumbers, superNumber]);
    }

    const resetNumbers = () => {
        setNumbers([]);
    }
    

    return(
        <div className="App">
            <h1>Lotto 6 / 49</h1>
            <p>Generating lucky numbers</p>
            <LuckyNumbers 
                numbers={numbers}
                generateLuckyNumbers={generateLuckyNumbers}
                resetNumbers={resetNumbers}
            />
        </div>
    );
}

export default App;
