import React from "react";

interface KeypadProps {
  handleButtonClick: (buttonValue: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ handleButtonClick }) => {
  const handleDelete = () => {
    handleButtonClick("DEL");
  };

  const handleReset = () => {
    handleButtonClick("RESET");
  };

  return (
    <div className="keypad grid grid-cols-4 gap-2">
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={handleDelete}>DEL</button>

      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("+")}>+</button>

      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("-")}>-</button>

      <button onClick={() => handleButtonClick(".")}>.</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <button onClick={() => handleButtonClick("x")}>x</button>

      <button onClick={handleReset} className="col-span-2">
        RESET
      </button>
      <button onClick={() => handleButtonClick("=")} className="col-span-2">
        =
      </button>
    </div>
  );
};

export default Keypad;
