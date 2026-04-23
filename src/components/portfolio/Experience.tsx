import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Building2 } from "lucide-react";

const experience = [
  {
    company: "V12 Software / Auto Dealers Digital",
    role: "Full Stack Developer",
    period: "Sep 2023 — Jan 2026",
    stack: ["Laravel", "React", "JWT", "OAuth", "PostgreSQL", "Docker"],
    bullets: [
      "Architected and shipped secure REST APIs with Laravel, JWT, and OAuth — powering a multi-tenant dealership SaaS platform serving thousands of daily requests.",
      "Designed and led development of a real-time SaaS dashboard for lead tracking, content management, and analytics — directly enabling sales teams to act on leads within minutes.",
      "Implemented a granular RBAC authentication system supporting custom roles and permissions, hardening access control across the entire platform.",
      "Improved frontend performance and SEO, cutting initial load time by ~40% and significantly boosting organic visibility for client dealerships.",
      "Partnered closely with Product, Design, and DevOps to deliver bi-weekly releases with full test coverage and Postman-documented APIs.",
    ],
  },
  {
    company: "KOIOS Agency",
    role: "Full Stack Developer",
    period: "Sep 2022 — Sep 2023",
    stack: ["Laravel", "React", "Tailwind", "WordPress", "WooCommerce"],
    bullets: [
      "Built bespoke client web applications end-to-end with Laravel, React, and Tailwind — delivering pixel-perfect, responsive UIs from Figma handoff to production.",
      "Customized WordPress & WooCommerce solutions for e-commerce clients, combining custom plugin development with deep theme work.",
      "Drove site performance and SEO improvements — caching, image optimization, lazy loading — measurably increasing Lighthouse scores across client portfolios.",
    ],
  },
  {
    company: "Technopark — Creatikon",
    role: "WordPress Developer",
    period: "May 2022 — Aug 2022",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    bullets: [
      "Built and optimized WooCommerce e-commerce platforms for B2B clients, including checkout flows and payment integrations.",
      "Developed custom themes, plugins, and reusable UI components tailored to client branding.",
      "Tuned database queries and implemented caching strategies, reducing page response times under load.",
    ],
  },
  {
    company: "Group GSTI",
    role: "Full Stack Developer",
    period: "Oct 2021 — May 2022",
    stack: ["Laravel", "PHP", "MySQL", "Oracle", "PL/SQL"],
    bullets: [
      "Engineered backend services in Laravel and PHP for internal business platforms.",
      "Designed normalized relational schemas (MySQL, Oracle) and authored complex SQL / PL/SQL routines.",
      "Profiled and optimized slow queries, materially reducing report generation times.",
    ],
  },
  {
    company: "Business Innovation",
    role: "Full Stack Developer (Intern)",
    period: "Apr 2021 — Jun 2021",
    stack: ["PHP", "Laravel", "JavaScript", "REST APIs"],
    bullets: [
      "Developed dynamic web applications using PHP, Laravel, and vanilla JavaScript.",
      "Integrated third-party REST APIs into interactive frontend components.",
      "Refactored a legacy codebase into a structured MVC architecture, improving maintainability for the wider team.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container-tight">
        <SectionHeading
          number="03. experience"
          title={<>A track record of <span className="text-primary">shipping impact.</span></>}
          subtitle="Five years across SaaS, agencies, and enterprise building products customers actually use every day."
        />

        <Reveal>
          <Accordion
            type="single"
            collapsible
            defaultValue="job-0"
            className="space-y-3"
          >
            {experience.map((job, i) => (
              <AccordionItem
                key={job.company}
                value={`job-${i}`}
                className="border border-border/60 rounded-xl bg-card overflow-hidden hover:bg-gradient-primary transition-colors data-[state=open]:bg-gradient-primary data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline bg-background">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full text-left pr-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg font-semibold">
                        {job.role}{" "}
                        <span className="text-primary">@ {job.company}</span>
                      </div>
                      <div className="font-mono text-xs text-muted-foreground mt-0.5">
                        {job.period}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-background">
                  <div className="pl-0 sm:pl-16 space-y-4">
                    <ul className="space-y-2.5 text-muted-foreground text-[15px] leading-relaxed">
                      {job.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary font-mono shrink-0 mt-1">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.stack.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="font-mono text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
