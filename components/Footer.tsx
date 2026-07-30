import Link from "next/link";
import { Logo } from "@/components/Logo";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-hairline bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-[1.7] text-text-muted">
              An AI-forward digital studio. We design, build, and ship
              websites, apps, and AI-powered tools for real businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                Site
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-primary transition-colors duration-300 hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                Contact
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:info@absyondigital.com"
                    className="text-sm text-text-primary transition-colors duration-300 hover:text-accent"
                  >
                    info@absyondigital.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border-hairline pt-8 text-xs text-text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Absyon Digital. We build what&apos;s next.</span>
        </div>
      </div>
    </footer>
  );
}
