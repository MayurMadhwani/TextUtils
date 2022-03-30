import React, {useState} from 'react';

  
export default function TextForm (props) {

  //convert

  const handleUpClick = ()=>{

    let newText = text;
    setText(newText.toUpperCase());
    props.showAlert("Converted to UpperCase","success");

  }

  const handleLowClick = ()=>{

    let newText = text;
    setText(newText.toLowerCase());
    props.showAlert("Converted to LowerCase","success");

  }

  //miscellaneous

  const clear = ()=>{
    setText("");
    props.showAlert("Text cleared","success");
  }

  const reverse = ()=>{

    let newText="";
    
    for(let i = text.length-1 ; i >= 0 ; i--){
      newText += text[i];
    }

    setText(newText);
    props.showAlert("Text reversed","success");
  }

  const copy = ()=>{

    // let newText = document.getElementById("myBox");
    // newText.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success");

  }

  //textarea
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  // setText("jai shree ram");
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="input form-control" style={{backgroundColor: props.mode === "dark"?'#323232':'white' , color:props.mode === "dark"?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10" cols="5"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
          <button className="btn btn-primary" onClick={handleLowClick}>Convert to lowercase</button>
          <button className="btn btn-primary" onClick={clear}>Clear text</button>
          <button className="btn btn-primary" onClick={reverse}>Reverse</button>
          <button className="btn btn-primary" onClick={copy}>Copy to clipboard</button>
      </div>

      <div className="container my-2">
        
        <h2>Your Text Summary</h2>
        <p>{text.length === 0 ? 0:text.split(/[ ,]+/).length} words and {text.length} characters</p>
        <p>{(text.length === 0 ? 0:text.split(/[ ,]+/).length)*0.008} minutes to read this input</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      
      </div>

    </>
  )
}
