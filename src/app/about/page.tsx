import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Heart, Target, Wrench, Users } from "lucide-react";

const values = [
  {
    icon: <Target size={20} className="text-amber-400" />,
    title: "Digital Ownership",
    body: "Every site we build belongs entirely to the client. No proprietary builders, no trapped content — just clean code on a domain they own.",
  },
  {
    icon: <Wrench size={20} className="text-amber-400" />,
    title: "Engineering Discipline",
    body: "We build with Astro, static generation, and CSS custom tokens. Zero bloat. Maximum mobile performance. Every site scores 95+ on PageSpeed.",
  },
  {
    icon: <Heart size={20} className="text-amber-400" />,
    title: "Local-First Focus",
    body: "Our clients are Indianapolis plumbers, roofers, HVAC techs, and towing operators. We know their market and engineer specifically for it.",
  },
  {
    icon: <Users size={20} className="text-amber-400" />,
    title: "Radical Transparency",
    body: "Flat pricing. No retainer games. You always know what you're paying and what you're getting. That's the Miss Meticulous standard.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">About Indy CoCreator</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Built in Indianapolis.<br />Built to Last.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            Indy CoCreator is a digital agency operated by Brittany Harp under Miss Meticulous LLC. We build fast, dependency-light websites for local service businesses — and we believe your site should be a permanent asset, not a subscription.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">The Miss Meticulous Standard</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The agency was born out of frustration with the web design industry&apos;s love affair with bloat: overbuilt WordPress sites, proprietary page builders, and hosting contracts that trap business owners.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Brittany Harp — founder, developer, and operator — set out to build a better model. One where a local plumber in Indianapolis can get a blazing-fast, professionally engineered website for $300 and own every byte of it.
            </p>
            <p className="text-slate-600 leading-relaxed">
              UIGen is the internal tooling that makes that possible — an AI-powered UI generator that eliminates front-end build time so the agency can focus on what matters: deploying high-performing sites at a price local businesses can afford.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-slate-300">
            <div className="text-amber-400 text-sm font-mono uppercase tracking-widest mb-6">Founder</div>
            <div className="text-white text-2xl font-bold mb-1">Brittany Harp</div>
            <div className="text-slate-400 text-sm mb-6">Miss Meticulous LLC · Indianapolis, IN</div>
            <ul className="space-y-3 text-sm">
              {[
                "Agentic AI web development",
                "Astro + React static site engineering",
                "Local SEO & AEO strategy",
                "Agency OS architecture",
                "Monorepo deployment pipelines",
              ].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="mb-4 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">Ready to own your digital presence?</h2>
          <p className="text-slate-400 mb-8">Let&apos;s build something that performs and lasts.</p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
