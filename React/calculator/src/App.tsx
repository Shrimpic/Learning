import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('');
  const [numbers, setNum] = useState<number[]>([]);
  const [sings, setSign] = useState<string[]>([]);

  const mathClick = (sign: string) => {
    let numLength = '';
    if (numbers.length === 0){
      setNum([Number(result)]);
    }
    else {
    for(let i = 0; i < numbers.length;i++){
      numLength += String(numbers[i]);
    }
  }
    setNum((prevNum) => [...prevNum, Number(result.slice(numLength.length + sings.length))]);
    setSign((prevSign) => [...prevSign, String(sign)])
    console.log(numbers)
    return setResult(result+sign);
  }

  const mathResult = () => {
    //mathClick('')
    let temp = numbers[0];
    for(let i = 1; i < numbers.length;i++) {
      switch (sings[i-1]) {
        case "+":
        temp += numbers[i];
        break;
        case "-":
        temp -= numbers[i];
        break;
      }
    }
    setNum([]);
    setSign([]);
    return setResult(String(temp));
  }

  return (
    <>
      <div className='display'>
        <a>{result}</a>
      </div>
      <div className='calcButtonGrid'>
        <button className='calcButton' onClick={() => setResult((result+1))}>1</button>
        <button className='calcButton' onClick={() => setResult((result+2))}>2</button>
        <button className='calcButton' onClick={() => setResult((result+3))}>3</button>
        <button className='calcButton' onClick={() => setResult((result+4))}>4</button>
        <button className='calcButton' onClick={() => setResult((result+5))}>5</button>
        <button className='calcButton' onClick={() => setResult((result+6))}>6</button>
        <button className='calcButton' onClick={() => mathClick('+')}>+</button>
        <button className='calcButton' onClick={() => mathClick('-')}>-</button>
        <button className='calcButton' onClick={() => mathResult()}>=</button>
      </div>
    </>
  )
}

export default App
