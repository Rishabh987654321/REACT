import { useState } from 'react'
import './App.css'
import Card from './components/card'

//props hamare component ko banata hai reusable 

function App(props) {
  console.log(props);//ek object hai jisme kai sari properties hai
  let myObj={
    name:"jordan",
    mfg:1990
  }

  let newArr=[100,200,300]
  return (
    <>

      <h1 className='bg-green-500 text-black p-5 rounded-xl mb-5'>tailwind test</h1>
      <Card shoeName={myObj.name} btnText="Buy Now"/> 
      <Card shoeName="Skechers" btnText="Buy Later"/>


      {/* hamne ek component folder banaya hai jisme card hai or ham isko jaha marzi wha use kr skte hai or har ek card ko apni zarurat anusar modify kr skte hai or ye kaam ham props se krte hai */}
    </>
  )
}

export default App
