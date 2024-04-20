// Import Material-UI icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

// Main menu items configuration
const main = [
  {
    display: "home", // Display name for the menu item
    path: "/", // Path to navigate to when this item is clicked
    icon: <HomeOutlinedIcon />, // Icon component for the menu item (Home icon)
    state: "home" // State identifier for this menu item
  },
  {
    display: "movies", // Display name for the menu item
    path: "/movie", // Path to navigate to when this item is clicked
    icon: <SlideshowOutlinedIcon />, // Icon component for the menu item (Movies icon)
    state: "movie" // State identifier for this menu item
  },
  {
    display: "tv series", // Display name for the menu item
    path: "/tv", // Path to navigate to when this item is clicked
    icon: <LiveTvOutlinedIcon />, // Icon component for the menu item (TV Series icon)
    state: "tv" // State identifier for this menu item
  },
  {
    display: "search", // Display name for the menu item
    path: "/search", // Path to navigate to when this item is clicked
    icon: <SearchOutlinedIcon />, // Icon component for the menu item (Search icon)
    state: "search" // State identifier for this menu item
  }
];

// User menu items configuration
const user = [
  {
    display: "favorites", // Display name for the menu item
    path: "/favorites", // Path to navigate to when this item is clicked
    icon: <FavoriteBorderOutlinedIcon />, // Icon component for the menu item (Favorites icon)
    state: "favorite" // State identifier for this menu item
  },
  {
    display: "reviews", // Display name for the menu item
    path: "/reviews", // Path to navigate to when this item is clicked
    icon: <RateReviewOutlinedIcon />, // Icon component for the menu item (Reviews icon)
    state: "reviews" // State identifier for this menu item
  },
  {
    display: "password update", // Display name for the menu item
    path: "/password-update", // Path to navigate to when this item is clicked
    icon: <LockResetOutlinedIcon />, // Icon component for the menu item (Password Update icon)
    state: "password.update" // State identifier for this menu item
  }
];

// Combine main and user menu configurations
const menuConfigs = { main, user };

// Export the combined menu configurations
export default menuConfigs;
