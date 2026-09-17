import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Sidebar />
      <main className="lg:ml-[380px] lg:pl-16 xl:pl-24 px-6 lg:pr-24 max-w-3xl">
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
  );
}

export default App;
