import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArrowRight, Zap } from "lucide-react";

const stats = [
  { value: "95+", label: "PageSpeed Score" },
  { value: "<30min", label: "Avg. Deploy Time" },
  { value: "$300", label: "Flat Build Rate" },
  { value: "100%", label: "Client Ownership" },
];

const projects = [
  {
    archetype: "EMR",
    category: "Emergency",
    industry: "Plumbing & Heating",
    name: "Indiana Plumbing & Heating",
    market: "Indianapolis, IN · 46239",
    desc: "Full 5-page Astro site targeting 24/7 emergency plumbing keywords across the east-side Indianapolis market. One-tap call CTA above the fold. LocalBusiness JSON-LD with plumber subtype.",
    tags: ["Astro SSG", "JSON-LD", "Mobile-First", "Emergency UX"],
    color: "border-red-500",
    accentBg: "bg-red-950",
    accentText: "text-red-400",
  },
  {
    archetype: "CON",
    category: "Considered",
    industry: "Roofing",
    name: "Indy Roof Pros",
    market: "Indianapolis, IN · 46201",
    desc: "Trust-forward layout for a residential roofing company. Before/after section, insurance claim process explainer, and Google Review schema integration drive the long conversion cycle.",
    tags: ["Trust Architecture", "Review Schema", "Insurance CTAs"],
    color: "border-blue-500",
    accentBg: "bg-blue-950",
    accentText: "text-blue-400",
  },
  {
    archetype: "TRN",
    category: "Transactional",
    industry: "HVAC",
    name: "Circle City HVAC",
    market: "Indianapolis, IN · 46220",
    desc: "Recurring service model for seasonal HVAC maintenance. Service area zip-code map, maintenance plan CTA, and structured data for HVAC-specific schema types.",
    tags: ["Service Area Map", "HVACBusiness Schema", "Recurring CTAs"],
    color: "border-emerald-500",
    accentBg: "bg-emerald-950",
    accentText: "text-emerald-400",
  },
  {
    archetype: "EMR",
    category: "Emergency",
    industry: "Towing",
    name: "Eagle Towing Indy",
    market: "Indianapolis, IN · 46222",
    desc: "Ultra-fast towing site optimized for 'towing near me' and 'emergency tow Indianapolis' search queries. GPS-linked phone number, real-time availability indicator, and AutomotiveBusiness schema.",
    tags: ["GPS Phone", "AutomotiveBusiness Schema", "24/7 UX"],
    color: "border-amber-500",
    accentBg: "bg-amber-950",
    accentText: "text-amber-400",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Built for Indianapolis.<br />Engineered to rank.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            Every project is purpose-built for a specific local market, conversion archetype, and search intent. No templates reused without engineering intent.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-amber-500 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
              <div className="text-sm font-medium text-slate-800">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`bg-white border-l-4 ${p.color} border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${p.accentBg} ${p.accentText} text-xs font-bold px-3 py-1 rounded-full tracking-widest`}>
                    {p.archetype}
                  </div>
                  <span className="text-slate-500 text-sm">{p.category} · {p.industry}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{p.name}</h2>
                <p className={`text-sm font-medium mb-4 ${p.accentText}`}>{p.market}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
              <div className="md:w-1/2 flex items-center">
                <div className={`${p.accentBg} rounded-xl p-6 w-full`}>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {["Astro SSG", "Vanilla CSS", "Vercel", ...p.tags].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs">
                    <Zap size={12} className={p.accentText} />
                    <span className="text-slate-400">95+ PageSpeed · Deployed on Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">Want your business here?</h2>
          <p className="text-slate-400 mb-8">Every project starts with a conversation. Tell us your market and we&apos;ll tell you how fast we can get you live.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
