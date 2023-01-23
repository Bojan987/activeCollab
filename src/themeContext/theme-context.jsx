import React from "react";
import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Theme Toggle Logic starts here...

  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  console.log(getDefaultTheme());
  const [theme, setTheme] = useState(getDefaultTheme());

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
