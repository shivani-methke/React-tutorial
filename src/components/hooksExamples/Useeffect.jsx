import React,{useEffect, useState} from 'react'

function Useeffect() {
    const [data,setData]=useState([]) ;
   
  useEffect(() => {
    console.log("This will be only changed when the data is changed", data);
  }, [data]);

//ERROR BOUNDARY = > Error boundary is a component that is used to catch the errors in the child components tree and display a fallback UI instead of crashing the whole component tree.b


  useEffect(()=>{
    try{
      let getData =  async () => {
        let response = await fetch("https://reqres.in/api/users?page=2");
        let resposeData = await response.json();
        setData(resposeData.data);
        console.log(resposeData);
        console.log("This is useeffect", data);
      }
      getData()

    }catch(error){
      console.log("Error is",error);
    }
   
  }, []);

  return (
    <div>
      <h1>Hello this is useeeffect</h1>
      {data.map((user, index) => {
        return <h1 key={index}>{user.first_name}</h1>;
      })}
    </div>
  );
}

export default Useeffect;




// Example number 2
// import {useState, useEffect,React} from 'react'


// function useeffect () {
//   const [count, setcounter]=useState(0)
//   const [data, setData]= useState("Ram")

//   useEffect( ()=>{                   //useeffect hook  accept 2 value one is use to perform a side effect function   function jo ki hamya pefrom krta hay either it is a timerfunction or setimer function or fetching data
//    console.log("component mounted")
//   },[data])

//   function updateCount(){   
//     setcounter(count+1)
//   }
//   function updateDate(){
//     setData("Seeta")
//   }
//   return (
//     <div>
//       <h1>Button clicked {count} times</h1>
//       <button onClick={updateCount}>Click</button>
//       <button onClick={updateDate}>updateDate</button>
//     </div>
//   )
// }

// export default useeffect;







 // useEffect is a hook that is used to perform the side effects in the functional components. It is used for communication from outside world.
    // a component is never re-rendering bases on props. if we want to re-render then we have to use useEffect hook.

    // useEffect:-ye 2 parameter leta hai , first one callback function and second one as a dependence-jiske upar dependend ho array .
    
     //side effects => network request, data fetching, manual DOM manipulation, event listeners, timers, logging, etc.
  // to call an APi in react there are two methods

  //fetch= > default method to call API's
  //axios = > it is a library that youu have to install explicitly
  // useeffect reponsible for re-rendring Component.
  // useeffect takes two arguments=>
  // 1. callback fn
  //  2. dependency array = >The array on which call of useeffecct is dependent
  //if the dependency array is empty then the useEffect will run only once
  //if the dependency array is not empty then the useEffect will run whenever the value of the dependency array changes
  //if the dependency array is not present then the useEffect will run whenever the component is rendered or any state changes in the component.



  // State  => it is an internal object that is used to store the data in the component.

  //syntax of useEffect
  //it takes a callback functtion as the first argument and a dependency array as the second argument

  //useeefct is used to perform the side effects in the functional components

  
