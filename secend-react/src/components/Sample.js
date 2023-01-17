import React from 'react';

const Sample = () => {
    const names =[
        {id:1, text:"눈"},
        {id:2, text:"팥빙수"},
        {id:3, text:"귤"},
        {id:4, text:"붕어빵"}
    ]
    
    return(
        <div>
            <ul>
                <input></input><button>추가</button>
                <li>눈</li>
                <li>팥빙수</li>
                <li>귤</li>
                <li>눈</li>
            </ul>
        </div>
    )
}

export default Sample;