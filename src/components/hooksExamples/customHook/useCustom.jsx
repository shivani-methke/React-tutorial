import React,{useState} from "react";
import useIncreDe from './useIncreDe';

function UseCustom(){
    const[count,Increment,Decrement] = useIncreDe()
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Inc</button>
            <button onClick={Decrement}>Dec</button>
        </div>
    )
}

export default UseCustom




// custom hook are resuable
