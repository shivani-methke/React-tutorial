import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT":
            return state + 1;
         case "DECREMENT":
            return state - 1;
        default:
            return state;  
    
    }
};

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increament</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    );
};

export default UseReducer






