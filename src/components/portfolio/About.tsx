import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Award, Coffee, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "4+", label: "years_experience" },
  { icon: Rocket, value: "20+", label: "projects_shipped" },
  { icon: Award, value: "5", label: "companies" },
  { icon: Coffee, value: "99%", label: "uptime_avg" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container-tight">
        <SectionHeading
          number="01. about"
          title={<>Engineer by craft, <span className="text-primary">problem-solver by nature.</span></>}
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
            <p>
              I'm <span className="text-foreground font-medium">Forsal Ferdaousse</span>, a Full Stack Developer based in Casablanca with <span className="text-foreground font-medium"> over 4 years of hands-on experience </span>turning complex business requirements into clean, maintainable software.
            </p>
            <p>
              What drives me is the moment a system finally clicks when an API runs ten times faster, when a dashboard saves a team hours every week, or when a feature ships exactly the way users needed it. I care about <span className="text-foreground font-medium"> code quality, security, and the small details </span> most people overlook.
            </p>
            <p>
              I've worked across SaaS dealerships, e-commerce platforms, and digital agencies wearing multiple hats from backend architecture and authentication systems (JWT, RBAC) to pixel-perfect React frontends and SEO-driven performance tuning.
            </p>
            <p>
              If you're looking for a developer who's <span className="text-foreground font-medium"> reliable, autonomous, and obsessed with shipping things that actually work </span> let's talk.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="glow-card border-border/60 rounded-xl bg-border hover:bg-gradient-primary p-px h-full">
                <CardContent className="p-5 bg-background rounded-xl">
                  <s.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-display text-3xl font-bold text-gradient-primary">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </div>

        <Separator className="my-6 bg-border/60" />

        <div>
          <p className="font-mono text-xs text-primary mb-3"> <span className="text-muted-foreground"> // </span> what I bring</p>
          <ul className="grid sm:grid-cols-3 gap-y-2 gap-x-6 text-sm">
            {[
              "End-to-end ownership",
              "API-first thinking",
              "Performance optimization",
              "Clean, documented code",
              "Agile collaboration",
              "Independent remote work",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary font-mono">▸</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
