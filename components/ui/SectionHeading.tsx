import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  index,
  title,
  label,
  description,
  align = "left",
}: {
  index?: string;
  title: ReactNode;
  label: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {index && <span className="text-text-muted">{index}</span>}
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-[1.7] text-text-muted ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
