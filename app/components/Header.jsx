import React from "react";
import { assests } from "../../assests/assests";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
