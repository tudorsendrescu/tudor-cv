import { experience } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="relative border-l border-white/10 max-w-xl">
        {experience.map((entry, i) => (
          <Reveal key={i} delay={i * 80}>
            <li className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-accent mb-1">{entry.period}</p>
              <h3 className="text-slate-lightest font-semibold text-base">
                {entry.role}{" "}
                <span className="text-slate-light font-normal">
                  @ {entry.companyUrl ? (
                    <a href={entry.companyUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}
                </span>
              </h3>
              <p className="mt-2 text-sm italic text-slate/70">{entry.summary}</p>
              {entry.highlights.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {entry.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2 text-sm">
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      <span className={h.startsWith("Content coming soon") ? "italic text-slate/70" : ""}>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {entry.tags.length > 0 && (
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-3 font-mono text-xs text-slate">
                  {entry.tags.map((tag, ti) => (
                    <li key={ti}>{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
