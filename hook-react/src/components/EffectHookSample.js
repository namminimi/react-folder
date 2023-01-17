import React, {useState, useEffect} from 'react';

const EffectHookSample = () => {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("")
    const onClick = () =>{
        setNumber(number+1)
    }
    //렌더링 될때마다 매번 실행
    useEffect(()=>{
        console.log('렌더링되었습니다')
    })
    //처음 마운트 될때만 실행
    useEffect(()=>{
        console.log("마운트되었습니다");
    },[]) 
    useEffect(()=>{
        console.log("number가 변경되었습니다");
    },[number]) //number가 업데이트 될때마다 실행
    return (
        <div>
            <span>{number}</span>
            <button onClick={onClick}>update</button>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    );
};

export default EffectHookSample;