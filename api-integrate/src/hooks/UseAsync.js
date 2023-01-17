import { useEffect, useReducer } from 'react';
// 1.상태초기화
const initialState = {
    users:null,
    loading:false,
    error:null
}
function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default :
        return state;
    }
}
const UseAsync = (callback, deps=[]) => {//콜백함수와, deps 빈문자열을 매개변수로 받음
    const [state, dispatch] = useReducer(reducer, initialState);
    //useReducer(함수, 초기화)
    const fetchUsers =  async ()=>{  
        try{
            dispatch({  
                type:'LOADING'
            })
            const response = await callback();
            console.log(response)
            dispatch({
                type:'SUCCESS',
                data: response.data 
            });  //데이터는 response.data안에 있음.
        }
        catch(e){
            dispatch({
                type: 'ERROR',
                error:e
            })
        }
    };
    useEffect(()=>{
        fetchUsers();
    },deps)
    return [state,fetchUsers];
};
export default UseAsync;