import React, { useEffect, useRef, useCallback } from "react";

interface ThemeSelectorProps {
  theme: number;
  changeTheme: (newTheme: number) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  theme,
  changeTheme,
}) => {
  const applyTheme = useCallback(
    (themeNumber: number) => {
      document.body.className = `theme-${themeNumber}`;
      changeTheme(themeNumber);
    },
    [changeTheme]
  );

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      applyTheme(1);
      isFirstRender.current = false;
    }
  }, [applyTheme]);

  return (
    <div className="theme-selector flex items-end gap-6">
      <div className="headline">
        <span className="title">Theme</span>
      </div>
      <div className="themes flex flex-col items-center gap-[2px]">
        <div className="title flex items-center justify-between w-full">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="buttons flex items-center gap-[8px]">
          {[1, 2, 3].map((themeNumber) => (
            <div
              key={themeNumber}
              className={`theme-button ${
                theme === themeNumber ? "active" : ""
              }`}
              onClick={() => applyTheme(themeNumber)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
