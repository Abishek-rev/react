import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import { useRef, useState } from 'react';
function App() {
  const reRenderP = useRef(0);
  reRenderP.current += 1;
  const [myGirl,setMygirl]=useState();

  function handleButton(love){
  
    setMygirl("Hello  "+love)
  }
  return (
    <div className='App' style={{backgroundColor:"grey",height:800}}>
     
     <InputField/>
     <button onClick={()=>handleButton("jsrii")}>Parent</button>
     <div>RerenderCountParent: {reRenderP.current}</div>
     <div> {myGirl}</div>
    </div>
  );
}

export default App;
