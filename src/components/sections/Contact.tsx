import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 pb-32">
      <Reveal>
        <SectionHeading index="07" title="Contact" />
        <div className="max-w-lg">
          <p className="text-sm leading-relaxed">
            I'm currently exploring opportunities in cybersecurity. Whether
            you have a question, an opening, or just want to connect, my
            inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded border border-accent/40 text-accent font-mono text-sm hover:bg-accent-dim transition-colors focus-accent"
          >
            <Mail size={16} />
            Say hello
          </a>
        </div>
      </Reveal>
    </section>
  );
}
