import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center font-mono text-muted-foreground gap-2 text-sm text-center sm:text-left">
          <span className="text-primary">&lt;/&gt;</span>
          <span>
            © {new Date().getFullYear()} Forsal Ferdaousse · designed &amp; built in Casablanca ·{" "}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:forsalferdaousse.dev@gmail.com"
            className="text-muted-foreground hover:text-primary bg-secondary/60 p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ferdaousse-forsal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary bg-secondary/60 p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://forsalferdaousse.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary bg-secondary/60 p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};