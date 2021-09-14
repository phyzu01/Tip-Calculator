import React from "react";


const Button = props => (
    <button style={props.styling} value={props.value} className={props.className} onClick={props.click}>{props.tip}</button>
  )



export default Button;