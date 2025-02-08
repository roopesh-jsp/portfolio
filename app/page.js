import Bio from "./components/Bio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Bio />
      <Skills />
      <Projects />
    </main>
  );
}
