import { ExternalLink } from "lucide-react";
import { experience } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="group/list max-w-2xl">
        {experience.map((entry, i) => (
          <Reveal key={i} delay={i * 80}>
            <li className="group-hover/list:opacity-50 hover:opacity-100! transition-opacity duration-300">
              <a
                href={entry.companyUrl}
                target={entry.companyUrl ? "_blank" : undefined}
                rel={entry.companyUrl ? "noreferrer" : undefined}
                className={`group/card relative grid sm:grid-cols-[110px_1fr] gap-1 sm:gap-4 p-4 -mx-4 rounded-lg transition-colors hover:bg-white/5 focus-accent ${
                  entry.companyUrl ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-wide text-slate sm:pt-1">
                  {entry.period}
                </p>
                <div>
                  <h3 className="font-semibold text-slate-lightest group-hover/card:text-accent transition-colors inline-flex items-center gap-1.5">
                    {entry.role} · {entry.company}
                    {entry.companyUrl && (
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover/card:opacity-100 transition-opacity"
                      />
                    )}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      entry.summary.startsWith("Content coming soon")
                        ? "italic text-slate/70"
                        : "text-slate leading-relaxed"
                    }`}
                  >
                    {entry.summary}
                  </p>
                  {entry.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mt-3">
                      {entry.tags.map((tag, ti) => (
                        <li
                          key={ti}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-accent-dim text-accent"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
