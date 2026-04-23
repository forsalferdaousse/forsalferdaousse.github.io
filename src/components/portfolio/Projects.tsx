import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "SaaS Dealership Dashboard",
    num: "// 01",
    icon: "{ }",
    description:
      "Real-time lead tracking, content management, and analytics for automotive dealerships. Built from the ground up with a modular API-first architecture.",
    stack: ["Laravel", "React", "JWT", "MySQL", "Redis"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    impact: "~35% less manual ops",
  },
  {
    title: "Secure REST API Platform",
    num: "// 02",
    icon: "⚡",
    description:
      "Production-grade API suite with JWT and OAuth authentication, RBAC permissions, rate limiting, and full Postman documentation for partner integrations.",
    stack: ["Laravel", "JWT", "OAuth", "Postman"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    impact: "zero security incidents",
  },
  {
    title: "High-Performance WooCommerce",
    num: "// 03",
    icon: "🛒",
    description:
      "Custom-themed e-commerce platforms with optimized checkout flows, caching layers, and SEO-ready architecture — delivered for multiple agency clients.",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    impact: "~40% faster page loads",
  },
  {
    title: "RBAC Authentication System",
    num: "// 04",
    icon: "🔐",
    description:
      "Role-based access control framework powering scalable, multi-tenant permissions across an entire SaaS product suite — reusable and audited.",
    stack: ["Laravel", "MySQL", "JWT"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    impact: "5+ modules adopted",
  },
  {
    title: "Legacy Codebase Refactor",
    num: "// 05",
    icon: "↻",
    description:
      "Migrated a tangled procedural PHP codebase into a clean Laravel MVC structure, dramatically improving maintainability, testing, and onboarding speed.",
    stack: ["PHP", "Laravel", "MVC"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    impact: "faster onboarding",
  },
  {
    title: "Freelance WP Maintenance",
    num: "// 06",
    icon: "⚙",
    description:
      "Ongoing remote maintenance, bug fixing, plugin/theme management, and performance tuning for international clients — delivered async with fast turnaround.",
    stack: ["WordPress", "Elementor", "cPanel", "SEO"],
    impactIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    impact: "99%+ uptime delivered",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container-tight">
        <SectionHeading
          number="04. featured work"
          title={<>Selected projects &amp; <span className="text-primary">key achievements.</span></>}
          subtitle="A snapshot of the work I'm most proud of — measured by impact, not lines of code."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="rounded-xl bg-border hover:bg-gradient-primary p-px h-full">
                <div className="p-6 bg-background transition-colors h-full flex flex-col gap-4 group rounded-xl">

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="font-mono text-xs text-muted-foreground">{p.num}</span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2.5 py-1 rounded border border-border/60 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center gap-2 font-mono text-xs text-primary border-t border-border/40 pt-3">
                    {p.impactIcon}
                    <span>impact: <strong className="text-foreground">{p.impact}</strong></span>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};