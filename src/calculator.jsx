import React, { useState } from 'react';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleOperatorClick = (operator) => {
    setInputValue(inputValue + operator);
  };

  const handleEqualsClick = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(inputValue);
      if (result === Infinity) {
        setResult('Infinity');
      } else if (isNaN(result)) {
        setResult('NaN');
      } else {
        setResult(result);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setInputValue('');
    setResult('');
  };

  return (
    
    <div className="calculator">
    <h2>React Calculator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled
      />
      <div id="result">{result}</div>
      <div className="button-grid">
      <button id="seven" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button id="four" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="one" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          *
        </button>
         <button id="clear" onClick={handleClearClick}>
          C
        </button>
        <button id="zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
       </div>
    </div>

  );
}

export default Calculator;