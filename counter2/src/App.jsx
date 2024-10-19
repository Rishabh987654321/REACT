import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue=()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)//even if we have called setCount function the counter will increase only once because useState send all the updates in ui in batches since every function call is doing the same thing it updates the value only once
    setCount(prevCount=> prevCount+1)//we can use this but its not recommended here we are taking a call back in which the prevcounter stores the value of count used previously and updates it 
    setCount(count+1)

  }
  const subValue=()=>{
    setCount(count-1)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter value : {count}</h1>
      <div className="card">
        <button onClick={addValue}>
          count add {count}
        </button>
        <br />
        <button onClick={subValue}>
          count subtract {count}
        </button>
      </div>
     
    </>
  )
}

export default App
