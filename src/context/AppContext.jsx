import { createContext, useState } from "react";
import contextData from "../store/ store";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [store, setStore] = useState(contextData.getState());

  // help to get latest store changes
  const dispatch = (action) => {
    contextData.dispatch(action); // running action
    setStore(contextData.getState()); // updating latest changes
  };

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
