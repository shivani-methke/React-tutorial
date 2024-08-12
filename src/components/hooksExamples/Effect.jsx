import React,{useState,useEffect} from "react";

function Effect(){
    const [count,setcount]=useState(0);
    const [data,setData]=useState(200);
    useEffect(()=>{
        console.log(
            "NO DEPENDENCY"
        );

    });
    useEffect(()=>{
        console.log("EMPTY DEPENDENCY ARRAY")
        
    },[]);
    useEffect(()=>{
        console.log("COUNT DEPENDENCY")
    },[count,data ]);

    useEffect(()=>{
        console.log("DATA DEPENDENCY")
    },[data]);


    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}> count plus</button>
        <br/> <br/> <br/> <br/>
        <button onClick={()=>setData(data+1)}>Data plus</button>
        </>
    );
}
export default Effect;