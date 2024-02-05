import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Hata');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '/'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {button}
            </button>
          ))}
          {['4', '5', '6', '*'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {button}
            </button>
          ))}
          {['1', '2', '3', '-'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {button}
            </button>
          ))}
          {['0', '.', '=', '+'].map((button) => (
            <button
              key={button}
              onClick={button === '=' ? handleCalculate : () => handleButtonClick(button)}
              className={`p-2 ${button === '=' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded`}
            >
              {button}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded col-span-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
