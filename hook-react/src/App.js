import './App.css';
import './style.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from 'react';

/* function Main(){
  return(
    <main>
        <h2>main title</h2>
        <p>main desc</p>
      </main>
  )
} */

/* function Header(props) {
  const {lists} = props;
  return (
    <header>
        <h1>Green</h1>
        <Nav lists = {lists}/>
    </header>
  )
} */

/* function Nav(props){
  const {lists} = props;
  const lis = lists.map(list => <li key={list.id}>{list.title}</li>)
  return(
      <ul>
        {lis}
      </ul>
  )
} */

/* function Footer(){
  return(
    <footer>
      <h1>green</h1>
      <address>울산시 남구 삼산동 삼산중로 100번길 그린컴퓨터아카데미</address>
    </footer>
  )
} */

function App() {
  const [mode, setMode] = useState("home"); 
  let content = null;
  let modevar = "home";
  if(modevar === "home") {
    content = <div>환영합니다.</div>
  }else if(modevar === "page") {
    content = <div>페이지입니다.</div>
  }
  const lists = [
    {id: 1, title: 'menu1'},
    {id: 2, title: 'menu2'},
    {id: 3, title: 'menu3'},
    {id: 4, title: 'menu4'},
  ]
  return (
    <div className="App">
      {content}
      <button onClick={()=>{
        modevar="page"
        console.log(modevar)}}>모드변경</button>
      <Header lists = {lists}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
