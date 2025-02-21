import React, { useState, useEffect } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";

// Custom hook to get screen width
function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial screen width
      setScreenWidth(window.innerWidth);

      // Function to update screen width on resize
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenWidth;
}

function HomePage() {
  const [animateParallelograms, setAnimateParallelograms] = useState(true);
  const [fadeInImages, setFadeInImages] = useState(false);
  const screenWidth = useScreenWidth(); // Get the current screen width

  useEffect(() => {
    setTimeout(() => setFadeInImages(true), 1000);
  }, []);

  // Define keyframes for animations
  const globalStyles = `
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;

  const styles =  {
    homeContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Ensure the container takes up the full viewport height
      maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
      overflow: "auto", // Enable vertical scrolling
      overflowX: "hidden", // Disable horizontal scrolling
    },
    contentContainer: {
      flex: 1, // Allow this container to grow and take up remaining space
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible", // Ensure content is visible
    },
    imageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
      gridAutoRows: "100px", // Reduced height for all rows
      gap: "0px", // Space between grid items
      justifyItems: "center", // Center the grid items horizontally
      alignItems: "center", // Center the grid items vertically
      padding: "0px", // Reduced padding around the grid
      width: "100%", // Ensure the grid takes full width
      height: "50%",
      maxWidth: "300px", // Limit the maximum width of the grid
      margin: "0 auto", // Center the grid container
      backgroundColor: "var(--background-color)", // Optional: Add background color
    },
    resizedImage: {
      width: "100%", // Make images fill their grid cells
      height: "80%", // Maintain aspect ratio
      maxWidth: "60%", // Limit the maximum size of the images
      objectFit: "contain", // Ensure images fit within their container
      borderRadius: "8px",
      backgroundColor: "var(--background-color)",
      transition: "opacity 1.5s ease-in-out",
      opacity: fadeInImages ? 1 : 0,
      margin: "0 auto", // Center images within their grid cells
    },
    parallelogramContent: {
      position: "relative",
      zIndex: 1, // Higher zIndex to place it above
      textAlign: "left",
      transform: "skew(20deg)",
      height: "100%",
      width: "100%",
    },
    parallelogramImage: {
      position: "relative",
      zIndex: -2, // Lower zIndex to place it below
      textAlign: "left",
      transform: "skew(20deg)",
      height: "100%",
      width: "100%",
    },
    title: {
      color: "var(--secondary-color)",
      fontSize: screenWidth < 768 ? "2rem" : "1.6rem", // Adjust font size based on screen width
    },
    separationLine: {
      width: "100%",
      height: "2px",
      background: "linear-gradient(to right, white 33%, rgba(255, 255, 255, 0.5) 33%, rgba(255, 255, 255, 0.5) 100%)",
      marginTop: "40px",
    },
    subtitle: {
      color: "var(--secondary-color)",
    },
    animateLeft: {
      animation: animateParallelograms ? "slideInLeft 1.5s ease-out forwards" : "none",
      opacity: 0, // Initially invisible
      zIndex: 1,
    },
    animateRight: {
      animation: animateParallelograms ? "slideInRight 1.5s ease-out forwards" : "none",
      opacity: 0, // Initially invisible
    },
  };

  return (
    <div style={styles.homeContainer}>
      {/* Inject global styles for keyframes */}
      <style>{globalStyles}</style>

      <div style={styles.contentContainer}>
        <div style={styles.animateLeft}>
          <Parallelogram
            width={screenWidth < 768 ? "90vw" : "100vw"} // Adjust width based on screen width
            height={screenWidth < 768 ? "60vh" : "75vh"} // Adjust height based on screen width
            color="var(--primary-color)"
            top="5vh"
            left="20vw"
            zIndex="1"
            scale="1"
          >
            <div style={styles.parallelogramContent}>
              <h1 style={styles.title}>LIVING</h1>
              <h1 style={styles.title}>OAKS</h1>
              <h1 style={styles.title}>CHURCH</h1>
              <h6>
                <p style={{ color: "white" }}>
                  ...that they may be called oaks of righteousness, the planting of the Lord, that he may be glorified.
                  <br /> - Isaiah 61:3
                </p>
              </h6>
              <div style={styles.separationLine}></div>
              <h4 style={styles.subtitle}>Leading REAL people to find <br /> REAL hope in Jesus.</h4>
            </div>
          </Parallelogram>
        </div>

        <div style={styles.animateRight}>
          <Parallelogram
            width={screenWidth < 768 ? "50vw" : "30vw"} // Adjust width based on screen width
            height={screenWidth < 768 ? "25vh" : "50vh"} // Adjust height based on screen width
            top="18vh"
            left="-30vw"
            backImage="url('/images/LOCoakHomepage.jpg')"
            zIndex="-20"
            scale="1.5"
          >
            <div style={styles.parallelogramImage}></div>
          </Parallelogram>
        </div>
      </div>

      <footer style={styles.imageGrid}>
        {["cred_heights", "cred_GCBA", "cred_SBTC", "cred_NAMB"].map((img, index) => (
          <img
            key={index}
            src={`/images/${img}.png`}
            alt={img}
            style={styles.resizedImage}
          />
        ))}
      </footer>
    </div>
  );
}

export default HomePage;
