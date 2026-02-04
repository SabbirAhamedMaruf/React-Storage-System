import configureStore from "../lib/configureStore";
import animationSlice from "./slices/animationSlice";
import editorSlice from "./slices/editorSlice";

const contextData = configureStore({
  editor: editorSlice,
  animation: animationSlice,
});

export default contextData;
