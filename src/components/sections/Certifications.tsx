import { Award, ExternalLink } from "lucide-react";
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

      <ul className="max-w-2xl space-y-4">
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
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <p
                    className={`text-xs ${
                      cert.date.startsWith("Expected") ? "text-slate/70 italic" : "text-slate"
                    }`}
                  >
                    {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs font-mono text-slate/60">{cert.credentialId}</p>
                  )}
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline focus-accent"
                    >
                      View credential <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
