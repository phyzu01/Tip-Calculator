import React, { useState } from "react";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const oneLabelStyle = {
  fontWeight: "400",
  display: "block",
  fontSize: "12px",
  fontFamily: "Space Mono ",
};
const twoLabelStyle = {
  fontWeight: "400",
  display: "block",
  fontSize: "12px",
  marginTop: "30px",
};
const threeLabelStyle = {
  fontWeight: "400",
  display: "block",
  fontSize: "12px",
  marginTop: "20px",
};
const billInputStyle = {
  backgroundColor: "hsl(189, 41%, 97%)",
  width: "100%",
  height: "30px",
  border: "none",
  backgroundImage: `url("/images/icon-dollar.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top 7px left 15px",
  padding: "5px",
  textAlign: "right",
  color: "hsl(183, 100%, 15%)",
  fontWeight: "900",
  outline: "none"
};

const peopleInputStyle = {
  backgroundColor: "hsl(189, 41%, 97%)",
  width: "100%",
  height: "30px",
  border: "none",
  backgroundImage: `url("/images/icon-person.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top 7px left 15px",
  padding: "5px",
  textAlign: "right",
  color: "hsl(183, 100%, 15%)",
  fontWeight: "900",
  outline: "none"
};




const resetButtonStyle = {
  width: "205px",
  height: "30px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "hsl(172, 67%, 45%)",
  fontFamily: "Space Mono",
  fontWeight: "900",
  color: "hsl(183, 100%, 15%)",
};

function App() {
  const [billValue, setBillValue] = useState("0");
  const [tipValue, setTipValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [bColorChange,setbColorChange] = useState(false)

  const buttonStyle = {
    width: "70px",
    height: "30px",
    borderRadius: "5px",
    border: "none",
    backgroundColor:"hsl(183, 100%, 15%)",
    fontFamily: "Space Mono",
    fontWeight: "900",
    color: "hsl(0, 0%, 100%)"
  }
  const clickedButtonStyle ={
    width: "70px",
    height: "30px",
    borderRadius: "5px",
    border: "none",
    backgroundColor:"hsl(172, 67%, 45%)",
    fontFamily: "Space Mono",
    fontWeight: "900",
    color: "hsl(0, 0%, 100%)"
  }

  
   

  function handleBillChange(e) {
    setBillValue(e.target.value);
  }
  function handleClick(e) {

    setTipValue(e.target.value);
    setbColorChange(prevValue => {
      return !prevValue;
    })
    e.target.style.backgroundColor ="hsl(172, 67%, 45%)";
    console.log("Yaaaaaaaaaaaaaaaay!!!")
    console.log(e.target.style.backgroundColor);
        
  }
  function handlePeopleChange(e) {
    setPeopleValue(e.target.value);
  }
  function resetButton (){
    setBillValue(0)
    setTipValue(0)
    setPeopleValue(0)
  }
  // console.log(tipValue);
  // console.log(billValue);
  // console.log(peopleValue);


  
  
// let StyledButton = styled(Button)`
//     width: 70px;
//     height: 30px;
//     border-radius: 5px;
//     border: none;
//     background-color:hsl(183, 100%, 15%);
//     font-family: Space Mono;
//     font-weight: 900;
//     color: hsl(0, 0%, 100%);
//     &:focus {
//         background-color: ${"hsl(172, 67%, 45%)"};
//       }

// `
  const tipPerPerson = parseFloat((billValue * tipValue) / (100 * peopleValue)).toFixed(2);
  const totalPerPerson = parseFloat((billValue / peopleValue) + ((billValue * tipValue) / (100 * peopleValue))).toFixed(2);

  return (
    <div className="container">
      <div className="billCalculate">
        <div className="one">
          <Label content="Bill" style={oneLabelStyle} />
          <Input inpStyle={billInputStyle} change={handleBillChange} />

          <Label content="Select Tip %" style={twoLabelStyle} />
        </div>

        <div className="two">
          <div>
            <Button
              styling={clickedButtonStyle}
              value="5"
              click={handleClick}
              tip="5%"

              />
          </div>
          <div>
            <Button
              styling={!bColorChange?buttonStyle:clickedButtonStyle}
              value="10"
              tip="10%"
              click={handleClick}
            />
          </div>
          <div>
            <Button
              styling={!bColorChange?buttonStyle:clickedButtonStyle}
              value="15"
              tip="15%"
              click={handleClick}
            />
          </div>
          <div>
            <Button
              styling={!bColorChange?buttonStyle:clickedButtonStyle}
              value="25"
              tip="25%"
              click={handleClick}
            />
          </div>
          <div>
            <Button
              styling={!bColorChange?buttonStyle:clickedButtonStyle}
              value="50"
              tip="50%"
              click={handleClick}
            />
          </div>
          <div></div>
        </div>
        <div className="three">
          <Label content="Number of People" style={threeLabelStyle} />
          <Input inpStyle={peopleInputStyle} change={handlePeopleChange} />
        </div>
      </div>
      <div className="billDisplay">
        <div className="billContainer">
          <div className="billCalculated">
            <div className="amountDesciption">
              <p>
                Tip Amount <br />/ person
              </p>
            </div>

            <div className="amountValue">
              {peopleValue > 0 ? <p>{"$" + tipPerPerson}</p> : <p>$0.00</p>}
            </div>
            <div className="amountDesciption">
              <p>
                Total <br />/ person
              </p>
            </div>

            <div className="amountValue">
              {peopleValue > 0 ? <p>{"$" + totalPerPerson}</p> : <p>$0.00</p>}
            </div>
          </div>
          <div className="reset">
            <Button
              styling={resetButtonStyle}
              value=""
              tip="RESET"
              click={resetButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
