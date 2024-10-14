import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//since react is build all on function so lets write a function and ee if its running or not
function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

//this is our custom build react element in which we have defined our own properties ...react also use somewhat smilar kind of appraoch

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

//using react syntax to create our own element that we can render 
//just like js gives document.createElement reacts give us the same method to create our own element
const reactCustomElement=React.createElement(// its para meter is first it takes a tag name then a object with its props and then a children
  'a',//tag name
  {href:'https://google.com',target:"_blank"},//object with props
  'click me to visit google'//children
)



createRoot(document.getElementById('root')).render(
  
    <App/>

    //<MyApp/>,//so yes we can crete our functiona and call it here
    // we can also call this function like normal way
   // MyApp()//this will also work because at the end it is just a function you can call it any way you like
 
   //reactElement() we can not render our custom element like this because it is a custom element and we have defined it according to our own rules similarly react has also its own rool to create a element and render it 

   //<reactCustomElement/>//now this will works as we have created an element the saame way reacts create it under the hood

)
