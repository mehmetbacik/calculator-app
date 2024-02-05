import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [theme, setTheme] = useState<string>('theme1'); // Başlangıç teması

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

  const toggleTheme = () => {
    switch (theme) {
      case 'theme1':
        setTheme('theme2');
        break;
      case 'theme2':
        setTheme('theme3');
        break;
      case 'theme3':
        setTheme('theme1');
        break;
      default:
        break;
    }
  };

  const getThemeClassName = () => {
    switch (theme) {
      case 'theme1':
        return 'theme1';
      case 'theme2':
        return 'theme2';
      case 'theme3':
        return 'theme3';
      default:
        return '';
    }
  };

  return (
    <div className={`flex justify-center items-center h-screen ${getThemeClassName()}`}>
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
              className={`p-2 ${button === '=' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded`}
            >
              {button}
            </button>
          ))}
          {['4', '5', '6', '*'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`p-2 ${button === '=' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded`}
            >
              {button}
            </button>
          ))}
          {['1', '2', '3', '-'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`p-2 ${button === '=' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded`}
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
          <button onClick={handleClear} className="p-2 bg-red-500 text-white rounded col-span-2">
            Clear
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button onClick={toggleTheme} className="p-2 bg-gray-500 text-white rounded">
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Calculator;
