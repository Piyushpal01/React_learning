import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./Components/themeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThememode] = useState("light");
  const lightTheme = () =>{
    setThememode("light");
  }
  const darkTheme = () => {
    setThememode("dark");
  }

  // Actual method that will change the theme.
  useEffect(() => {
    const theme = document.querySelector('html');
    theme.classList.remove("light","dark");
    theme.classList.add(themeMode);
  }, [themeMode])
  
  return (
    // ye lighttheme and darktheme method abhi khuch krte nhi h, to exact inke same naam lo ar yhi define krdo to exact unke andr functionality chli jati h.
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
