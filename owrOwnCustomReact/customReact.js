//in a simple react we have app.jsx file where we write a function and in that function we return a jsx



//creating our custom render
function customRender(reactElement,container){//fpehle kya render karana hai or kaha render karana hai ye do params hai
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)//setting atrribute of the element
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)//finallly adding the created custom jsx/html element to the container jha pe iss jsx/html ko render karana hai
    */

    //the above code is corect but we can optimise it further
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children') {
            continue
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


//creating our customize react element
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

//we grab the root container present in index.html
const mainContainer=document.getElementById('root')
//now we have to render this in owr browser i.e means that we will add the reactElement into root so that we can display in the browser
customRender(reactElement,mainContainer)//it takes two element,1) what to inject and 2)where to inject 