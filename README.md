# MAXLIGHTING

**Evidence before explanation.**

MAXLIGHTING is a static, documentation-first safety and research resource for people trying to record coercive control, stalking, technology-facilitated abuse, fabricated narratives, identity misuse, financial exploitation, or related harm.

The project validates specific, documentable events without presenting an unproved explanation as fact. Its public evidence categories are:

1. documented / verified;
2. research-supported;
3. survivor allegation;
4. inference / hypothesis;
5. unknown / contradicted.

## What the site now provides

- a safety-first starting path and quick-exit control;
- an evidence-label framework that separates observations from interpretations;
- pattern-alignment and evidence-readiness checklists without a “targeted” probability score;
- a local-only incident worksheet that does not upload, autosave, or place entries in browser storage;
- a searchable set of court cases, official inquiries, enforcement actions, threat assessments, and guidance, each with an explicit limitation;
- corrected life-insurance and identity-fraud routes;
- current support and reporting links for the United States, Canada, United Kingdom, Ireland, EU, Australia, New Zealand, India, South Africa, and global directories;
- a completed worldwide research snapshot and 47-link source ledger.

## Core analytical rule

Keep these questions separate:

- **Pattern alignment:** does an event resemble a documented coercion, stalking, technology-abuse, identity-exploitation, or related mechanism?
- **Evidence readiness:** what original records, witnesses, institutional records, logs, metadata, or other independent material support the event?
- **Cross-case linkage:** do independently developed cases share uncommon objective identifiers?

Similarity of tactics is not proof that cases share an actor, motive, organization, or worldwide system.

## Privacy and safety posture

This repository does not operate an evidence intake and has no analytics, account system, database, or form endpoint. Worksheet data stays in the active browser tab unless the visitor downloads or prints it.

That is not a promise of complete security. A monitored device, browser extension, network, downloaded file, print destination, or screen observer may still expose sensitive information. The site advises visitors to use a safer device and consult a specialist before removing suspected tracking tools or changing access in ways that might trigger escalation.

MAXLIGHTING does not publish names of accused private people or operate a public matching database. A future intake would require legal review, a published threat model, data minimization, access controls, a mature hardened platform, and carefully qualified anonymity claims.

## Repository structure

- `index.html` — semantic site content.
- `styles.css` — responsive, accessible visual system and print layout.
- `script.js` — local-only checklists, research filters, region selector, and incident-file export.
- `assets/maxlighting-logo.svg` — scalable dark-background wordmark.
- `assets/maxlighting-mark.svg` — favicon / lamp mark.
- `assets/maxlighting-record.webp` — optimized editorial hero artwork.
- `research/worldwide-pattern-research.md` — completed research snapshot, case matrix, limitations, gaps, and source ledger.
- `vercel.json` — static routing and security headers.

## Local development

No package install or build step is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Verification

Before publishing, verify:

- desktop and narrow-mobile layouts;
- keyboard focus order, skip link, labels, and visible focus;
- checklist counts, filters, regional help selector, file download, print view, and quick-exit destination;
- no browser console errors or unexpected network requests;
- all critical official links and hotline details;
- production security headers.

## Deployment

The repository deploys directly from its root as a Vercel static site. There is no build command.

## Research standard

The public research succeeds if it shows which mechanisms are documented, what each source establishes, what it does not establish, how a visitor can preserve a usable record, and where the visitor can seek appropriate help.

It does not succeed by proving a predetermined theory.
