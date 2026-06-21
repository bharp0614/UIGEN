import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} className="text-amber-400" />,
    label: "Email",
    value: "bharp0614@gmail.com",
    href: "mailto:bharp0614@gmail.com",
  },
  {
    icon: <MapPin size={18} className="text-amber-400" />,
    label: "Location",
    value: "Indianapolis, IN 46239",
    href: null,
  },
  {
    icon: <Clock size={18} className="text-amber-400" />,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: <MessageSquare size={18} className="text-amber-400" />,
    label: "Best For",
    value: "Project inquiries, Agency OS questions, site builds",
    href: null,
  },
];

const services = [
  "Local service website build ($300)",
  "Agency OS platform access",
  "UIGen tool question",
  "SEO / AEO strategy",
  "Something else",
];

export default function ContactPage() {
  const mailtoBase = "mailto:bharp0614@gmail.com?subject=";

  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-6">Let&apos;s build something.</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you need a site built, want Agency OS access, or just have questions — Brittany responds to every message personally, within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact details</h2>
            <ul className="space-y-6">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-900 font-medium hover:text-amber-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-900 font-medium">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-slate-900 rounded-2xl p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Service Area</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Indy CoCreator serves local businesses across the greater Indianapolis metro area — including Lawrence, Beech Grove, Southport, Greenwood, Fishers, Carmel, and surrounding communities.
              </p>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What do you need?</h2>
            <p className="text-slate-600 text-sm mb-6">
              Click the option that best describes your inquiry to open a pre-addressed email with the right subject line.
            </p>
            <div className="space-y-3">
              {services.map((s) => (
                <a
                  key={s}
                  href={`${mailtoBase}${encodeURIComponent("Inquiry: " + s)}`}
                  className="flex items-center justify-between bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl px-5 py-4 transition-colors group"
                >
                  <span className="text-slate-800 font-medium text-sm group-hover:text-slate-900">{s}</span>
                  <span className="text-amber-400 text-xs font-semibold">Email →</span>
                </a>
              ))}
            </div>

            <div className="mt-8 border border-slate-200 bg-white rounded-2xl p-6">
              <p className="text-slate-500 text-xs leading-relaxed">
                Prefer to write a full message? Email{" "}
                <a href="mailto:bharp0614@gmail.com" className="text-amber-600 font-semibold hover:underline">
                  bharp0614@gmail.com
                </a>{" "}
                directly. Include your business name, location, and what you&apos;re trying to accomplish — Brittany will reply with a clear recommendation and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
