import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ClipboardList,
  Database,
  LineChart,
  MailCheck,
  Menu,
  MessagesSquare,
  PhoneCall,
  SearchCheck,
  Target,
  X,
} from "lucide-react";
import "./styles.css";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.09 } },
  viewport: { once: true, margin: "-80px" },
};

const navItems = [
  ["Audit", "#audit"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Website Offer", "#website"],
  ["Contact", "#contact"],
];

const leaks = [
  "Calls go unanswered while staff are with clients.",
  "Website visitors leave before they understand how to book.",
  "Follow-up happens hours later, or not at all.",
  "Leads live across texts, forms, emails, notes, and spreadsheets.",
  "Owners cannot see which opportunities are active, stalled, or lost.",
  "Good businesses lose customers to faster competitors.",
];

const process = [
  {
    title: "Audit",
    text: "We review your website, lead flow, calls, booking process, CRM, and follow-up system to identify where opportunities are being lost.",
  },
  {
    title: "Prioritize",
    text: "We identify the highest-impact fixes first, based on speed, cost, operational fit, and revenue potential.",
  },
  {
    title: "Implement",
    text: "We build or improve the systems needed to capture leads, follow up faster, book more appointments, and track every opportunity.",
  },
  {
    title: "Optimize",
    text: "We review performance, improve weak points, and refine the system as your business grows.",
  },
];

const services = [
  {
    icon: SearchCheck,
    title: "Revenue System Audit",
    text: "Identify gaps in your website, calls, booking process, follow-up, and CRM.",
  },
  {
    icon: Target,
    title: "Website & Funnel Optimization",
    text: "Create a site that builds trust, explains your offer clearly, and moves visitors toward booking.",
  },
  {
    icon: PhoneCall,
    title: "AI Receptionist & Call Handling",
    text: "Capture missed calls, answer common questions, qualify leads, and route serious prospects.",
  },
  {
    icon: MessagesSquare,
    title: "Outbound Appointment Systems",
    text: "Use targeted outreach and follow-up systems to start more conversations with qualified prospects.",
  },
  {
    icon: Database,
    title: "CRM & Pipeline Management",
    text: "Track every lead, conversation, appointment, and deal in one organized system.",
  },
  {
    icon: MailCheck,
    title: "Follow-Up Automation",
    text: "Automate SMS, email, reminders, callbacks, and no-answer follow-up so fewer leads fall through the cracks.",
  },
];

const scenarios = [
  ["Missed Calls", "A busy salon misses calls during appointments. We implement an inbound assistant and follow-up workflow so inquiries are captured automatically."],
  ["No Website", "A service business has strong Google reviews but no professional site. We build a trust-focused presence that turns search traffic into inquiries."],
  ["Slow Follow-Up", "A med spa responds when staff have time. We create workflows that follow up within minutes and keep prospects warm."],
  ["Scattered Leads", "A business tracks opportunities across texts, notes, and spreadsheets. We centralize the pipeline so every lead has a clear next step."],
];

function Button({ href, children, variant = "primary" }) {
  return (
    <a className={`button ${variant === "secondary" ? "button-secondary" : "button-primary"}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Spencer Consulting home">
          <span className="grid h-10 w-10 place-items-center border border-white/20 bg-white/10 font-serif text-xl">S</span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em]">Spencer Consulting</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a className="nav-link" href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#contact">Book a Growth Audit</Button>
        </div>
        <button className="grid h-11 w-11 place-items-center border border-white/20 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden">
          <nav className="grid gap-4" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a className="text-sm font-medium text-white/80" href={href} key={label} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <Button href="#contact">Book a Growth Audit</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-20 text-white">
      <div className="absolute inset-0 opacity-[0.18]">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,24,37,0.98)_0%,rgba(13,24,37,0.9)_42%,rgba(13,24,37,0.55)_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.04fr_0.82fr] lg:py-24">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="eyebrow text-white/70">Business growth and cash-flow optimization</p>
          <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">
            Turn missed opportunities into booked appointments.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Spencer Consulting helps local service businesses audit, improve, and automate the systems that turn calls, website visitors, and leads into paying customers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Book a Growth Audit</Button>
            <Button href="#process" variant="secondary">See How It Works</Button>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="hidden lg:block">
          <div className="hero-panel">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-white/60">Revenue System Review</p>
                <p className="mt-1 text-xl font-semibold">Lead to booked appointment</p>
              </div>
              <LineChart className="text-brass" size={28} />
            </div>
            <div className="mt-7 grid gap-4">
              {["Website inquiry captured", "Missed call routed", "Follow-up sent", "Appointment booked"].map((item, index) => (
                <div className="flex items-center justify-between bg-white/[0.06] px-4 py-4" key={item}>
                  <span className="text-sm text-white/75">{item}</span>
                  <span className={`h-2.5 w-2.5 ${index < 3 ? "bg-brass" : "bg-sage"}`} />
                </div>
              ))}
            </div>
            <div className="mt-7 border border-white/10 p-5">
              <p className="text-3xl font-semibold">Cleaner path.</p>
              <p className="mt-2 text-sm leading-6 text-white/60">Every channel gets a clear next step, so fewer opportunities disappear between inquiry and revenue.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="audit" className="section bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div {...fadeUp}>
          <p className="eyebrow">The common problem</p>
          <h2 className="section-title">Revenue rarely leaks from one obvious place.</h2>
          <p className="section-copy">
            Most businesses do not lose revenue because they lack talent. They lose revenue because the path from inquiry to booked appointment is broken. A missed call, a slow response, a confusing website, or an untracked follow-up can quietly cost thousands each month.
          </p>
        </motion.div>
        <motion.div {...stagger} className="grid gap-3 sm:grid-cols-2">
          {leaks.map((item) => (
            <motion.div variants={fadeUp} className="leak-card" key={item}>
              <Check size={18} />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section bg-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">We improve the revenue system before adding more complexity.</h2>
        </motion.div>
        <motion.div {...stagger} className="mt-14 grid gap-4 lg:grid-cols-4">
          {process.map((step, index) => (
            <motion.article variants={fadeUp} className="process-card" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title">Practical systems that recover missed revenue.</h2>
          </div>
          <p className="section-copy">
            Websites, CRM, call handling, outbound systems, automations, and AI assistants are treated as parts of one operating system: the path from interested prospect to booked appointment to paid client.
          </p>
        </motion.div>
        <motion.div {...stagger} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.article variants={fadeUp} className="service-card" key={title}>
              <div className="service-icon"><Icon size={23} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WebsiteOffer() {
  const items = [
    "Professionally built landing page or website",
    "Mobile-responsive design",
    "Clear offer positioning",
    "Trust-building structure",
    "Contact or booking integration",
    "One revision round",
    "Optional hosting and maintenance",
  ];

  return (
    <section id="website" className="section bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div {...fadeUp} className="relative min-h-[520px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
            alt="Professional consultation at a service business"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy/25" />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-6 text-ink">
            <p className="text-sm uppercase tracking-[0.2em] text-brass">First visible leak</p>
            <p className="mt-3 text-2xl font-semibold">Strong reviews need a clear path to action.</p>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <p className="eyebrow text-white/60">Website offer</p>
          <h2 className="section-title text-white">A better website is often the first fix.</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            For many businesses, the website is the first visible leak. If your business has strong reviews but no clear website, weak booking flow, or poor follow-up, we can build a professional site that gives customers confidence and makes it easier to take action.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div className="flex items-start gap-3 border border-white/10 bg-white/[0.04] p-4" key={item}>
                <Check className="mt-0.5 shrink-0 text-brass" size={17} />
                <span className="text-sm leading-6 text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    "Business-first approach",
    "Practical implementation, not theory",
    "Systems designed around revenue",
    "Clear communication",
    "Built for busy service business owners",
    "Automation used only where it improves the outcome",
  ];

  return (
    <section className="section bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="eyebrow">Why Spencer Consulting</p>
          <h2 className="section-title">A serious operating partner for service businesses.</h2>
          <p className="section-copy">
            We do not add technology for the sake of technology. Every system we build has one purpose: help your business respond faster, follow up better, and convert more opportunities into revenue.
          </p>
        </motion.div>
        <motion.div {...stagger} className="grid gap-3">
          {points.map((point) => (
            <motion.div variants={fadeUp} className="why-row" key={point}>
              <CalendarCheck size={18} />
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section className="section bg-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="eyebrow">Common revenue leak examples</p>
          <h2 className="section-title">Small operational gaps become expensive when they repeat every week.</h2>
        </motion.div>
        <motion.div {...stagger} className="mt-14 grid gap-5 md:grid-cols-2">
          {scenarios.map(([title, text]) => (
            <motion.article variants={fadeUp} className="scenario-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="section bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_0.86fr] lg:items-start">
        <motion.div {...fadeUp}>
          <ClipboardList className="text-brass" size={36} />
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Find out where your business is leaking revenue.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Book a Spencer Consulting audit and get a clear view of the systems, follow-up gaps, and conversion points that are costing you booked appointments.
          </p>
          <div className="mt-9 grid gap-4 text-sm leading-6 text-white/70 sm:grid-cols-3">
            <div className="border-l border-brass pl-4">Lead capture and booking flow review</div>
            <div className="border-l border-brass pl-4">CRM and follow-up visibility check</div>
            <div className="border-l border-brass pl-4">Prioritized implementation roadmap</div>
          </div>
        </motion.div>
        <motion.form
          {...fadeUp}
          className="audit-form"
          action="mailto:hello@spencerconsulting.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-brass">Growth audit request</p>
            <p className="mt-3 text-2xl font-semibold">Tell us where the system feels leaky.</p>
          </div>
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Business type</span>
            <input name="business_type" type="text" placeholder="Med spa, salon, home services, wellness..." />
          </label>
          <label>
            <span>What needs attention?</span>
            <textarea name="message" rows="4" placeholder="Missed calls, slow follow-up, weak website, scattered leads..." />
          </label>
          <button className="button button-primary w-full" type="submit">
            <span>Book a Growth Audit</span>
            <ArrowRight size={17} strokeWidth={2} />
          </button>
          <a className="text-center text-sm font-medium text-white/70 transition hover:text-white" href="mailto:hello@spencerconsulting.com?subject=Consulting%20Conversation">
            Or talk to Spencer Consulting first
          </a>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-9 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-serif text-3xl">Spencer Consulting</p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
            Cash-flow optimization, websites, AI assistants, CRM, and automation systems for service businesses.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60" aria-label="Footer navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Services />
        <WebsiteOffer />
        <Why />
        <Scenarios />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
