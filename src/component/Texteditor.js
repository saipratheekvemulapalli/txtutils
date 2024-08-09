import React, { useState } from 'react';
import './Texteditor.css';

export default function Texteditor(props) {
  const [text, settext] = useState('');

  function btnclicked() {
    settext(text.toUpperCase());
    props.showAlert('Changed to uppercase', 'success');
  }

  function btnclicktoLowercase(){
    settext(text.toLowerCase());
    props.showAlert('Changed to lowercase', 'success');
  }

  function clearTxtBtn(){
    settext('');
    props.showAlert('Text was cleared', 'success');
  }

  function btntocopy(){
    let cptxt = document.getElementById('exampleFormControlTextarea1');
    cptxt.select();
    navigator.clipboard.writeText(cptxt.value);
    props.showAlert('Text copied to clipboard', 'success');
  }

  function takinginputtext(event) {
    settext(event.target.value);
  }

  const bgstyle = {
    backgroundColor: props.mode === 'dark' ? '#000000' : '#ffffff',
    color: props.mode === 'dark' ? '#ffffff' : '#000000'
  };

  return (
    <>
      <div className="container" style={bgstyle}>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.inputtitleclr}`}>
              <h4>{props.heading}</h4>
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={takinginputtext}
              id="exampleFormControlTextarea1"
              rows="6"
              cols="30"
              style={bgstyle}
            ></textarea>
          </div>
          <div className="parentclickbtn">
            <button className="btn btn-dark convertbutton mx-2" onClick={btnclicked}>
              Convert to Uppercase
            </button>
            <button className="btn btn-dark convertbutton mx-2" onClick={btnclicktoLowercase}>
              Convert to Lowercase
            </button>
            <button className="btn btn-dark convertbutton mx-2" onClick={clearTxtBtn}>
              Clear Text
            </button>
            <button className="btn btn-dark convertbutton mx-2" onClick={btntocopy}>
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3" style={bgstyle}>
        <p id="dispwords">
          {text.split(" ").filter(word => word !== "").length} words and {text.length} characters
        </p>
        <p id="dispwords">
          {0.008 * text.split(" ").filter(word => word !== "").length} minutes to read the text
        </p>
        <h4>PREVIEW</h4>
        <p>{text.length === 0 ? "Enter something to preview" : text}</p>
      </div>
    </>
  );
}
