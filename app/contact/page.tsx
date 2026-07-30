import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Absyon Digital. Tell us what you're building, we'll tell you what it takes to ship it.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-5xl">
              Let&apos;s build something.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-[1.7] text-text-muted">
              Tell us what you&apos;re working with: the business, the
              problem, and roughly what you need. We reply to every inquiry
              within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-10">
            <a
              href="mailto:info@absyondigital.com"
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-text-primary transition-colors duration-300 hover:text-accent"
            >
              info@absyondigital.com
            </a>
          </Reveal>

          <Reveal delay={0.28} className="mt-14 border-t border-border-hairline pt-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              What happens next
            </span>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-text-muted">
              <li className="flex gap-3">
                <span className="font-mono text-accent">01</span>
                We read every message and reply ourselves, no auto-responder.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-accent">02</span>
                A short call to understand the business and the brief.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-accent">03</span>
                A clear scope and quote before any work starts.
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-border-hairline bg-bg-raised p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
