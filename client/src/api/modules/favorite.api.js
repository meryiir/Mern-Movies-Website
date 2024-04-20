// This file defines an API for managing user favorites.
// It uses a privateClient for making HTTP requests.

// Define endpoints for user favorite operations
const favoriteEndpoints = {
    // Endpoint to list user favorites
    list: "user/favorites",
    // Endpoint to add a new favorite
    add: "user/favorites",
    // Endpoint to remove a favorite by ID
    remove: ({ favoriteId }) => `user/favorites/${favoriteId}`
  };
  
  // Favorite API object with methods for managing user favorites
  const favoriteApi = {
    // Method to get a list of user favorites
    getList: async () => {
      try {
        // Make a GET request to the 'list' endpoint to get user favorites
        const response = await privateClient.get(favoriteEndpoints.list);
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    },
  
    // Method to add a new favorite
    add: async ({
      mediaId,
      mediaType,
      mediaTitle,
      mediaPoster,
      mediaRate
    }) => {
      try {
        // Make a POST request to the 'add' endpoint with favorite data
        const response = await privateClient.post(
          favoriteEndpoints.add,
          {
            mediaId,
            mediaType,
            mediaTitle,
            mediaPoster,
            mediaRate
          }
        );
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    },
  
    // Method to remove a favorite by ID
    remove: async ({ favoriteId }) => {
      try {
        // Make a DELETE request to the 'remove' endpoint with favorite ID
        const response = await privateClient.delete(favoriteEndpoints.remove({ favoriteId }));
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    }
  };
  
  // Export the favoriteApi object
  export default favoriteApi;
  