import { assests, social_media } from "@/assests/assests";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div id="hero">
      <div id="hero_1">
        <h1 className="highlight">
          <span className="typed-text">Roopesh Kumar Jonnakuti</span>
        </h1>
        <p>
          Crafting innovative solutions through full-stack development, driven
          by curiosity and a passion for continuous growth
        </p>
        <div className="cta">
          <Link
            href="mailto:rupzkumar5@gmail.com?subject=Let's%20Connect&body=Hi,%20I'd%20like%20to%20reach%20out%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="email-button">contact me</button>
          </Link>

          <Link href="/resume.pdf" download>
            <button className="download-button">Resume</button>
          </Link>
        </div>
        <div id="bio_2">
          <div className="cta">
            {social_media.map((ele, idx) => (
              <button key={idx}>
                <Link href={ele.link} target="_blank">
                  {" "}
                  <Image src={ele.img} alt="media" />{" "}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div id="hero_2">
        <Image src={assests.hero} alt="roopesh image" />
      </div>
    </div>
  );
}

export default Hero;
