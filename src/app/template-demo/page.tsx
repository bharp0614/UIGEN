import React from "react";
import {
  LayoutDashboard,
  Server,
  FileCode2,
  Search,
  Rocket,
  Terminal,
  Activity,
  TrendingUp,
} from "lucide-react";

const documentData = {
  title: "Agency OS: Clean Slate Plan",
  subtitle:
    "Architectural Blueprint and Operational Strategy for Scalable Local Service Websites",
  sections: [
    {
      id: "intro",
      icon: <LayoutDashboard size={20} />,
      title: "Decommissioning Legacy",
      content: (
        <div className="space-y-4">
          <p>
            The transition toward a scalable, low-overhead platform for deploying local service business websites requires a fundamental paradigm shift from organically grown, over-engineered architectures to a highly standardized, template-driven monorepo.
          </p>
          <p>
            The preceding iteration of the repository suffered from organic, unguided expansion. Client folders were instantiated prior to the establishment of a cohesive build and deployment pipeline. The overarching business model relies on velocity: spinning up local service websites—such as plumbers, roofers, and emergency towing services—rapidly and inexpensively. At a target price point of $300 per site, profitability is achieved only if the underlying engineering labor is minimized. Provisioning a new client must take thirty to sixty minutes.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 text-blue-900 rounded-r-lg">
            <h4 className="font-bold mb-2">What we are deprecating:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Turborepo and Vite-powered React frontend (over-engineered).</li>
              <li>Centralized <code>truth-source/</code> root directory.</li>
              <li>Complex GitHub Actions workflows (replaced by Vercel).</li>
              <li>Numbered folder structures (e.g., <code>01_MAIN-PAGES</code>).</li>
            </ul>
          </div>
          <p>
            What remains is the optimal core: the Astro page structure encompassing the index, services, contact, and blog endpoints. The platform will retain the localized <code>config.js</code> pattern as the exclusive mechanism for injecting Name, Address, and Phone (NAP) data.
          </p>
        </div>
      ),
    },
    {
      id: "infrastructure",
      icon: <Server size={20} />,
      title: "Infrastructure & Vercel",
      content: (
        <div className="space-y-4">
          <p>
            The deployment of individual client websites requires a robust, zero-configuration continuous deployment pipeline. Vercel serves as the optimal hosting infrastructure, capable of detecting changes within a monorepo and deploying isolated projects seamlessly.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Commercial Compliance</h3>
          <p>
            A critical vulnerability in the baseline assumption of free, infinite static hosting relies on a misunderstanding of Vercel&apos;s Terms of Service regarding the Hobby tier. Vercel strictly prohibits its application for commercial endeavors. Operating a fleet of client websites on the Hobby plan introduces catastrophic operational risk.
          </p>
          <p>
            Therefore, upgrading to the <strong>Vercel Pro plan</strong> ($20 per month per user) is a mandatory architectural prerequisite. A single client acquisition at $300 covers fifteen months of enterprise-grade infrastructure.
          </p>
          <div className="overflow-x-auto mt-6 border rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border-b">Resource</th>
                  <th className="p-3 border-b">Hobby Tier</th>
                  <th className="p-3 border-b">Pro Tier</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3 font-medium">Commercial Use</td>
                  <td className="p-3 text-red-600">Strictly Prohibited</td>
                  <td className="p-3 text-emerald-600">Permitted</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Build Limits</td>
                  <td className="p-3">100 Hours</td>
                  <td className="p-3">400 Hours</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Projects</td>
                  <td className="p-3">200 maximum</td>
                  <td className="p-3">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Concurrent Builds</td>
                  <td className="p-3">Queued sequentially</td>
                  <td className="p-3">Up to 500 concurrent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Monorepo Routing Isolation</h3>
          <p>
            Each client site operates as an entirely isolated Vercel project connected to the singular GitHub repository. When a <code>git push</code> event occurs on the <code>main</code> branch, Vercel dynamically evaluates the commit diff across the entire monorepo repository tree. It triggers parallel builds solely for the projects whose specific root directories contain modified files.
          </p>
        </div>
      ),
    },
    {
      id: "template",
      icon: <FileCode2 size={20} />,
      title: "Template Immutability",
      content: (
        <div className="space-y-4">
          <p>
            The fundamental shift in the Agency OS architecture is the commitment to strict template immutability. The <code>clients/_template</code> directory houses the entire application source code. This folder represents the finalized, highly optimized product offering.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Structural Integrity Through Duplication</h3>
          <p>
            When a new client is onboarded, the <code>_template</code> directory is duplicated in its entirety into a new <code>clients/[client-slug]</code> directory. The structural Astro files within the duplicated client folder are never manually altered. <strong>The singular point of mutation for every client instance is the <code>config.js</code> file.</strong>
          </p>
          <p>
            This strategy yields high-order operational benefits: ensuring predictability across all clients, and enabling seamless global upgradability. Future feature additions can be developed strictly within the master template and forcefully overwritten across all existing client directories (excluding their individual <code>config.js</code>).
          </p>
          <div className="bg-slate-800 text-slate-100 p-4 rounded-lg font-mono text-sm my-4">
            <div className="text-slate-400 mb-2">{/* The only file that changes per client */}</div>
            <div>
              <span className="text-pink-400">export const</span> config = {"{"}
            </div>
            <div className="pl-4">
              businessName: <span className="text-green-300">&apos;Apex Plumbing&apos;</span>,
            </div>
            <div className="pl-4">
              phone: <span className="text-green-300">&apos;555-0198&apos;</span>,
            </div>
            <div className="pl-4">
              colors: {"{"} primary: <span className="text-green-300">&apos;#0ea5e9&apos;</span> {"}"}
            </div>
            <div>{"}"};</div>
          </div>
        </div>
      ),
    },
    {
      id: "astro",
      icon: <Rocket size={20} />,
      title: "Astro Engineering",
      content: (
        <div className="space-y-4">
          <p>
            Astro&apos;s architecture is uniquely optimized for the local service business model. By default, Astro utilizes an &quot;Islands Architecture&quot; that entirely strips client-side JavaScript from the final build output, shipping pure HTML to the browser.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Dynamic Theming via Scoped CSS Variables</h3>
          <p>
            Astro natively resolves the challenge of injecting user-defined brand colors into static CSS files through the highly efficient <code>define:vars</code> directive. At build time, Astro intelligently parses this directive, computes the static values derived from the imported <code>config.js</code> module, and outputs highly optimized, scoped CSS variables.
          </p>
          <p>
            This methodology enables the <code>&lt;style&gt;</code> blocks throughout the application to simply reference standard CSS variables like <code>var(--theme-primary)</code>.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Mitigating Dynamic Import Complexities</h3>
          <p>
            While standard layouts are statically defined, assets like localized SVG icons require careful architectural handling. Loose dynamic component resolution causes Vite to aggressively pre-load or bundle all potential matches. To mitigate this, a strict map of supported dynamic components must be explicitly declared to ensure Vite can accurately prune dead code during the static build step.
          </p>
        </div>
      ),
    },
    {
      id: "seo",
      icon: <Search size={20} />,
      title: "SEO & Semantic Data",
      content: (
        <div className="space-y-4">
          <p>
            For local service businesses, visibility within the Google &quot;Local Pack&quot; and SERPs is the exclusive engine for lead generation. The platform architecture must natively enforce rigorous technical SEO standards.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Schema.org JSON-LD Injectors</h3>
          <p>
            Structured data implemented via JSON-LD is the most direct and unambiguous method of communicating entity relationships, geographical service areas, and NAP data to search engine crawlers. The architecture leverages the <code>Schema.org/LocalBusiness</code> specification (or subtypes like <code>Plumber</code> or <code>HVACBusiness</code>).
          </p>
          <p>
            By mapping the <code>config.js</code> fields directly into a JSON-LD payload within the document <code>&lt;head&gt;</code>, the platform guarantees every deployed site broadcasts fully compliant structured data automatically.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Dynamic Sitemap Generation</h3>
          <p>
            Because the master template relies entirely on static site generation (SSG), Astro&apos;s default <code>@astrojs/sitemap</code> integration automatically crawls the generated static routes within the output <code>dist/</code> directory and compiles an accurate XML sitemap. The integration dynamically assigns the absolute URL based on the localized <code>config.js</code> file.
          </p>
        </div>
      ),
    },
    {
      id: "phases",
      icon: <Terminal size={20} />,
      title: "Execution Phases 1-3",
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-slate-300 pl-4 py-1 mb-6">
            <h3 className="text-lg font-bold text-slate-800">Phase 1 & 2: Repository Init & Provisioning</h3>
            <p className="mt-2 text-slate-600">
              The new GitHub repository, <code>agency-os</code>, is instantiated. The Astro template is constructed within <code>clients/_template</code>. Every text node containing a phone number, every CSS variable dictating brand color, and every schema markup field must successfully resolve data from the <code>config.js</code> module.
            </p>
            <p className="mt-2 text-slate-600">
              Phase 2 executes the first real-world deployment (e.g. <code>emergency-towing-indianapolis</code>). The custom domain is bound via the Vercel dashboard, proving a site can transition from an empty folder to a live domain in minutes.
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="text-lg font-bold text-slate-800">Phase 3: Operational Automation (CLI)</h3>
            <p className="mt-2 text-slate-600">
              The primary automation tool, <code>scripts/onboard.ts</code>, guides the agency operator through the instantiation of a new client seamlessly utilizing the <code>@clack/prompts</code> library for interactive terminal workflows.
            </p>
            <p className="mt-2 text-slate-600">
              The script accurately clones the <code>_template</code> folder (excluding <code>node_modules</code>), parses the newly created <code>config.js</code>, and injects variables collected via prompts. The architecture utilizes <code>tsx</code> (TypeScript Execute) as the primary runtime environment to bypass complex TS compilation steps.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "ops",
      icon: <Activity size={20} />,
      title: "Ops Layer (Phase 4)",
      content: (
        <div className="space-y-4">
          <p>
            As the monorepo scales to encompass dozens of client deployments, ensuring structural and data conformity across the entire network becomes paramount. The <code>scripts/heartbeat.ts</code> utility serves as a continuous integration testing ground.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-slate-800">Validating Configuration Consistency</h3>
          <p>
            If a major feature is added to the master template requiring a new field in <code>config.js</code>, the heartbeat script mitigates architectural fragility. It iterates through the <code>clients/</code> folder, dynamically loading every localized <code>config.js</code> module directly into the Node.js runtime memory space.
          </p>
          <p>
            It then processes the object against a master validation schema (like Zod) to ensure exact formatting. The script outputs a comprehensive terminal console report or writes the data directly to an updated <code>agency-dashboard.json</code> manifest file. Integrated into a pre-commit hook, it ensures no deployment reaches Vercel unless every client configuration perfectly matches the structural requirements.
          </p>
        </div>
      ),
    },
    {
      id: "economics",
      icon: <TrendingUp size={20} />,
      title: "Economic Modeling",
      content: (
        <div className="space-y-4">
          <p>
            The architectural decisions defining the Clean Slate plan are intrinsically tied to the underlying economic model of the agency. Selling sites for $300 demands an ecosystem where the marginal cost of adding an additional client approaches zero.
          </p>
          <p>
            By utilizing Vercel&apos;s Pro tier, the $20 monthly infrastructure cost becomes a negligible, fixed operating expense that supports an unlimited number of projects. The Astro framework&apos;s static generation ensures graceful horizontal scaling.
          </p>
          <p>
            The true value lies in long-term extensibility. Introducing new high-value features requires editing code in exactly one location: the <code>_template</code> folder. Finally, the commitment to Astro and static site generation ensures total platform independence, guaranteeing absolute sovereignty over the agency&apos;s technological infrastructure.
          </p>
        </div>
      ),
    },
  ],
};

