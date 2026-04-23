import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Award, Languages } from "lucide-react";

const education = [
  {
    degree: "Professional Bachelor's Degree — Full Stack Java JEE",
    school: "Supémir School — IT & Management",
    period: "2025 — 2026",
  },
  {
    degree: "Specialized Technician Diploma — Software Development",
    school: "OFPPT NTIC 2 Sidi Maarouf",
    period: "2019 — 2021",
  },
  {
    degree: "Baccalaureate — Life & Earth Sciences",
    school: "High School Moulay Ismail",
    period: "2018 — 2019",
  },
];

const certifications = ["Claude Code in Action"];
const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Intermediate" },
  { name: "English", level: "Intermediate" },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container-tight">
        <SectionHeading
          number="05. Education & Credentials"
          title={<>Continuously <span className="text-primary">learning & leveling up.</span></>}
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Education timeline */}
          <Reveal className="lg:col-span-2 h-full">
            <div className="rounded-xl bg-border hover:bg-gradient-primary transition-all p-px h-full">
              <div className="p-7 bg-background transition-colors rounded-xl h-full">
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">Education</h3>
                </div>
                <div className="relative space-y-6 pl-6 border-l border-border/60">
                  {education.map((e) => (
                    <div key={e.degree} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                      <p className="font-mono text-xs text-primary">{e.period}</p>
                      <h4 className="font-display font-semibold text-foreground mt-1">{e.degree}</h4>
                      <p className="text-muted-foreground text-sm mt-0.5">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column */}
          <Reveal delay={120} className="space-y-6">
            {/* Certifications */}
            <div className="rounded-xl bg-border hover:bg-gradient-primary transition-all p-px">
              <div className="p-7 bg-background transition-colors rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-2">
                  {certifications.map((c) => (
                    <div
                      key={c}
                      className="w-full py-2 px-3 rounded-md border border-primary/30 bg-primary/5 text-sm text-foreground"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-xl bg-border hover:bg-gradient-primary transition-all p-px">
              <div className="p-7 bg-background transition-colors rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((l, i) => (
                    <div key={l.name}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{l.level}</span>
                      </div>
                      {i < languages.length - 1 && (
                        <div className="mt-3 h-px bg-border/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};