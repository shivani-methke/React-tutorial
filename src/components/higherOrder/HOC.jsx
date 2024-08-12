import React, { PureComponent } from "react";
import { Component } from "react";


// React is a library that gives a feature of resuabilty.

// A higher order component is a function that takes in a component and returns a new component.
// NewComponent:-will be the enhanced component
// HigherFunction:-as the suggest this function will enhance will enhance wrappedComponent
// WrappedComponent:- the component whose functionality we want to extend in other words,this will be the component that we want to enhance.

// HOC => Higher Order Components
// Component:-rapper components big message.
// wrappedcomponent:- the message which we are showing
// Enhanced components:-

// ***************
// PureComponent:-pure component are those components  those do not  unneccerasy render it is called as pure components.
// component that doesnt cause a unneccessary re-render that application is know as a pure component

// control:-
// uncontrol:-

// Gobalstatemangement:- we are just manenging our state gobally.
const withMessage = (WrappedComponent, message) => {
  return (props) => {
    return (
      <>
        <h1>Hello shivani</h1>
        <WrappedComponent message={message} {...props} />
      </>
    );
  };
};

// DRY FULL FORM:-DO NOT REAPEAT YOUERSELF

// Base Component
const WrappedComponent = (props) => {
  return <div>{props.message} </div>;
};

// Enhanced Component
const EnhancedComponent = withMessage(WrappedComponent, "Hello Shivani");

export default EnhancedComponent;
               