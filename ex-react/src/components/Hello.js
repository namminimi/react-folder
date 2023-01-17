import React from 'react';  
//리액트 컴포넌트를 만들 땐 리액트 불러와줘야함

function Hello({color, name}) {
    return <div style={{color}}>안녕하세요{name}</div>
}

export default Hello;
//Hello 컴포넌트 내보내겠다는 의미
// 다른 컴포넌트에서 불러와서 사용할수 있음