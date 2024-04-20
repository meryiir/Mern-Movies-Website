import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the overall application state
export const appStateSlice = createSlice({
  name: "AppState", // Name of the slice
  initialState: {
    appState: "" // Initial state for app state, an empty string
  },
  reducers: {
    // Reducer to set the overall application state
    setAppState: (state, action) => {
      // Update the appState state with the payload (new app state)
      state.appState = action.payload;
    }
  }
});

// Export the action creator for setting the app state
export const {
  setAppState
} = appStateSlice.actions;

// Export the appStateSlice reducer
export default appStateSlice.reducer;
