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

function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <CursorGlow />
      <div className="mx-auto max-w-[1500px] lg:flex lg:items-start lg:gap-8 xl:gap-16">
        <Sidebar />
        <main className="px-6 py-16 lg:flex-1 lg:py-24 lg:pr-12 xl:pr-20 max-w-3xl">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;