import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export const SectionHeading = ({
  number,
  title,
  subtitle,
  children,
  className,
}: SectionHeadingProps) => {
  return (
    <Reveal className={cn("mb-12 text-left max-w-screen-md", className)}>
      <p className="section-number mb-3"> <span className="text-muted-foreground"> // </span> {number}</p>
      <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl text-base">
          {subtitle}
        </p>
      )}
      {children}
    </Reveal>
  );
};
