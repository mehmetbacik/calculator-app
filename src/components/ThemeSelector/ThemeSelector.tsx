import React, { useEffect, useRef, useCallback } from "react";

interface ThemeSelectorProps {
  theme: number;
  changeTheme: (newTheme: number) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  theme,
  changeTheme,
}) => {
  const applyTheme = useCallback((themeNumber: number) => {
    document.body.className = `theme-${themeNumber}`;
    changeTheme(themeNumber);
  }, [changeTheme]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      applyTheme(1);
      isFirstRender.current = false;
    }
  }, [applyTheme]);

  return (
    <div className="theme-selector">
      {[1, 2, 3].map((themeNumber) => (
        <div
          key={themeNumber}
          className={`theme-circle ${theme === themeNumber ? "active" : ""}`}
          onClick={() => applyTheme(themeNumber)}
        ></div>
      ))}
    </div>
  );
};

export default ThemeSelector;
