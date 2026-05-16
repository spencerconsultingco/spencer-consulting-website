import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Compass,
  MailCheck,
  Menu,
  MessageSquareText,
  PhoneCall,
  PieChart,
  Search,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const navItems = [
  ["Approach", "#approach"],
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
  ["Fit", "#fit"],
];

const painPoints = [
  "Inquiries arrive from calls, forms, social messages, ads, referrals, and walk-ins with no single place to manage them.",
  "Follow-up depends on memory, scattered notes, or whichever team member happens to be available.",
  "Prospects wait too long for a response, get the wrong next step, or quietly choose another provider.",
  "The owner cannot see which opportunities are moving, which are stuck, and which were never handled properly.",
];

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Growth strategy and audits",
    copy: "Find where sales conversations, inquiry handling, booking flows, and follow-up are leaking revenue before adding more activity.",
  },
  {
    icon: Target,
    title: "Sales process improvement",
    copy: "Clarify the path from first inquiry to qualified conversation, appointment, estimate, close, and repeat business.",
  },
  {
    icon: MailCheck,
    title: "Follow-up systems",
    copy: "Create consistent response, reminder, nurture, reactivation, and handoff systems that keep good opportunities from going cold.",
  },
  {
    icon: PieChart,
    title: "CRM and pipeline organization",
    copy: "Set up a practical operating system for leads, contacts, stages, notes, ownership, tasks, and reporting.",
  },
  {
    icon: Zap,
    title: "Automation and AI assistants",
    copy: "Use automation and AI where they reduce delay, improve consistency, and help the team respond with more control.",
  },
  {
    icon: PhoneCall,
    title: "Outbound sales systems",
    copy: "Build targeted outreach, AI-assisted sales agents, scripts, tracking, and follow-up paths for new and dormant opportunities.",
  },
  {
    icon: Compass,
    title: "Web strategy and booking flows",
    copy: "Improve online presence, sales pages, inquiry paths, booking flows, and the way prospects move from interest to action.",
  },
  {
    icon: BarChart3,
    title: "Reporting and optimization",
    copy: "Turn activity into useful visibility so owners can see response quality, pipeline movement, conversion points, and next priorities.",
  },
];

const process = [
  ["Audit", "Understand how opportunities enter the business, where they stall, and what is costing the owner attention, speed, or revenue."],
  ["Prioritize", "Identify the highest-impact improvements across sales process, follow-up, CRM, automation, outbound, and online presence."],
  ["Implement", "Build the right mix of systems, workflows, messaging, AI assistants, booking improvements, and reporting."],
  ["Improve", "Review what is working, adjust the system, and keep the business moving with more clarity and less reactive effort."],
];

const situations = [
  "You receive good inquiries but too many require manual chasing.",
  "Your team is busy, but the sales process feels hard to see or manage.",
  "Your CRM exists, but it is not trusted or used as the real source of truth.",
  "Your online presence creates interest, but the path to inquiry or booking is uneven.",
  "You want outbound growth, but need a more disciplined system before increasing activity.",
  "You know modern tools could help, but need judgment before implementation.",
];

