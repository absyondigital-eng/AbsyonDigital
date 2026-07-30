"use client";

import { motion } from "framer-motion";

type Point = { x: number; y: number };

const EASE = [0.4, 0, 0.2, 1] as const;

const HERO_NODES: Point[] = [
  { x: 200, y: 46 }, // top
  { x: 336, y: 138 }, // upper right
  { x: 288, y: 320 }, // lower right
  { x: 112, y: 320 }, // lower left
  { x: 64, y: 138 }, // upper left
];

const HERO_RING_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
];

const HERO_STAR_EDGES: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 1],
  [1, 3],
  [3, 0],
];

const PULSE_EDGES: [number, number][] = [
  [0, 2],
  [3, 0],
];

/**
 * The signature motif: a constellation of connected nodes echoing the
 * logo's network mark. Contained and restrained by design — used once
 * per view (hero) or as a slim section-divider, never as a backdrop.
 */
export function NetworkConstellation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Absyon Digital network mark animation"
    >
      <defs>
        <filter id="node-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.circle
        cx="200"
        cy="200"
        r="176"
        fill="none"
        stroke="var(--accent-deep)"
        strokeOpacity="0.25"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      />

      {HERO_STAR_EDGES.map(([a, b], i) => (
        <motion.line
          key={`star-${a}-${b}`}
          x1={HERO_NODES[a].x}
          y1={HERO_NODES[a].y}
          x2={HERO_NODES[b].x}
          y2={HERO_NODES[b].y}
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.08 }}
        />
      ))}

      {HERO_RING_EDGES.map(([a, b], i) => (
        <motion.line
          key={`ring-${a}-${b}`}
          x1={HERO_NODES[a].x}
          y1={HERO_NODES[a].y}
          x2={HERO_NODES[b].x}
          y2={HERO_NODES[b].y}
          stroke="var(--accent-deep)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.08 }}
        />
      ))}

      {PULSE_EDGES.map(([a, b], i) => (
        <circle key={`pulse-${a}-${b}`} r="3" fill="var(--accent)" filter="url(#node-glow)">
          <animateMotion
            dur={`${3.5 + i}s`}
            repeatCount="indefinite"
            begin={`${1.6 + i * 1.2}s`}
            path={`M${HERO_NODES[a].x},${HERO_NODES[a].y} L${HERO_NODES[b].x},${HERO_NODES[b].y}`}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.85;1"
            dur={`${3.5 + i}s`}
            repeatCount="indefinite"
            begin={`${1.6 + i * 1.2}s`}
          />
        </circle>
      ))}

      {HERO_NODES.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r="7"
          fill="var(--accent)"
          filter="url(#node-glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.15, 1, 1.06, 1],
            opacity: 1,
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.35, 0.5, 0.75, 1],
            ease: EASE,
            delay: 0.5 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 3 + i * 0.4,
          }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
    </svg>
  );
}

const DIVIDER_NODES = [40, 160, 280, 400];

/**
 * A slim horizontal divider variant of the network motif, used between
 * numbered sections instead of a plain hairline rule.
 */
export function NetworkDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 24"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.line
        x1="0"
        y1="12"
        x2="440"
        y2="12"
        stroke="var(--border-hairline)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      {DIVIDER_NODES.map((x, i) => (
        <motion.circle
          key={x}
          cx={x}
          cy="12"
          r="2.5"
          fill="var(--accent)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0.7, 1], scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.15, ease: EASE }}
        />
      ))}
    </svg>
  );
}
