import axios from 'axios';
import React, { useEffect, useReducer} from 'react';

//1 상태초기화
const initialState = {
    users: null,
    loading: false,
    error: null
}

function reducer(state, action) {   //함수를 만들기전에 요청사항이 뭔지 생각해야함
        switch(action.type){
            case 'LOADING' :
                return {
                    loading: true, //로딩중이니 트루
                    data: null,  // 로딩중 받고있음 널
                    error: null  
                };
            case 'SUCCESS' :
            return {
                loading: false,  // 성공했으니 로딩끝
                data: action.data, //데이터 받아서 키에 넣어줌
                error: null
            };
            case 'ERROR' :
            return {
                loading: false,  //로딩중 아님
                data: null,  //데이터 못받아서 널
                error: action.error  //에러 데이터를 키로 넣어주겠다 
            };
            default :
            return state;    
        }
    }


const User = () => {
    const [state, dispatch] = useReducer(reducer, initialState);  //디스패치하면 위에 함수 실행  initialState state안에 넣어줌
    

    
    //2. reducer함수 구현 
    //1) 로딩중일때 - 
    //loading -> true, users -> null, error => null
    //2) 데이터를 성공적으로 받았을때 
    //loading -> false, users -> [], error => null
    //3) 데이터 요청후 에러가 발생했을 때 
    //loading -> false, users -> null error- {e}
    

    useEffect(()=>{
        // async await 둘은 세트다 비동기
        const fetchUsers = async () => {
            try{
                dispatch({ //함수 호출 
                    type: 'LOADING'
                })
                const response = await axios.get( //주소에 요청을해서 가져올것
                //await이 없으면 받을때까지 기다리지않고 토출
                //await 로딩 될때까지 기다린다
                    'https://jsonplaceholder.typicode.com/users'
                );
               
                dispatch({
                    type: 'SUCCESS',
                    data: response.data
                })
            }
            catch(e){
               dispatch({
                type:'ERROR',
                error: e
               })
            }
        };
        fetchUsers()   
    },[])
    const {loading, data: users, error} = state;
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