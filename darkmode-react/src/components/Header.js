import React, {useContext} from "react";
import { NameContext } from "../context/NameContext";
import { DarkContext } from '../context/DarkContext';
const Header = () =>{
    const siteName = useContext(NameContext);
    const {isDark} = useContext(DarkContext);
    return(
        <div className="header" style={{
            backgroundColor: isDark ? "#222" : null,
            color: isDark ? "#fff" : "#222"
        }}>
            <h1>{siteName}</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </div>
    )
}
export default Header;