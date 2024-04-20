import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import themeModeSlice from "./features/themeModeSlice";
import userSlice from "./features/userSlice";

// Configure the Redux store
const store = configureStore({
  // Define reducers for different slices of state
  reducer: {
    user: userSlice, // User-related state from userSlice
    themeMode: themeModeSlice, // Theme mode state from themeModeSlice
    authModal: authModalSlice, // Authentication modal state from authModalSlice
    globalLoading: globalLoadingSlice, // Global loading state from globalLoadingSlice
    appState: appStateSlice // App state related to the entire app from appStateSlice
  }
});

// Export the configured Redux store
export default store;
