import React from "react";


function Input (props){
    return (<input className="inputBorderStyle" onChange={props.change} style={props.inpStyle}/>)
}



export default Input;