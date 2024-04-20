import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing user-related state
export const userSlice = createSlice({
  name: "User", // Name of the slice
  initialState: {
    user: null, // Initial state for user data
    listFavorites: [] // Initial state for user's list of favorites
  },
  reducers: {
    // Reducer to set user data
    setUser: (state, action) => {
      // If payload is null (user logged out), remove token from localStorage
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        // If payload has a token, store it in localStorage
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }

      // Update user state with the payload
      state.user = action.payload;
    },

    // Reducer to set the user's list of favorites
    setListFavorites: (state, action) => {
      // Update listFavorites state with the payload (list of favorites)
      state.listFavorites = action.payload;
    },

    // Reducer to remove a favorite from the list
    removeFavorite: (state, action) => {
      // Extract the mediaId from the action payload
      const { mediaId } = action.payload;
      // Filter out the removed favorite from the listFavorites array
      state.listFavorites = [...state.listFavorites].filter(e => e.mediaId.toString() !== mediaId.toString());
    },

    // Reducer to add a new favorite to the list
    addFavorite: (state, action) => {
      // Add the new favorite (action payload) to the beginning of the listFavorites array
      state.listFavorites = [action.payload, ...state.listFavorites];
    }
  }
});

// Export action creators
export const {
  setUser, // Action to set user data
  setListFavorites, // Action to set the list of favorites
  addFavorite, // Action to add a new favorite
  removeFavorite // Action to remove a favorite
} = userSlice.actions;

// Export the userSlice reducer
export default userSlice.reducer;
