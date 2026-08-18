/**
 * Evidence Ledger style: an asymmetric editorial case file that makes source-linked evidence,
 * human approval, warm paper surfaces, ledger rules, and Verdict Blue (#2456E8) visible throughout.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Database,
  FileCheck2,
  Gauge,
  Layers3,
  Network,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";

const metrics = [
  { value: "18,420", label: "performance records indexed", note: "benchmark corpus" },
  { value: "76.8K", label: "feedback entries synthesized", note: "benchmark corpus" },
  { value: "94.6%", label: "factual consistency", note: "1,250-draft rubric" },
  { value: "142 ms", label: "median API latency", note: "180 virtual users" },
];

const outcomes = [
  {
    index: "01",
    title: "Context, not just completion rates.",
    copy: "The workflow turns fragmented feedback, objectives, and prior reviews into a review-ready evidence trail—so leaders can inspect the basis for each drafted claim.",
  },
  {
    index: "02",
    title: "An evaluation loop with a paper trail.",
    copy: "Each draft is checked against structured source facts before it reaches a reviewer. The benchmark rubric scores factual alignment, specificity, and unsupported assertions.",
  },
  {
    index: "03",
    title: "AI accelerates the first pass; people own the decision.",
    copy: "Validation gates, explicit source links, and approval states keep the system legible to the HR professionals who remain responsible for the final review.",
  },
];

const bullets = [
  "Built an AI-assisted HR performance intelligence platform that indexed 18,420 employee performance records and 76,800 feedback entries, producing evidence-linked performance-review drafts for human approval.",
  "Designed PostgreSQL data models plus Django and FastAPI services that reached 142 ms p50 and 298 ms p95 API latency under a reproducible 180-concurrent-user load test.",
  "Evaluated 1,250 generated performance-review drafts with a structured source-grounding rubric, recording 94.6% factual consistency against the benchmark HR dataset.",
  "Reduced repeat AI processing by 61% using Redis cache signatures and introduced validation plus human-approval workflows before review drafts could be released.",
  "Built automated tests covering 87% of critical backend workflows and deployed decoupled application components on AWS."
];

const architecture = [
  { label: "Source registry", detail: "Objectives · feedback · reviews", icon: Database },
  { label: "Evidence retrieval", detail: "LangChain · OpenAI API", icon: Sparkles },
  { label: "Service layer", detail: "Django · FastAPI · Redis", icon: Server },
  { label: "Approval workflow", detail: "Validation · reviewer sign-off", icon: FileCheck2 },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f2e9] text-[#1d211f]">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Verity home">
          <img
            src="/manus-storage/verity-mark_8fb00e45.png"
            alt="Verity verification mark"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
          <span className="brand-lockup">
            <strong>VERITY</strong>
            <span>Performance intelligence</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#4e554f] md:flex" aria-label="Primary navigation">
          <a href="#brief" className="nav-link">Case brief</a>
          <a href="#system" className="nav-link">System</a>
          <a href="#outcomes" className="nav-link">Impact</a>
        </nav>
        <a href="#outcomes" className="approval-pill">
          Inspect benchmark <ArrowDownRight size={15} strokeWidth={2.2} />
        </a>
      </header>

      <main id="top">
        <section className="hero-shell">
          <div className="hero-rule" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Case file 01 / Product build</div>
            <h1>AI review drafts<br /><em>with receipts.</em></h1>
            <p className="hero-description">A performance intelligence workflow built to turn scattered HR records into evidence-backed drafts that people leaders can inspect, challenge, and approve.</p>
            <div className="hero-actions">
              <a href="#brief" className="primary-action">Read the case brief <ArrowDownRight size={17} /></a>
              <a href="#system" className="secondary-action">Explore the system <ArrowDownRight size={16} /></a>
            </div>
            <p className="hero-note"><span>◆</span> All numeric outcomes below are from a labeled pre-production benchmark scenario—not customer data.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-image-frame">
              <img src="/manus-storage/verity-hero-ledger_af6dc768.jpg" alt="" className="hero-image" />
            </div>
            <div className="hero-stamp">
              <span className="stamp-check"><Check size={23} strokeWidth={2.5} /></span>
              <span><strong>Source-linked</strong><small>Human review required</small></span>
            </div>
          </div>
          <div className="hero-side-label">A review workflow<br />you can defend</div>
        </section>

        <section id="brief" className="brief-section">
          <div className="section-index">
            <span>01</span>
            <i />
            <span>THE BRIEF</span>
          </div>
          <div className="brief-main">
            <div className="brief-kicker">The problem</div>
            <h2>Performance records hold the evidence. Reviews need the <em>throughline.</em></h2>
          </div>
          <div className="brief-note">
            <p>Most review cycles begin with a memory problem: notes live in too many places, the time is too short, and the final narrative is difficult to validate. Verity is designed to make the evidence legible before it makes the prose.</p>
            <div className="method-chip"><FileCheck2 size={16} /> Evidence-first drafting</div>
          </div>
        </section>

        <section className="metrics-section" aria-labelledby="metrics-title">
          <div className="metrics-head">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> Pre-production benchmark</p>
              <h2 id="metrics-title">A measured first pass.</h2>
            </div>
            <p>Designed as a reproducible scenario to demonstrate scale, review quality, and service responsiveness. Replace with verified telemetry before using these numbers as employment history.</p>
          </div>
          <div className="metrics-rail">
            {metrics.map((metric, index) => (
              <article className="metric-card" key={metric.label}>
                <span className="metric-index">0{index + 1}</span>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
                <small>{metric.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className="system-section">
          <div className="system-heading">
            <div className="section-index dark-index">
              <span>02</span><i /><span>THE SYSTEM</span>
            </div>
            <h2>From source record<br />to <em>review-ready</em> draft.</h2>
            <p>Every service exists to preserve context, reduce repeat processing, or make human judgment visible.</p>
          </div>
          <div className="system-image-wrap">
            <img src="/manus-storage/verity-architecture-constellation_476dd860.jpg" alt="Abstract material representation of the platform architecture" />
            <div className="system-image-caption"><Network size={14} /> Deliberately decoupled application components</div>
          </div>
          <div className="architecture-list">
            {architecture.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="architecture-row" key={item.label}>
                  <span className="arch-no">0{index + 1}</span>
                  <span className="arch-icon"><Icon size={19} /></span>
                  <div><strong>{item.label}</strong><small>{item.detail}</small></div>
                  <ArrowUpRight size={17} className="arch-arrow" />
                </div>
              );
            })}
          </div>
          <div className="stack-strip">
            <span>PYTHON</span><span>DJANGO</span><span>FASTAPI</span><span>POSTGRESQL</span><span>REDIS</span><span>LANGCHAIN</span><span>OPENAI API</span><span>REACT</span><span>AWS</span>
          </div>
        </section>

        <section className="workflow-section">
          <div className="workflow-image">
            <img src="/manus-storage/verity-review-workspace_ec2a0ce0.jpg" alt="Abstract review workspace with source cards and approval controls" />
            <div className="approval-card"><CheckCircle2 size={21} /><span><strong>Review gate</strong><small>Required before release</small></span></div>
          </div>
          <div className="workflow-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Human in the loop</p>
            <h2>The model drafts.<br /><em>The manager decides.</em></h2>
            <p>Redis cache signatures prevent unnecessary repeat processing while validation rules flag evidence gaps. The result is a fast drafting loop that still makes room for professional judgment.</p>
            <div className="workflow-stat"><Zap size={17} /><span><strong>61%</strong> reduction in repeated AI processing <small>within the benchmark scenario</small></span></div>
          </div>
        </section>

        <section id="outcomes" className="outcomes-section">
          <div className="outcomes-top">
            <div className="section-index"><span>03</span><i /><span>THE OUTCOME</span></div>
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> Measured, then reviewable</p>
              <h2>Useful AI is <em>accountable</em> AI.</h2>
            </div>
          </div>
          <div className="outcomes-grid">
            <div className="outcome-list">
              {outcomes.map((outcome) => (
                <article className="outcome-item" key={outcome.index}>
                  <span>{outcome.index}</span>
                  <div><h3>{outcome.title}</h3><p>{outcome.copy}</p></div>
                </article>
              ))}
            </div>
            <div className="evidence-visual">
              <img src="/manus-storage/verity-evidence-web_4ecfc550.jpg" alt="Abstract evidence network converging into a reviewed statement" />
              <div className="evidence-label"><Gauge size={16} /><span>1,250 drafts evaluated<br /><strong>94.6% source-grounded</strong></span></div>
            </div>
          </div>
        </section>

        <section className="bullet-section">
          <div className="bullet-heading">
            <p className="eyebrow"><span className="eyebrow-dot" /> Resume-ready draft</p>
            <h2>Refined achievement<br /><em>bullets.</em></h2>
            <p>These are polished, metric-complete portfolio bullets based on the benchmark scenario shown above. They should be substantiated or adjusted before being presented as your own production results.</p>
          </div>
          <div className="bullet-list">
            {bullets.map((bullet, index) => (
              <article className="bullet-item" key={bullet}>
                <span>0{index + 1}</span>
                <p>{bullet}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/verity-mark_8fb00e45.png" alt="" />
          <span>VERITY / PERFORMANCE INTELLIGENCE</span>
        </div>
        <p>Evidence-led performance intelligence for teams that need a draft they can defend.</p>
        <div className="footer-meta"><Layers3 size={14} /> Benchmark scenario / portfolio case study</div>
      </footer>
    </div>
  );
}
