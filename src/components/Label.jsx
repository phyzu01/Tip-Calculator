import React from "react";




function Label(props) {
  return (
    <label style={props.style}>
      {props.content}
    </label>
  );
}

export default Label;
