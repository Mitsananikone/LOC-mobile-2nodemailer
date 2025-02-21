import React from "react";

function Location() {
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
      marginTop: "10vh",
    },
    title: {
      fontSize: "1.5rem", // Adjusted for mobile
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    imageContainer: {
      width: "100%",
      height: "200px", // Fixed height for the image
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "20px",
    },
    locationImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensure the image covers the rectangle
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left", // Align text to the left
      padding: "0 20px", // Add padding for better readability
      marginBottom: "20px",
      "@media (maxWidth: 768px)": {
        padding: "0 10px", // Adjust padding for mobile
      },
    },
    mapContainer: {
      width: "100%",
      height: "400px",
      borderRadius: "10px",
      overflow: "hidden",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.centerContainer}>
      <div>
        {/* Header */}
        <h1 style={styles.title}>
          <i className="fa-solid fa-map-marker-alt" aria-hidden="true"></i> Location
        </h1>

        {/* Location Image */}
        <div style={styles.imageContainer}>
          <img
            src="/images/location-main.png" // Replace with your image path
            alt="Alvin Community College"
            style={styles.locationImage}
          />
        </div>

        {/* Description */}
        <div style={styles.description}>
          <p>
            <b>Alvin, Texas</b> is a vibrant and growing community located in the heart of Brazoria County. Known for its rich history, friendly residents, and strong sense of community, Alvin is a wonderful place to live, work, and worship.
          </p>
          <p>
            <b>Alvin Community College (ACC)</b> is a cornerstone of the community, offering excellent educational opportunities and serving as a hub for local events and activities. The college is committed to fostering growth and development, making it an ideal location for community gatherings.
          </p>
          <p>
            Hosting church services at ACC's conference room provides a welcoming and accessible space for worship. The modern facilities and central location make it easy for everyone to join us, whether you're a long-time resident or new to the area.
          </p>
        </div>

        {/* Google Maps Embed */}
        <div style={styles.mapContainer}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.356016216234!2d-95.247297!3d29.4302305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640986ff8e5e91b%3A0x95385cde2f2b1ed5!2s3110%20Mustang%20Rd%2C%20Alvin%2C%20TX%2077511!5e0!3m2!1sen!2sus!4v1684783267394!5m2!1sen!2sus"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;