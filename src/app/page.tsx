import Link from "next/link";
import { Code2, MessageSquare, Eye, Download, Zap, Shield, Rocket } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

const features = [
  {
    icon: <MessageSquare size={22} className="text-amber-400" />,
    title: "Describe It",
    desc: "Type what you need in plain English. UIGen understands component structure, layout, and design intent.",
  },
  {
    icon: <Eye size={22} className="text-amber-400" />,
    title: "Preview Live",
    desc: "Watch your component render in real-time. Iterate on the fly without leaving the browser.",
  },
  {
    icon: <Download size={22} className="text-amber-400" />,
    title: "Export Clean Code",
    desc: "Get production-ready React JSX. No bloat, no lock-in — just code you own.",
  },
];

const pillars = [
  { icon: <Zap size={18} />, label: "AI-Powered Generation" },
  { icon: <Shield size={18} />, label: "Zero Lock-In" },
  { icon: <Rocket size={18} />, label: "Production Ready" },
  { icon: <Code2 size={18} />, label: "Clean JSX Output" },
];

const steps = [
  { num: "01", title: "Open the Generator", body: "Log in and start a new project. The chat interface opens instantly — no setup required." },
  { num: "02", title: "Describe Your Component", body: "Tell UIGen what you need: a hero section, a pricing card, a contact form. Be as specific or as broad as you like." },
  { num: "03", title: "Refine & Export", body: "Preview the live result, tweak via follow-up prompts, then export the final React component." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 mb-6 text-xs font-medium text-amber-400 tracking-wide">
            <Zap size={12} /> Built for Speed. Built to Own.
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Generate React UIs{" "}
            <span className="text-amber-400">with AI</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Describe a component. Watch it render. Export production-ready code.
            No templates. No proprietary lock-in. Just yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agency-os"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Launch UIGen
            </Link>
            <Link
              href="/services"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              See What We Build
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-amber-400">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4 tracking-tight">
            Three steps. Real results.
          </h2>
          <p className="text-slate-500 text-center mb-14 max-w-lg mx-auto">
            UIGen strips away complexity so you can go from idea to working component in minutes, not hours.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="mb-4 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
            How it works
          </h2>
          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="text-4xl font-black text-amber-400 opacity-60 leading-none w-14 shrink-0">{s.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            Ready to build faster?
          </h2>
          <p className="text-slate-400 mb-8">
            UIGen is built by Indy CoCreator — a digital agency in Indianapolis dedicated to digital ownership for local businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agency-os"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Launch UIGen Free
            </Link>
            <Link
              href="/contact"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-colors"
            >
              Talk to Brittany
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
