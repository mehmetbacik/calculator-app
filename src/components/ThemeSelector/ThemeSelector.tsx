import React from "react";

interface ThemeSelectorProps {
  theme: number;
  changeTheme: (newTheme: number) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  theme,
  changeTheme,
}) => {
  return (
    <div className="theme-selector">
      {[1, 2, 3].map((themeNumber) => (
        <div
          key={themeNumber}
          className={`theme-circle ${theme === themeNumber ? "active" : ""}`}
          onClick={() => changeTheme(themeNumber)}
        ></div>
      ))}
    </div>
  );
};

export default ThemeSelector;
