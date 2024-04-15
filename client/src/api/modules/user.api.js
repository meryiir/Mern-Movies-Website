// Importing axios instances for making HTTP requests to the backend API
import privateClient from "../client/private.client"; // Client for private endpoints (requires authentication)
import publicClient from "../client/public.client"; // Client for public endpoints (doesn't require authentication)

// Object containing endpoints related to user authentication and management
const userEndpoints = {
  signin: "user/signin", // Endpoint for user signin
  signup: "user/signup", // Endpoint for user signup
  getInfo: "user/info", // Endpoint for getting user information
  passwordUpdate: "user/update-password" // Endpoint for updating user password
};

// Object containing API methods for user authentication and management
const userApi = {
  // Method for user signin
  signin: async ({ username, password }) => {
    try {
      console.log("send request");
      // Sending a POST request to the signin endpoint using the public client
      const response = await publicClient.post(
        userEndpoints.signin, // Using the signin endpoint
        { username, password } // Passing username and password in the request body
      );

      return { response }; // Returning the response
    } catch (err) { 
      console.log("err"); // Logging any errors
      return { err }; // Returning the error
    }
  },
  // Method for user signup
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      // Sending a POST request to the signup endpoint using the public client
      const response = await publicClient.post(
        userEndpoints.signup, // Using the signup endpoint
        { username, password, confirmPassword, displayName } // Passing signup data in the request body
      );

      return { response }; // Returning the response
    } catch (err) { 
      return { err }; // Returning the error
    }
  },
  // Method for getting user information
  getInfo: async () => {
    try {
      // Sending a GET request to the getInfo endpoint using the private client
      const response = await privateClient.get(userEndpoints.getInfo); // Using the getInfo endpoint

      return { response }; // Returning the response
    } catch (err) { 
      return { err }; // Returning the error
    }
  },
  // Method for updating user password
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      // Sending a PUT request to the passwordUpdate endpoint using the private client
      const response = await privateClient.put(
        userEndpoints.passwordUpdate, // Using the passwordUpdate endpoint
        { password, newPassword, confirmNewPassword } // Passing password update data in the request body
      );

      return { response }; // Returning the response
    } catch (err) { 
      return { err }; // Returning the error
    }
  }
};

// Exporting the userApi object to make it available for use in other parts of the application
export default userApi;

//Role of the file : 
//The user.api.js file serves as an interface for handling user-related operations,
// such as signing in, signing up, fetching user information, and updating passwords, 
//in a MERN movies website. 
//It encapsulates the logic for making HTTP requests to the backend API endpoints 
//related to user authentication and management. This file abstracts away the 
//details of HTTP communication and provides simple methods that other parts of 
//the application can use to interact with the backend user-related functionality.