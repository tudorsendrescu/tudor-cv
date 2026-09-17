import { about } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="01" title="About" />
        <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={p.startsWith("Content coming soon") ? "italic text-slate/70" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-light mb-3">
            Interests
          </h3>
          <ul className="flex flex-wrap gap-2">
            {about.interests.map((interest, i) => (
              <li
                key={i}
                className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate italic"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