function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-paper";
  const styles = {
    primary: "bg-ink text-paper hover:bg-oxblood",
    secondary: "border border-ink/20 bg-paper/60 text-ink hover:border-ink/45 hover:bg-white",
    inverse: "bg-paper text-ink hover:bg-bone",
    quiet: "border border-paper/20 text-paper hover:bg-paper/10",
  }[variant];

  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brass">{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Spencer Consulting home">
          <span className="grid h-10 w-10 place-items-center border border-ink bg-ink text-sm font-bold text-paper">SC</span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold">Spencer</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-graphite/70">Consulting</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-graphite hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#audit">Book a Growth Audit</Button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center border border-ink/15 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-4" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-base font-semibold">
                {label}
              </a>
            ))}
            <Button href="#audit" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book a Growth Audit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div className="absolute inset-0 rule-grid opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <motion.div {...fadeUp}>
          <div className="mb-8 inline-flex items-center gap-3 border border-ink/12 bg-paper/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite shadow-soft backdrop-blur">
            <span className="h-2 w-2 bg-brass" />
            Growth consulting for service businesses
          </div>
          <h1 className="headline-balance max-w-5xl font-serif text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            We help service businesses grow with sharper sales processes, stronger follow-up, and smarter systems.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-graphite lg:text-xl">
            Spencer Consulting combines strategy, CRM, automation, AI assistants, outbound sales systems, and web strategy to help businesses handle more opportunities and turn them into revenue.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#audit">Book a Growth Audit</Button>
            <Button href="#capabilities" variant="secondary">See How We Help</Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="border border-ink/12 bg-[#fbf8f0]/92 p-5 shadow-premium backdrop-blur">
            <div className="border border-ink/10 bg-paper p-5">
              <div className="mb-5 flex items-center justify-between border-b border-ink/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Opportunity review</p>
                  <p className="mt-1 font-serif text-2xl font-semibold">Inquiry to revenue</p>
                </div>
                <CalendarCheck className="h-7 w-7 text-moss" />
              </div>
              <div className="grid gap-3">
                {[
                  ["Inquiry captured", "Calls, forms, DMs, referrals"],
                  ["Response assigned", "Owner, coordinator, sales lead"],
                  ["Follow-up scheduled", "Reminders, nurture, reactivation"],
                  ["Revenue path visible", "Pipeline, booking, reporting"],
                ].map(([label, detail], index) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-4 border border-ink/10 bg-white/55 p-4"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.28 + index * 0.1 }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center bg-ink text-paper">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{label}</span>
                      <span className="block text-sm text-graphite/75">{detail}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden border border-ink/12 bg-moss px-5 py-4 text-paper shadow-soft sm:block">
            <p className="text-xs uppercase tracking-[0.18em] text-paper/70">Focus</p>
            <p className="mt-1 font-serif text-2xl">Better handling, not more noise.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="approach" className="bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div {...fadeUp}>
          <SectionLabel>The real growth problem</SectionLabel>
          <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Service businesses rarely lose revenue in one obvious place.
          </h2>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <p className="max-w-3xl text-xl leading-9 text-paper/82">
            Revenue slips through small gaps: slow response, unclear ownership, weak follow-up, messy pipelines, confusing booking paths, and tools that never became a working operating rhythm.
          </p>
          <div className="mt-8 grid gap-3">
            {painPoints.map((point) => (
              <div key={point} className="flex gap-4 border-t border-paper/14 py-4">
                <Search className="mt-1 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
                <p className="leading-7 text-paper/76">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div className="max-w-4xl" {...fadeUp}>
          <SectionLabel>How Spencer Consulting works</SectionLabel>
          <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            We start with the business reality, then build the systems around it.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite">
            The work is not about installing tools for their own sake. It is about improving how opportunities are received, qualified, followed up, booked, sold, tracked, and improved. Modern automation and AI are useful when they support that commercial discipline.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Commercial judgment first", "We look at how the business makes money, where owners lose control, and which changes will matter soonest."],
            ["Implementation that fits", "CRM, automation, AI assistants, outbound systems, and web strategy are selected for the actual sales process."],
            ["A cleaner operating rhythm", "The goal is practical visibility, faster response, better follow-up, and a system the team can use consistently."],
          ].map(([title, copy], index) => (
            <motion.article
              key={title}
              className="border border-ink/10 bg-white/45 p-6 shadow-soft"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
            >
              <span className="mb-8 block h-1 w-12 bg-brass" />
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-graphite">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-ink/10 bg-[#fbf8f0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end" {...fadeUp}>
          <div className="max-w-3xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Strategy, sales process, systems, and execution in one place.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-graphite">
            Spencer Consulting is built for owners who need more than a designer, a tool installer, or a one-off automation build.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, copy }, index) => (
            <motion.article
              key={title}
              className="min-h-[250px] bg-[#fbf8f0] p-6"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.035 }}
            >
              <Icon className="h-7 w-7 text-brass" aria-hidden="true" />
              <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <SectionLabel>Audit-first process</SectionLabel>
          <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Understand the lost opportunities before prescribing the system.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {process.map(([title, copy], index) => (
            <motion.div key={title} className="relative border-l border-ink/16 pl-6" {...fadeUp}>
              <span className="mb-5 grid h-10 w-10 place-items-center bg-ink text-sm font-bold text-paper">{index + 1}</span>
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-graphite">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section id="fit" className="bg-moss py-20 text-paper lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <motion.div {...fadeUp}>
          <SectionLabel>Good fit</SectionLabel>
          <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Built for service businesses where speed, trust, and follow-through shape revenue.
          </h2>
          <p className="mt-6 leading-8 text-paper/78">
            Beauty businesses, med spas, salons, home services, trades, wellness businesses, professional services, and appointment-based local businesses often need the same thing: a cleaner way to handle demand.
          </p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {situations.map((situation, index) => (
            <motion.div
              key={situation}
              className="border border-paper/14 bg-paper/7 p-5"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
            >
              <Check className="mb-5 h-5 w-5 text-brass" aria-hidden="true" />
              <p className="leading-7 text-paper/82">{situation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div className="grid gap-10 border-y border-ink/10 py-14 lg:grid-cols-[0.85fr_1.15fr]" {...fadeUp}>
          <div>
            <SectionLabel>Why different</SectionLabel>
            <h2 className="headline-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">Modern execution without the gimmick.</h2>
          </div>
          <div className="grid gap-6">
            {[
              ["Not just a web project", "Your online presence matters, but only as part of the larger path from first impression to inquiry, conversation, booking, and revenue."],
              ["Not just automation", "A faster broken process is still broken. The work begins with process, ownership, message quality, and pipeline clarity."],
              ["Not tool resale", "AI assistants, CRMs, and outbound systems are chosen and shaped around the business, not treated as the brand or the strategy."],
            ].map(([title, copy]) => (
              <div key={title} className="grid gap-3 border-b border-ink/10 pb-6 sm:grid-cols-[14rem_1fr]">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="leading-7 text-graphite">{copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuditCta() {
  return (
    <section id="audit" className="border-t border-ink/10 bg-ink py-20 text-paper lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <motion.div {...fadeUp}>
          <SectionLabel>Next step</SectionLabel>
          <h2 className="headline-balance max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Book a Growth Audit and see where better handling could create more revenue.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/78">
            The audit is designed to identify practical improvements across inquiry capture, follow-up, CRM, automation, outbound, booking flows, reporting, and the way prospects become customers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:hello@spencerconsulting.co?subject=Growth%20Audit%20Request" variant="inverse">
              Book a Growth Audit
            </Button>
            <a href="#approach" className="inline-flex min-h-12 items-center justify-center gap-2 border border-paper/18 px-5 py-3 text-sm font-semibold text-paper hover:bg-paper/8">
              Review the approach <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <motion.div className="border border-paper/14 bg-paper/7 p-6" {...fadeUp}>
          <h3 className="font-serif text-2xl font-semibold">What the audit looks at</h3>
          <div className="mt-6 grid gap-4">
            {[
              "Where leads and inquiries currently come from",
              "How quickly and consistently prospects are handled",
              "How the team tracks ownership, stage, next step, and outcome",
              "Where CRM, automation, AI assistants, outbound, and web strategy can create leverage",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                <p className="leading-7 text-paper/78">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#100f0d] px-5 py-10 text-paper lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-paper/12 pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-2xl font-semibold">Spencer Consulting</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-paper/60">
            Growth consulting, sales process improvement, CRM, automation, AI assistants, outbound systems, and web strategy for service businesses.
          </p>
        </div>
        <a href="mailto:hello@spencerconsulting.co" className="inline-flex items-center gap-2 text-sm font-semibold text-paper/78 hover:text-paper">
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          hello@spencerconsulting.co
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Capabilities />
        <Process />
        <Fit />
        <Difference />
        <AuditCta />
      </main>
      <Footer />
    </>
  );
}
