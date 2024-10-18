import { useState } from 'react'//importimg useState hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=6
  // const addValue=()=>{
  //   counter=counter+1;
  //   console.log(counter);//the counter will be updated but we can only see this in console and in ui it wont update 
  //   //so to solve this issue we have hooks in react
    
  // }

//   hooks    
  let [counter,setCounter]=useState(1)//it takes an array to declare a hook first element is variable second one is a function that updates the value of variable
  const addValue=()=>{
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Counter value cannot exceed 20");
    }
  } 
  const subValue=()=>{ 
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      console.log("Counter value cannot go below 1");
    }
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button><br />
    <button onClick={subValue}>Decrease value</button>
    </>
  )
}

export default App
