import React,{useEffect} from 'react';

const Timer = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 돌아가는중")
        },1000)
        //cleanup함수 -> useEffect에 대한 뒷정리를 해주는 함수
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    },[])
    return (
        <div>
           <span>타이머를 시작합니다. 콘솔봐주세요</span> 
        </div>
    );
};

export default Timer;