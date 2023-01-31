import React from "react";
import { useState } from 'react';

function Toggle() {

  const [ toggleOn, setToggleOn ] = useState(false);

  function handleClick() {
    setToggleOn(toggleOn=>!toggleOn);
    console.log(toggleOn)
  }
  
  const toggled = toggleOn ? "ON" : "OFF";
  const color = toggleOn ? 'red' : 'white';
  console.log(color)

  return <button style = {{background : color}} onClick = {handleClick}>{toggled}</button>;
}

export default Toggle;
