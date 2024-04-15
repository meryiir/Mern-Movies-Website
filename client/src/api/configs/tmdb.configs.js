// Define constants for different types of media (movies and TV shows)
const mediaType = {
    movie: "movie", // Key-value pair for movies
    tv: "tv" // Key-value pair for TV shows
  };
  
  // Define constants for different categories of media (popular and top-rated)
  const mediaCategory = {
    popular: "popular", // Key-value pair for popular media
    top_rated: "top_rated" // Key-value pair for top-rated media
  };
  
  // Function to generate the full URL for a backdrop image using the provided image endpoint
  const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;
  
  // Function to generate the full URL for a poster image using the provided image endpoint
  const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;
  
  // Function to generate the full URL for a YouTube video embed using the provided video ID
  const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;
  
  // Object containing all the configurations related to the TMDB API, including media types, categories, and URL generation functions
  const tmdbConfigs = {
    mediaType, // Object containing media types (e.g., movie, tv)
    mediaCategory, // Object containing media categories (e.g., popular, top_rated)
    backdropPath, // Function to generate backdrop image URLs
    posterPath, // Function to generate poster image URLs
    youtubePath // Function to generate YouTube video embed URLs
  };
  
  // Exporting the tmdbConfigs object to make it available for use in other parts of the application
  export default tmdbConfigs;
  
  //Role of the file: tmdbConfigs.js, serves as a configuration file for managing various settings related 
  //to The Movie Database (TMDB) API. It defines constants for different types and categories of media,
  // as well as functions for generating URLs for images and YouTube video embeds. 
  //These configurations are bundled into an object (tmdbConfigs) and exported for easy access
  // and use throughout the application.