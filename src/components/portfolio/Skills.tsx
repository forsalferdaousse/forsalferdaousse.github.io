import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/Reveal";

const topSkills = [
  { name: "Laravel / PHP", level: 95 },
  { name: "React.js", level: 90 },
  { name: "REST / JWT", level: 93 },
  { name: "MySQL / SQL", level: 88 },
  { name: "WordPress", level: 92 },
];

const categories = {
  frontend: {
    label: "frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  backend: {
    label: "backend",
    items: ["PHP", "Laravel", "Node.js", "Symfony", "Java / JEE", "REST APIs", "JWT / OAuth", "Microservices"],
  },
  database: {
    label: "database",
    items: ["MySQL", "PostgreSQL", "Oracle", "PL/SQL", "Redis"],
  },
  devops: {
    label: "devops & tools",
    items: ["Git / GitHub", "Docker", "Jenkins", "Postman", "cPanel"],
  },
  cms: {
    label: "cms",
    items: ["WordPress", "WooCommerce", "Elementor", "Divi", "ACF", "WPML", "Rank Math"],
  },
  soft: {
    label: "soft_skills",
    items: ["Agile / Scrum", "Problem Solving", "Clear Communication", "Autonomy", "Code Review"],
  },
};

const delays = ["", "delay-1", "delay-2", "delay-3", "delay-4", "delay-5"];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container-tight">
        <SectionHeading
          number="02. skills"
          title={<>The tools I use to <span className="text-primary">ship great products.</span></>}
        />

        {/* Top skills with progress bars */}
        <div className="skills-top grid grid-cols-5 gap-4 mb-11">
          {topSkills.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-mono text-sm font-semibold text-foreground">{s.name}</span>
                </div>
                <div className="h-[3px] bg-foreground/30 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-violet-400"
                    style={{
                      width: animated ? `${s.level}%` : "0%",
                      transition: `width 1.1s cubic-bezier(.22,1,.36,1) ${i * 120}ms`,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Categorized grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categories).map(([key, val], i) => (

            <Reveal key={key} delay={i * 80}>
              <div className="rounded-xl bg-border hover:bg-gradient-primary p-px h-full">
                <div className="p-6 bg-background transition-colors h-full rounded-xl">
                  <h4 className="font-mono text-xs font-semibold text-primary tracking-widest lowercase mb-4">
                    <span className="opacity-50">#</span> {val.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {val.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[11px] px-2.5 py-1 rounded border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
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