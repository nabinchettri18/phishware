"use client";

import { useMemo, useState } from "react";

const scans = [
  { url: "accounts.google-secure.example", verdict: "Suspicious", score: 78, time: "2 min ago", type: "Credential lure" },
  { url: "github.com", verdict: "Safe", score: 4, time: "18 min ago", type: "Domain check" },
  { url: "paypa1-verification.example", verdict: "Malicious", score: 96, time: "41 min ago", type: "Impersonation" },
  { url: "microsoft.com", verdict: "Safe", score: 2, time: "1 hr ago", type: "Domain check" },
  { url: "delivery-track.example", verdict: "Suspicious", score: 71, time: "2 hr ago", type: "Redirect chain" },
];

const chart = [28, 42, 36, 54, 48, 72, 61, 86, 67, 78, 92, 74, 88, 64, 81, 95, 76, 90, 83, 97];

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const max = useMemo(() => Math.max(...chart), []);

  function runScan() {
    const value = url.trim();
    if (!value) {
      setMessage("Enter a URL or domain to analyze.");
      return;
    }
    setMessage("Analysis queued — connect the scanner API to run live threat intelligence.");
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">P</div>
          <div><strong>PhishAware</strong><span>Security Console</span></div>
        </div>

        <div className="workspace">
          <span className="eyebrow">WORKSPACE</span>
          <div className="workspaceBox"><span className="statusDot" /> Defensive Lab <span>⌄</span></div>
        </div>

        <nav>
          {["Dashboard", "URL Scanner", "Threat Intel", "Scan History", "Reports", "Analytics"].map((item) => (
            <button key={item} className={active === item ? "navItem active" : "navItem"} onClick={() => setActive(item)}>
              <span className="navIcon">{icon(item)}</span>{item}
            </button>
          ))}
        </nav>

        <div className="sidebarBottom">
          <button className="navItem"><span className="navIcon">⚙</span>Settings</button>
          <div className="userCard"><div className="avatar">NC</div><div><strong>Nabin</strong><span>Analyst</span></div><span className="more">•••</span></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <div className="crumb">SECURITY / {active.toUpperCase()}</div>
            <h1>{active}</h1>
          </div>
          <div className="topActions">
            <button className="iconBtn" aria-label="Notifications">♢<span className="notify" /></button>
            <button className="outlineBtn">Export report</button>
            <button className="primaryBtn">＋ New scan</button>
          </div>
        </header>

        <div className="page">
          <section className="hero">
            <div>
              <div className="pill"><span className="pulse" /> SYSTEM OPERATIONAL</div>
              <h2>Stay ahead of phishing threats.</h2>
              <p>Analyze suspicious URLs, investigate indicators, and turn security signals into clear defensive actions.</p>
            </div>
            <div className="heroShield">◈</div>
          </section>

          <section className="metrics">
            <Metric label="TOTAL SCANS" value="1,284" delta="+12.8%" positive />
            <Metric label="THREATS DETECTED" value="37" delta="+5 this week" />
            <Metric label="SAFE TRAFFIC" value="96.4%" delta="+1.2%" positive />
            <Metric label="AVG. RISK SCORE" value="18.7" delta="-4.3%" positive />
          </section>

          <section className="gridTwo">
            <div className="panel scannerPanel">
              <div className="panelHead"><div><span className="sectionLabel">LIVE ANALYSIS</span><h3>URL Threat Scanner</h3></div><span className="live">● LIVE</span></div>
              <p className="muted">Paste a URL or domain to run a defensive security assessment.</p>
              <div className="scannerInput"><span>⌕</span><input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" onKeyDown={(e) => e.key === "Enter" && runScan()} /><button onClick={runScan}>Analyze URL →</button></div>
              {message && <div className="notice">{message}</div>}
              <div className="checks"><span>✓ TLS / HTTPS</span><span>✓ Redirect analysis</span><span>✓ Domain signals</span><span>✓ Risk scoring</span></div>
            </div>

            <div className="panel chartPanel">
              <div className="panelHead"><div><span className="sectionLabel">LAST 24 HOURS</span><h3>Threat activity</h3></div><button className="select">24 hours⌄</button></div>
              <div className="chart">
                {chart.map((v, i) => <div className="barWrap" key={i}><div className="bar" style={{height: (v / max) * 100 + "%"}} /></div>)}
              </div>
              <div className="chartFoot"><span>00:00</span><strong><span className="legend" /> Detected events</strong><span>Now</span></div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHead">
              <div><span className="sectionLabel">RECENT ACTIVITY</span><h3>Security scans</h3></div>
              <button className="textBtn">View all →</button>
            </div>
            <div className="table">
              <div className="tableRow header"><span>URL / DOMAIN</span><span>TYPE</span><span>RISK</span><span>VERDICT</span><span>TIME</span></div>
              {scans.map((scan) => <div className="tableRow" key={scan.url}><span className="urlCell"><span className="siteIcon">◎</span>{scan.url}</span><span>{scan.type}</span><span><div className="risk"><span className="riskTrack"><i style={{width: scan.score + "%"}} /></span>{scan.score}</div></span><span><Verdict value={scan.verdict} /></span><span className="muted">{scan.time}</span></div>)}
            </div>
          </section>

          <section className="bottomGrid">
            <div className="panel">
              <div className="panelHead"><div><span className="sectionLabel">INDICATORS</span><h3>Threat distribution</h3></div></div>
              <div className="distribution">
                <div className="donut"><div><strong>37</strong><span>threats</span></div></div>
                <div className="distLegend"><Legend label="Credential phishing" value="43%" /><Legend label="Impersonation" value="27%" /><Legend label="Malicious redirect" value="19%" /><Legend label="Other" value="11%" /></div>
              </div>
            </div>
            <div className="panel">
              <div className="panelHead"><div><span className="sectionLabel">DEFENSIVE HEALTH</span><h3>Security posture</h3></div><span className="scoreBadge">92 / 100</span></div>
              <div className="health"><div className="healthLine"><span>URL detection coverage</span><strong>96%</strong></div><div className="progress"><i style={{width:"96%"}} /></div><div className="healthLine"><span>Threat intel freshness</span><strong>89%</strong></div><div className="progress"><i style={{width:"89%"}} /></div><div className="healthLine"><span>Report completeness</span><strong>94%</strong></div><div className="progress"><i style={{width:"94%"}} /></div></div>
            </div>
          </section>

          <footer>PhishAware • Defensive security console • No credential collection</footer>
        </div>
      </section>
    </main>
  );
}

function Metric({label,value,delta,positive}:{label:string,value:string,delta:string,positive?:boolean}) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong><small className={positive ? "good" : ""}>{positive ? "↗" : "•"} {delta}</small></div>;
}
function Verdict({value}:{value:string}) { return <span className={"verdict " + value.toLowerCase()}><i />{value}</span>; }
function Legend({label,value}:{label:string,value:string}) { return <div><span><i className="legendDot" />{label}</span><strong>{value}</strong></div>; }
function icon(item:string) { return ({Dashboard:"⌂","URL Scanner":"⌕","Threat Intel":"◈","Scan History":"◷",Reports:"▤",Analytics:"⌁"} as Record<string,string>)[item] || "•"; }
