import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>setColor("navy")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "navy" }}>Navy</button>
          <button onClick={()=>setColor("darkgray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "darkgray" }}>Gray</button>
          <button onClick={()=>setColor("gold")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "gold" }}>Gold</button>
        </div>
      </div>
    </div>
  )
}

export default App
