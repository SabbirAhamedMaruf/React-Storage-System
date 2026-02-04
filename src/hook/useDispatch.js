import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useDispatch = () => {
  const { store, dispatch } = useContext(AppContext);
  if (!store) {
    throw new Error("useDispatch must be inside AppProvider!");
  }
  return dispatch;
};
