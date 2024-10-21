import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);
 const func = async () => {
   const data = await localStorage.getItem("isDark");
   console.log(data)
   if (data) {
     const parseData = JSON.parse(data);
     console.log(parseData)
    setDark(parseData)
   }
 };
 useEffect(() => {
   func();
 }, []);
 
  return (
    <ThemeContext.Provider value={[isDark, setDark]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
