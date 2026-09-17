import { useState } from "react";
import { Folder, ExternalLink, Code2, Lock } from "lucide-react";
import { projects, type ProjectCategory } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { GithubIcon } from "../icons";

const categories: { id: ProjectCategory; label: string; icon: typeof Lock }[] = [
  { id: "cybersecurity", label: "Cybersecurity", icon: Lock },
  { id: "development", label: "Software Developer", icon: Code2 },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("cybersecurity");
  const filtered = projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="06" title="Projects" />
      </Reveal>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.02]">
          {categories.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus-accent ${
                  isActive
                    ? "bg-accent/15 text-accent border border-accent/40"
                    : "text-slate hover:text-slate-light border border-transparent"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
        {filtered.map((project, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="h-full flex flex-col border border-white/10 rounded-lg p-5 hover:border-accent/30 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-4">
                <Folder size={28} className="text-accent" />
                <div className="flex gap-3 text-slate">
                  {project.repoHref && (
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repository"
                      className="hover:text-accent transition-colors"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live link"
                      className="hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-slate-lightest font-semibold mb-2">{project.title}</h3>
              <p
                className={`text-sm flex-1 ${
                  project.description.startsWith("Content coming soon")
                    ? "italic text-slate/70"
                    : "text-slate leading-relaxed"
                }`}
              >
                {project.description}
              </p>
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
        {filtered.length === 0 && (
          <p className="text-sm italic text-slate/60 sm:col-span-2">
            No projects yet in this category — coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
