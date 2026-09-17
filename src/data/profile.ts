// Placeholder content. Replace each "coming soon" entry with real details.

export const profile = {
  name: "Tudor Sendrescu",
  title: "Cybersecurity & Software Development",
  tagline:
    "I build and secure software — bridging development skills with a growing focus on cybersecurity.",
  email: "vladsitudor@gmail.com",
  resumeUrl: "", // add the hosted PDF path/URL here once ready, e.g. "/resume.pdf"
  social: [
    { label: "GitHub", href: "https://github.com/tudorsendrescu", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tudor-gabriel-șendrescu-ab0021389/", icon: "linkedin" },
    { label: "Email", href: "mailto:vladsitudor@gmail.com", icon: "mail" },
  ],
};

// Toggle this to show/hide the Projects section site-wide once there's real
// work to display. The section, its nav link, and its data stay intact.
export const showProjects = false;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  ...(showProjects ? [{ id: "projects", label: "Projects" }] : []),
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Hi there! I'm Tudor, and I'm drawn to the space where building software and breaking it meet. I'm a second-year Automatică și Calculatoare (AIASI) student at Universitatea Politehnica din București, and I care about writing clean, full-stack software while increasingly pulling that focus toward security — understanding how systems fail is what makes me a better engineer.",
    "I hold the HTB Certified Junior Cybersecurity Associate (CJCA) certification from Hack The Box, a fully hands-on exam with no multiple choice: real penetration testing against an enterprise-style network, SIEM-assisted log analysis in Elastic, and a commercial-grade report at the end. Day to day, that means working with tools like Nmap, Wireshark, and the ELK stack, and I keep building on it through labs and CTFs. My development background feeds directly into this: reading and reasoning about code at an engineering level makes me particularly effective at white-box testing, on top of the black-box and grey-box work most security testing involves.",
    "On the development side, I try to keep that same full-stack range — this site is my own build, and I got hands-on backend and frontend experience volunteering with the IT department of LSAC Bucharest during university.",
    "Away from the screen, I train martial arts (currently Iaido), play piano, draw, and read whenever I get the chance.",
  ],
  hobbies: ["Martial Arts (Currently Iaido)", "Piano", "Drawing", "Reading"],
};

export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer, IT Department",
    company: "LSAC Bucharest",
    companyUrl: "https://lsacbucuresti.ro",
    period: "Oct 2025 — Jun 2026",
    summary:
      "Contributed across the stack on the department's internal meeting-scheduling platform (Node.js, Prisma, React), owning features end to end. Designed a decoupled, auditable approval system to replace a hardcoded permission flag, and diagnosed and fixed a fully disconnected meeting-creation feature.",
    highlights: [
      "Designed and shipped a decoupled approval system for meetings with 15+ invitees, replacing a hardcoded boolean flag with a generic, auditable ApprovalRequest table — weighing a database-backed queue against an in-memory/Redis approach and choosing the former for reliability, history, and extensibility.",
      "Built the approval API (role-gated, Zod-validated list/resolve endpoints) and integrated it into the invite flow, so requests above the threshold return HTTP 202 and resolve through a generic action dispatcher — extensible to new approval types without touching the schema.",
      "Diagnosed and fixed a fully disconnected meeting-creation feature end to end: mismatched API routes and field names between frontend and backend, a missing database column, and invite selections being silently dropped — replacing a silent failure with real error messages in the UI.",
      "Identified and documented a seeder bug blocking a required permission for new project setups, unblocking future contributors.",
    ],
    tags: ["TypeScript", "Node.js", "Prisma", "MySQL", "React", "REST APIs", "System Design"],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export const education: EducationEntry[] = [
  {
    degree: "B.Eng. in Automatică și Calculatoare — AIASI specialization",
    institution: "Universitatea Politehnica din București (UNSTPB)",
    period: "Oct 2025 — Present",
    details:
      "Completed my first year with a 9.42/10 GPA, earning a merit-based monthly stipend from the university for the result. Currently in my second year.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: { cybersecurity: SkillGroup[]; development: SkillGroup[] } = {
  cybersecurity: [
    {
      category: "Security Fundamentals",
      skills: [
        "Penetration Testing",
        "White/Grey/Black-Box Testing",
        "Vulnerability Assessment",
        "Network Traffic Analysis",
        "Windows & Linux Privilege Escalation",
        "Web App Security",
        "SIEM-Assisted Log Analysis",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Nmap", "Wireshark", "ELK / Elastic (SIEM)", "Linux", "Hack The Box"],
    },
  ],
  development: [
    {
      category: "Languages",
      skills: ["C", "C++", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "NestJS", "GraphQL", "Prisma", "PostgreSQL"],
    },
  ],
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  status: "planned" | "in-progress" | "completed";
  credentialId?: string;
  href?: string;
  pdfHref?: string;
};

export const certifications: Certification[] = [
  {
    name: "HTB Certified Junior Cybersecurity Associate (CJCA)",
    issuer: "Hack The Box",
    date: "16 Sep 2026",
    status: "completed",
    credentialId: "HTBCERT-77C3CFF375",
    href: "https://profile.hackthebox.com/profile/019f3b33-79d3-73e2-b2ee-1a9fbdea941b",
    pdfHref: "/certificates/htb-cjca-certificate.pdf",
  },
  {
    name: "Certificate in Advanced English (CAE) — C2",
    issuer: "Cambridge University Press & Assessment",
    date: "14 May 2024",
    status: "completed",
    credentialId: "C6296037",
    href: "https://cambridgeenglish.org/verifiers",
    pdfHref: "/certificates/cambridge-cae-certificate.pdf",
  },
];

export type ProjectCategory = "cybersecurity" | "development";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  href?: string;
  repoHref?: string;
};

export const projects: Project[] = [
  {
    title: "Project name — coming soon",
    description: "Content coming soon.",
    tags: ["Tag"],
    category: "cybersecurity",
  },
  {
    title: "Project name — coming soon",
    description: "Content coming soon.",
    tags: ["Tag"],
    category: "development",
  },
];
