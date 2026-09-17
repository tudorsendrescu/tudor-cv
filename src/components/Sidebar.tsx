import { Mail, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-navy/95 backdrop-blur border-b border-white/10">
        <a href="#about" className="font-mono text-accent font-semibold">
          {profile.name}
        </a>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          className="text-slate-light p-1 focus-accent"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden fixed inset-0 top-[65px] z-30 bg-navy/98 backdrop-blur px-6 py-8 overflow-y-auto">
          <ul className="flex flex-col gap-6 font-mono text-lg">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-slate-light hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 mt-10">
            {profile.social.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-slate hover:text-accent transition-colors"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </nav>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:w-[320px] lg:shrink-0 pl-6 lg:pl-12 xl:pl-16 py-24">
        <div>
          <a href="#about" className="inline-block">
            <h1 className="text-4xl font-bold text-slate-lightest tracking-tight">
              {profile.name}
            </h1>
          </a>
          <h2 className="mt-3 text-lg font-medium text-slate-light">
            {profile.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            {profile.tagline}
          </p>

          <nav className="mt-16">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className="group flex items-center gap-4 focus-accent"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-16 bg-accent"
                            : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-light"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                          isActive
                            ? "text-slate-lightest"
                            : "text-slate group-hover:text-slate-light"
                        }`}
                      >
                        {link.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 rounded border border-accent/40 text-accent text-xs font-mono uppercase tracking-widest hover:bg-accent-dim transition-colors focus-accent"
            >
              <Download size={14} />
              Résumé (PDF)
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 rounded border border-dashed border-white/15 text-slate text-xs font-mono uppercase tracking-widest">
              <Download size={14} />
              Résumé — coming soon
            </div>
          )}

          <div className="flex gap-5">
            {profile.social.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-slate hover:text-accent hover:-translate-y-1 transition-all focus-accent"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
