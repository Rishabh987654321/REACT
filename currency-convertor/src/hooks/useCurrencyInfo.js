import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{//aise to ham direct bhi fetch se api call kr skte the but ham chahte hai ki jaise hi ye hook load ho ya trigger ho tb api call ho
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())//converting the data recieved from api into json format
        .then((res)=> setData(res[currency]))//the result recieved from res is stored into setData function
        console.log(data);
        
    },[currency])//currency hamari dependency hai jb bhi currency trigger hogi hamara useEffect call hoga
    console.log(data);
    return data;
    
}
export default useCurrencyInfo
//