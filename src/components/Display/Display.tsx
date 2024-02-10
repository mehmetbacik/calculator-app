import React from "react";

interface DisplayProps {
  displayValue: string;
}

const Display: React.FC<DisplayProps> = ({ displayValue }) => {
  return <div className="display">{displayValue}</div>;
};

export default Display;
