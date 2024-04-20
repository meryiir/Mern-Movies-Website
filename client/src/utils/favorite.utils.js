// Define favoriteUtils object with utility functions related to favorites
const favoriteUtils = {
    // Check if a media with a specific mediaId exists in the list of favorites
    check: ({ listFavorites, mediaId }) => {
      // Check if listFavorites exists and is not null or undefined
      // Also check if there is an item in listFavorites with the same mediaId as the given mediaId
      return listFavorites && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined;
    }
  };
  
  // Export the favoriteUtils object
  export default favoriteUtils;
  