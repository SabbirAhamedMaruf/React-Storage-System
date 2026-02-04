const createSlice = (data = {}) => {
  if (
    !data ||
    typeof data !== "object" ||
    !("name" in data) ||
    !("initialState" in data) ||
    !("reducers" in data)
  ) {
    console.warn("Slices must includes name, initialState and reducers");
    return {};
  }

  const { name = "", initialState = {}, reducers = {} } = data;

  const actionCreators = {};
  const reducerMap = {};

  Object.keys(reducers).forEach((key) => {
    const type = `${name}/${key}`;
    reducerMap[type] = reducers[key];
    actionCreators[key] = (payload) => ({
      type,
      payload,
    });
  });

  function sliceReducer(state = initialState, action) {
    const reducerFn = reducerMap[action.type];
    if (!reducerFn) return state;
    const nextState = structuredClone(state);
    reducerFn(nextState, action);
    return nextState;
  }

  return {
    name,
    mappedReducers: reducerMap, // remove this code
    reducer: sliceReducer,
    actions: actionCreators,
    initialState,
  };
};
export default createSlice;
