import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const sections = [
  { id: "about", label: "about", num: "01" },
  { id: "skills", label: "skills", num: "02" },
  { id: "experience", label: "experience", num: "03" },
  { id: "projects", label: "projects", num: "04" },
  { id: "education", label: "education", num: "05" },
  { id: "contact", label: "contact", num: "06" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-tight flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            forsal<span className="text-primary">.</span>dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => handleNav(s.id)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-mono transition-colors flex items-center gap-1.5",
                  active === s.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-primary/60 text-xs">{s.num}.</span>
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            variant="outline"
            className="font-mono border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleNav("contact")}
          >
            hire_me()
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-[280px]">
            <div className="mt-10 flex flex-col gap-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNav(s.id)}
                  className="text-left px-3 py-3 rounded-md font-mono hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  <span className="text-primary text-xs">{s.num}.</span>
                  <span>{s.label}</span>
                </button>
              ))}
              <Button
                className="mt-4 font-mono"
                onClick={() => handleNav("contact")}
              >
                hire_me()
              </Button>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
