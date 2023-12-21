import React,{useState} from 'react';
import {Form,Button,} from 'react-bootstrap';
<link rel="stylesheet" href="App.css" />

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleOnchange = (event) =>{
        setText(event.target.value)
      }
      const handleUpcase = () =>{
        let newText = text.toUpperCase(); 
        setText(newText);
        }
      const handleLwcase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        
      }
      const handledelete = () =>{
        let newText = text.substring(0 , text.length - 1);
        setText(newText);
      }
      const handleClear = () =>{
        setText('');
        
      }
      const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
       
      }
      const handlecapitalize = () =>{
        const words=text.split(" ");
         for(var i=0;i<words.length;i++){
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();  
         }
         const res=words.join(" ");
         setText(res)
         
        
        
      }
      const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
      }
      const handlealternate = ()=>{
        const words = text.split(" ");
        for (var i = 0;i < words.length;i++){
          let alter = "";
        for (var j = 0;j<words[i].length;j++){
          alter += j % 2 === 0
                ? words[i][j].toUpperCase()
                : words[i][j].toLowerCase();
        }  
        words[i] = alter;
        }
        const res = words.join(' ');
        setText(res);
       
      }
  return (
    <div>
        <div className="container">
       <Form>
        <Form.Group className="mb-3" controlId="myBox" >
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={8} class="w-50 p-3 my-4 "  value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}  />
      </Form.Group>
    </Form>
        </div>
        <div className="conatiner buttons" >
      <Button variant="primary"  onClick={handleUpcase}>Convert to UpperCase</Button>{'  '}
      <Button variant="secondary" onClick={handleLwcase}>Convert to Lowercase</Button>{'  '}
      <Button variant="success" onClick={handlecapitalize}>Capitalized Case</Button>{'  '}
      <Button variant="warning" onClick={handlealternate}>Alternating Case</Button>{'  '}
      <Button variant="danger" onClick={handleCopy}>Copy Text</Button>{'  '}
      <Button variant="info" onClick={handleExtraspaces}>Remove Extra Spaces</Button>{'  '}
      <Button variant="danger"  onClick={handledelete}>Delete</Button>{'  '}
      <Button variant="dark" onClick={handleClear}>Clear</Button>
        </div>
      <div className="container" style={{color:props.mode==='dark'?'black':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } minutes to read the text above</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    
       
     
    </div>
  );
}
