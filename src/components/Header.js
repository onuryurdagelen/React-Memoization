import React,{useContext} from 'react'
import {useTheme} from "../context/ThemeContext";
const Header = () => {
    const {theme,setTheme} = useTheme();
  return (
    <div>
        Active Theme : {theme}

        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header