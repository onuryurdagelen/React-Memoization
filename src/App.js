import './App.css';
import { useMemo, useState,useCallback } from 'react';
import Header from './components/Header';


function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

 
  const increment = useCallback(()=>{
    setNumber((prevState)=> prevState + 1); 
    // number degiskeni kullanildiginde re-render islemi gerceklestirilir.Callback function ile yapildiginda re-render islemi yapilmaz.
  },[])

  // const data = calculateObject();
  // {} === {} ==> false doner.Ramdeki referanslari farklidir.
  //Her render isleminde data objesinin referansi degisir.Bu nedenle Header component'i re-render edilir.
  //Tanimladigimiz component'in disinda tanimlar isek re-render islemo gerceklesmez.
  return (
    <div className="App">
       <Header increment={increment}/> 
      <hr />
       {/* 5 ten kucuk olduunda Header render edilmez. */}
      <h1>{number}</h1>

      <br /><br />
      <input type="text"  />
    </div>
  );
}


export default App;
