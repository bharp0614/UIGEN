import Link from "next/link";
import { Code2 } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight"
        >
          <Code2 size={20} className="text-amber-400" />
          UIGen
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/agency-os"
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Launch App
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Code2 size={18} className="text-amber-400" />
              UIGen
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              AI-powered UI generation for agencies and developers. Built by
              Indy CoCreator — Miss Meticulous LLC.
            </p>
          </div>
          <div className="flex gap-14">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2">
                {[
                  { href: "/services", label: "Services" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/agency-os", label: "Agency OS" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-slate-500 text-xs">
          <span>© 2026 Miss Meticulous LLC · Indy CoCreator · Indianapolis, IN</span>
          <span>Digital Ownership for Local Businesses</span>
        </div>
      </div>
    </footer>
  );
}
