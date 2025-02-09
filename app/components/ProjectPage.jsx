import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectPage({ project }) {
  //   console.log(project);

  return (
    <div className="full_prj">
      {project ? (
        <>
          <h1>{project.name}</h1>
          {project.img ? (
            <Image src={project.img} alt={project.name} />
          ) : (
            <div className="img img_2">image coming soon</div>
          )}
          <p>{[project.description]}</p>
          <Link href={project.link} target="_blank">
            <button className="btn">source code</button>
          </Link>
        </>
      ) : (
        <h1>loading ...</h1>
      )}
    </div>
  );
}

export default ProjectPage;
