import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectsList({ projects }) {
  return (
    <div className="projects">
      {projects.map((prj, idx) => (
        <div className="prj" key={idx}>
          {prj.img ? (
            <Image src={prj.img} alt={prj.name} />
          ) : (
            <div className="img">image comming soon</div>
          )}

          <div className="prj_details">
            <h3>{prj.name}</h3>
            <p>{prj.description}</p>
            <Link href={`/${prj.id}`}>
              <button className="btn">view </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
