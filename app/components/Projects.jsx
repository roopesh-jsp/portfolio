"use client";
import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import { all_prj, top_prj } from "@/assests/assests";

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
            checked={filter === "top"}
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
            checked={filter === "all"}
            onChange={(e) => {
              if (e.target.checked) {
                setFilter("all");
              }
            }}
          />
          <label htmlFor="all">all</label>
        </div>
      </div>
      <ProjectsList projects={filter === "all" ? all_prj : top_prj} />
    </div>
  );
}

export default Projects;
