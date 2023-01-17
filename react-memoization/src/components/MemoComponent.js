import React, { useEffect, useMemo, useState } from 'react';

const MemoComponent = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    //원시형타입 vs 객체타입
    /* const location = {
        country: isKorea ? "한국" : "외국"
    } */
    const location = useMemo(()=>{
        return {
            country: isKorea ? "한국" : "외국",
        }
    }, [isKorea])
    //useEffect(콜백함수,[desp])
    //useEffect ======> 마운트될때, 업데이트(리렌더링), 언마운트일때
    useEffect(()=>{
        console.log("풍풍풍, userEffect호출");
    },[location])
    return (
        <div>
            <h2>좋아하는 숫자는?</h2>
            <input type="number" value={number}
             onChange={(e)=> setNumber(e.target.value)}/>
             <h2>이동하실까요?</h2>
             <p>나라: {location.country}</p>
             <button onClick={()=>setIsKorea(!isKorea)}>이동</button>
        </div>
    );
};

export default MemoComponent;