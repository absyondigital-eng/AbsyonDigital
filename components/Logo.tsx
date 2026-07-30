import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Absyon Digital home"
    >
      <Image
        src="/logo/absyon-icon.png"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
        priority
      />
      <span className="font-display text-lg font-semibold tracking-[-0.01em] text-text-primary">
        Absyon<span className="text-text-muted"> Digital</span>
      </span>
    </Link>
  );
}
