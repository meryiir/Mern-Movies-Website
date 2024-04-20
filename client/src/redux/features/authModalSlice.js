import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the authentication modal state
export const authModalSlice = createSlice({
  name: "AuthModal", // Name of the slice
  initialState: {
    authModalOpen: false // Initial state for authModalOpen, initially false (closed)
  },
  reducers: {
    // Reducer to set the authentication modal open/close state
    setAuthModalOpen: (state, action) => {
      // Update the authModalOpen state with the payload (true/false)
      state.authModalOpen = action.payload;
    }
  }
});

// Export the action creator for setting the authentication modal state
export const {
  setAuthModalOpen
} = authModalSlice.actions;

// Export the authModalSlice reducer
export default authModalSlice.reducer;
