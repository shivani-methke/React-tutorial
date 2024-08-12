import React,{useState} from "react";

function useIncreDe(){
    const [count,setCount]= useState(0);
    function Increament(){
        setCount(count+1)
    }
    function Decreament(){
        setCount(count-1)
    }

    return [count,Increament,Decreament]
}

export default useIncreDe;