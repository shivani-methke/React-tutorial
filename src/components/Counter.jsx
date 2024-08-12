// import React, { useEffect } from "react";
import "./counter.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Counter({props}){
    const navigate = useNavigate();
    console.log(props,"This is the value of props");


    

    useEffect(()=>{
        setCount(props);
        console.log("This is the use effect");
    },[props]);

    const[count,setCount]=useState(props);

    function increment(){
        setCount(count+1);
        // Count++;
        if (count==20) navigate("/about");
        console.log(count);
    }
    function decrement(){
        setCount(count-1);
        console.log(count);
    }
    return(
        <div className="container">
            <button className="increment"onClick={increment}>+</button>
            <span>{count}</span>
            <button className="decrement"onClick={decrement}>-</button>
        </div>
    )


}
export default Counter;



