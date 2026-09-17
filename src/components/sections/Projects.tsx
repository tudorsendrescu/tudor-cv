import { Folder, ExternalLink } from "lucide-react";
import { projects } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { GithubIcon } from "../icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="06" title="Projects" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
        {projects.map((project, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="h-full flex flex-col border border-white/10 rounded-lg p-5 hover:border-accent/30 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-4">
                <Folder size={28} className="text-accent" />
                <div className="flex gap-3 text-slate">
                  {project.repoHref && (
                    <a href={project.repoHref} target="_blank" rel="noreferrer" aria-label="Repository" className="hover:text-accent transition-colors">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label="Live link" className="hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-slate-lightest font-semibold mb-2">{project.title}</h3>
              <p className="text-sm italic text-slate/70 flex-1">{project.description}</p>
              {project.tags.length > 0 && (
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-xs text-slate">
                  {project.tags.map((tag, ti) => (
                    <li key={ti}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
