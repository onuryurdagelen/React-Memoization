import React, { useContext } from 'react'

import { useTheme } from "../context/ThemeContext";
const Button = () => {
    const {theme,setTheme} = useTheme();
    // const data = useContext(ThemeContext);
    // console.log(data); // dark
  return (
    <div>
        Active Theme : {theme}
        <br />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Button