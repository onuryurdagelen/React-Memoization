import { createContext,useState,useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    //local storage'daki degeri initial value olarak aliyoruz; yoksa default olarak light olarak initial value atiyoruz.
        // console.log(theme);
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])
    const values = {
        theme,setTheme
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
//Custom context api kullanma

const useTheme = () =>useContext(ThemeContext);
export {useTheme,ThemeProvider};