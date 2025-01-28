import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case", "success")
    }
    const handleLowClick = ()=>{
       
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case", "success")
    }
    

    const handleClearClick = ()=>{
       
        let newText =('');
        setText(newText)
        props.showAlert("text has been cleared", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
    }

    const [Text, setText] = useState('');
    // text = "new text" wrong way to change the text
    // setText("new text") ; correct way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value= {Text} style={{backgroundColor:props.mode=== 'light'?'white':'grey', color:props.mode=== 'dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button type='submit' className="btn btn-primary mx-1" onClick={speak}>speak</button>

     
    
    <div className="conatiner my-3 "style={{color:props.mode=== 'dark'?'white':'#042743'}} >
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters </p>
        <p> {0.008 * Text.split(" ").length} Minutes to read  </p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </div>
    </>
  )
}
