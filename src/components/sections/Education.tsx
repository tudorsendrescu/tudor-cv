import { education } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="03" title="Education" />
      </Reveal>

      <div className="max-w-2xl space-y-8">
        {education.map((entry, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="border border-white/10 rounded-lg p-5 hover:border-accent/30 transition-colors">
              <p className="font-mono text-xs text-accent mb-1">{entry.period}</p>
              <h3 className="text-slate-lightest font-semibold">{entry.degree}</h3>
              <p className="text-slate-light text-sm mt-0.5">{entry.institution}</p>
              <p
                className={`mt-2 text-sm ${
                  entry.details.startsWith("Content coming soon")
                    ? "italic text-slate/70"
                    : "text-slate leading-relaxed"
                }`}
              >
                {entry.details}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
