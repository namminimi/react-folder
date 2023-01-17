import React from "react";
import Nav from "./Nav";


function Header(props) {
    const {lists} = props;
    return (
      <header>
          <h1>Green</h1>
          <Nav lists = {lists}/>
      </header>
    )
  }

  export default Header