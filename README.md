# MAXLIGHTING

**Evidence before explanation.**

MAXLIGHTING is a documentation-first public resource for adults trying to make sense of severe, persistent coercive control, technology-facilitated abuse, stalking, fabricated narratives, identity or financial exploitation, malicious allegations, and coordinated harassment.

The project is intentionally survivor-centered without treating any single explanation as proven in advance. The core rule is simple: **record what happened, preserve the evidence, separate observation from interpretation, and let larger patterns earn themselves.**

## Why this exists

Some abusive situations become harder to explain precisely because the conduct is calm, consistent, and maintained over long periods. Survivors may describe a form of **persistent narrative commitment**: the same false frame, denial, minimization, or competing account is maintained even when serious consequences occur. Survivors sometimes describe this more bluntly as “100% commitment to the role.” MAXLIGHTING treats that as a survivor-described warning pattern, not a diagnostic test.

The site gives people a way to organize their experience using three separate concepts:

- **Pattern alignment** — how closely the reported experience resembles documented patterns such as coercive control, stalking, gaslighting, technology abuse, fabricated records, identity exploitation, or organized online coercion.
- **Evidence strength** — how much is supported by original recordings, messages, witnesses, financial records, police or court records, metadata, account logs, or other independent evidence.
- **Cross-case linkage** — whether separate cases share uncommon objective identifiers such as the same account, phone number, payment destination, distinctive phrase, organization, or technical artifact.

These should never be collapsed into a single “you are definitely being targeted” score.

## Evidence posture

MAXLIGHTING keeps four categories distinct:

1. **Documented / verified** — supported by primary records, court findings, official reports, or preserved evidence.
2. **Research-supported pattern** — supported by credible research or established case literature.
3. **Survivor interpretation / hypothesis** — an explanation the reporter believes may connect events.
4. **Unknown / unestablished** — claims that remain unverified.

Uncertainty about an explanation does not erase the underlying events. At the same time, the project does not publish unsupported allegations as established fact.

## Case and legal references currently included

The launch version includes direct links to source material illustrating documented pieces of these patterns, including:

- **F v M [2021] EWFC 4** — coercive control assessed cumulatively rather than only incident-by-incident.
- **O.D. v. J.S. (New Jersey Appellate Division, 2026)** — tracking, repeated appearances, denial, and credibility attacks within a stalking/harassment record.
- **United States v. Raniere (2d Cir. 2022)** — hidden hierarchy, obedience, vulnerable recruitment, and coercive collateral in the NXIVM/DOS case.
- **18 U.S.C. § 1589** — federal recognition of serious nonphysical harm in coercive schemes.
- **FBI violent online networks guidance** — trust-building, blackmail, threats, and coercion directed at vulnerable people online.

These references demonstrate documented mechanisms. They do **not** prove that every survivor is experiencing the same organization, motive, or criminal structure.

## Life-insurance and identity resources

The site also points readers toward legitimate insurance and identity checks, including:

- NAIC Life Insurance Policy Locator, with the important limitation that it is primarily designed for beneficiaries/legal representatives searching after a death.
- MIB Consumer File, which may reveal some life/health underwriting application activity but is not a complete policy registry.
- State insurance regulators for suspected forged applications, fake policies, agent misconduct, or insurer misconduct.

## Official reporting and support routes

The current site links to official routes including FBI Tips, IC3, FTC IdentityTheft.gov, DOJ Inspector General for concrete allegations involving DOJ/FBI employee misconduct, VictimConnect, and technology-abuse resources.

## Privacy and safety

This repository does **not** operate an anonymous evidence intake. Do not send high-risk evidence through ordinary email or social-media DMs simply because this project exists.

A future reporting system should use a mature hardened platform such as SecureDrop or GlobaLeaks, publish a threat model, minimize retained metadata, and never promise absolute anonymity or “complete security.”

Names of accused people should not be exposed in a public accusation database. Cross-case matching should rely on carefully handled objective identifiers and trained review, so independent testimony is not contaminated.

## Neurodivergence and vulnerability

MAXLIGHTING allows the question of whether autistic, ADHD, disabled, socially isolated, adopted, immigrant, financially vulnerable, or otherwise marginalized people appear disproportionately in reports to remain a **research question** rather than a preloaded conclusion. Any future analysis must account for selection bias and distinguish correlation from targeting.

## Repository structure

- `index.html` — production static site.
- `assets/maxlighting-logo.png` — MAXLIGHTING gas-lamp logo.
- `vercel.json` — static deployment configuration.
- `research/worldwide-pattern-research.md` — research brief for international pattern comparison.

## Local use

The site is static. You can serve it with any basic HTTP server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploying to Vercel

This repository is intentionally deployable without a build step. Import the GitHub repository into Vercel or deploy the repository root. `vercel.json` routes `/` to `index.html` and applies basic security headers.

## Translation roadmap

The first translation pass should preserve meaning rather than translate emotionally loaded terminology literally. Each language version should:

- keep legal/case titles in their original form while translating the explanation;
- link to local victim-support, cybercrime, trafficking, stalking, insurance, and oversight agencies;
- distinguish national law from general research;
- preserve the documented / research-supported / survivor-hypothesis / unknown labeling system;
- use local terminology for coercive control and technology-facilitated abuse where established.

## Contributing

Useful contributions include high-quality court decisions, official government guidance, peer-reviewed research, international victim-service resources, careful translations, accessibility fixes, and corrections to factual claims.

The standard for inclusion is evidence quality, not whether a source agrees with a predetermined theory.

---

**MAXLIGHTING:** preserve the event, protect the reporter, and keep what is known separate from what is suspected.
