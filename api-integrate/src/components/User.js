import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    //1 요청의 결과 - null
    const [users, setUsers] = useState(null);
    //2. 로딩상태 - false
    const [loading, setLoading] = useState(false);
    //3. 에러 - null
    const [error, setError] = useState(null);
     
    useEffect(()=>{
        // async await 둘은 세트다 비동기
        const fetchUsers = async () => {
            try{
                //요청이 시작되면 error와 users를 초기화
                setError(null);
                setUsers(null);
                //loading상태는 true로 변경
                setLoading(true);
                const response = await axios.get( //주소에 요청을해서 가져올것
                //await이 없으면 받을때까지 기다리지않고 토출
                //await 로딩 될때까지 기다린다
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data); //데이터는 response.data안에 있음
                console.log(response)
            }
            catch(e){
                setError(e);//에러가 생기면 에러 업데이트
            }
            //로딩 상태를 false로 변경
            setLoading(false)
        };
        fetchUsers()
    },[])
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map(user=><li key={user.id}>{user.username} {user.name}</li>)}
            </ul>
        </div>
    );
};

export default User;