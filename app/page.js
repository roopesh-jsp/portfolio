import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
    </>
  );
}
