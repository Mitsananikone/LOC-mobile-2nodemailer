import React from "react";
import styles from "./parallelogramRound.module.css";

const ParallelogramRound = ({ width, height, color, children }) => {
  return (
    <div
      className={styles.parallelogramRound}
      style={{
        "--clip-width": width || "200px",
        "--clip-height": height || "100px",
        backgroundColor: color || "var(--primary-color)",
      }}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ParallelogramRound;
