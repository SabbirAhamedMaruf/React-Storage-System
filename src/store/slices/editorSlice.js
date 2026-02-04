import createSlice from "../../lib/createSlice";

const initialState = {
  isSidebarOpen: false,
  isGlobalSettingsOpen: false,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    handleSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
    handleGSOpen(state, action) {
      state.isGlobalSettingsOpen = action.payload;
    },
  },
});

export default editorSlice;
