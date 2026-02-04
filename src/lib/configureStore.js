const configureStore = (slices = {}) => {
  if (!slices || typeof slices !== "object") {
    return { state: {}, dispatch: () => {} };
  }

  const combinedInitialState = {};
  const sliceReducers = {};

  // collect initial states & reducers
  Object.keys(slices).forEach((key) => {
    const slice = slices[key];
    if (!slice?.name || !slice?.reducer) {
      console.warn(`Invalid slice provided: ${key}`);
      return;
    }

    if (combinedInitialState[slice.name]) {
      throw new Error(`Duplicate slice name: ${slice.name}`);
    }

    combinedInitialState[slice.name] = slice.initialState;
    sliceReducers[slice.name] = slice.reducer;
  });

  // main combine states
  let currentState = structuredClone(combinedInitialState);

  // root reducer (dispatch)
  const dispatch = (action) => {
    if (!action || typeof action.type !== "string") return;
    const nextState = {};
    Object.keys(sliceReducers).forEach((sliceName) => {
      const sliceReducer = sliceReducers[sliceName];
      const prevSliceState = currentState[sliceName];
      nextState[sliceName] = sliceReducer(prevSliceState, action);
    });
    currentState = nextState;
  };

  // getter (always latest state)
  const getState = () => currentState;

  return {
    getState,
    dispatch,
  };
};

export default configureStore;
