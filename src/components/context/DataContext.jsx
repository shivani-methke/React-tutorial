import React, { createContext, useState } from "react";
const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState("This is a context value");
  return (
    // Provider is used to provide the data to the child components
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export  {DataProvider,DataContext};

// what is create context?
// // This create context creates a new object with a provider and a consumer.

// **This is also know as context API:-This enables us to transfer data without prop drilling.
// This is a way to share data between components without having to pass props down manually at every level.


// context api have two things:- provider,consumer

// provider:- The one who provides data is called a provider.
// consumer:-The one who consumes data is called a consumer.
