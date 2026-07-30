import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Absyon Digital is a small, AI-forward studio that designs, builds, and ships websites, apps, and AI agents for real businesses.",
};

const principles = [
  {
    index: "01",
    title: "AI is a layer, not a gimmick",
    body: "We don't bolt on a chatbot and call it innovation. Automation and AI agents get built into how the business actually runs, or they don't ship.",
  },
  {
    index: "02",
    title: "Ship over pitch",
    body: "We'd rather show you something live than talk you through a deck. Every case study on this site is a working product, not a concept.",
  },
  {
    index: "03",
    title: "Small businesses, real stakes",
    body: "Most of our clients are independent operators, not enterprises with a marketing budget to burn. A slow site or a missed order costs them real money, so we build like it matters.",
  },
  {
    index: "04",
    title: "One team, start to finish",
    body: "The same people who design the brand build the site, wire the automation, and stay on after launch. No handoffs, no context lost between departments.",
  },
];

const stats = [
  { value: "7+", label: "Live projects shipped" },
  { value: "3", label: "Continents of cuisine served" },
  { value: "1", label: "Custom Android app in production" },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-6xl">
              A small team that ships.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-text-muted">
              Absyon Digital is an AI-forward studio. We design, build, and
              ship websites, apps, and AI-powered tools, and we lead with the
              technology that actually moves a business forward: automation,
              chat agents, and voice agents.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid grid-cols-1 gap-8 rounded-2xl border border-border-hairline p-8 sm:grid-cols-3 md:p-12">
            {stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="font-display text-4xl font-bold tracking-[-0.02em] text-accent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            index="01"
            label="How we think"
            title="What we believe, working"
            description="Four things that shape every project we take on, not just the ones about AI."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border-hairline sm:grid-cols-2">
            {principles.map((p) => (
              <RevealItem key={p.index}>
                <div className="h-full bg-bg p-8 md:p-10">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    {p.index}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.01em] text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-[1.7] text-text-muted">
                    {p.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            index="02"
            label="Who's behind it"
            title="We, not I"
            description="Absyon Digital runs as a small team, not a solo freelancer with a portfolio site. Design, engineering, and AI implementation happen under one roof, so nothing gets lost translating a brief between contractors."
          />

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 border-l border-border-hairline pl-8">
              {["Design", "Engineering", "AI implementation"].map((discipline, i) => (
                <div key={discipline} className="relative">
                  <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-text-muted">
                    0{i + 1}
                  </span>
                  <p className="mt-1 font-display text-xl font-semibold tracking-[-0.01em] text-text-primary">
                    {discipline}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border-hairline px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-5xl">
              Want to work with us?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-[1.7] text-text-muted">
              Tell us what you&apos;re building. We&apos;ll tell you what it
              would take to ship it.
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
