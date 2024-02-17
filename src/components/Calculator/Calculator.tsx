import React, { useState } from "react";
import { Logo } from "../Logo/index.ts";
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
      setDisplayValue((prevValue) => prevValue.slice(0, -1));
    } else if (buttonValue === "RESET") {
      setDisplayValue("0");
    } else {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? buttonValue : prevValue + buttonValue
      );
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <div className="flex items-end justify-between mb-10">
        <Logo />
        <ThemeSelector theme={theme} changeTheme={changeTheme} />
      </div>
      <Display displayValue={displayValue} />
      <Keypad handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
