import { createContext, useState } from "react";

import MainPage from "./components/Main/Index";

import classes from './App.module.css'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${classes.app}  ${classes[theme]}`}>
        <MainPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;