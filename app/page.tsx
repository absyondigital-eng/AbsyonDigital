import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { NetworkConstellation, NetworkDivider } from "@/components/NetworkNodes";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

const steps = [
  {
    index: "01",
    title: "Discover",
    body: "We learn the business: what customers actually do, where time gets wasted, and what \"done\" needs to look like.",
  },
  {
    index: "02",
    title: "Design & build",
    body: "Design and engineering happen together, not in sequence, so the build stays true to the design and the design stays buildable.",
  },
  {
    index: "03",
    title: "Ship & support",
    body: "We launch, then stay on. Automations get tuned, sites get updated, and the AI layer keeps learning from real use.",
  },
];

const featured = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border-hairline px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                AI-forward digital studio
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-text-primary md:text-7xl">
                We build <span className="text-accent glow-text">what&apos;s next.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-[1.7] text-text-muted md:text-xl">
                Websites, apps, and AI agents that actually ship. We&apos;re the
                team that gets automation, chat, and voice AI into the hands
                of real businesses, then builds the site and software around
                it.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
                <Button href="/portfolio" variant="secondary">
                  See our work
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto aspect-square w-full max-w-md">
            <NetworkConstellation className="h-full w-full" />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <NetworkDivider className="h-6 w-full" />
      </div>

      {/* 01 Services */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              index="01"
              label="Services"
              title={
                <>
                  One team.
                  <br />
                  Every layer.
                </>
              }
              description="AI and automation are the differentiator. Web, app, and brand work are how it gets into customers' hands."
            />
            <Reveal delay={0.1}>
              <Link
                href="/services"
                className="hidden shrink-0 text-sm font-medium text-text-primary transition-colors duration-300 hover:text-accent md:inline-flex md:items-center md:gap-2"
              >
                View all services
                <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const isLast = i === services.length - 1;
              return (
                <RevealItem
                  key={service.slug}
                  className={isLast ? "sm:col-span-2 lg:col-span-3" : ""}
                >
                  <div
                    className={`group flex h-full flex-col gap-3 bg-bg p-8 transition-colors duration-300 hover:bg-bg-raised ${
                      isLast ? "lg:flex-row lg:items-baseline lg:gap-8" : ""
                    }`}
                  >
                    <div
                      className={`flex items-baseline gap-4 ${isLast ? "lg:shrink-0" : ""}`}
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                        {service.index}
                      </span>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-text-primary">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-sm leading-[1.65] text-text-muted">
                      {service.summary}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8 md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent"
            >
              View all services <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 02 Work */}
      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              index="02"
              label="Work"
              title={
                <>
                  Real businesses.
                  <br />
                  Shipped work.
                </>
              }
              description="No concept pieces. Every project below is live and in use, taking real orders from real customers."
            />
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="hidden shrink-0 text-sm font-medium text-text-primary transition-colors duration-300 hover:text-accent md:inline-flex md:items-center md:gap-2"
              >
                View full portfolio
                <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8 md:hidden">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent"
            >
              View full portfolio <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 Approach */}
      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            index="03"
            label="Approach"
            title="How we work"
            description="Three straightforward stages. No agency theatre in between."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <RevealItem key={step.index}>
                <div className="border-t border-border-hairline pt-6">
                  <span className="font-mono text-sm text-accent">{step.index}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.01em] text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-text-muted">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 04 Contact CTA */}
      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-border-hairline bg-bg-raised px-8 py-16 text-center md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(30,163,253,0.16), transparent 70%)",
              }}
            />
            <div className="relative">
              <span className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span className="text-text-muted">04</span>
                <span>Start</span>
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-5xl">
                Got something to build?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-[1.7] text-text-muted">
                Tell us what you&apos;re working with. We&apos;ll tell you exactly
                what we&apos;d build and why.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
                <Button href="mailto:info@absyondigital.com" variant="secondary">
                  info@absyondigital.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
