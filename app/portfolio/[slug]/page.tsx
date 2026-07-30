import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <section className="px-6 pb-10 pt-20 md:px-8 md:pb-12 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-300 hover:text-accent"
            >
              <span aria-hidden>&larr;</span> All work
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  <span className="text-text-muted">{project.index}</span>
                  <span>{project.category}</span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-6xl">
                  {project.name}
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 text-text-muted">{project.location}</p>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="flex flex-wrap gap-2 md:justify-end">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-hairline px-3 py-1 text-xs text-text-muted"
                >
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="px-6 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border-hairline shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="relative aspect-[16/10] w-full md:aspect-[16/8]">
            <Image
              src={`/images/portfolio/${project.slug}/hero.jpg`}
              alt={`${project.name} website hero`}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </Reveal>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                The case study
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-14">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-text-primary">
                  The brief
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-[1.7] text-text-muted">
                  {project.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-text-primary">
                  The build
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-[1.7] text-text-muted">
                  {project.build}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full md:aspect-[16/9]">
                <Image
                  src={`/images/portfolio/${project.slug}/detail.jpg`}
                  alt={`${project.name} detail`}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-text-primary">
                  The result
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-[1.7] text-text-muted">
                  {project.result}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border-hairline px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Next project
            </span>
            <Link
              href={`/portfolio/${next.slug}`}
              className="mt-2 block font-display text-3xl font-semibold tracking-[-0.02em] text-text-primary transition-colors duration-300 hover:text-accent"
            >
              {next.name}
            </Link>
          </div>
          <Button href="/contact" variant="secondary">
            Start your project
          </Button>
        </div>
      </section>
    </article>
  );
}