export default function TemplateDemoPage() {
  const [activeSection, setActiveSection] = React.useState(
    documentData.sections[0].id,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const currentSectionData = documentData.sections.find(
    (section) => section.id === activeSection,
  );

  if (!currentSectionData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center shadow-md z-20">
        <div className="font-bold flex items-center gap-2">
          <Terminal size={20} className="text-indigo-400" />
          Agency OS
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav
        className={`
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          fixed md:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 z-10 flex flex-col shadow-xl md:shadow-none
        `}
      >
        <div className="p-6 hidden md:block">
          <div className="text-white font-bold text-xl flex items-center gap-2 mb-1">
            <Terminal size={24} className="text-indigo-400" />
            Agency OS
          </div>
          <div className="text-xs text-slate-500 font-mono tracking-wider">
            CLEAN SLATE PLAN
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 md:py-0">
          <ul className="space-y-1 px-3">
            {documentData.sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left text-sm font-medium
                    ${
                      activeSection === section.id
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "hover:bg-slate-800 hover:text-slate-100"
                    }
                  `}
                >
                  <span
                    className={`${
                      activeSection === section.id
                        ? "text-indigo-200"
                        : "text-slate-400"
                    }`}
                  >
                    {section.icon}
                  </span>
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              V.1
            </div>
            <div>
              <div className="text-xs text-white font-medium">Monorepo Active</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                All systems nominal
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-0">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {documentData.title}
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            {documentData.subtitle}
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                {currentSectionData.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {currentSectionData.title}
              </h2>
            </div>

            <div className="prose prose-slate prose-indigo max-w-none text-slate-600 leading-relaxed">
              {currentSectionData.content}
            </div>

            <div className="mt-12 pt-6 border-t border-slate-100 flex justify-between">
              {documentData.sections.findIndex(
                (section) => section.id === activeSection,
              ) > 0 ? (
                <button
                  onClick={() =>
                    setActiveSection(
                      documentData.sections[
                        documentData.sections.findIndex(
                          (section) => section.id === activeSection,
                        ) - 1
                      ].id,
                    )
                  }
                  className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  ← Previous Section
                </button>
              ) : (
                <div></div>
              )}

              {documentData.sections.findIndex(
                (section) => section.id === activeSection,
              ) < documentData.sections.length - 1 ? (
                <button
                  onClick={() =>
                    setActiveSection(
                      documentData.sections[
                        documentData.sections.findIndex(
                          (section) => section.id === activeSection,
                        ) + 1
                      ].id,
                    )
                  }
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Next Section →
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
