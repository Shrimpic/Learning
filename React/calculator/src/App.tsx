import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('');

  const mathResult = () => {
    //mathClick('')
    let sign = result.match(/[+\-×÷]/g);
    let splitResult = result.split(/\+|-|×|÷/);
    let temp = Number(splitResult[0]);

    for(let i = 1; i < splitResult.length;i++) {
      switch (sign[i - 1]) {
        case "+":
          temp += Number(splitResult[i]);
          break;
        case "-":
          temp -= Number(splitResult[i]);
          break;
        case "×":
          temp *= Number(splitResult[i]);
          break;
        case "÷":
          temp /= Number(splitResult[i]);
          break;
      }
    }
    return setResult(String(temp)); 
  }

  return (
    <>
    <div className='calcUI'>
      <div className='display'>
        <a>{result}</a>
      </div>
      <div className='calcButtonGrid'> {
      [7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "-", 0, ".", "=", "+"].map((value, index) => (
        <button key={index} className='calcButton' 
        onClick={() => {
          switch(value) {
            case "=":
              mathResult();
              break;
            default:
              setResult(result+value);
          } 
        } 
          }>{value}</button>)) 
        } 
        </div>
      </div>
    </>
  )
}

export default App
