import React from "react";

interface DisplayProps {
  displayValue: string;
}

const Display: React.FC<DisplayProps> = ({ displayValue }) => {
  return <div className="display pt-[50px] p-[40px] mb-[30px] flex items-center justify-end text-[40px] font-bold rounded-[10px]">{displayValue}</div>;
};

export default Display;
