import { ShieldCheck, Code2 } from "lucide-react";
import { skills } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

function SkillColumn({
  title,
  icon,
  groups,
}: {
  title: string;
  icon: React.ReactNode;
  groups: { category: string; skills: string[] }[];
}) {
  return (
    <div className="border border-white/10 rounded-lg p-6 hover:border-accent/30 transition-colors h-full">
      <div className="flex items-center gap-2 mb-5 text-slate-lightest">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="space-y-5">
        {groups.map((group, i) => (
          <div key={i}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-light mb-2">
              {group.category}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <li
                  key={si}
                  className={`px-2.5 py-1 rounded-md text-xs border ${
                    skill.startsWith("Content coming soon")
                      ? "border-white/10 text-slate/70 italic"
                      : "border-accent/20 text-slate-light"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
      </Reveal>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[240px]">
          <Reveal>
            <SkillColumn
              title="Cybersecurity"
              icon={<ShieldCheck size={18} className="text-accent" />}
              groups={skills.cybersecurity}
            />
          </Reveal>
        </div>
        <div className="flex-1 min-w-[240px]">
          <Reveal delay={100}>
            <SkillColumn
              title="Software Development"
              icon={<Code2 size={18} className="text-accent" />}
              groups={skills.development}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
