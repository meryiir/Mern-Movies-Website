import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the theme mode state
export const themeModeSlice = createSlice({
  name: "ThemeMode", // Name of the slice
  initialState: {
    themeMode: "dark" // Initial state for theme mode, default is "dark"
  },
  reducers: {
    // Reducer to set the theme mode
    setThemeMode: (state, action) => {
      // Update the themeMode state with the payload (new theme mode)
      state.themeMode = action.payload;
    }
  }
});

// Export the action creator for setting the theme mode
export const {
  setThemeMode
} = themeModeSlice.actions;

// Export the themeModeSlice reducer
export default themeModeSlice.reducer;
