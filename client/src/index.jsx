// Import necessary libraries
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import the main App component
import { Provider } from "react-redux"; // Import Provider from react-redux for Redux store integration
import store from './redux/store'; // Import the Redux store

// Import Roboto font styles
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Create a root React render container using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in the Redux Provider
root.render(
  // <React.StrictMode> is commented out
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode> is commented out
);
