import { useContext, createContext } from "react";

// preferred method.
// now in this method we are giving a default value as soon as context is created.
export const ThemeContext = createContext({
    themeMode:"light",    // variable
    darkTheme: () => {},  // methods 
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}