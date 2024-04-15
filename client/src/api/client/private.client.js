// Importing necessary tools for making HTTP requests and handling URL query parameters
import axios from "axios"; // For making HTTP requests
import queryString from "query-string"; // For handling URL query parameters

// Defining the base URL for the Moonflix API
const baseURL = "https://moonflix-api.vercel.app/api/v1/";

// Creating a special version of axios for our Moonflix API requests
const privateClient = axios.create({
  baseURL, // Setting the base URL for our requests
  paramsSerializer: { // Configuring how query parameters should be converted to strings
    encode: params => queryString.stringify(params)
  }
});

// Adding a rule to our requests: include the user's access token for authorization
privateClient.interceptors.request.use(async config => {
  // Modifying the request configuration to include headers
  return {
    ...config, // Keeping the existing configuration
    headers: {
      "Content-Type": "application/json", // Making sure the content is treated as JSON
      "Authorization": `Bearer ${localStorage.getItem("actkn")}` // Including the user's access token from local storage
    }
  };
});

// Adding a rule to our responses: if there's data, only return that data; otherwise, return the whole response
privateClient.interceptors.response.use(
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

// Exporting the privateClient instance to be used in other parts of the application
export default privateClient;

//Role of the file: The private.client.js file typically handles requests to the backend API 
//that require authentication