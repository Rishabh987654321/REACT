import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const[length,setLength]=useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charactersAllowed,setCharactersAllowed]=useState(false);
  const[password,setPassword]=useState("")

  //kisi bhi cheez ka reference agar lena hai to useRef kaam aata hai iska use ham password ko select krne ke liye krenge taki ui me dikhe ki select hogya hai jb copy pe click krte hai
  const passwordRef=useRef(null)//abhi passwordRef ke andar koi reference ni hai


  //hame koi aisa function ya hook chahiye jo ki baar baar run ho like jb ham number pe click kre tb run ho character pe click kre tb bhi run ho length slider badhaye tb bhi run ho ...for this we have useCallback
  //useCallback is a React Hook that lets you cache a function definition between re-renders. mtlb jitna part run hua hai function ka utna memory me rkh lo and agar usko re render kiya jaye to pichla wala result bhi add krdo
  //use call back ek function leta hai or dependecy leta hai in array format yhi dependency useCallback ko baar baar run karati hai ye dependecy as a trigger point hoti a usecallback ko run karana ke liye
  //useCall back ek bht optimise hook h jo memoization use krta h

  const passwordGenerator=useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charactersAllowed) str+="!@#$%^&*_+={}[]~`"
    for(let i=1;i<=length;i++){ 
      let char= Math.floor(Math.random() * str.length+1);
      password+=str.charAt(char)
    }
    setPassword(password)               //agar yha password dependency dete to infinite loop chal jata isilliye setpassword bs pass kiye hai
  },[length,numberAllowed,charactersAllowed,setPassword])//yha par ham whi dependency dete jisspe  hamara function possibly trigger hona chahiye

  //agar koi bhi function ko optimise krna hai useCallback use kro
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()//it will select the value in password and highlight it ...i have done it just to look the ui that password has been coppied
    window.navigator.clipboard.writeText(password)
  },[password])

  //we can not call the passwordGenerator function directly because it will have too many re renders and react doesnot allow that
  //sahi tarika yhi hai ki ham useEffect hook use kare
  useEffect(()=>{
    passwordGenerator()
  },[length,charactersAllowed,numberAllowed,passwordGenerator])//dependency array, mtlb ye sari dependency pe ye hook firse run krdega function ko

  return (
    <>

      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3 font-bold text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 h-10'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-5'>
            <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-lg'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label className='text-lg'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charactersAllowed}
            id='charInput'
            onChange={()=>{
              setCharactersAllowed((prev)=>!prev)
            }}
            />
            <label className='text-lg'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
