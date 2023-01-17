import React from "react";


function Nav(props){
    const {lists} = props;
    const lis = lists.map(list => <li key={list.id}>{list.title}</li>)
    return(
        <ul>
          {lis}
        </ul>
    )
  }
  

  export default Nav;