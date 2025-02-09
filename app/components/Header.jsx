"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define a threshold for when to hide/show the header
  const scrollThreshold = 50; // Adjust this value based on how sensitive you want it to be

  const controlHeader = () => {
    // Current scroll position
    const currentScrollY = window.scrollY;

    // Check if scroll has passed the threshold
    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        // If scrolling down and past threshold, hide the header
        setShowHeader(false);
      } else {
        // If scrolling up and past threshold, show the header
        setShowHeader(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  // toggle navbar by hmburger
  function toggleNav() {
    console.log("overlay");
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
      setShowHeader(true);
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showNav]);

  return (
    <>
      {console.log(showNav)}
      {showNav ? <div className="overlay" onClick={toggleNav}></div> : <></>}
      <header
        style={{
          transform:
            showHeader || showNav ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="logo">
          {/* <Image src={assests.logo} alt="logo" /> */}
          <p className="sign">RJ</p>
        </div>

        <nav>
          <ul className={showNav ? "active" : ""}>
            <Link href="/">
              <li onClick={() => setShowNav(false)}>Home</li>
            </Link>
            <Link href="/#bio">
              <li onClick={() => setShowNav(false)}>About</li>
            </Link>
            <Link href="/#projects">
              <li onClick={() => setShowNav(false)}>projects</li>
            </Link>
          </ul>
        </nav>
        <button className="contact">
          <Link href="mailto:rupzkumar5@gmail.com" target="_blank">
            contact
          </Link>
        </button>

        <div className="hamburger" onClick={toggleNav}>
          <LuMenu className="ham" />
        </div>
      </header>
    </>
  );
}

export default Header;
