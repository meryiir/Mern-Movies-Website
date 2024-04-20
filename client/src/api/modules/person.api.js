// This file defines an API for fetching details and related media for a person.
// It uses a publicClient for making HTTP requests.

// Define endpoints for person details and related media
const personEndpoints = {
    // Endpoint to get details of a person by ID
    detail: ({ personId }) => `person/${personId}`,
    // Endpoint to get media associated with a person by ID
    medias: ({ personId }) => `person/${personId}/medias`
  };
  
  // Person API object with methods for fetching person details and related media
  const personApi = {
    // Method to fetch details of a person by ID
    detail: async ({ personId }) => {
      try {
        // Make a GET request to the 'detail' endpoint with person ID
        const response = await publicClient.get(personEndpoints.detail({ personId }));
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    },
  
    // Method to fetch media associated with a person by ID
    medias: async ({ personId }) => {
      try {
        // Make a GET request to the 'medias' endpoint with person ID
        const response = await publicClient.get(personEndpoints.medias({ personId }));
        // Return the response if successful
        return { response };
      } catch (err) {
        // Return error if request fails
        return { err };
      }
    }
  };
  
  // Export the personApi object
  export default personApi;
  