import React from "react";

function MeetPerrins() {
  // Define styles
  const styles = {
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "auto", // Allow the container to grow based on content
      backgroundColor: "var(--background-color)",
      padding: "20px",
      overflow: "visible", // Ensure content is visible
      maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
    },
    title: {
      fontSize: "1.5rem", // Adjusted for mobile
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    contentSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px", // Space between portrait and paragraph
      marginBottom: "40px", // Space between sections
    },
    profileImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid var(--secondary-color)",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      maxWidth: "600px", // Limit text width for better readability
      textAlign: "center", // Center-align text
    },
    borderedImage: {
      border: "2px solid #897349",
      borderRadius: "50%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    profileImageSquare: {
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.centerContainer}>
      <div>
        {/* Header */}
        <h1 style={styles.title}>
          <i className="fa-solid fa-user" aria-hidden="true"></i> Meet the Perrins
        </h1>

        {/* Cary Perrin Section */}
        <div style={styles.contentSection}>
          {/* Cary Perrin Portrait */}
          <img
            src="/images/Cperrin.png"
            alt="Cary Perrin"
            style={{ ...styles.profileImage, ...styles.borderedImage }}
          />

          {/* Cary Perrin Description */}
          <p style={styles.description}>
            <b>Cary Perrin</b>, the current President of the Alvin-Manvel Area
            Chamber of Commerce, has a profound dedication to faith and
            community. Cary has pastored and been on staff at churches in
            Missouri, Pearland and Alvin. After experiencing significant
            personal and community tragedies between 2016 and 2018, Cary found
            healing at Heights Baptist Church. Inspired by the support he
            received, he felt called to start Living Oaks Church in southern
            Alvin, TX, to help others find real hope for healing through Jesus.
            Cary's leadership is marked by authenticity, compassion, and a
            commitment to serving those with real hurts.
          </p>
        </div>

        {/* Danielle Perrin Section */}
        <div style={styles.contentSection}>
          {/* Danielle Perrin Portrait */}
          <img
            src="/images/Dperrin.png"
            alt="Danielle Perrin"
            style={{ ...styles.profileImage, ...styles.borderedImage }}
          />

          {/* Danielle Perrin Description */}
          <p style={styles.description}>
            Danielle Perrin, currently a professional trauma counselor for the
            Brazoria County Alliance for Children, brings a deep empathy and
            professional expertise to the church plant. Her personal and
            professional experience equips her to support the development of
            mental and emotional health-focused perspectives to minister to the
            church and community. Danielle's dedication to helping others
            through leadership, discernment, and teaching is integral to the
            mission of Living Oaks Church.
          </p>
        </div>

        {/* Header */}
        <h1 style={styles.title}>
          <i className="fa-solid fa-users"></i> Answering the Call
        </h1>

        {/* Family Section */}
        <div style={styles.contentSection}>
          {/* Family Portrait */}
          <img
            src="/images/Fperrin.png"
            alt="Family Perrin"
            style={{ ...styles.profileImageSquare, ...styles.borderedImage }}
          />

          {/* Family Description */}
          <p style={styles.description}>
            Together, Cary and Danielle are starting Living Oaks Church (LOC) to
            address the spiritual, emotional and practical needs of the
            community. Their heart, "We are real people with real hurts who want
            to help real people with real hurts find real hope in Jesus", and
            their drive to help others "Grow Deep" reflect their commitment to
            creating a supportive and healing church environment. Their
            leadership promises to make a lasting positive impact in Southern
            Alvin as it continues to be a fast growing population in the Greater
            Houston Area.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetPerrins;