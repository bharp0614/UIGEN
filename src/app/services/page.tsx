import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Code2, Globe, Layers, Search, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} className="text-amber-400" />,
    title: "UIGen — AI Component Generator",
    tag: "Tool",
    desc: "Describe a React component in plain English and watch it render live. Export clean JSX with zero dependencies. Built for agencies and independent developers who need to move fast without sacrificing code quality.",
    bullets: [
      "AI-powered chat interface",
      "Live preview & code editor",
      "Clean JSX export (ZIP or copy)",
      "Monaco editor integration",
    ],
  },
  {
    icon: <Globe size={24} className="text-amber-400" />,
    title: "Local Service Website Builds",
    tag: "Core Offering",
    desc: "High-performance static websites for Indianapolis-area plumbers, HVAC companies, roofers, and towing operators. Flat-rate $300 build fee. You own the domain, the code, and the hosting.",
    bullets: [
      "Astro static site generation",
      "95+ Google PageSpeed score",
      "LocalBusiness JSON-LD schema",
      "Mobile-first, zero bloat",
    ],
  },
  {
    icon: <Layers size={24} className="text-amber-400" />,
    title: "Agency OS",
    tag: "Platform",
    desc: "A template-driven monorepo deployment system for agencies building multiple client sites. One master template, one config.js per client, one `git push` to deploy. Scale to 50+ clients without multiplying overhead.",
    bullets: [
      "Vercel monorepo routing",
      "config.js token injection",
      "Automated onboarding CLI",
      "Heartbeat validation scripts",
    ],
  },
  {
    icon: <Search size={24} className="text-amber-400" />,
    title: "AEO & Local SEO",
    tag: "Strategy",
    desc: "Every site we ship includes structured data, semantic HTML, and geographic targeting built in. We don't bolt on SEO after the fact — it's baked into the architecture from line one.",
    bullets: [
      "Schema.org JSON-LD (LocalBusiness, Service)",
      "Dynamic XML sitemap generation",
      "Indianapolis NAP targeting",
      "AI answer engine optimization",
    ],
  },
];

const archetypes = [
  { code: "EMR", name: "Emergency", example: "Plumbers, HVAC, Towing", desc: "High urgency. Fast CTA above the fold. One-tap call button. Designed to convert in under 3 seconds." },
  { code: "CON", name: "Considered", example: "Roofing, Remodeling, Landscaping", desc: "Trust-building layout. Before/after sections, credentials, and testimonials drive the conversion path." },
  { code: "TRN", name: "Transactional", example: "Cleaning, Pest Control, Lawn Care", desc: "Recurring service model. Online booking integration and service area maps are front-and-center." },
];

export default function ServicesPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">What We Build</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Four services. One mission.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            From AI-generated components to full agency platforms — every service is designed to give local businesses fast, owned, and permanent web infrastructure.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((s) => (
            <div key={s.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
              <div className="md:w-1/2 flex items-center">
                <ul className="space-y-3 w-full">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-slate-700">
                      <Zap size={14} className="text-amber-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archetypes */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4 tracking-tight">
            Three UX archetypes
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-lg mx-auto">
            Every client site maps to one of three proven conversion patterns based on buyer urgency.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {archetypes.map((a) => (
              <div key={a.code} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="text-3xl font-black text-amber-400 mb-1">{a.code}</div>
                <div className="text-white font-bold text-lg mb-1">{a.name}</div>
                <div className="text-slate-400 text-xs mb-4">{a.example}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-800 mb-8">
            Tell us about your business and we&apos;ll recommend the right service for where you are right now.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
