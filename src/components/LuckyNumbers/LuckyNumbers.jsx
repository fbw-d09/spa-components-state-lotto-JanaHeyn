import React from "react";
import './LuckyNumbers.scss';

function LuckyNumbers({ numbers, generateLuckyNumbers, resetNumbers }) {
    
    return(
        <div className="LuckyNumbers">
            <div className="LuckyNumbers__numbers">
                {
                    numbers.map((number, index) => {
                        return(
                            <div key={index} className={`LuckyNumbers__numbers__items ${index === numbers.length - 1 ? 'last' : ''}`}>{number}</div>
                        )
                    })
                }
            </div>

            <div className="LuckyNumbers__btn">
                <button className="LuckyNumbers__btn__res" onClick={resetNumbers}>Reset</button>
                <button className="LuckyNumbers__btn__gen" onClick={generateLuckyNumbers}>Generate lucky numbers!</button>
            </div>
        </div>
    );
}

export default LuckyNumbers;
