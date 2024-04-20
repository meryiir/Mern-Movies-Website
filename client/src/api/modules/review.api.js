// This file defines an API for managing reviews.
// It uses a privateClient for making HTTP requests.

// Define endpoints for review operations
const reviewEndpoints = {
    // Endpoint to list all reviews
    list: "reviews",
    // Endpoint to add a new review
    add: "reviews",
    // Endpoint to remove a review by ID
    remove: ({ reviewId }) => `reviews/${reviewId}`
  };
  
  // Review API object with methods for adding, removing, and listing reviews
  const reviewApi = {
    // Method to add a new review
    add: async ({
      mediaId,
      mediaType,
      mediaTitle,
      mediaPoster,
      content
    }) => {
      try {
        // Make a POST request to the 'add' endpoint with review data
        const response = await privateClient.post(
          reviewEndpoints.add,
          {
            mediaId,
            mediaType,
            mediaTitle,
            mediaPoster,
            content
          }
        );
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    },
  
    // Method to remove a review by ID
    remove: async ({ reviewId }) => {
      try {
        // Make a DELETE request to the 'remove' endpoint with review ID
        const response = await privateClient.delete(reviewEndpoints.remove({ reviewId }));
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    },
  
    // Method to get a list of all reviews
    getList: async () => {
      try {
        // Make a GET request to the 'list' endpoint
        const response = await privateClient.get(reviewEndpoints.list);
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    }
  };
  
  // Export the reviewApi object
  export default reviewApi;
  