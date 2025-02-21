// components/ScreenWidthDisplay.js
import React, { useState, useEffect } from "react";

const ScreenWidthDisplay = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Function to update the screen width
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set the initial screen width
    updateScreenWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: "10px",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        zIndex: 1000, // Ensure it stays on top of other content
      }}
    >
      Screen Width: {screenWidth}px
    </div>
  );
};

export default ScreenWidthDisplay;