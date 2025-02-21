import React from "react";
import { useRouter } from "next/router"; // Import useRouter

function YouthGroup() {
  const router = useRouter(); // Initialize the router

  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "var(--background-color)",
      padding: "20px",
      overflow: "visible",
      maxWidth: "100vw",
      marginTop: "8vh",
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    imageContainer: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
    serviceImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left",
      padding: "0 20px",
      "@media (maxWidth: 768px)": {
        padding: "0 10px",
      },
    },
    backButton: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1rem",
      color: "white",
      backgroundColor: "var(--primary-color)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      ":hover": {
        backgroundColor: "var(--secondary-color)",
      },
    },
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    // Navigate to the root with a query parameter
    router.push("/?scrollTo=services");
  };

  return (
    <div style={styles.centerContainer}>
      {/* Header */}
      <h1 style={styles.title}>
        <i className="fa-solid fa-users" aria-hidden="true"></i> Youth Group
      </h1>

      {/* Image */}
      <div style={styles.imageContainer}>
        <img
          src="/images/services-youthGroup.png"
          alt="Youth Group"
          style={styles.serviceImage}
        />
      </div>

      {/* Description */}
      <div style={styles.description}>
        <p>
          Our Youth Group is a vibrant community where teens can grow in their
          faith, build lasting friendships, and have fun! We meet regularly to
          discuss relevant topics, play games, and explore what it means to
          follow Jesus in today's world.
        </p>
        <p>
          Whether you're in middle school or high school, you're welcome here.
          Come join us for a time of connection, learning, and laughter!
        </p>
      </div>

      {/* Back Button */}
      <button style={styles.backButton} onClick={handleBackClick}>
        BACK
      </button>
    </div>
  );
}

export default YouthGroup;