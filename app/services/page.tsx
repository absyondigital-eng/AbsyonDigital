import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, chat and voice agents, web and app development, branding, and menu design, from one studio.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-6xl">
              AI as the differentiator. Everything else, built to carry it.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-text-muted">
              Seven services, one team. Automation and AI agents are what set
              the work apart. Web, app, brand, and menu design are how it
              actually reaches your customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="divide-y divide-border-hairline border-t border-border-hairline" stagger={0.06}>
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-12">
                  <span className="font-mono text-sm text-text-muted">
                    {service.index}
                  </span>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-text-primary md:text-3xl">
                    {service.name}
                  </h2>
                  <p className="max-w-xl text-base leading-[1.7] text-text-muted">
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-5xl">
              Not sure which service you need?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-[1.7] text-text-muted">
              Tell us the problem, not the service. We&apos;ll work out the
              right layer to fix it.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
