import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { GithubIcon, LinkedinIcon } from "../icons";

const secondaryIconMap = { github: GithubIcon, linkedin: LinkedinIcon };

export default function Contact() {
  const secondaryLinks = profile.social.filter(
    (s) => s.icon === "github" || s.icon === "linkedin"
  );

  return (
    <section id="contact" className="scroll-mt-24 py-16 pb-32">
      <Reveal>
        <SectionHeading index="06" title="Contact" />
        <div className="max-w-xl">
          <p className="text-sm leading-relaxed">
            I'm currently exploring opportunities in cybersecurity. Whether
            you have a question, an opening, or just want to connect, my
            inbox is open.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-accent/40 text-accent font-mono text-sm hover:bg-accent-dim transition-colors focus-accent"
            >
              <Mail size={16} />
              Say hello
            </a>
            {secondaryLinks.map((s) => {
              const Icon = secondaryIconMap[s.icon as keyof typeof secondaryIconMap];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/10 text-slate font-mono text-sm hover:border-accent/40 hover:text-accent hover:bg-accent-dim transition-colors focus-accent"
                >
                  <Icon size={16} />
                  {s.label}
                </a>
              );
            })}
          </div>
          <p className="mt-4 font-mono text-sm text-slate">
            <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
              {profile.email}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
