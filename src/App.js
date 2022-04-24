import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';

import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
const App = () => {
 
  return (
    <div className="app">
      {/* Provider data saglar */}
       <ThemeProvider>
         <UserProvider>
        <Container/>
         </UserProvider>
       </ThemeProvider>
    </div>
  );
}


export default App;
