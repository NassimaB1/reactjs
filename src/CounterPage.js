import React from "react";
import  {useState} from 'react';


function CounterPage() {
let [countNum, setCount] = useState(0);

let increaseValaue = () => { 
    setCount((countNum += 1));
    };

let decreaseValue = () => {
if (countNum === 0) {
} else {
setCount((countNum -= 1)); 
}

}
let resetValue = () => {
setCount(0); 
};

return (
<div> <h1> {countNum} </h1>
   <button onClick={increaseValaue}>+</button> 
   <button onClick={decreaseValue}>-</button>
    <button onClick={resetValue}>Reset</button>
    </div>
)
}

export default CounterPage