import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./plan.module.css";

// import "@/styles/globals.css";

function Plan() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <i className="fa-solid fa-clipboard-list" aria-hidden="true"></i> The Plan
        </h1>
      </div>

      {/* Main Content Section */}
      <div className={styles.mainContent}>
        {/* Image on the Left */}
        <div className={styles.imageContainer}>
          <img
            src="/images/acorn.png"
            alt="Plan Image"
            className={styles.leftImage}
          />
        </div>

        {/* Text on the Right */}
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            {[
              {
                number: 1,
                title: "Begin working with Care Team",
                text: "Spend time bonding around the Word, mission, and values. Plan out specific ministries and their approaches.",
              },
              {
                number: 2,
                title: "Practice Services & Promotion",
                text: "Learning how to roll out and take up a worship service in a rented location takes practice. We also need to start spreading the news.",
              },
              {
                number: 3,
                title: "Launch Regular Services",
                text: "Start the church with the Launch Team strategically helping during the first year and more.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.contentRow}>
                <Parallelogram
                  width="60px"
                  height="60px"
                  color="var(--primary-color)"
                >
                  <h1 className={styles.parallelogramNumber}>{item.number}</h1>
                </Parallelogram>
                <div className={styles.textContent}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;