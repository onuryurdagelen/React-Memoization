import React, { useContext } from 'react'
import Button from './Button'
import Header from './Header'
import ThemeContext from "../context/ThemeContext";
import Profile from './Profile';
const Container = () => {
    const {theme} = useContext(ThemeContext);

    // console.log(theme);
  return (
    <div className={`app ${theme}`}>
        <Button/>
        <hr />
        <Header/>
        <hr />
        <Profile/>
    </div>
  )
}

export default Container