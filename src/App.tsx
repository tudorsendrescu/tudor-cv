import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { showProjects } from "./data/profile";

function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <CursorGlow />
      <div className="mx-auto max-w-[1600px] lg:flex lg:justify-center lg:items-start lg:gap-16 xl:gap-24 lg:px-12">
        <Sidebar />
        <main className="px-6 py-16 lg:py-24 w-full max-w-3xl lg:max-w-2xl xl:max-w-3xl">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Certifications />
          {showProjects && <Projects />}
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;