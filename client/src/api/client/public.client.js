// Importing the axios library for making HTTP requests
import axios from "axios";

// Importing the queryString library for parsing and stringifying URL query parameters
import queryString from "query-string";

// Defining the base URL for the API
const baseURL = "https://moonflix-api.vercel.app/api/v1/";

// Creating a new instance of axios with custom configurations for making requests to the Moonflix API
const publicClient = axios.create({
  baseURL, // Setting the base URL for the requests
  paramsSerializer: { // Configuring the paramsSerializer to stringify query parameters
    encode: params => queryString.stringify(params)
  }
});

// Adding a request interceptor to modify the outgoing request configuration
publicClient.interceptors.request.use(async config => {
  // Modifying the request configuration to include headers
  return {
    ...config, // Keeping the existing configuration
    headers: {
      "Content-Type": "application/json" // Setting the content type of the request to JSON
    }
  };
});

// Adding a response interceptor to handle responses from the API
publicClient.interceptors.response.use(
  (response) => {
    // Checking if the response is successful and contains data
    if (response && response.data) return response.data; // Returning the response data if available
    return response; // Returning the entire response object if data is not available
  }, 
  (err) => {
    // Handling errors by throwing the error response data
    throw err.response.data;
  }
);

// Exporting the publicClient instance to be used in other parts of the application
export default publicClient;

//Role of the file : public.client.js handles requests that don't require authentication.