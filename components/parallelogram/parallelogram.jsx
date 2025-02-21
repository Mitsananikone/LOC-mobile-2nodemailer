import React from "react";
import styles from "./parallelogram.module.css";

const Parallelogram = ({ width, height, color, top, left, children, backImage, zIndex, scale }) => {
  return (
    <div
      className={styles.parallelogram}
      style={{
        width: width || "200px", // Default width
        height: height || "100px", // Default height
        backgroundColor: color,
        top: top || "0", // Default top position
        left: left || "0", // Default left position
        backgroundImage: backImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "0 center", // Shift image to the right by 100px (adjust as needed)
        zIndex: zIndex || 1,
        scale: scale  }}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Parallelogram;


// This is the working copy
// const Parallelogram = ({ width, height, color, top, left, children, backImage }) => {
//   return (
//     <div
//       className={styles.parallelogram}
//       style={{
//         width: width || "200px", // Default width
//         height: height || "100px", // Default height
//         backgroundColor: color,
//         top: top || "0", // Default top position
//         left: left || "0", // Default left position
//         backgroundImage:  backImage,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         zIndex: 1,
//       }}
//     >
//       <div className={styles.content}>{children}</div>
//     </div>
//   );
// };

// export default Parallelogram;
