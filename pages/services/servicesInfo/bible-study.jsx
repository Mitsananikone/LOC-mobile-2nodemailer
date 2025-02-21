import React from "react";
import { useRouter } from "next/router"; // Import useRouter

function BibleStudy() {
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
        <i className="fa-solid fa-book-bible" aria-hidden="true"></i> Bible Study
      </h1>

      {/* Image */}
      <div style={styles.imageContainer}>
        <img
          src="/images/services-bibleStudy.png"
          alt="Bible Study"
          style={styles.serviceImage}
        />
      </div>

      {/* Description */}
      <div style={styles.description}>
        <p>
          Dive deeper into God's Word with our weekly Bible Study sessions. We
          explore the Scriptures together, discussing their meaning and how they
          apply to our lives today. Whether you're a seasoned Bible reader or
          just starting out, you'll find this time enriching and encouraging.
        </p>
        <p>
          Our Bible Study is a safe space to ask questions, share insights, and
          grow in your understanding of the Bible. Join us as we seek to know God
          more through His Word.
        </p>
      </div>

      {/* Back Button */}
      <button style={styles.backButton} onClick={handleBackClick}>
        BACK
      </button>
    </div>
  );
}

export default BibleStudy;