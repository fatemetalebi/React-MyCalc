import logo from './logo.svg';
import './App.css';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { useState } from 'react';
import { Clear } from './components/Clear';
import * as math from 'mathjs'

function App() {
  const [input, setInput] = useState("")

  const handleClear = () => {
    setInput("")
  }

  const addToInput = (val) => {
   
    setInput(input + val)
  }

  const handleEqual = () => {
  setInput(math.evaluate(input))
  }

  return (
    <div className="app">
      <div className='calc-wrapper'>
        <Input input={input}></Input>
        <div className='row'>
          <Buttons handleClick={addToInput}>7</Buttons>
          <Buttons handleClick={addToInput}>8</Buttons>
          <Buttons handleClick={addToInput}>9</Buttons>
          <Buttons handleClick={addToInput}>/</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={addToInput}>4</Buttons>
          <Buttons handleClick={addToInput}>5</Buttons>
          <Buttons handleClick={addToInput}>6</Buttons>
          <Buttons>X</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={addToInput}>1</Buttons>
          <Buttons handleClick={addToInput}>2</Buttons>
          <Buttons handleClick={addToInput}>3</Buttons>
          <Buttons handleClick={addToInput}>+</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={addToInput}>.</Buttons>
          <Buttons handleClick={addToInput}>0</Buttons>
          <Buttons handleClick={handleEqual}>=</Buttons>
          <Buttons handleClick={addToInput}>-</Buttons>
        </div>
        <div className='row'>
          <Clear handleClearClick={() => handleClear()}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
