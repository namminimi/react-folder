import React, {useState} from "react";
import HeaderInput from "./components/HeaderInput";


const App = () => {
  const [todoList, setTodo] = useState({
    Todolists : [
      {id: 1, text: "놀고싶다" },
      {id: 2, text: "자고싶다" },
      {id: 3, text: "쉬고싶다" }
    ],
    inputText: ""
  })
  //id값 상태
  const [id, setId] = useState(4)

  //change
  const changee = (e) => {
    setTodo({
      ...todoList,
      inputText: e.target.value
    })
    //console.log(e.target.value)
  }
  // click
  const click = () => {
    const newList = [
      ...todoList.Todolists,
      {id: id, text: todoList.inputText}
    ]
    setTodo({
      Todolists: newList,
      inputText: ""
    })
    setId(id+1)
    console.log(todoList.inputText)
  }

  const delClick = (id) => {
    const newTodoLists = todoList.Todolists.filter(todo => todo.id !== id);
    setTodo({
      ...todoList,
      Todolists: newTodoLists
    });
  }


  const inputList = todoList.Todolists.map(todo =><li key={todo.id}>{todo.text}
  <button onClick={()=>delClick(todo.id)}>삭제</button></li>)
  return(
    <div className="App">
      <HeaderInput
      inputText = {todoList.inputText}
      onChange = {changee}
      onClick = {click}
      />
      <ul>
        {inputList}
      </ul>
    </div>
  )
}

export default App;