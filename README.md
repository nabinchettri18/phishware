# PhishAware Security Console

A defensive security dashboard for phishing analysis, threat intelligence, scan history, reporting, and security analytics.

## Dashboard

The web console lives at the repository root and is built with Next.js App Router, TypeScript, and CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Security scope

PhishAware is intended for authorized defensive security work. The dashboard does not collect credentials or provide operational credential-harvesting functionality. Live threat intelligence and URL-analysis providers should be connected through authenticated server-side APIs before production use.
