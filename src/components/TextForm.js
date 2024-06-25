import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');

  const heandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const heandleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const heandleClearClick = () => {
    let newText = " ";
    setText(newText)
  }

  const heandleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const heandleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{
            backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white"
          }} onChange={heandleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={heandleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={heandleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={heandleClearClick}>Cleare Text</button>
        <button className='btn btn-primary mx-1' onClick={heandleCopy}>Copy Text</button>
      </div>

      <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} charactes</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
