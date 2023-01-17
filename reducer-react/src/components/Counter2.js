import React, { useReducer } from 'react';
function reducer(state, action){
    //action에 따라 상태를 업데이트 조건문
    switch(action.type) {
        case 'increase' :
            return state +1;  //number 업데이트
        case "decrease" :
            return state -1;
        default: 
            return state;        
    }
}
const Counter2 = () => {
    const [number, dispatch] = useReducer(reducer,0);
    const onIncrease = () => {
        dispatch({  //자동으로 매개변수 하나만 받는다 
            type: "increase"
        })
    }
    const onDecrease = () => {
        dispatch({
            type: "decrease"
        })
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter2;