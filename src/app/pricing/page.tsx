import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Site Build",
    price: "$300",
    period: "one-time",
    desc: "A production-ready static website for your local service business. Flat rate. No surprises.",
    highlight: false,
    cta: "Get a Site Built",
    href: "/contact",
    features: [
      "5-page Astro static site (Home, Services, About, Contact, Blog)",
      "Mobile-first, 95+ PageSpeed score",
      "LocalBusiness JSON-LD schema",
      "NAP targeting for Indianapolis market",
      "Custom domain connection",
      "Vercel deployment included",
      "config.js token system for easy updates",
      "30-day post-launch support",
    ],
  },
  {
    name: "Agency OS Access",
    price: "$49",
    period: "/ month",
    desc: "The full Agency OS platform — monorepo architecture, UIGen access, and onboarding CLI — for agencies building multiple sites.",
    highlight: true,
    cta: "Start Agency OS",
    href: "/contact",
    features: [
      "Everything in Site Build",
      "UIGen AI component generator",
      "Agency OS monorepo platform",
      "Automated client onboarding CLI",
      "Heartbeat config validation",
      "Unlimited client deployments",
      "Priority Vercel routing setup",
      "Direct Slack access to Brittany",
    ],
  },
  {
    name: "UIGen Tool",
    price: "Free",
    period: "during beta",
    desc: "Generate React components with AI. Export clean JSX. No account required during the beta period.",
    highlight: false,
    cta: "Launch UIGen",
    href: "/agency-os",
    features: [
      "AI chat-driven component generation",
      "Live preview frame",
      "Monaco code editor",
      "ZIP export of JSX + CSS",
      "Unlimited generations in beta",
      "No sign-up required",
    ],
  },
];

const faqs = [
  {
    q: "What happens after the 30-day post-launch period?",
    a: "Your site is yours — hosted on Vercel with no monthly fee required from us. You can manage it independently or reach out for paid update work.",
  },
  {
    q: "Does the $300 include hosting?",
    a: "It includes Vercel deployment setup. Vercel's Hobby tier is free for personal use; for commercial sites we recommend the Pro tier at $20/month (billed by Vercel directly).",
  },
  {
    q: "Can I upgrade from a Site Build to Agency OS later?",
    a: "Yes. Your site is already built on the Agency OS template, so the upgrade path is seamless.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Flat rates. No games.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            One-time site builds. A monthly platform tier. And a free AI generator to try it all out. No retainers, no hidden fees, no lock-in.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 flex flex-col h-full ${
                t.highlight
                  ? "bg-slate-900 border-2 border-amber-500 shadow-xl"
                  : "bg-white border border-slate-200"
              }`}
            >
              {t.highlight && (
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-1">
                  <Zap size={12} /> Most Popular
                </div>
              )}
              <h2 className={`text-lg font-bold mb-1 ${t.highlight ? "text-white" : "text-slate-900"}`}>
                {t.name}
              </h2>
              <div className="flex items-end gap-1 mb-3">
                <span className={`text-4xl font-extrabold ${t.highlight ? "text-white" : "text-slate-900"}`}>
                  {t.price}
                </span>
                <span className={`text-sm mb-1 ${t.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {t.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed mb-8 ${t.highlight ? "text-slate-400" : "text-slate-600"}`}>
                {t.desc}
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className={t.highlight ? "text-slate-300" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className={`text-center font-bold py-3 rounded-xl transition-colors text-sm ${
                  t.highlight
                    ? "bg-amber-500 hover:bg-amber-400 text-slate-900"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">Pricing FAQ</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">Not sure which tier fits?</h2>
          <p className="text-slate-400 mb-8">Send a message and Brittany will respond within 24 hours with a recommendation.</p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Get a Recommendation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
