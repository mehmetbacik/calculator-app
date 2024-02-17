import React, { useEffect } from "react";

interface KeypadProps {
  handleButtonClick: (buttonValue: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ handleButtonClick }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Backspace") {
        event.preventDefault();
        handleButtonClick("DEL");
      }

      if (key === "Enter") {
        event.preventDefault();
        handleButtonClick("=");
      }

      if (key === "Delete") {
        event.preventDefault();
        handleButtonClick("DEL"); 
      }
    
      const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];
      if (allowedKeys.includes(key)) {
        event.preventDefault();
        handleButtonClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleButtonClick]);

  return (
    <div className="keypad grid grid-cols-4 gap-2">
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("DEL")}>DEL</button>

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
      <button onClick={() => handleButtonClick("*")}>x</button>

      <button onClick={() => handleButtonClick("RESET")} className="col-span-2">
        RESET
      </button>
      <button onClick={() => handleButtonClick("=")} className="col-span-2">
        =
      </button>
    </div>
  );
};

export default Keypad;
