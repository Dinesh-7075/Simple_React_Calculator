import React, {useState} from "react";
import '../index.css';

const Calculator = () => {

    let [num1, setNum1] = useState('');
    let [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
  
//  Addition function   
    const add = (e) => {
      if (num1 === '' || num2 === '') {
        setMessage('Num1 or Num2 Cannot Be Empty');
        setResult('Error!');
        setSuccess('');

      } 
      else {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let res = num1 + num2;
        setSuccess('Success!')
        setMessage('')
        setResult(res.toFixed(2));
      }
    }

//  Subtraction function   
    const subtract = (e) => {
      if (num1 === '' || num2 === '') {
        setMessage('Num1 or Num2 Cannot Be Empty');
        setResult('Error!');
        setSuccess('');
      }
      else {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let res = num1 - num2;
        setSuccess('Success!')
        setMessage('')
        setResult(res.toFixed(2));
      }
    }

//  Multiplication function   
    const multiply = (e) => {
      if (num1 === '' || num2 === '') {
        setMessage('Num1 or Num2 Cannot Be Empty');
        setResult('Error!');
        setSuccess('');
      } 
      else {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let res = num1 * num2;
        setSuccess('Success!')
        setMessage('')
        setResult(res.toFixed(2));
      }
    }

//  Division function   
    const divide = (e) => {
      if (num1 === '' || num2 === '') {
        setMessage('Num1 or Num2 Cannot Be Empty');
        setResult('Error!');
        setSuccess('');
      }
      else {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let res = num1 / num2;
        setSuccess('Success!')
        setMessage('')
        setResult(res.toFixed(2));
      }
    }

        return (
            <div className="calculator">
                <h1>React Calculator</h1>

                <div className="input-section">
                    <input required id="num1" type="text" placeholder="Num 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    <input required id="num2" type="text" placeholder="Num 2" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>

                <div className="buttons-section">
                    <button symbol="+" onClick={add}>+</button>
                    <button symbol="-" onClick={subtract}>-</button>
                    <button symbol="*" onClick={multiply}>*</button>
                    <button symbol="/" onClick={divide}>/</button>
                </div>

                <span id="msg" className="message" style={{color:'blue'}}>{success}</span>
                <span id="msg" className="message" style={{color:'red'}}>{message}</span>
                <p className="result" style={{color:'black', fontWeight: 600 }}>Result: {result}</p>
            </div>
        );
}
export default Calculator;