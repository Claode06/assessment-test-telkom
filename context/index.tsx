import React, { Dispatch, useReducer } from "react";
import {
  ActionProps,
  initialStateProps,
  stateProps,
} from "../interface/context.type";
import Reducer, { initialState } from "./reducer";

const StateContext = React.createContext<React.ComponentState>([]);

export const useStateContext = (): [initialStateProps, Dispatch<ActionProps>] =>
  React.useContext(StateContext);

const StateProvider: React.FC<stateProps> = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(Reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
