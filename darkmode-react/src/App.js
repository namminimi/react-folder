import {useState} from "react";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'; // default붙음
import Main from './components/Main';
import { DarkContext } from "./context/DarkContext";
import { NameContext } from './context/NameContext'; //default없으면 중괄호 붙음(이름으로 내보내기)


function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <NameContext.Provider value="bbbbbb">
      {/* 위 태그로 감싸주면 안에 있는 내용을 다 사용할수 있음*/}  
      <DarkContext.Provider value ={{isDark, setIsDark}}>
                           {/* isDark: isDark, setIsDark:setIsDark 줄여씀*/} 
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
      </DarkContext.Provider>
    </NameContext.Provider>
  );
}
export default App;


/* import React from 'react';
import SassComponent from './SassComponent';
const App = () => {
  return (
    <SassComponent/>
  );
};

export default App; */
