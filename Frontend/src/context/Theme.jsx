import { Children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const useTheme = () => {
    const Theme  = useContext(ThemeContext);
    return Theme;
}

export const ThemeProvider = ({children}) => {
    const localTheme = localStorage.getItem('Theme');
    const [Theme, setTheme] = useState(localTheme);

    return <ThemeContext.Provider value={{Theme , setTheme}}>
        {children}
    </ThemeContext.Provider>
}