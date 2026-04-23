import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container-tight relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-7">
          <Reveal>
            <Badge
              variant="outline"
              className="font-mono text-xs border-primary/40 text-primary bg-primary/5 px-3 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              available for new opportunities
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <p className="font-mono text-primary text-sm">
              <span className="text-muted-foreground">$</span> who_am_i
            </p>
            <h1 className="font-display text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mt-2">
              Forsal <span className="text-gradient-primary">Ferdaousse</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="font-display text-2xl sm:text-3xl text-muted-foreground font-medium">
              building scalable web platforms
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-base text-foreground max-w-2xl font-bold leading-relaxed mb-5">
              Full Stack Developer specialized in Laravel, React, and secure REST APIs turning business problems into reliable, production-grade software.
            </p>

            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              4+ years shipping SaaS platforms, dealership systems, and high-traffic e-commerce. I care about clean architecture, secure auth (JWT, RBAC, OAuth), measurable performance gains, and code that other engineers actually enjoy reading.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                className="font-mono shadow-glow hover:shadow-elevated transition-all"
                onClick={() => window.print()}
              >
                <Download className="w-4 h-4" />
                ./download_cv
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono border-primary/40"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-4 h-4" />
                contact_me()
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center gap-5 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Casablanca, Morocco
              </div>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com/in/ferdaousse-forsal"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://forsalferdaousse.github.io"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Terminal card */}
        <Reveal delay={300} className="lg:col-span-5">
          <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-elevated">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary/60 border-b border-border">
              <span className="terminal-dot bg-destructive/70" />
              <span className="terminal-dot bg-warning/70" />
              <span className="terminal-dot bg-primary/70" />
              <span className="font-mono text-xs text-muted-foreground ml-3">~/forsal — zsh</span>
            </div>

            {/* Body */}
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto flex flex-col gap-0.5">
              {/* cat profile.json */}
              <span>
                <span className="text-primary">➜ ~</span>{" "}
                <span className="text-blue-400">cat</span>{" "}
                <span className="text-foreground">profile.json</span>
              </span>

              <span className="text-muted-foreground">{"{"}</span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"name"</span>:{" "}
                <span className="text-primary">"Forsal Ferdaousse"</span>,
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"role"</span>:{" "}
                <span className="text-primary">"Full Stack Developer"</span>,
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"location"</span>:{" "}
                <span className="text-primary">"Casablanca, MA"</span>,
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"stack"</span>: [
                <span className="text-primary">"Laravel"</span>,{" "}
                <span className="text-primary">"React"</span>,{" "}
                <span className="text-primary">"Node"</span>],
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"experience_years"</span>:{" "}
                <span className="text-orange-400">4+ years</span>,
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"focus"</span>:{" "}
                <span className="text-primary">"SaaS · APIs · Performance"</span>,
              </span>
              <span className="text-muted-foreground">
                {"  "}<span className="text-pink-400">"open_to_work"</span>:{" "}
                <span className="text-orange-400">true</span>
              </span>
              <span className="text-muted-foreground">{"}"}</span>

              {/* ./status */}
              <span className="mt-1">
                <span className="text-primary">➜ ~</span>{" "}
                <span className="text-blue-400">./status</span>
              </span>
              <span className="text-muted-foreground/60 italic">
                {"// shipping reliable software since 2021"}
              </span>

              {/* blinking cursor */}
              <span>
                <span className="text-primary">➜ ~</span>{" "}
                <span className="blink text-primary">▌</span>
              </span>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground">
<span className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
  <span className="w-px h-8 bg-gradient-to-b from-transparent to-primary" />
  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
</span>
      </div>
    </section>
  );
};
