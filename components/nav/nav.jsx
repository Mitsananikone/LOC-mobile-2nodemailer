import { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize smoothscroll polyfill and set isClient to true
  useEffect(() => {
    smoothscroll.polyfill(); // Initialize smoothscroll polyfill
    setIsClient(true); // Ensure this runs only on the client side
  }, []);

  // Show navbar on touch and hide it after 10 seconds
  const showNavbar = () => {
    setNavbarVisible(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setNavbarVisible(false);
    }, 10000);
    setTimer(newTimer);
  };

  // Add touch event listener to show navbar
  useEffect(() => {
    if (isClient) {
      const handleTouch = () => {
        showNavbar();
      };

      window.addEventListener("touchstart", handleTouch);
      return () => {
        window.removeEventListener("touchstart", handleTouch);
        clearTimeout(timer);
      };
    }
  }, [timer, isClient]);

  // Handle navigation link clicks
  const handleNavClick = (sectionId) => {
    if (isClient) {
      console.log(`Attempting to scroll to section: ${sectionId}`);
      const section = document.getElementById(sectionId);
      if (section) {
        console.log(`Section found: ${sectionId}`);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start", // Aligns the section to the top of the viewport
        });
      } else {
        console.error(`Section not found: ${sectionId}`);
      }
    }
    setMenuOpen(false); // Close the mobile menu
    showNavbar(); // Show the navbar after clicking a link
  };

  return (
    <nav className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden}`}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => handleNavClick("home")}>
        <img src="./images/LOCnavLogo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {[
          { label: "Home", id: "home" },
          { label: "Meet the Perrins", id: "meetPerrins" },
          { label: "Our Mission", id: "mission" },
          { label: "Our Services", id: "services" },
          { label: "Location", id: "location" },
          { label: "Name and Logo Story", id: "about" },
          { label: "Contact Us", id: "contact" },
        ].map(({ label, id }, index) => (
          <li
            key={index}
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
              handleNavClick(id);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;