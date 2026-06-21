import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

const faqs = [
  {
    category: "About UIGen",
    items: [
      {
        q: "What is UIGen?",
        a: "UIGen is an AI-powered React component generator. You describe a UI in plain English, it renders the component live, and you export clean JSX. It's built by Indy CoCreator as internal tooling for faster local service website builds.",
      },
      {
        q: "Is UIGen free to use?",
        a: "Yes — UIGen is free during the beta period. No account required. Just open the tool, describe what you need, and export your code.",
      },
      {
        q: "What tech stack does UIGen output?",
        a: "React JSX with Tailwind CSS classes. The exported code is production-ready and dependency-light — no proprietary wrapper libraries.",
      },
      {
        q: "Can I use UIGen to build a full website?",
        a: "UIGen is designed for component-level generation. For full website builds, we use Astro with the Agency OS template system. Think of UIGen as the component factory that feeds into a larger build pipeline.",
      },
    ],
  },
  {
    category: "Website Builds",
    items: [
      {
        q: "What's included in a $300 site build?",
        a: "A 5-page Astro static site (Home, Services, About, Contact, Blog stub), mobile-first design, 95+ PageSpeed score, LocalBusiness JSON-LD schema, custom domain connection, and Vercel deployment. Plus 30 days of post-launch support.",
      },
      {
        q: "Do I own the site after it's built?",
        a: "100%. You own the domain, the code repository, and the hosting account. We don't use proprietary builders or hold your files hostage. Digital ownership is the whole point.",
      },
      {
        q: "How fast can a site go live?",
        a: "With the Agency OS pipeline, a new client site can go from an empty folder to a live domain in under 60 minutes. Most standard builds take 2–5 business days depending on content availability.",
      },
      {
        q: "Do you work outside Indianapolis?",
        a: "Primarily no — our SEO and AEO strategy is engineered specifically for the Indianapolis metro area. We know the local keyword landscape, competitor density, and neighborhood targeting. If your business is in the Indy market, we're the right fit.",
      },
    ],
  },
  {
    category: "Agency OS",
    items: [
      {
        q: "What is Agency OS?",
        a: "Agency OS is the technical platform behind Indy CoCreator — a monorepo with a master Astro template, a config.js-driven client customization system, and automated onboarding scripts. It lets us provision new client sites in minutes, not hours.",
      },
      {
        q: "Can other agencies use Agency OS?",
        a: "Yes — access is available through the Agency OS monthly plan. You get the full monorepo architecture, UIGen access, and the onboarding CLI. Reach out via the contact page to discuss fit.",
      },
      {
        q: "What's the config.js pattern?",
        a: "Every client folder has exactly one file that changes: config.js. It stores the business name, phone, colors, and service area. All Astro pages and schema injectors pull from this file. Updating a client's brand is one file edit.",
      },
    ],
  },
  {
    category: "SEO & AEO",
    items: [
      {
        q: "What is AEO and why does it matter?",
        a: "AEO (Answer Engine Optimization) is the practice of structuring your content so AI assistants — ChatGPT, Perplexity, Google SGE — cite your business as a local answer. It's the next frontier beyond traditional SEO and we engineer for it from day one.",
      },
      {
        q: "Do all sites include JSON-LD schema?",
        a: "Yes. Every site we deploy includes LocalBusiness JSON-LD with full NAP data, service schema, and appropriate business subtypes (Plumber, HVACBusiness, etc.). It's injected via the config.js system automatically.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Everything you need to know about UIGen, our website builds, and how Agency OS works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="bg-white border border-slate-200 rounded-xl group"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 text-sm">
                      {item.q}
                      <span className="text-amber-400 ml-4 shrink-0 transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-8">
            Send a message and Brittany will respond directly — no bots, no ticketing systems.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
