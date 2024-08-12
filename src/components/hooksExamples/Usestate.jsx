//  Usestate example
 
 import {useState,React} from 'react'


function Usestate () {
  const [count, setcounter]=useState(0) //usestate value ko accept krta hay value is [initalvalue]     //count will return current state  // this is our function hamarya state ko update krnay ke liya use hota hay 
  function updateCount(){    // with the help of setcounter we can update the value
    setcounter(count+1)
  }
  return (
    <div>
      <h1>Button clicked {count} times</h1>
      <button onClick={updateCount}>Click</button>
    </div>
  )
}

export default Usestate;


// Useeffect Example






  // useState is a hook that is used to add the state in the functional components.
    
    // useState is a hook which gives to us two things, one is state and second one is function, and that function 
    // modify to the state.
    
    // state => it is an internal object of a component.
    // It is used to store the data that can be used in the component.
    // whenever the state changes the component will re-render.
    // / states:- states are private  object of an component.

    // useState is a function that returns an array.
    // The first element of the array is the state and the second element is
    // the function that is used to update the state.
    