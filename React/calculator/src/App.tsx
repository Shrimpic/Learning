import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('');

  const mathResult = () => {
    //mathClick('')
    let temp = Number(result.split(/\+|-/)[0]);
    let sign = result.match(/[+-]/g)

    for(let i = 1; i < result.split(/\+|-/).length;i++) {
      switch (sign[i - 1]) {
        case "+":
          temp += Number(result.split(/\+|-/)[i]);
          break;
        case "-":
          temp -= Number(result.split(/\+|-/)[i]);
          break;
      }
    }
    return setResult(String(temp)); 
  }

  return (
    <>
      <div className='display'>
        <a>{result}</a>
      </div>

      <div className='calcButtonGrid'> {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "="].map((value, index) => (
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
    </>
  )
}

export default App
