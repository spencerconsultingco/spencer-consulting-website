import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardCheck,
  Database,
  Gauge,
  Layers3,
  MailCheck,
  Menu,
  PhoneCall,
  Radar,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "./styles.css";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

const navItems = [
  ["The Audit", "#audit"],
  ["Method", "#method"],
  ["Systems", "#systems"],
  ["Website", "#website"],
  ["Contact", "#contact"],
];

const leakPoints = [
  ["Unanswered calls", "Prospects reach voicemail while the team is serving clients."],
  ["Slow response", "Leads wait hours for a reply and book with the first business that responds."],
  ["Weak booking path", "The website creates interest, then makes the next step unclear."],
  ["Scattered pipeline", "Texts, forms, calls, DMs, and old leads live in separate places."],
  ["No reactivation", "Past inquiries and no-shows are never followed up with again."],
  ["Limited visibility", "The owner cannot see where opportunities are active, stalled, or lost."],
];

const method = [
  {
    icon: Radar,
    title: "Diagnose the revenue path",
    text: "We map every touchpoint from first inquiry to booked appointment, then identify the points where speed, clarity, or ownership breaks down.",
  },
  {
    icon: SlidersHorizontal,
    title: "Design the operating system",
    text: "We define the simple, right-sized system your team needs: capture, route, respond, book, follow up, and report.",
  },
  {
    icon: Layers3,
    title: "Build the working stack",
    text: "We implement the website, CRM, automations, booking flow, call handling, and assistant workflows that support the customer journey.",
  },
  {
    icon: Gauge,
    title: "Operate and improve",
    text: "We review what is working, tighten the weak points, and keep improving the system as the business grows.",
  },
];

const systems = [
  {
    icon: ClipboardCheck,
    title: "Revenue System Audit",
    text: "A clear assessment of where leads, calls, bookings, follow-up, and owner visibility are breaking down.",
  },
  {
    icon: Route,
    title: "Lead Capture & Booking Flow",
    text: "A cleaner path from website visitor, phone call, or message to the next right action.",
  },
  {
    icon: PhoneCall,
    title: "Inbound Call Handling",
    text: "Missed-call recovery, routing, qualification, and practical assistant workflows for busy teams.",
  },
  {
    icon: MailCheck,
    title: "Follow-Up Automation",
    text: "SMS, email, reminders, no-answer sequences, callbacks, and reactivation campaigns.",
  },
  {
    icon: Database,
    title: "CRM & Pipeline Management",
    text: "Organized lead stages, owner visibility, task ownership, and a single source of truth.",
  },
  {
    icon: BarChart3,
    title: "Website & Funnel Optimization",
    text: "Trust-building pages and landing flows that support the larger revenue system.",
  },
];

const auditOutputs = [
  "Lead source and response-time review",
  "Website and booking-path diagnosis",
  "Missed-call and no-answer workflow review",
  "CRM and pipeline visibility assessment",
  "Follow-up and reactivation opportunities",
  "Prioritized implementation plan",
];

function Button({ href, children, tone = "dark" }) {
  return (
    <a href={href} className={`button ${tone === "light" ? "button-light" : "button-dark"}`}>
      <span>{children}</span>
      <ArrowRight size={17} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="Spencer Consulting home">
          <span className="brand-mark">SC</span>
          <span>Spencer Consulting</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="desktop-cta">
          <Button href="#contact">Request Revenue Audit</Button>
        </div>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Button href="#contact">Request Revenue Audit</Button>
        </motion.nav>
      )}
    </header>
  );
}

