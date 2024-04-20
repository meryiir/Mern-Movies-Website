// Define UI configurations for styling and sizes
const uiConfigs = {
    // Style configurations
    style: {
      // Background image gradient configurations
      gradientBgImage: {
        // Dark mode gradient background image
        dark: {
          backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))" // Dark mode gradient
        },
        // Light mode gradient background image
        light: {
          backgroundImage: "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))" // Light mode gradient
        }
      },
      // Horizontal gradient background image configurations
      horizontalGradientBgImage: {
        // Dark mode horizontal gradient background image
        dark: {
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))" // Dark mode horizontal gradient
        },
        // Light mode horizontal gradient background image
        light: {
          backgroundImage: "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))" // Light mode horizontal gradient
        }
      },
      // Typography lines configuration function
      typoLines: (lines, textAlign) => ({
        // Set text alignment (justify by default)
        textAlign: textAlign || "justify",
        // Show ellipsis (...) for overflowed text
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lines // Limit number of lines
      }),
      // Main content container configuration
      mainContent: {
        maxWidth: "1366px", // Maximum width for main content
        margin: "auto", // Center align content
        padding: 2 // Padding around main content
      },
      // Background image configuration function
      backgroundImage: (imgPath) => ({
        // Set background image properties
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "darkgrey", // Fallback background color
        backgroundImage: `url(${imgPath})` // Set background image from the provided path
      })
    },
    // Size configurations
    size: {
      sidebarWith: "300px", // Width of the sidebar
      contentMaxWidth: "1366px" // Maximum width for content
    }
  };
  
  // Export the uiConfigs object
  export default uiConfigs;
  