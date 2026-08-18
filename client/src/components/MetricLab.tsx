/**
 * Evidence Ledger style: a compact, audit-ready benchmark replay using graphite rules,
 * warm paper, mono metadata, and Verdict Blue to distinguish the selected load scenario.
 */
import { useMemo, useState } from "react";
import { Activity, Clock3, Gauge, Server, Users } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const loadProfiles = [
  { load: 60, p50: 128, p95: 224, throughput: 312, cache: 66, line: "14,135 84,126 154,117 224,110 294,103 364,97 434,92 506,89" },
  { load: 120, p50: 142, p95: 267, throughput: 568, cache: 64, line: "14,138 84,131 154,122 224,115 294,108 364,103 434,99 506,95" },
  { load: 180, p50: 150, p95: 310, throughput: 748, cache: 61, line: "14,141 84,133 154,124 224,116 294,109 364,105 434,101 506,98" },
];

export default function MetricLab() {
  const [load, setLoad] = useState(180);
  const profile = useMemo(
    () => loadProfiles.reduce((closest, candidate) => Math.abs(candidate.load - load) < Math.abs(closest.load - load) ? candidate : closest),
    [load],
  );

  return (
    <section id="metrics-lab" className="api-lab-section" aria-labelledby="api-lab-title">
      <div className="api-lab-heading">
        <div className="section-index"><span>01.A</span><i /><span>METRICS LAB</span></div>
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> Benchmark replay</p>
          <h2 id="api-lab-title">Latency has a <em>load profile.</em></h2>
        </div>
        <p>Adjust the virtual-request load to inspect the documented benchmark envelope. This is a client-side replay of the pre-production scenario, not a live API monitor.</p>
      </div>

      <div className="api-panel">
        <div className="api-panel-head">
          <div className="panel-service"><span className="service-dot" /><strong>review-draft / v1</strong><small>FastAPI service route</small></div>
          <div className="panel-status"><Activity size={14} /> benchmark replay</div>
        </div>

        <div className="api-panel-grid">
          <div className="api-primary-stat">
            <span className="stat-label">Median response time</span>
            <strong>{profile.p50}<small>ms</small></strong>
            <p>p50 under <b>{profile.load} concurrent virtual users</b></p>
            <div className="stack-evidence"><span>FastAPI</span><span>Redis</span><span>PostgreSQL</span></div>
          </div>

          <div className="api-chart" aria-label={`Latency trace for ${profile.load} concurrent virtual users; median ${profile.p50} milliseconds`}>
            <div className="chart-labels"><span>Latency trace</span><span>0 → 60 sec</span></div>
            <svg viewBox="0 0 520 164" role="img" aria-hidden="true" preserveAspectRatio="none">
              <path d="M14 22H506M14 62H506M14 102H506M14 142H506" className="chart-grid" />
              <path d="M14 113H506" className="chart-target" />
              <polyline points={profile.line} className="chart-line-shadow" />
              <polyline points={profile.line} className="chart-line" />
              <circle cx="506" cy={profile.line.split(" ").at(-1)?.split(",")[1]} r="5" className="chart-node" />
            </svg>
            <div className="chart-legend"><span><i className="legend-line" /> p50 envelope</span><span><i className="legend-target" /> 150 ms target</span></div>
          </div>

          <div className="api-side-stats">
            <div><Clock3 size={16} /><span>p95</span><strong>{profile.p95} ms</strong></div>
            <div><Gauge size={16} /><span>throughput</span><strong>{profile.throughput} req/s</strong></div>
            <div><Server size={16} /><span>cache avoidance</span><strong>{profile.cache}%</strong></div>
          </div>
        </div>

        <div className="load-control">
          <div className="load-control-top"><span className="control-label"><Users size={15} /> Concurrent request load</span><strong>{profile.load} virtual users</strong></div>
          <Slider value={[load]} onValueChange={(values) => setLoad(values[0] ?? 180)} min={60} max={180} step={60} aria-label="Concurrent request load" className="load-slider" />
          <div className="load-ticks" aria-hidden="true"><span>60</span><span>120</span><span>180</span></div>
          <div className="load-presets">
            {loadProfiles.map((candidate) => (
              <button key={candidate.load} type="button" aria-pressed={candidate.load === profile.load} onClick={() => setLoad(candidate.load)} className={candidate.load === profile.load ? "is-selected" : ""}>
                {candidate.load} users
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
