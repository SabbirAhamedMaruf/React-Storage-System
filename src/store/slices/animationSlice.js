import createSlice from "../../lib/createSlice";

const initialState = {
  allAnimation: [],
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    handleAddAnimation(state, action) {
      state.allAnimation = [...state.allAnimation, action.payload];
    },
  },
});

export default animationSlice;
