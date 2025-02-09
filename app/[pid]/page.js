"use client";
import { all_prj } from "@/assests/assests";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectPage from "../components/ProjectPage";

function page({}) {
  const params = useParams();

  const [currPrj, setCurrPrj] = useState(0);
  useEffect(() => {
    const prj = all_prj.find((p) => p.id == params.pid);
    console.log(prj);

    setCurrPrj(prj);
  }, []);

  return <ProjectPage project={currPrj} />;
}

export default page;
