import { createTheme } from "@mui/material/styles"; // Import createTheme function from Material-UI
import { colors } from "@mui/material"; // Import colors from Material-UI

// Define theme modes as constants for easier reference
export const themeModes = {
  dark: "dark", // Dark theme mode
  light: "light" // Light theme mode
};

// Define theme configurations based on the selected mode
const themeConfigs = {
  custom: ({ mode }) => {
    // Define custom palette based on the selected mode
    const customPalette = mode === themeModes.dark ? {
      // Dark mode palette
      primary: {
        main: "#ff0000", // Main color for primary elements
        contrastText: "#ffffff" // Contrast text color for primary elements
      },
      secondary: {
        main: "#f44336", // Main color for secondary elements
        contrastText: "#ffffff" // Contrast text color for secondary elements
      },
      background: {
        default: "#000000", // Default background color
        paper: "#131313" // Background color for paper-like elements
      }
    } : {
      // Light mode palette
      primary: {
        main: "#ff0000" // Main color for primary elements
      },
      secondary: {
        main: "#f44336" // Main color for secondary elements
      },
      background: {
        default: colors.grey["100"], // Default background color using Material-UI's grey palette
      }
    };

    // Create and return the theme with the defined palette and button configuration
    return createTheme({
      palette: {
        mode, // Set the mode (dark or light)
        ...customPalette // Spread the custom palette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true } // Default props for MuiButton to disable elevation
        }
      }
    });
  }
};

// Export the themeConfigs object
export default themeConfigs;
