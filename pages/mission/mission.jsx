import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";

function Mission() {
  const missionData = [
    {
      number: "01",
      title: "Vulnerability: Acknowledging Brokenness",
      points: [
        "LOC acknowledges openly our brokenness because of our sin (Romans 3:10-12 & 7:15-25) and recognizes our need for help.",
        "By being real people with real hurts, we create an environment where authenticity leads to healing through Christ, deepening our faith at the roots.",
        [
          "We hope to do this with an emphasis on mental and emotional health, and helping folks find Christ, the resources they need, and a community of spiritual family to better cope.",
        ],
      ],
    },
    {
      number: "02",
      title: "Engagement: Impacting Our Community & Beyond",
      points: [
        "LOC engages with our community to create positive change, fostering relationships and transcending political and cultural divisions through our focus on Jesus' greatness (Mark 12:14-17 & Ephesians 2:13-22).",
        "Our commitment to making a tangible impact in our community helps us address real hurts and build deeper connections, embodying Christ's teachings.",
        [
          "We plan to do this by partnering with local agencies that are already working to build a better Alvin for everybody and giving them the added impact our church can bring.",
        ],
      ],
    },
    {
      number: "03",
      title: "Pursuit: Bringing People Closer to Christ",
      points: [
        "LOC actively pursues those far from Christ, seeking to bring them closer to Him through acts of love, generosity, justice, and compassion (Isaiah 61:4 & James 2:14-18).",
        "By prioritizing our neighbors' needs and demonstrating Christ's love, we help others begin their healing journey and grow deeper in their faith.",
        [
          "We do this through making disciples intentionally in Connect Groups, worshipping and praying together as a church, along with community and personal outreach.",
        ],
      ],
    },
  ];

  // Define styles
  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "0px",
      backgroundColor: "var(--background-color)",
      maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
    },
    background: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "40px",
    },
    contentRow: {
      display: "flex",
      flexDirection: "column", // Use columns for stacking
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      gap: "0px",
      marginBottom: "40px",
    },
    parallelogramContainer: {
      flex: "0 0 auto",
      marginBottom: "20px", // Add space below the parallelogram
      marginTop: "20px",
    },
    textContainerRight: {
      flex: 1,
      maxWidth: "100%", // Take full width of the screen
      padding: "0 20px", // Add padding for better readability
      "@media (maxWidth: 768px)": {
        padding: "0 10px", // Adjust padding for mobile
      },
    },
    missionSection: {
      position: "relative",
      zIndex: 1,
      textAlign: "center", // Center text inside the parallelogram
      transform: "skew(20deg)",
    },
    missionNumber: {
      color: "var(--foreground-color)",
      fontSize: "2.6rem",
      fontStyle: "normal",
    },
    missionTitle: {
      fontSize: "1.3rem",
      color: "var(--primary-color)",
      marginBottom: "20px",
      textAlign: "center", // Center title text
    },
    missionPoints: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left", // Align points to the left
      "@media (maxWidth: 768px)": {
        textAlign: "left", // Keep text aligned left on mobile
      },
    },
    contentRowSquareLong: {
      display: "flex",
      flexDirection: "column", // Stack vertically by default
      justifyContent: "center", // Center content vertically
      alignItems: "center", // Center content horizontally
      gap: "20px", // Space between image and text
      marginBottom: "40px",
    },
    profileImageSquare: {
      width: "100%",
      maxWidth: "400px", // Default size for desktop
      height: "auto",
      border: "1px solid var(--primary-color)",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      "@media (maxWidth: 768px)": {
        maxWidth: "300px", // Reduce image size for mobile
      },
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left", // Center text
      padding: "0 20px", // Add padding for better readability
      "@media (maxWidth: 768px)": {
        padding: "0 10px", // Adjust padding for mobile
      },
    },
  };

  return (
    <div style={styles.centerContainer}>
      <div style={styles.background}>
        {/* Header */}
        <h1 style={styles.title}>
          <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i> Our Mission
        </h1>

        {/* Mission Sections */}
        {missionData.map((mission, index) => (
          <div key={index} style={styles.contentRow}>
            <div style={styles.parallelogramContainer}>
              <Parallelogram
                width="80px"
                height="80px"
                color="var(--primary-color)" // Ensure color is passed
                top="0vh"
                left="0vw"
              >
                <div style={styles.missionSection}>
                  <h1 style={styles.missionNumber}>{mission.number}</h1>
                </div>
              </Parallelogram>
            </div>
            <div style={styles.textContainerRight}>
              <div>
                <h2 style={styles.missionTitle}>{mission.title}</h2>
                <br />
                <div style={styles.missionPoints}>
                  {mission.points.map((point, i) =>
                    Array.isArray(point) ? (
                      <div key={i}>
                        {point.map((subPoint, j) => (
                          <p key={j} style={{ marginBottom: "10px" }}>
                            {subPoint}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p key={i} style={{ marginBottom: "10px" }}>
                        {point}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Why Alvin Section */}
        <h1 style={styles.title}>
  <i className="fa-solid fa-location-dot" aria-hidden="true"></i> Why Alvin?
</h1>
<div style={styles.contentRowSquareLong}>
  <img
    src="/images/alvinNeighborhood.png"
    alt="Alvin Neighborhood"
    style={styles.profileImageSquare}
  />
  <p style={styles.description}>
    Simply put, the Northern Brazoria County Area is one of the fastest
    growing areas connected to Houston. The Alvin ISD is the 7th fastest
    growing school district in Texas, with a projection to grow by 7000
    students in the next 10 years.
    <br /> <br />
    Alvin is next on TxDOT's plan to expand highway 99, projecting 4000
    new home builds during that time. The fact is, Alvin is going to
    need more Gospel-centered churches.
  </p>
</div>
      </div>
    </div>
  );
}

export default Mission;