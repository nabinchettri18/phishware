"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <nav className="landingNav">
        <Link href="/" className="landingBrand"><span className="landingMark">P</span><span><strong>PhishAware</strong><small>Defensive Security Lab</small></span></Link>
        <div className="landingLinks"><a href="#features">Features</a><a href="#workflow">Workflow</a><a href="#lab">Lab mode</a></div>
        <div className="landingActions"><Link href="/login" className="navLogin">Log in</Link><Link href="/signup" className="navCta">Create account</Link></div>
      </nav>
      <section className="landingHero">
        <div className="heroCopy">
          <div className="landingPill"><span /> LOCAL SECURITY LAB · DEFENSIVE ONLY</div>
          <h1>Understand phishing.<br /><em>Before it becomes a breach.</em></h1>
          <p>PhishAware is a defensive security console for analyzing suspicious URLs, understanding phishing indicators, and practicing safe security workflows in a controlled lab.</p>
          <div className="heroButtons"><Link href="/signup" className="heroPrimary">Start the lab →</Link><Link href="/dashboard" className="heroSecondary">View dashboard</Link></div>
          <div className="trustRow"><span>✓ No credential collection</span><span>✓ Local lab ready</span><span>✓ Defensive analysis</span></div>
        </div>
        <div className="consolePreview">
          <div className="previewTop"><span className="previewDots">● ● ●</span><span>PHISHAWARE / CONSOLE</span><span>● ONLINE</span></div>
          <div className="previewMetric"><span>THREAT SCORE</span><strong>18.7</strong><b>LOW RISK</b></div>
          <div className="previewBars"><i style={{height:"38%"}}/><i style={{height:"58%"}}/><i style={{height:"45%"}}/><i style={{height:"74%"}}/><i style={{height:"61%"}}/><i style={{height:"88%"}}/><i style={{height:"66%"}}/><i style={{height:"93%"}}/></div>
          <div className="previewRows"><div><span>accounts.example</span><b>78</b></div><div><span>github.com</span><b className="safeText">04</b></div><div><span>delivery.example</span><b>71</b></div></div>
        </div>
      </section>
      <section id="features" className="featureStrip">
        <Feature n="01" title="Analyze" text="Review URLs and domains using defensive risk signals." />
        <Feature n="02" title="Simulate" text="Practice controlled security scenarios without real credentials." />
        <Feature n="03" title="Understand" text="Turn indicators into clear, actionable security findings." />
      </section>
      <section id="workflow" className="landingSection">
        <div><span className="sectionKicker">SECURITY WORKFLOW</span><h2>From suspicious link<br />to useful signal.</h2></div>
        <div className="workflow"><Step n="01" title="Submit" text="Place a suspicious URL into the scanner."/><Step n="02" title="Assess" text="Review domain, redirect, TLS and risk indicators."/><Step n="03" title="Respond" text="Document the finding and take a defensive action."/></div>
      </section>
      <section id="lab" className="labBanner">
        <div><span className="sectionKicker">CONTROLLED ENVIRONMENT</span><h2>Built for learning, testing and defense.</h2><p>The lab is designed around dummy data and local-only testing. It does not collect or store real service passwords.</p></div>
        <Link href="/dashboard">Open security console →</Link>
      </section>
      <footer className="landingFooter"><span>PhishAware</span><span>Defensive security console · Local lab · No credential collection</span></footer>
    </main>
  );
}
function Feature({n,title,text}:{n:string,title:string,text:string}){return <div className="feature"><span>{n}</span><h3>{title}</h3><p>{text}</p></div>}
function Step({n,title,text}:{n:string,title:string,text:string}){return <div className="step"><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>}
