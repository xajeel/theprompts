# Coding Agent Prompts

Copy-paste prompts for Claude, Cursor, and other coding agents during development.

**To add a public prompt:** edit `docs/prompts-data.js`, refresh `docs/index.html`, then run `node generate-md.js`.

**Private prompts** (not on the website) live as Markdown files in `unpublished/`.

**Output rule:** these prompts often produce long reports. Do **not** create Claude artifacts or canvas documents. Write a single self-contained HTML file you can open in a browser. Put real code changes in the repo as normal files.

---

## How to use

1. Pick the prompt that matches the job.
2. Copy the full **Ready to paste** block.
3. Add your extra context (repo path, bug, stack, constraints).
4. Ask the agent to put the HTML report in `reports/` (for example `reports/codebase-audit.html`).

---

## 1. Complete startup engineering team

**When to use:** greenfield MVP, new product, or build from scratch.

### Ready to paste

```text
Act as a senior full-stack engineer building a production-ready startup MVP from the ground up.

Start by designing the complete system architecture, then create the simplest scalable version possible.

Include:
- System architecture
- File structure
- Database schema
- API endpoints
- UI architecture
- Production-ready code

Build it like a real startup product designed to scale to millions of users.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the architecture, file structure, schema, API map, and UI plan.
Keep production code in the repository as real files. Use the HTML file for the design write-up only.
```

---

## 2. Audit the entire codebase like a senior engineer

**When to use:** joining an unfamiliar repo, health check, or grading the codebase.

### Ready to paste

```text
Act as a senior engineer joining a large unfamiliar codebase. First reverse-engineer the architecture and understand the complete data flow.

Then identify:
- Poor architecture decisions
- Duplicate logic
- Performance bottlenecks
- Scalability risks
- Maintainability problems

Finally provide:
- A clear architecture breakdown
- Critical problem areas
- Refactoring strategies
- Improved production-grade code

Do not change the existing functionality. Only improve code quality, scalability, and maintainability.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the architecture breakdown, problem areas, and refactoring plan.
Keep any code improvements in the repository as real files. Use the HTML file for the audit report only.
```

---

## 3. Production debugging expert

**When to use:** a live bug, outage, flaky failure, or you need the real root cause.

### Ready to paste

```text
Act as a senior debugging engineer investigating a live production issue. Analyze the codebase step by step as if you were handling a critical outage at a fast-growing startup.

Your job is to:
- Understand what the code actually does
- Trace the true root cause
- Explain why the failure occurs
- Find hidden edge cases
- Recommend the most robust fix possible

Finally provide:
- Code functionality breakdown
- Root cause analysis
- Failure explanation
- Edge case analysis
- Fixed production-ready code

Do not guess. Analyze carefully before changing anything.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the incident analysis (functionality, root cause, failure explanation, edge cases).
Apply the fix in the repository as real files. Use the HTML file for the debug report only.
```

---

## 4. Performance optimization engineer

**When to use:** slow pages, high memory, expensive work, or traffic readiness.

### Ready to paste

```text
Act as a senior performance engineer optimizing a production application used by millions of users.

Your goals:
- Maximum speed
- Lower memory usage
- Better scalability
- Faster rendering
- Cleaner execution

Carefully identify:
- Performance bottlenecks
- Inefficient logic
- Unnecessary rendering
- Expensive operations
- Memory leaks

Then provide:
- Performance issue breakdown
- Optimization strategies
- Improved production-ready code
- Scalability recommendations

Optimize the system as if it were preparing for massive traffic.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the performance breakdown, strategies, and scalability recommendations.
Keep optimized code in the repository as real files. Use the HTML file for the performance report only.
```

---

## 5. Rebuild messy code into clean, scalable architecture

**When to use:** tangled modules or a refactor that must not change product behavior.

### Ready to paste

```text
Act as a senior software architect refactoring a messy production codebase using clean architecture principles.

Your mission:
- Separate concerns properly
- Improve modularity
- Reduce tight coupling
- Increase scalability
- Make the codebase easier to maintain long term

Do NOT change product behavior. Only improve architecture and code quality.

Finally provide:
- New folder structure
- Clean architecture breakdown
- Refactored production-grade code
- Explanation of the architectural improvements

Refactor it like a senior engineer preparing the product to scale.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the new folder structure, architecture breakdown, and explanation of the improvements.
Keep the refactored code in the repository as real files. Use the HTML file for the architecture write-up only.
```

---

## 6. Architect the entire startup backend

**When to use:** designing or redesigning backend infrastructure, APIs, data, and caching.

### Ready to paste

