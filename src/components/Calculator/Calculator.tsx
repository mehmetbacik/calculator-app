import React, { useState } from "react";
import { Display } from "../Display/index.ts";
import { Keypad } from "../Keypad/index.ts";
import { ThemeSelector } from "../ThemeSelector/index.ts";
import "./Calculator.css";

import { evaluate } from "mathjs";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [theme, setTheme] = useState<number>(1);

  const updateDisplay = (newValue: string) => {
    setDisplayValue(newValue);
  };

  const changeTheme = (newTheme: number) => {
    setTheme(newTheme);
  };

  const calculate = () => {
    try {
      const result = evaluate(displayValue);
      updateDisplay(result.toString());
    } catch (error) {
      updateDisplay("Error");
    }
  };

  const clearDisplay = () => {
    updateDisplay("0");
  };

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === "=") {
      calculate();
    } else if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "DEL") {
      // DEL düğmesine tıklanırsa, son karakteri sil
      setDisplayValue(prevValue => prevValue.slice(0, -1));
    } else if (buttonValue === "RESET") {
      // RESET düğmesine tıklanırsa, girişi sıfırla
      setDisplayValue("0");
    } else {
      // Diğer düğmelere tıklanırsa, girişi güncelle
      setDisplayValue(prevValue => prevValue === "0" ? buttonValue : prevValue + buttonValue);
    }
  };
  

  return (
    <div className="container mx-auto max-w-md p-4 bg-gray-200 rounded-lg shadow-md">
      <ThemeSelector theme={theme} changeTheme={changeTheme} />
      <Display displayValue={displayValue} />
      <Keypad handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
