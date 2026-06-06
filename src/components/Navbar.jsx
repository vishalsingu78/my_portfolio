import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // helper to close menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        Portfolio<span>.</span>
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>Experience</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

        {/* Theme Selector */}
        <li className="theme-select">
          <select
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
              closeMenu(); // close menu on theme change
            }}
          >
            <option value="white-theme">White Theme</option>
            <option value="dark-theme">Dark Theme</option>
          </select>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;