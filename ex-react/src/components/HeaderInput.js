import React from "react";


const HeaderInput = ({inputText, onChange, onClick}) => {
    //const [inputText, onChange, onClick] = props
    return(
        <div className="header">
        <input value={inputText} onChange={onChange}></input>
        <button onClick={onClick}>+</button>
      </div>
    )
}

export default HeaderInput;