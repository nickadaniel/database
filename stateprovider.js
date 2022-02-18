import React, {createContext, useContext, userReducer} from "react";

// prepares the dataLayer 

export const StateContext = createContext();

// wrap our app and provide the data layer 


// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

  // pull information from the data layer 

  export const useStateValue  = () => userContext(StateContext);

  