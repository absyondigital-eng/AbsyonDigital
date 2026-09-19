import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Seven live projects for real UK businesses: cafés, takeaways, funeral care, bespoke calligraphy, and a custom Android app.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-6xl">
              Seven businesses. Seven live builds.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-text-muted">
              Cafés, takeaways, funeral care, and bespoke calligraphy, across
              the UK. Every project below is shipped and running, not a mockup.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
