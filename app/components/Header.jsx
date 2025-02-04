"use client";
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //controlling navbar by scrolling
  const controlHeader = () => {
    // Current scroll position
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // If scrolling down, hide the header
      setShowHeader(false);
    } else {
      // If scrolling up, show the header
      setShowHeader(true);
    }
    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  // toggle navbar by hmburger
  function toggleNav() {
    setShowNav((prev) => !prev);
  }

  // showing navbar on up scroll
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", controlHeader);
    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);
  // stop scrolling on hamburger view

  useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showNav]);

  return (
    <>
      {showNav ? <div className="overlay" onClick={toggleNav}></div> : <></>}
      <header
        style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="logo">
          {/* <Image src={assests.logo} alt="logo" /> */}
          <p className="sign">RJ</p>
        </div>

        <nav>
          <ul className={showNav ? "active" : ""}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="contact">contact</button>

        <div className="hamburger" onClick={toggleNav}>
          <LuMenu className="ham" />
        </div>
      </header>
    </>
  );
}

export default Header;
