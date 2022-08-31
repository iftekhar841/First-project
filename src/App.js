import React, {useState} from "react";
import { jsPDF } from "jspdf";
import calu from '../src/Image/c.png';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  }
  const clearHandler = () => {
    setResult(''); 
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }
  const pdfGenerate = () => {
    var doc = new jsPDF('landscape','px','a4','false');
    // doc.text('Hello world',10,10);
    doc.addImage(calu,'PNG',65,20,500,400);
    doc.save('c.pdf')
  }
  return (
    <div className="App">
     
      <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result}/>
        <input type="button" value="9" className="button" onClick={clickHandler}/>
        <input type="button" value="8" className="button" onClick={clickHandler}/>
        <input type="button" value="7" className="button" onClick={clickHandler}/>
        <input type="button" value="6" className="button" onClick={clickHandler}/>
        <input type="button" value="5" className="button" onClick={clickHandler}/>
        <input type="button" value="4" className="button" onClick={clickHandler}/>
        <input type="button" value="3" className="button" onClick={clickHandler}/>
        <input type="button" value="2" className="button" onClick={clickHandler}/>
        <input type="button" value="1" className="button" onClick={clickHandler}/>
        <input type="button" value="0" className="button" onClick={clickHandler}/>
        <input type="button" value="." className="button" onClick={clickHandler}/>
        <input type="button" value="+" className="button" onClick={clickHandler}/>
        <input type="button" value="-" className="button" onClick={clickHandler}/>
        <input type="button" value="*" className="button" onClick={clickHandler}/>
        <input type="button" value="/" className="button" onClick={clickHandler}/>
        <input type="button" value="%" className="button" onClick={clickHandler}/>
        <input type="button" value="clear" className=" button1" onClick={clearHandler}/>
        <input type="button" value="=" className=" button1" onClick={calculate}/>
        
        
        <button style={{marginTop:"40px", padding : "10px", fontSize : "30px",
        backgroundColor :"yellow", cursor:"pointer"}} onClick = {pdfGenerate}> download pdf</button>


      </div> 
      <div>
          
      </div> 
    </div>
  );
}

export default App;
