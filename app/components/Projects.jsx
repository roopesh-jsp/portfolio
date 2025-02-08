"use client";
import React, { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("top");
  return (
    <div id="projects">
      <h1 className="">projects</h1>
      <div className="prj_cta">
        <div className="prj_opt">
          <input
            type="radio"
            name="filter"
            id="top"
            value="top"
            onChange={(e) => {
              if (e.target.checked) {
                setFilter("top");
              }
            }}
          />
          <label htmlFor="top">top</label>
        </div>
        <div className="prj_opt">
          <input
            type="radio"
            name="filter"
            id="all"
            value="all"
            onChange={(e) => {
              if (e.target.checked) {
                setFilter("all");
              }
            }}
          />
          <label htmlFor="all">all</label>
        </div>
      </div>
      {filter}
    </div>
  );
}

export default Projects;
