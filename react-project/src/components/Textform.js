import React , {useState} from 'react'
export default function Textform(props) {
    const handleUpperCick = () => {
       let newText = text.toUpperCase();
       if (text.length !== 0){
        setText(newText);
        props.showAlert('The Text is Converted to Upper-Case','success');
       }else{
        alert('First Enter Some Text')
       }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLoCLick = () => {
        if (text.length !== 0){
            let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('The Text is Converted to Lower-Case','success');
        }else{
            alert('First Enter Some Text')
        }
    }
    const handleClearCLick = () => {
        if (text.length !== 0){
            let newText = '';
            setText(newText);
            props.showAlert('Text Cleared','success')
        }else{
            alert('First Enter Some Text')
        }
    }
    const handleInvrCLick = () => {
        if (text.length !== 0){
            let newText = text.split(' ').map((word) => {
                let newStr = ``;
                for (let i=0;i<word.length;i++){
                    if (word[i] === word[i].toUpperCase()){
                        newStr += word[i].toLowerCase();
                    }else{
                        newStr += word[i].toUpperCase();
                    }
                }
                return newStr;
            })
            props.showAlert('Converted !!','success');
            return setText(newText.join(' '));
        }else{
            alert('First Enter Some Text');
        }
        
    }
    const handleAltrCLick = () => {
        if (text.length !== 0){
            let newText = text.split(' ').map((word) => {
                let newStr = ``;
                for (let i=0;i<word.length;i++){
                    if (i%2===0){
                        newStr += word[i].toUpperCase();
                    }else{
                        newStr += word[i].toLowerCase();
                    }
                }
                return newStr;
            })
            props.showAlert('Converted !!!','success');
            return setText(newText.join(' '));
        }else{
            alert('First Enter Some Text');
        }
    }
    const [text , setText] = useState("");
  return (
    <div>
      <>
      <div className="container" style = {{color:props.mode === `light`?`black`:`white`}}>
      <h1>{props.purpose}</h1>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} placeholder='Enter A Text' style={{background:props.mode === `light`?`white`:`grey`,color:props.mode === `light`?`black`:`white`}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearCLick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInvrCLick}>Inverse-Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleAltrCLick}>Alternting-Case</button>
      </div>
      <div className="conatiner my-3" style = {{color:props.mode === `light`?`black`:`white`}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0?`Enter Something to Preview it`:text}</p>
      </div>
      </>
    </div> 
  );
}