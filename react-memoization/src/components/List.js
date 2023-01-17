import React, { useEffect, useState } from 'react';

const List = ({getItems}) => { //getItems 일로 받았음 꿀꺽~
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(getItems()) //배열을 리턴해줌[1,2,3]
        console.log("숫자가 변동되었습니다.")
    },[getItems])
    return (
        <div>
            {items.map((item,index)=><div key={index}>{item}</div>)}
            {/* [1,2,3] map으로 돌려줌 map은 새로운 배열로 바꿔줌*/}
            {/* <div></div>
                <div></div>
                <div></div> 이렇게 담김 */}
        </div>
    );
};

export default List;