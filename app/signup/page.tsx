"use client";

import Link from "next/link";

export default function Signup() {
  return <main className="authPage"><div className="authCard"><Link href="/" className="authBrand"><span className="landingMark">P</span><span><strong>PhishAware</strong><small>Defensive Security Lab</small></span></Link><div className="authKicker">LOCAL LAB SETUP</div><h1>Create your lab profile</h1><p>Set up the interface for your defensive security workspace.</p><form onSubmit={(e)=>{e.preventDefault();window.location.href="/dashboard"}}><label>Name<input type="text" placeholder="Your name" required /></label><label>Email<input type="email" placeholder="you@example.com" required /></label><label>Password<input type="password" placeholder="Create a password" required /></label><button className="authButton">Create account →</button></form><div className="authNote">Local demo only. Account data is not sent to a production authentication service.</div><p className="authSwitch">Already have a profile? <Link href="/login">Log in</Link></p><Link href="/" className="backHome">← Back to home</Link></div></main>;
}
