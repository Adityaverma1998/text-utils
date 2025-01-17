import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function TextTransform(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    toast("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    toast("Converted to lowercase!", "success");
}

const handleClearClick = ()=>{ 
    setText("");
    toast("Text Cleared!", "success");
}

const handleOnChange = (event)=>{
    setText(event.target.value) 
}
const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    toast("Copied to Clipboard!", "success");
}
const handleRemoveblanklines = ()=>{
  setText(text.replace(/(\r\n|\n|\r)/gm, ""));//remove those line breaks
}
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    toast("Extra spaces removed!", "success");
}
const handleCapitalize = ()=>{
  const words = text.split(" ");
  
words.map((word) => { 
  return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
setText(words)
}
const [text, setText] = useState(''); 

  return (
      <>
               <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveblanklines}>Remove Blank Lines </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        <ToastContainer />

      </>
  )
}


export default TextTransform