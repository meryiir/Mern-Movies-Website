import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the global loading state
export const globalLoadingSlice = createSlice({
  name: "AuthModal", // Name of the slice
  initialState: {
    globalLoading: false // Initial state for globalLoading, initially false (not loading)
  },
  reducers: {
    // Reducer to set the global loading state
    setGlobalLoading: (state, action) => {
      // Update the globalLoading state with the payload (true/false)
      state.globalLoading = action.payload;
    }
  }
});

// Export the action creator for setting the global loading state
export const {
  setGlobalLoading
} = globalLoadingSlice.actions;

// Export the globalLoadingSlice reducer
export default globalLoadingSlice.reducer;