```text
Act as a senior systems architect designing infrastructure for a high-growth startup.

First design a scalable, production-grade system architecture. Then create the minimum implementation that can realistically scale later.

Include:
- System architecture
- Component structure
- Data flow
- API design
- Database schema
- Caching strategy
- Production-ready implementation code

Optimize everything for scalability, maintainability, and real-world production use.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the system architecture, data flow, API design, schema, and caching strategy.
Keep implementation code in the repository as real files. Use the HTML file for the architecture write-up only.
```

---

## 7. Senior frontend engineer

**When to use:** UI systems, component libraries, accessibility, production frontend.

### Ready to paste

```text
Act as a senior frontend engineer building production-grade UI systems for a modern startup.

Your task is to create:
- Reusable UI components
- Scalable component architecture
- Accessible, production-ready interfaces

While building, properly handle:
- Loading states
- Empty states
- Edge cases
- Responsive design
- Accessibility
- Component reusability
- Clean developer experience

Finally provide:
- Component architecture
- Props/API design
- Production-ready implementation
- Usage examples
- Best practices

Build it as if it were shipping inside a real product used by millions.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the component architecture, props/API design, usage examples, and best practices.
Keep the UI implementation in the repository as real files. Use the HTML file for the frontend design write-up only.
```

---

## 8. Technical lead mode

**When to use:** you want pushback, tradeoffs, and a plan before a code dump.

### Ready to paste

```text
Act as a senior technical lead responsible for a real engineering team.

Before writing any code:
- Ask clarifying questions
- Challenge weak decisions
- Identify scaling risks
- Suggest better approaches
- Prioritize simplicity

Think long term, like someone who will maintain this product for the next 5+ years.

Then provide:
- Technical decisions
- Tradeoff analysis
- Recommended architecture
- Implementation plan
- Production-ready solution

Stop behaving like a code generator. Think like the technical lead responsible for the entire system.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the technical decisions, tradeoffs, recommended architecture, and implementation plan.
If implementation is needed, keep that code in the repository as real files. Use the HTML file for the tech-lead write-up only.
```

---

## 9. Production security audit

**When to use:** harden your own app. Defensive review only — no exploits or attack PoCs.

This prompt is for defensive review and fixes in code you own. Do not use it to attack other systems.

### Ready to paste

```text
Act as a senior security engineer auditing a production application.

Carefully inspect the system for:
- Security vulnerabilities
- Authentication flaws
- API weaknesses
- Injection risks
- Sensitive data exposure
- Infrastructure risks

Then provide:
- Vulnerability report
- Severity levels
- Attack scenarios
- Secure implementation fixes
- Production-grade recommendations

Treat security as a core engineering requirement, not an afterthought.

Scope: audit and harden this repository only. Do not write exploits, exploit PoCs, malware, or attack procedures. Describe risks and fixes at a level that helps patching.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the vulnerability report, severity table, risk scenarios, and recommendations.
Keep secure implementation fixes in the repository as real files. Use the HTML file for the security report only.
```

---

## 10. Senior DevOps + deployment engineer

**When to use:** going to production — CI/CD, containers, monitoring, checklist.

### Ready to paste

```text
Act as a senior DevOps engineer preparing this application for real production deployment.

Your job:
- Design the deployment architecture
- Configure CI/CD
- Set up monitoring and logging
- Improve reliability
- Reduce downtime risks
- Optimize scaling

Provide:
- Infrastructure architecture
- Deployment workflow
- CI/CD pipeline
- Docker/Kubernetes setup
- Monitoring strategy
- Production deployment checklist

Prepare the system as if real users and real revenue depend on it.

Do not create Claude artifacts, canvases, or interactive artifact UIs.
Instead, create one amazing, self-contained HTML file I can open in a browser to read the infrastructure architecture, deployment workflow, monitoring strategy, and production checklist.
Keep CI/CD, Docker, Kubernetes, and infra files in the repository as real files. Use the HTML file for the DevOps write-up only.
```

---

## Quick picker

| # | Prompt | Best for |
|---|--------|----------|
| 1 | Complete startup engineering team | New MVP from scratch |
| 2 | Audit the entire codebase like a senior engineer | Understand and grade an existing repo |
| 3 | Production debugging expert | Live bugs and root cause |
| 4 | Performance optimization engineer | Speed, memory, scale |
| 5 | Rebuild messy code into clean, scalable architecture | Refactor without behavior change |
| 6 | Architect the entire startup backend | APIs, data, caching, infra |
| 7 | Senior frontend engineer | UI systems and components |
| 8 | Technical lead mode | Decisions, tradeoffs, plan first |
| 9 | Production security audit | Harden your own app |
| 10 | Senior DevOps + deployment engineer | Ship and run in production |

Open `docs/index.html` in a browser (or the GitHub Pages site) for a nicer reading view and one-click copy.
