"use client";

import Link from "next/link";

export default function Login() {
  return <main className="authPage"><div className="authCard"><Link href="/" className="authBrand"><span className="landingMark">P</span><span><strong>PhishAware</strong><small>Defensive Security Lab</small></span></Link><div className="authKicker">SECURITY CONSOLE</div><h1>Welcome back</h1><p>Sign in to your local defensive lab.</p><form onSubmit={(e)=>{e.preventDefault();window.location.href="/dashboard"}}><label>Email<input type="email" placeholder="you@example.com" required /></label><label>Password<input type="password" placeholder="••••••••" required /></label><button className="authButton">Sign in →</button></form><div className="authNote">Demo UI only — no real authentication service is connected.</div><p className="authSwitch">New to PhishAware? <Link href="/signup">Create an account</Link></p><Link href="/" className="backHome">← Back to home</Link></div></main>;
}
