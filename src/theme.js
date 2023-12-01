import React from "react";
import { useCurrContext,useToggle } from "./context";

export function ThemeComponent(){
    const dark = useCurrContext();
    const toggle = useToggle();

    const themeStyles ={
        backgroundColor:dark? '#333' :'#CCC',
        color:dark? '#CCC':'#333'
    }

    return (
        <>
        <button onClick={toggle}>Toggle</button>
        <div style={themeStyles}>theme</div>
        </>
    )
}