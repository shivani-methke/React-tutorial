import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Counter from "./components/Counter";

import { useState,useContext } from "react";
import FormComponent from "./components/Formcomponent";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
// import Useeffect from "./components/Example/Useeffect";
// import Effect from "./components/Example/Effect";
import useeffect from "./components/hooksExamples/Useeffect"
import Effect from "./components/hooksExamples/Effect"

import Child1 from "./components/propsdrilling/Child1";
import Child3 from "./components/propsdrilling/Child3";
import RefExample from "./components/hooksExamples/RefExample";
import MemoExample from "./components/hooksExamples/MemoExample";
import Parent from "./components/hooksExamples/callbackHook/Parent";
import ReducerExample from "./components/hooksExamples/ReducerExample";
import ReducerForm from "./components/hooksExamples/ReducerForm";
import CounterEx from "./components/hooksExamples/customHook/CounterEx";
import TitleChanger from "./components/hooksExamples/customHook/TitleChanger";
import EnhancedComponent from "./components/higherOrder/HOC";
import UseCustom from "./components/hooksExamples/customHook/useCustom";
import UseReducer from "./components/hooksExamples/UseReducer";
import Usestate from "./components/hooksExamples/Usestate";

// import { DataContext } from "./components/context/DataContext";

function App() {
  // const dataContext = useContext(DataContext);
  // const { data, setData } = dataContext;
  // setData("1000000000000000000")



  
  let [counterValue, setcounterValue] = useState(10);
  const inputTypes= ["text","number","email"];
  return (
    <div className="App">

{/* I want my child3 to have the value of counterValue. for that I will have to pass the value from the parent component to the child component.
<Child1 counterValue={counterValue} />
<Child2 counterValue={counterValue} />
<Child3 counterValue={counterValue} /> => recieve the value of counterValue from the parent component.

PROP DRILLING = > Passing the props from the parent component to the child component through the intermediate components.

App
 ├── CHILD1
      ├── CHILD2
           ├── CHILD3 
*/}
      {/* <Child1 counterValue={counterValue} /> */}

      {/* <Body/>
      <Header/>
       <h1>Counter</h1>
      <label>enter the value</label>
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          let value = e.target.value;
          setcounterValue(parseInt(value));
        }}
      /> */}

      {/* <Counter props={counterValue} /> */}
      {/* <FormComponent/> */}
      {/* <Useeffect/> */}
      {/* <a href="/about"><button>about</button></a>
      <Link to="/counter" target="_blank"><button>counter</button></Link>
      <Link to="/body"><button>Body</button></Link>
      <Link to="/"><button>Home</button></Link> */}

      {/* <h1>This is App component</h1>
      <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/Body" element={<Body />} /> */}
      {/* <Route path="/counter" element={<Counter counterValue={counterValue} value={278} />}/> */}
      {/* <Route path="/counter" element={<counter/>}/>
      </Routes>
      <Counter props={counterValue} /> */}
      <RefExample/>
      {/* <MemoExample/> */}
      {/* <Parent/> */}
      {/* <ReducerExample/>
      <ReducerForm/> */}
      {/* <CounterEx/>
      <TitleChanger/>
      <EnhancedComponent /> */}

      {/* <UseCustom/> */}
      {/* <UseReducer/> */}
      {/* <Usestate/> */}
      {/* <Effect/> */}
     
      
      

{/* 
      {inputTypes.map((type, index) => (
            <input key={index} type={type} onChange={()=>{}}/>
          ))} */}


    </div>
  );
}
export default App;



//rule is such that ki you have to write the name of the functional component in the first letter capital letter.

// Data flow is uni-directional in react => from parent to child.

//Hooks=> Are functions that let you use state and other React features in functional components

//useState
//useEffect
//useContext
//useReducer
//useRef
//useMemo
//useCallback
//custom hoooks

//Two types of components

//Functional components = >
//Functional components are the components that are created using functions
//They provide us Hooks to use the state and lifecycle methods in the functional components

//Class components

//usestate=> is a hook that is used to add the state in the functional components

// for routing you can                                                                                         use react-router-dom

//Components => BrowserRouter, Route, Link, Routes

// PROPS = > Props are the arguments that are passed to the components from the parent component.
//Props are immutable => you cannot change the value of the props in the child component.
//Props are used to pass the data from the parent component to the child component.




// usestate accept one value and return two value


// import {useState,React} from 'react'

// function App() {
//   const [count, setcounter]=useState(0) //usestate value ko accept krta hay value is [initalvalue]     //count will return current state  // this is our function hamarya state ko update krnay ke liya use hota hay 
//   function updateCount(){    // with the help of setcounter we can update the value
//     setcounter(count+1)
//   }
//   return (
//     <div>
//       <h1>Button clicked {count} times</h1>
//       <button onClick={updateCount}>Click</button>
//     </div>
//   )
// }

// export default App