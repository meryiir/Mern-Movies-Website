// This file defines an API for fetching genres based on media type.
// It uses a publicClient for making HTTP requests.

// Define an endpoint for listing genres based on media type
const genreEndpoints = {
    // Endpoint to list genres for a specific media type
    list: ({ mediaType }) => `${mediaType}/genres`
  };
  
  // Genre API object with a method for fetching genres based on media type
  const genreApi = {
    // Method to fetch a list of genres for a specific media type
    getList: async ({ mediaType }) => {
      try {
        // Make a GET request to the 'list' endpoint with the specified media type
        const response = await publicClient.get(genreEndpoints.list({ mediaType }));
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    }
  };
  
  // Export the genreApi object
  export default genreApi;
  