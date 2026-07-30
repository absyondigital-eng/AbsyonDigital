"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const EASE = [0.4, 0, 0.2, 1] as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <motion.div
          variants={{
            rest: { y: 0, boxShadow: "0 0 0 1px rgba(242,255,255,0.08)" },
            hover: {
              y: -4,
              boxShadow:
                "0 0 0 1px rgba(30,163,253,0.35), 0 20px 60px -16px rgba(30,163,253,0.4)",
            },
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="relative overflow-hidden rounded-2xl bg-bg-raised"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
              transition={{ duration: 0.5, ease: EASE }}
              className="h-full w-full"
            >
              <Image
                src={`/images/portfolio/${project.slug}/hero.jpg`}
                alt={`${project.name} website`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top mix-blend-normal"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              {project.index}
            </div>
          </div>

          <div className="p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {project.category}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.01em] text-text-primary">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-text-muted">
              {project.tagline}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
