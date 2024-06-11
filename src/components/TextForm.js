import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  const handleloclick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerrcase!","success");
  }

  const handleOnChange = (event)=>{

    console.log("On change");
    setText(event.target.value);
  
  }

  const handleclearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!","success");
  }

  const handlecopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);    
    props.showAlert("Text copied!","success");
  }
  const [text, setText] = useState("Enter your text here");

  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className ="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button>
      <button className ="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
      <button className ="btn btn-primary mx-1"  onClick={handleclearClick}>Clear Text</button>
      <button className ="btn btn-primary mx-1"  onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
