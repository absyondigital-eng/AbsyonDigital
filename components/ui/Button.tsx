"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const EASE = [0.4, 0, 0.2, 1] as const;

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-[#050505] hover:bg-[#3fb4ff]",
  secondary:
    "border border-white/20 text-text-primary hover:border-accent hover:text-accent",
  ghost: "text-text-muted hover:text-accent",
};

const glow: Record<Variant, string> = {
  primary: "0 0 0 1px rgba(30,163,253,0.3), 0 10px 40px -8px rgba(30,163,253,0.55)",
  secondary: "0 0 0 1px rgba(30,163,253,0.35), 0 8px 32px -10px rgba(30,163,253,0.4)",
  ghost: "none",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { y: -2, boxShadow: glow[variant] },
    whileTap: disabled ? {} : { scale: 0.96, boxShadow: glow[variant] },
    transition: { duration: 0.25, ease: EASE },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
