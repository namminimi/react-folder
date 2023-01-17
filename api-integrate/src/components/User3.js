import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
const initialState ={
    loading: false,
    users: null,
    error: null 
}

function reducer(state, action) {
    switch(action.type) {
        case "LOADING" :
            return{
                loading: true,
                data: null,
                error: null
            }
        case "SUCCESS" :
            return{
                loading: false,
                data: action.data,
                error: null
            }
        case "ERROR" :
            return{
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state    
    }
}

const User3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                dispatch({
                    type: "LOADING"
                })
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                )
                dispatch({
                    type:"SUCCESS",
                    data: response.data
                })
            }
            catch(e){
                dispatch({
                    type: "ERROR",
                    error: e
                })
            }
        }
        fetchUsers()
    },[])
    const {loading, data, users, error} = state
    console.log(users)
    if(loading) return <div>로딩중...</div>
    if(error) return <div>로딩중...</div>
    if(!users) return null
    
    return (
        <div>
            <ul>
                {users.map(user=><li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default User3;