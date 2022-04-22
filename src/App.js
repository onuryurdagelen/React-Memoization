import './App.css';
import { useMemo, useState } from 'react';
import Header from './components/Header';


function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

  const data = useMemo(() =>{
    return calculateObject(number) // number degeri her degistiginde tekrardan re-render edilir.
  },[number]) 

  // const data = calculateObject();
  // {} === {} ==> false doner.Ramdeki referanslari farklidir.
  //Her render isleminde data objesinin referansi degisir.Bu nedenle Header component'i re-render edilir.
  //Tanimladigimiz component'in disinda tanimlar isek re-render islemo gerceklesmez.
  return (
    <div className="App">
       <Header data={data}/> 
       {/* 5 ten kucuk olduunda Header render edilmez. */}
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number +1)}>Click</button>
      <br /><br />
      <input type="text" onChange={({target}) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number){
  console.log("Calculating...");
  for(let i = 0;i<10000;i++)
  {
  }
  console.log("Calculating Compoleted!")
  return {name: "Onur",number}
}

export default App;
