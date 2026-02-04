import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const getState = () => {
  const { store } = useContext(AppContext);
  if (!store) {
    throw new Error("getState must be inside AppProvider!");
  }
  return store;
};
