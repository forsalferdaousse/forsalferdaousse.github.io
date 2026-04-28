import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const EMAIL = "forsalferdaousse.dev@gmail.com";
const PHONE = "+212 7 08 08 41 89";

const contactLinks = [
  {
    href: `mailto:${EMAIL}`,
    label: "// email",
    val: EMAIL,
    icon: <Mail className="w-4 h-4" />,
  },
  {
    href: `tel:+212708084189`,
    label: "// phone",
    val: PHONE,
    icon: <Phone className="w-4 h-4" />,
  },
  {
    href: "https://linkedin.com/in/ferdaousse-forsal",
    label: "// linkedin",
    val: "/in/ferdaousse-forsal",
    icon: <Linkedin className="w-4 h-4" />,
    external: true,
  },
  {
    href: "https://forsalferdaousse.github.io",
    label: "// github",
    val: "forsalferdaousse.github.io",
    icon: <Github className="w-4 h-4" />,
    external: true,
  },
];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSubmitting(false);

    if (res.ok) {
      form.reset();
      toast.success("Message sent", {
        description: "Thanks — I'll get back to you within 24 hours.",
      });
    } else {
      const { error } = await res.json();
      toast.error("Failed to send", { description: error || "Please try again." });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-tight relative">
        <SectionHeading
          number="06. contact"
          title={<>Let's build something <span className="text-primary">worth shipping.</span></>}
          subtitle="Open to full-time roles and freelance projects worldwide. I usually reply within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm text-muted-foreground border-l-2 border-primary/40 pl-4 bg-primary/5 p-6 rounded-lg">
                <span className="text-primary">→</span> Open to full-time roles and freelance projects remote or Casablanca-based.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/60 bg-secondary hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-muted-foreground mb-0.5">{link.label}</p>
                      <p className="text-sm text-foreground font-mono font-medium group-hover:text-primary truncate transition-colors">
                        {link.val}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-secondary p-5 md:p-10 rounded-lg">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                    name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="your_name"
                    className="bg-background/60 border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                    email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-background/60 border-border focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-xs text-muted-foreground">
                  subject <span className="text-primary">*</span>
                </label>
                <Input
                  id="subject"
                  required
                  placeholder="project, role, or opportunity"
                  className="bg-background/60 border-border focus-visible:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                  message <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="// tell me a bit about what you're working on..."
                  className="bg-background/60 border-border focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full font-mono justify-center shadow-glow"
              >
                {submitting ? "transmitting..." : "send_message()"}
                {!submitting && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </form>
          </Reveal>
        </div>
      </div >
    </section >
  );
};