import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";

// Styles consolidated at the top
const styles = {
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    backgroundColor: "var(--background-color)",
    maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
  },
  background: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  logoTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
    marginBottom: "40px",
  },
  logoImage: {
    height: "100px",
    width: "auto",
  },
  title: {
    fontSize: "1.6rem",
    color: "var(--primary-color)",
    margin: "0",
    textAlign: "center",
  },
  parallelogramWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    marginBottom: "0px", // Space between the two parallelograms
  },
  parallelogramContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "left",
    transform: "skew(20deg)",
    padding: "0px",
  },
};

function About() {
  return (
    <div style={styles.centerContainer}>
      <div style={styles.background}>
        {/* Flex container for logo and title */}
        <div style={styles.logoTitleContainer}>
          <div>
            <img src="./images/LOClogoBlackCircle.png" alt="Logo" style={styles.logoImage} />
          </div>
          <h1 style={styles.title}>About the Name and Logo</h1>
        </div>

        {/* First Parallelogram */}
        <div style={styles.parallelogramWrapper}>
          <Parallelogram
            width="300px" // Overlap the screen edges
            height="300px" // Adjust height as needed
            color="var(--secondary-color)"
            top="0vh"
            left="0vw" // Shift left to overlap the screen
            zIndex="-2"
          >
            <div style={styles.parallelogramContent}>
              <p>
                The city of Alvin is known for its Southern Oak Trees. The
                city's official logo once highlighted Alvin's first meeting
                center, the Oak Tree in National Oak Park.
              </p>
            </div>
          </Parallelogram>
        </div>

        {/* Second Parallelogram */}
        <div style={styles.parallelogramWrapper}>
          <Parallelogram
            width="500px" // Overlap the screen edges
            height="420px" // Adjust height as needed
            top="-3vh"
            left="-20vw"
            backImage="url('/images/Kintsugi.png')"
            zIndex="2"
          >
            <div style={{ ...styles.parallelogramContent }}>
              <h2>Kintsugi means golden repair</h2>
              <br />
              <p>
                It is a Japanese art form of decorating repair seams of broken
                pottery with a precious metal, making the repaired form more
                valuable than the unbroken form. <br />
                <br />
                The Christ-follower knows this "golden repair," as well, that
                the Holy Spirit can give to a broken heart and soul.
              </p>
            </div>
          </Parallelogram>
        </div>
      </div>
    </div>
  );
}

export default About;