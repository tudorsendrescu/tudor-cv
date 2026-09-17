import { Award } from "lucide-react";
import { certifications } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const statusLabel: Record<string, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  completed: "Completed",
};

const statusColor: Record<string, string> = {
  planned: "text-slate border-white/10",
  "in-progress": "text-yellow-400/80 border-yellow-400/20",
  completed: "text-accent border-accent/30",
};

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="05" title="Certifications" />
      </Reveal>

      <ul className="max-w-xl space-y-4">
        {certifications.map((cert, i) => (
          <Reveal key={i} delay={i * 80}>
            <li className="flex items-start gap-4 border border-white/10 rounded-lg p-5 hover:border-accent/30 transition-colors">
              <Award size={20} className="text-accent mt-0.5 shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-slate-lightest font-semibold">{cert.name}</h3>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusColor[cert.status]}`}
                  >
                    {statusLabel[cert.status]}
                  </span>
                </div>
                <p className="text-slate-light text-sm mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-slate/70 mt-1 italic">{cert.date}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
