import { assests, social_media } from "@/assests/assests";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div id="hero">
      <div id="hero_1">
        <h1 className="highlight">
          {" "}
          <span class="typed-text">Roopesh Kumar Jonnakuti</span>
        </h1>
        <p>
          Crafting innovative solutions through full-stack development, driven
          by curiosity and a passion for continuous growth
        </p>
        <div className="cta">
          <button>contact me</button>
          <button>resume</button>
        </div>
        <div id="bio_2">
          <div className="cta">
            {social_media.map((ele, idx) => (
              <button key={idx}>
                <a href="">
                  {" "}
                  <Image src={ele} alt="media" />{" "}
                </a>
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
