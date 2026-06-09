import { useEffect, useState } from 'react';
import {
  Phone, Sparkle, Shield, Clock, Bot, FileText, Users, Lock, Plug, Star,
  Check, ArrowRight, MapPin, Calendar, Lightning, Chart, KeyRound, Webhook,
  Globe, BadgeCheck, Quote,
} from './components/Icons';
import Brand from './components/Brand';
import { PARTNER_LOGOS } from './components/PartnerLogos';

/* ============================================================
 *  NAV
 * ============================================================ */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2">
          <Brand />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-700 lg:flex">
          <a href="#features" className="hover:text-ink-900">Platform</a>
          <a href="#integrations" className="hover:text-ink-900">Integrations</a>
          <a href="#pricing" className="hover:text-ink-900">Pricing</a>
          <a href="#reviews" className="hover:text-ink-900">Customers</a>
          <a href="#about" className="hover:text-ink-900">Security</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#quote" className="hidden sm:inline-flex btn-ghost">Sign in</a>
          <a href="#quote" className="btn-primary">Book a demo <ArrowRight size={16} /></a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
 *  HERO — bold H1, dual CTA, live dashboard mockup on the right
 * ============================================================ */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-100 bg-white">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" aria-hidden />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl" aria-hidden />

      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <div className="chip-dark">
            <Sparkle size={12} /> New: Claude-powered policy Q&A in Slack
          </div>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.25rem]">
            HR ops that <span className="text-amber-600">scale</span> past 80k users.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Quorum is the SOC 2-ready AI layer for your HRIS. Parse any document, route any ticket,
            answer any employee question — with row-level security built in from day one.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#quote" className="btn-amber text-base">Book a 20-min demo <ArrowRight size={16} /></a>
            <a href="tel:+18555550199" className="btn-outline text-base">
              <Phone size={16} /> (855) 555-0199
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-1.5"><Check size={16} className="text-signal-600" /> Free 30-day pilot</li>
            <li className="flex items-center gap-1.5"><Check size={16} className="text-signal-600" /> SOC 2 Type II ready</li>
            <li className="flex items-center gap-1.5"><Check size={16} className="text-signal-600" /> SSO + SCIM included</li>
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50/60 p-3 max-w-md">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=240&q=70"
              alt="Customer team using Quorum"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 rounded-xl object-cover"
            />
            <div className="text-sm">
              <div className="flex items-center gap-1 font-semibold text-ink-900">
                <span className="flex text-amber-500">{[0,1,2,3,4].map(i => <Star key={i} size={14} />)}</span>
                4.9 on G2
              </div>
              <p className="text-ink-600">“Replaced 3 vendors and cut HR response time from 2 days to 6 minutes.” — Priya R., VP People</p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      <div className="card overflow-hidden shadow-pop">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          </div>
          <div className="rounded-md bg-white px-3 py-1 text-[11px] font-mono text-ink-500">app.quorum.hr / inbox</div>
          <div className="flex items-center gap-1.5 text-[11px] text-ink-500">
            <span className="h-2 w-2 rounded-full bg-signal-500 blink" /> live
          </div>
        </div>

        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <aside className="col-span-3 border-r border-ink-100 bg-ink-50/30 p-3 text-xs">
            <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-ink-400">Workspaces</div>
            <div className="space-y-1">
              {['Acme HQ', 'Acme Engineering', 'Acme Sales', 'Acme Remote'].map((w, i) => (
                <div key={w} className={`flex items-center justify-between rounded-md px-2 py-1.5 ${i === 0 ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100'}`}>
                  <span className="truncate">{w}</span>
                  <span className={`text-[10px] ${i === 0 ? 'text-amber-400' : 'text-ink-400'}`}>{i === 0 ? '312' : i === 1 ? '88' : '—'}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-ink-400">AI Agents</div>
            <div className="space-y-1">
              {['Policy Q&A', 'Onboarding bot', 'Time-off assistant'].map((b, i) => (
                <div key={b} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-ink-600 hover:bg-ink-100">
                  <Bot size={12} className={i === 0 ? 'text-amber-500' : 'text-ink-400'} />
                  <span className="truncate">{b}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="col-span-9 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-400">Inbox · today</div>
                <div className="text-base font-semibold text-ink-900">14 new · 6 auto-resolved</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-signal-500"/>Healthy</span>
                <span className="chip">RLS: enforced</span>
              </div>
            </div>

            {/* Metric strip */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { l: 'Avg response', v: '6m 12s', d: '−92%' },
                { l: 'Auto-resolved', v: '73%',     d: '+18pt' },
                { l: 'Tickets today', v: '14',      d: '−4' },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-ink-100 bg-white p-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-ink-400">{m.l}</div>
                  <div className="mt-0.5 font-display text-lg font-bold text-ink-900">{m.v}</div>
                  <div className="text-[10px] font-semibold text-signal-600">{m.d} vs last wk</div>
                </div>
              ))}
            </div>

            {/* Conversation */}
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-ink-900 text-[10px] font-bold text-amber-400">DM</div>
                <div className="rounded-2xl rounded-tl-sm bg-ink-100 px-3 py-2 text-xs text-ink-800">
                  My offer letter says 25 PTO days but the portal shows 18. Which is right?
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-amber-500 text-ink-900"><Bot size={12} /></div>
                <div className="rounded-2xl rounded-tl-sm border border-ink-100 bg-white px-3 py-2 text-xs text-ink-800">
                  The signed offer (signed 2026-04-12) supersedes the standard policy and grants <b>25 PTO days</b>.
                  HR has been notified to reconcile the portal — expected fix in 2 hrs.
                  <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-ink-500">
                    <BadgeCheck size={12} className="text-signal-600" /> Verified against offer PDF · 96% confidence
                  </div>
                </div>
              </div>
            </div>

            {/* Live trace row */}
            <div className="mt-3 flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/50 px-3 py-2 text-[11px]">
              <div className="flex items-center gap-2 font-mono text-ink-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 pulse-ring" />
                Parsing offer.pdf · 12 pages · 3.1s
              </div>
              <div className="flex items-center gap-1.5 text-ink-500">
                <Lock size={12} /> tenant: acme-hq
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating callout card */}
      <div className="absolute -left-6 -bottom-6 hidden w-56 rounded-2xl border border-ink-100 bg-white p-3 shadow-pop sm:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-ink-900">
          <Shield size={14} className="text-amber-500" /> SOC 2 Type II
        </div>
        <p className="mt-1 text-[11px] leading-snug text-ink-600">
          Row-level security on every query. Audit log shipped nightly to S3.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
 *  TRUST STRIP — G2 stars + review count + compliance badges
 * ============================================================ */
export function TrustStrip() {
  return (
    <section className="border-b border-ink-100 bg-ink-900 py-7 text-white">
      <div className="container-page flex flex-col items-center gap-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="flex text-amber-400">{[0,1,2,3,4].map(i => <Star key={i} size={18} />)}</span>
            <span className="font-display text-xl font-extrabold">4.9 / 5</span>
            <span className="text-ink-300 text-sm">from 1,847 reviews</span>
          </div>
          <span className="hidden h-5 w-px bg-ink-700 sm:block" />
          <div className="flex items-center gap-2 text-sm text-ink-200">
            <BadgeCheck size={16} className="text-amber-400" /> Leader · HR Analytics · Spring 2026
          </div>
          <span className="hidden h-5 w-px bg-ink-700 sm:block" />
          <div className="flex items-center gap-2 text-sm text-ink-200">
            <BadgeCheck size={16} className="text-amber-400" /> Easiest To Do Business With
          </div>
        </div>

        <div className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-3 pt-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {PARTNER_LOGOS.map((l) => (
            <div key={l.name} className="flex items-center justify-center opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition">
              {l.node}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  FEATURES — 6-tile grid
 * ============================================================ */
type Feature = {
  icon: JSX.Element;
  title: string;
  body: string;
  span?: string;
  badge?: string;
};
const FEATURES: Feature[] = [
  {
    icon: <Bot size={20} />,
    title: 'LLM policy Q&A',
    body: 'Claude + GPT + Gemini ensemble. Cites the source document on every answer so HR can audit it.',
    badge: 'Claude 4.6',
  },
  {
    icon: <FileText size={20} />,
    title: 'Document parsing pipeline',
    body: 'Offer letters, I-9s, NDAs, comp letters — extracted, classified, and routed to Workday in seconds.',
  },
  {
    icon: <Users size={20} />,
    title: 'HRIS-native sync',
    body: 'Bi-directional with Workday, BambooHR, Rippling, HiBob, Personio, SAP. Webhook + REST.',
  },
  {
    icon: <Shield size={20} />,
    title: 'RLS on every query',
    body: 'Postgres row-level security policies compile-checked at PR time. No more “oops, that was a different tenant.”',
  },
  {
    icon: <KeyRound size={20} />,
    title: 'SSO, SCIM & MFA',
    body: 'Okta, Azure AD, Google Workspace, OneLogin. SCIM provisioning, just-in-time deprovision, audit log.',
    span: 'lg:col-span-2',
  },
  {
    icon: <Chart size={20} />,
    title: 'Real-time HR analytics',
    body: 'PostHog + custom dashboards. Track ticket deflection, time-to-hire, onboarding NPS, equity dilution.',
  },
];
export function Features() {
  return (
    <section id="features" className="border-b border-ink-100 bg-white py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="chip"><Sparkle size={12} className="text-amber-500" /> The platform</div>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            One platform. Every HR workflow.
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Built on Next.js, Supabase, and FastAPI — designed to scale horizontally past 80,000 monthly users
            without re-platforming.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`card group relative overflow-hidden p-6 transition hover:-translate-y-0.5 hover:shadow-pop ${f.span ?? ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-900 text-amber-400">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-ink-900">{f.title}</h3>
                    {f.badge && <span className="chip-dark !px-2 !py-0.5 !text-[10px]">{f.badge}</span>}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.body}</p>
                </div>
              </div>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-400/0 blur-2xl transition group-hover:bg-amber-400/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  PRICING — 3 tiers (Basic / Plus / Premium)
 * ============================================================ */
type Tier = {
  name: string;
  blurb: string;
  price: string;
  per?: string;
  cta: string;
  highlight?: boolean;
  features: string[];
};
const TIERS: Tier[] = [
  {
    name: 'Starter',
    blurb: 'For HR teams up to 50 employees getting their first AI agent live.',
    price: '$8',
    per: 'seat / month',
    cta: 'Start free pilot',
    features: [
      '1 AI agent (Policy Q&A)',
      '5 HRIS connectors',
      'Email + Slack delivery',
      'SSO via Google Workspace',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    blurb: 'For scaling teams 50–2,000 employees that need SOC 2 + custom workflows.',
    price: '$24',
    per: 'seat / month',
    cta: 'Book a demo',
    highlight: true,
    features: [
      'Unlimited AI agents',
      '12 HRIS connectors + webhooks',
      'SSO (Okta, Azure AD, Google)',
      'SOC 2 Type II report',
      'Custom document pipelines',
      'Priority support · 4 hr SLA',
    ],
  },
  {
    name: 'Enterprise',
    blurb: 'For 2,000+ employees with data residency, audit, and bespoke integrations.',
    price: 'Custom',
    per: 'starts at 1,000 seats',
    cta: 'Talk to sales',
    features: [
      'Everything in Growth',
      'EU / US data residency',
      'Dedicated VPC + private link',
      'Custom RLS policies',
      'Named TAM + 24/7 paging',
      '99.99% uptime SLA',
    ],
  },
];
export function Pricing() {
  return (
    <section id="pricing" className="border-b border-ink-100 bg-ink-50 py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="chip"><Lightning size={12} className="text-amber-500" /> Plans</div>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Pick a plan. <span className="text-amber-600">No surprises.</span>
            </h2>
            <p className="mt-3 text-ink-600">All plans include unlimited employees, RLS by default, and a 30-day money-back guarantee.</p>
          </div>
          <div className="inline-flex items-center rounded-full border border-ink-200 bg-white p-1 text-sm font-semibold">
            <span className="rounded-full bg-ink-900 px-3 py-1.5 text-white">Annual · save 20%</span>
            <span className="px-3 py-1.5 text-ink-600">Monthly</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`card relative flex flex-col p-7 ${t.highlight ? 'border-2 border-ink-900 shadow-pop' : ''}`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-900">
                  Most popular
                </span>
              )}
              <div className="font-display text-2xl font-extrabold text-ink-900">{t.name}</div>
              <p className="mt-1.5 text-sm text-ink-600">{t.blurb}</p>
              <div className="mt-5 flex items-end gap-1.5">
                <span className="font-display text-5xl font-extrabold leading-none text-ink-900">{t.price}</span>
                {t.per && <span className="pb-1.5 text-sm text-ink-500">{t.per}</span>}
              </div>
              <a
                href="#quote"
                className={`mt-6 ${t.highlight ? 'btn-amber' : 'btn-outline'} w-full justify-center`}
              >
                {t.cta} <ArrowRight size={16} />
              </a>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-ink-700">
                    <Check size={16} className="mt-0.5 shrink-0 text-signal-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink-500">
          All prices in USD. Need a non-profit or startup discount? <a href="#quote" className="font-semibold text-ink-800 underline-offset-4 hover:underline">Ask us</a>.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 *  EMERGENCY / 24-7 ENTERPRISE SUPPORT BAND
 * ============================================================ */
export function EmergencyBand() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-900 py-12 text-white">
      <div className="absolute inset-0 -z-10 dot-bg opacity-25" aria-hidden />
      <div className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-amber-500/30 blur-3xl" aria-hidden />
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-500 text-ink-900">
            <Clock size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400 blink" /> 24/7 Enterprise support
            </div>
            <h3 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">
              P0 page answered in 15 minutes. Yes, even at 3am.
            </h3>
            <p className="mt-1 max-w-2xl text-ink-300">
              Named TAM, dedicated Slack Connect channel, and a 99.99% uptime SLA. Quorum's on-call team
              has shipped 1,400+ incident responses in 2026 — with a 4.96/5 customer rating.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a href="tel:+18555550199" className="btn-amber text-base">
            <Phone size={16} /> (855) 555-0199
          </a>
          <a href="#quote" className="btn-outline border-ink-700 text-white hover:bg-ink-800 hover:text-white">
            Open a support ticket
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  ABOUT — scale, SOC 2, security posture
 * ============================================================ */
export function About() {
  return (
    <section id="about" className="border-b border-ink-100 bg-white py-20">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="chip"><Shield size={12} className="text-amber-500" /> Security & scale</div>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            SOC 2-ready from <span className="text-amber-600">commit zero</span>.
          </h2>
          <p className="mt-4 text-ink-600">
            Most HR vendors retrofit security after the Series B. Quorum ships RLS policies, audit logs,
            data residency controls, and SCIM provisioning with the first commit — so you never have to
            renegotiate enterprise procurement.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { k: 'Built on', v: 'Next.js 15 · Supabase · FastAPI · Vercel' },
              { k: 'Auth',     v: 'Supabase Auth · OAuth · SSO · MFA · SCIM' },
              { k: 'AuthZ',    v: 'Postgres RLS + RBAC, compile-checked at PR time' },
              { k: 'Realtime', v: 'Supabase Realtime on every HRIS sync' },
              { k: 'AI',       v: 'OpenAI · Anthropic · Gemini ensemble with re-rank' },
              { k: 'Residency',v: 'US (default) · EU (Frankfurt) on request' },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-3 gap-3 border-b border-ink-100 pb-3 last:border-0">
                <span className="text-sm font-semibold text-ink-500">{row.k}</span>
                <span className="col-span-2 text-sm text-ink-800">{row.v}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA-ready', 'CCPA', 'NIST CSF'].map((b) => (
              <span key={b} className="chip"><BadgeCheck size={12} className="text-amber-500" /> {b}</span>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-ink-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?auto=format&fit=crop&w=1200&q=70"
                alt="Enterprise customer boardroom"
                width={1200}
                height={700}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-extrabold text-ink-900">99.99%</div>
              <div className="mt-1 text-sm text-ink-600">uptime SLA, measured monthly · 14 months without an incident</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-extrabold text-ink-900">{"<"} 90s</div>
              <div className="mt-1 text-sm text-ink-600">P95 policy-Q&A latency at 10,000 RPS, multi-tenant</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-extrabold text-ink-900">4-tier</div>
              <div className="mt-1 text-sm text-ink-600">tenant isolation: org · workspace · team · individual</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-extrabold text-ink-900">14k+</div>
              <div className="mt-1 text-sm text-ink-600">RLS policies in prod · auto-generated from openapi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  REVIEWS — 3 cards with headshots
 * ============================================================ */
type Review = {
  quote: string;
  name: string;
  role: string;
  company: string;
  img: string;
};
const REVIEWS: Review[] = [
  {
    quote: "We replaced three vendors and a 14-person ops team with Quorum. Our HR response time went from 2 days to 6 minutes. The RLS posture alone closed our SOC 2 audit in 8 weeks.",
    name: 'Maya Patel',
    role: 'VP People Operations',
    company: 'Lattice Robotics',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70',
  },
  {
    quote: "The LLM document pipeline is the part that won us over. It parses 600 offer letters a week, reconciles them against Workday, and flags the 3 that need human eyes. My team got their Fridays back.",
    name: 'Daniel Okafor',
    role: 'Head of Total Rewards',
    company: 'Cobalt Health',
    img: 'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?auto=format&fit=crop&w=200&q=70',
  },
  {
    quote: "I was burned by HRIS vendors that promised SOC 2 and delivered a spreadsheet. Quorum shipped their Type II report two months ahead of schedule. The engineering team actually understands enterprise.",
    name: 'James Whitfield',
    role: 'CTO',
    company: 'Northwind Logistics',
    img: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?auto=format&fit=crop&w=200&q=70',
  },
];
export function Reviews() {
  return (
    <section id="reviews" className="border-b border-ink-100 bg-ink-50 py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="chip"><Quote size={12} className="text-amber-500" /> Customers</div>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              4.9/5 from <span className="text-amber-600">1,847 reviews</span>.
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex text-amber-500">{[0,1,2,3,4].map(i => <Star key={i} size={18} />)}</span>
              <span className="text-sm text-ink-600">on G2 · Capterra · TrustRadius</span>
            </div>
          </div>
          <a href="#quote" className="btn-outline">Read all 1,847 reviews <ArrowRight size={14} /></a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="card flex h-full flex-col p-6">
              <span className="flex text-amber-500">{[0,1,2,3,4].map(i => <Star key={i} size={16} />)}</span>
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-ink-800">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
                <img
                  src={r.img}
                  alt={r.name}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-ink-900">{r.name}</div>
                  <div className="text-xs text-ink-500">{r.role} · {r.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  INTEGRATIONS — logo grid + one big card
 * ============================================================ */
const INTEG_GROUPS = [
  { label: 'HRIS',         items: ['Workday', 'BambooHR', 'Rippling', 'HiBob', 'Personio', 'Gusto', 'Zenefits', 'SAP SuccessFactors'] },
  { label: 'Identity',     items: ['Okta', 'Azure AD', 'Google Workspace', 'OneLogin', 'Auth0', 'JumpCloud'] },
  { label: 'Comms',        items: ['Slack', 'Microsoft Teams', 'Email (SMTP)', 'Twilio SMS', 'Zoom'] },
  { label: 'Productivity', items: ['Google Drive', 'Notion', 'Confluence', 'Jira', 'Linear', 'Asana'] },
  { label: 'Data',         items: ['Snowflake', 'BigQuery', 'Postgres', 'S3', 'Segment'] },
  { label: 'AI',           items: ['Claude', 'GPT-4o', 'Gemini 2.5', 'Mistral', 'Llama 4'] },
];
export function Integrations() {
  return (
    <section id="integrations" className="border-b border-ink-100 bg-white py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="chip"><Plug size={12} className="text-amber-500" /> Integrations</div>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            70+ pre-built connectors. <span className="text-amber-600">Webhooks for everything else.</span>
          </h2>
          <p className="mt-4 text-ink-600">
            Bi-directional sync with the systems your team already runs. Pull data, write back, fan out
            events — all wrapped in your tenant's RLS policy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {INTEG_GROUPS.map((g) => (
            <div key={g.label} className="card p-5">
              <div className="mb-3 flex items-center gap-2">
                <Webhook size={16} className="text-amber-500" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-amber-400">
              <Globe size={18} />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-ink-900">Don't see it? Build it in 20 minutes.</div>
              <p className="text-sm text-ink-600">OpenAPI spec → generated TypeScript + Python SDKs → deploy from your terminal.</p>
            </div>
          </div>
          <a href="#quote" className="btn-outline">Read the API docs <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  QUOTE / DEMO FORM
 * ============================================================ */
export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [seats, setSeats] = useState(120);
  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setSubmitted(false), 4500);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  return (
    <section id="quote" className="relative overflow-hidden border-b border-ink-100 bg-ink-900 py-20 text-white">
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.05]" aria-hidden />
      <div className="absolute -left-32 -bottom-40 -z-10 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" aria-hidden />
      <div className="container-page grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="chip-dark"><Calendar size={12} /> Book a demo</div>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            See Quorum on <span className="text-amber-400">your data</span>.
          </h2>
          <p className="mt-4 text-ink-300">
            20-minute live walkthrough. We'll load a sample of your HRIS schema, run 3 real policy
            questions through Claude, and show you the audit log.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-200">
            <li className="flex items-center gap-2"><Check size={16} className="text-amber-400" /> No credit card required</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-amber-400" /> Bring your own HRIS schema</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-amber-400" /> Walk away with a working pilot in 14 days</li>
          </ul>
          <div className="mt-7 flex items-center gap-3">
            <a href="tel:+18555550199" className="btn-outline border-ink-700 text-white hover:bg-ink-800 hover:text-white">
              <Phone size={16} /> (855) 555-0199
            </a>
            <span className="text-xs text-ink-400">Mon–Fri · 6am–10pm PT</span>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="relative card p-6 text-ink-900 lg:col-span-7 sm:p-8"
        >
          {submitted && (
            <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-white/95 text-center backdrop-blur">
              <div className="px-6">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-signal-100 text-signal-700">
                  <Check size={28} />
                </div>
                <div className="mt-4 font-display text-2xl font-extrabold">You're booked.</div>
                <p className="mt-2 max-w-sm text-ink-600">
                  A real human (not a bot) will reach out within 1 business hour to schedule your
                  20-minute walkthrough.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First name" name="first" placeholder="Maya" required />
            <Field label="Last name"  name="last"  placeholder="Patel" required />
            <Field label="Work email" name="email" type="email" placeholder="maya@acme.com" required colSpan />
            <Field label="Company"    name="company" placeholder="Acme Robotics" required />
            <Field label="Role"       name="role" placeholder="VP People" />
          </div>

          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-sm font-semibold text-ink-800">Headcount</label>
              <span className="font-mono text-sm font-bold text-amber-600">{seats.toLocaleString()} employees</span>
            </div>
            <input
              type="range"
              min={10}
              max={10000}
              step={10}
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-500">
              <span>10</span><span>1,000</span><span>5,000</span><span>10,000+</span>
            </div>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold text-ink-800">Which HRIS do you run?</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Workday', 'BambooHR', 'Rippling', 'HiBob', 'Personio', 'Other'].map((h, i) => (
                <label key={h} className="cursor-pointer">
                  <input type="radio" name="hris" defaultChecked={i === 0} className="peer sr-only" />
                  <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700 transition peer-checked:border-ink-900 peer-checked:bg-ink-900 peer-checked:text-white">
                    {h}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5">
            <label className="text-sm font-semibold text-ink-800">What problem are you trying to solve? (optional)</label>
            <textarea
              name="notes"
              rows={3}
              placeholder="We have 3,000 offer letters in a shared drive. Want to parse + reconcile against Workday automatically."
              className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
            />
          </div>

          <button type="submit" className="btn-amber mt-6 w-full justify-center text-base">
            Book my 20-min demo <ArrowRight size={16} />
          </button>
          <p className="mt-3 text-center text-xs text-ink-500">
            By submitting you agree to Quorum's <a className="underline-offset-2 hover:underline" href="#">privacy policy</a>. We never sell your data.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = 'text', placeholder, required, colSpan,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; colSpan?: boolean }) {
  return (
    <label className={`block ${colSpan ? 'sm:col-span-2' : ''}`}>
      <span className="text-sm font-semibold text-ink-800">{label}{required && <span className="text-amber-600"> *</span>}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
      />
    </label>
  );
}

/* ============================================================
 *  SERVICE AREA + FOOTER combined
 * ============================================================ */
export function ServiceArea() {
  return (
    <section className="border-b border-ink-100 bg-white py-14">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-amber-400">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-ink-900">Serving teams across 4 continents</div>
              <div className="text-sm text-ink-600">US · Canada · UK · EU · Australia · Singapore · Brazil</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-ink-600">
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-amber-500" /> US data residency default</span>
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-amber-500" /> EU region on request</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Brand />
            <p className="mt-4 max-w-sm text-sm text-ink-400">
              The AI-powered HR operations platform for SOC 2-ready teams. Built in San Francisco,
              Berlin, and Singapore.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip-dark !bg-ink-800 !text-amber-400 !ring-1 !ring-ink-700"><BadgeCheck size={12} /> SOC 2 Type II</span>
              <span className="chip-dark !bg-ink-800 !text-amber-400 !ring-1 !ring-ink-700"><BadgeCheck size={12} /> ISO 27001</span>
              <span className="chip-dark !bg-ink-800 !text-amber-400 !ring-1 !ring-ink-700"><BadgeCheck size={12} /> GDPR</span>
            </div>
          </div>
          <FooterCol title="Platform" links={['AI agents', 'Document parsing', 'HRIS sync', 'Analytics', 'API + webhooks']} />
          <FooterCol title="Solutions" links={['HR teams', 'People ops', 'IT + Identity', 'Finance + Total Rewards', 'Startups']} />
          <FooterCol title="Company"   links={['About', 'Customers', 'Security', 'Careers · 12 open', 'Press']} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>© 2026 Quorum Labs, Inc. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">DPA</a>
            <a href="#" className="hover:text-white">Subprocessors</a>
            <a href="#" className="hover:text-white">Status · all systems operational</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">{title}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-ink-300 hover:text-white">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