function HeroSystem() {
  const rows = [
    ["Call", "No answer", "Recover"],
    ["Website", "Unclear CTA", "Rebuild"],
    ["Form", "Slow reply", "Automate"],
    ["Old lead", "No follow-up", "Reactivate"],
  ];

  return (
    <motion.div {...reveal} className="system-board">
      <div className="board-header">
        <div>
          <p>Revenue path</p>
          <h2>Leak Review</h2>
        </div>
        <span>Live diagnostic</span>
      </div>
      <div className="path-line">
        {["Inquiry", "Response", "Booking", "Revenue"].map((item) => (
          <div key={item}>
            <span />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="board-table">
        {rows.map(([source, issue, action]) => (
          <div className="board-row" key={source}>
            <strong>{source}</strong>
            <span>{issue}</span>
            <em>{action}</em>
          </div>
        ))}
      </div>
      <div className="board-note">
        <ShieldCheck size={18} />
        <p>No new complexity until the current revenue path is visible.</p>
      </div>
    </motion.div>
  );
}

function HeroCommand() {
  return (
    <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="hero-command">
      <div className="command-input">
        <span>Where are appointments being lost?</span>
        <button aria-label="Submit audit prompt">
          <ArrowRight size={24} />
        </button>
      </div>
      <div className="command-chips" aria-label="Common audit starting points">
        {["Missed calls", "Slow follow-up", "Weak booking flow", "Scattered leads"].map((item) => (
          <a href="#audit" key={item}>
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  const [position, setPosition] = React.useState({ x: 50, y: 44 });

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  }

  return (
    <section
      id="top"
      className="hero"
      onPointerMove={handlePointerMove}
      style={{ "--cursor-x": `${position.x}%`, "--cursor-y": `${position.y}%` }}
    >
      <div className="hero-shadow hero-shadow-one" />
      <div className="hero-shadow hero-shadow-two" />
      <div className="hero-cursor-glow" />
      <div className="hero-inner">
        <motion.div {...reveal} className="hero-copy">
          <p className="kicker">Revenue systems for local service businesses</p>
          <h1>Recover the revenue hiding inside your current leads.</h1>
          <p>
            Spencer Consulting audits the path from first inquiry to booked appointment, then builds the websites, CRM workflows, call handling, automations, and AI assistants that keep qualified opportunities from slipping away.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Request Revenue Audit</Button>
            <Button href="#audit" tone="light">See What We Review</Button>
          </div>
        </motion.div>
        <HeroCommand />
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.16 }} className="hero-segments">
          {["Beauty & wellness", "Med spas", "Home services", "Trades", "Appointment-based SMBs"].map((segment) => (
            <span key={segment}>{segment}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Audit() {
  return (
    <section id="audit" className="section paper">
      <div className="split">
        <motion.div {...reveal}>
          <p className="kicker">The real problem</p>
          <h2>Most service businesses do not have a lead problem first.</h2>
          <p className="lead">
            They have a response problem, a booking problem, a follow-up problem, or a visibility problem. The business may already be creating demand, but the path from interest to revenue is too easy to interrupt.
          </p>
        </motion.div>
        <motion.div {...reveal} className="leak-grid">
          {leakPoints.map(([title, text]) => (
            <article className="leak-card" key={title}>
              <ChevronRight size={18} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="section dark">
      <div className="section-head">
        <motion.div {...reveal}>
          <p className="kicker">The Spencer method</p>
          <h2>From scattered activity to a revenue operating system.</h2>
        </motion.div>
        <motion.p {...reveal} className="lead">
          The goal is not more software. The goal is a business that responds faster, follows up consistently, books cleanly, and gives the owner a clear view of every opportunity.
        </motion.p>
      </div>
      <div className="method-grid">
        {method.map(({ icon: Icon, title, text }, index) => (
          <motion.article {...reveal} className="method-card" key={title}>
            <span>0{index + 1}</span>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="section warm">
      <div className="section-head">
        <motion.div {...reveal}>
          <p className="kicker">What we build</p>
          <h2>Every implementation supports the same commercial outcome.</h2>
        </motion.div>
        <motion.p {...reveal} className="lead">
          More booked appointments. Faster response. Cleaner follow-up. Better owner visibility. AI and automation are used only where they make the business easier to run and harder to drop leads.
        </motion.p>
      </div>
      <div className="systems-grid">
        {systems.map(({ icon: Icon, title, text }) => (
          <motion.article {...reveal} className="system-card" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Website() {
  return (
    <section id="website" className="section paper website-section">
      <div className="website-shell">
        <motion.div {...reveal}>
          <p className="kicker">Website as part of the system</p>
          <h2>A better website is often the first visible fix, not the whole engagement.</h2>
          <p className="lead">
            If your business has strong reviews but a weak website, unclear offer, poor booking path, or disconnected follow-up, we can rebuild the public-facing experience and connect it to the operational system behind it.
          </p>
          <div className="check-list">
            {["Professional landing page or website", "Mobile-first booking path", "Clear service positioning", "Trust and review structure", "Contact or calendar integration", "Optional hosting and maintenance"].map((item) => (
              <div key={item}>
                <Check size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal} className="audit-output">
          <p>Audit outputs</p>
          {auditOutputs.map((item) => (
            <div key={item}>
              <Check size={16} />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-grid">
        <motion.div {...reveal}>
          <p className="kicker">Start here</p>
          <h2>Request a Revenue Leak Audit.</h2>
          <p className="lead">
            Get a clear, practical view of where booked appointments are being lost and what should be fixed first.
          </p>
          <div className="contact-points">
            <span>Built for appointment-based local businesses</span>
            <span>No fake complexity or software-first recommendations</span>
            <span>Clear plan before implementation begins</span>
          </div>
        </motion.div>
        <motion.form {...reveal} className="contact-form" action="mailto:hello@spencerconsulting.com" method="post" encType="text/plain">
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
            <input name="business_type" type="text" placeholder="Salon, med spa, trades, wellness..." />
          </label>
          <label>
            <span>Where are leads being lost?</span>
            <textarea name="message" rows="4" placeholder="Missed calls, slow replies, no CRM, weak booking flow..." />
          </label>
          <button className="button button-dark" type="submit">
            <span>Request Revenue Audit</span>
            <ArrowRight size={17} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Spencer Consulting</strong>
        <p>Revenue systems, websites, CRM, follow-up automation, call handling, and practical AI assistants for service businesses.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audit />
        <Method />
        <Systems />
        <Website />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
