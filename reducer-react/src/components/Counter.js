import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const onIncress = () =>{
        setNumber(number + 1)
    }
    const ondecress = () =>{
        setNumber(number - 1)
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncress}>+1</button>
            <button onClick={ondecress}>-1</button>
        </div>
    );
};

export default Counter;