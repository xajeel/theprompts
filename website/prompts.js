/**
 * Prompts that appear on the public website.
 *
 * Add a public prompt: copy the template at the bottom of this file,
 * fill it in, save, and refresh website/index.html.
 *
 * Add a private prompt (not on the website): create a Markdown file
 * in /private-prompts instead of adding it here.
 *
 * Required: title, when, prompt
 * Optional: nav, bestFor, reportCovers, codeNote, notes
 */
(function (root) {
  var defaultCodeNote =
    "Keep production code in the repository as real files. Use the HTML file for architecture, analysis, plans, and reports only.";

  var library = {
    defaultCodeNote: defaultCodeNote,

    composePrompt: function (p) {
      var report = p.reportCovers || "the full write-up";
      var codeNote = p.codeNote || defaultCodeNote;
      return (
        String(p.prompt).trim() +
        "\n\nDo not create Claude artifacts, canvases, or interactive artifact UIs.\n" +
        "Instead, create one amazing, self-contained HTML file I can open in a browser to read " +
        report +
        ".\n" +
        codeNote
      );
    },

    prompts: [
      {
        title: "Complete startup engineering team",
        nav: "Startup team",
        when: "greenfield MVP, new product, or build from scratch.",
        bestFor: "New MVP from scratch",
        reportCovers: "the architecture, file structure, schema, API map, and UI plan",
        codeNote: "Keep production code in the repository as real files. Use the HTML file for the design write-up only.",
        prompt: `Act as a senior full-stack engineer building a production-ready startup MVP from the ground up.

Start by designing the complete system architecture, then create the simplest scalable version possible.

Include:
- System architecture
- File structure
- Database schema
- API endpoints
- UI architecture
- Production-ready code

Build it like a real startup product designed to scale to millions of users.`
      },
      {
        title: "Audit the entire codebase like a senior engineer",
        nav: "Codebase audit",
        when: "joining an unfamiliar repo, health check, or grading the codebase.",
        bestFor: "Understand and grade an existing repo",
        reportCovers: "the architecture breakdown, problem areas, and refactoring plan",
        codeNote: "Keep any code improvements in the repository as real files. Use the HTML file for the audit report only.",
        prompt: `Act as a senior engineer joining a large unfamiliar codebase. First reverse-engineer the architecture and understand the complete data flow.

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

Do not change the existing functionality. Only improve code quality, scalability, and maintainability.`
      },
      {
        title: "Production debugging expert",
        nav: "Debugging",
        when: "a live bug, outage, flaky failure, or you need the real root cause.",
        bestFor: "Live bugs and root cause",
        reportCovers: "the incident analysis (functionality, root cause, failure explanation, edge cases)",
        codeNote: "Apply the fix in the repository as real files. Use the HTML file for the debug report only.",
        prompt: `Act as a senior debugging engineer investigating a live production issue. Analyze the codebase step by step as if you were handling a critical outage at a fast-growing startup.

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

Do not guess. Analyze carefully before changing anything.`
      },
      {
        title: "Performance optimization engineer",
        nav: "Performance",
        when: "slow pages, high memory, expensive work, or traffic readiness.",
        bestFor: "Speed, memory, scale",
        reportCovers: "the performance breakdown, strategies, and scalability recommendations",
        codeNote: "Keep optimized code in the repository as real files. Use the HTML file for the performance report only.",
        prompt: `Act as a senior performance engineer optimizing a production application used by millions of users.

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

Optimize the system as if it were preparing for massive traffic.`
      },
      {
        title: "Rebuild messy code into clean, scalable architecture",
        nav: "Clean architecture",
        when: "tangled modules or a refactor that must not change product behavior.",
        bestFor: "Refactor without behavior change",
        reportCovers: "the new folder structure, architecture breakdown, and explanation of the improvements",
        codeNote: "Keep the refactored code in the repository as real files. Use the HTML file for the architecture write-up only.",
        prompt: `Act as a senior software architect refactoring a messy production codebase using clean architecture principles.

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

Refactor it like a senior engineer preparing the product to scale.`
      },
      {
        title: "Architect the entire startup backend",
        nav: "Backend architect",
        when: "designing or redesigning backend infrastructure, APIs, data, and caching.",
        bestFor: "APIs, data, caching, infra",
        reportCovers: "the system architecture, data flow, API design, schema, and caching strategy",
        codeNote: "Keep implementation code in the repository as real files. Use the HTML file for the architecture write-up only.",
        prompt: `Act as a senior systems architect designing infrastructure for a high-growth startup.

First design a scalable, production-grade system architecture. Then create the minimum implementation that can realistically scale later.

Include:
- System architecture
- Component structure
- Data flow
- API design
- Database schema
- Caching strategy
- Production-ready implementation code

Optimize everything for scalability, maintainability, and real-world production use.`
      },
      {
        title: "Senior frontend engineer",
        nav: "Frontend engineer",
        when: "UI systems, component libraries, accessibility, production frontend.",
        bestFor: "UI systems and components",
        reportCovers: "the component architecture, props/API design, usage examples, and best practices",
        codeNote: "Keep the UI implementation in the repository as real files. Use the HTML file for the frontend design write-up only.",
        prompt: `Act as a senior frontend engineer building production-grade UI systems for a modern startup.

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

Build it as if it were shipping inside a real product used by millions.`
      },
      {
        title: "Technical lead mode",
        nav: "Technical lead",
        when: "you want pushback, tradeoffs, and a plan before a code dump.",
        bestFor: "Decisions, tradeoffs, plan first",
        reportCovers: "the technical decisions, tradeoffs, recommended architecture, and implementation plan",
        codeNote: "If implementation is needed, keep that code in the repository as real files. Use the HTML file for the tech-lead write-up only.",
        prompt: `Act as a senior technical lead responsible for a real engineering team.

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

Stop behaving like a code generator. Think like the technical lead responsible for the entire system.`
      },
      {
        title: "Production security audit",
        nav: "Security audit",
        when: "harden your own app. Defensive review only — no exploits or attack PoCs.",
        bestFor: "Harden your own app",
        notes: "This prompt is for defensive review and fixes in code you own. Do not use it to attack other systems.",
        reportCovers: "the vulnerability report, severity table, risk scenarios, and recommendations",
        codeNote: "Keep secure implementation fixes in the repository as real files. Use the HTML file for the security report only.",
        prompt: `Act as a senior security engineer auditing a production application.

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

Scope: audit and harden this repository only. Do not write exploits, exploit PoCs, malware, or attack procedures. Describe risks and fixes at a level that helps patching.`
      },
      {
        title: "Senior DevOps + deployment engineer",
        nav: "DevOps",
        when: "going to production — CI/CD, containers, monitoring, checklist.",
        bestFor: "Ship and run in production",
        reportCovers: "the infrastructure architecture, deployment workflow, monitoring strategy, and production checklist",
        codeNote: "Keep CI/CD, Docker, Kubernetes, and infra files in the repository as real files. Use the HTML file for the DevOps write-up only.",
        prompt: `Act as a senior DevOps engineer preparing this application for real production deployment.

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

Prepare the system as if real users and real revenue depend on it.`
      }

      /*
      Copy this template, uncomment it, and fill it in:

      ,{
        title: "Short title",
        nav: "Sidebar label",
        when: "when you would use this.",
        bestFor: "one-line picker description",
        reportCovers: "what the HTML report should contain",
        prompt: `Paste the prompt here.`
      }
      */
    ]
  };

  root.PROMPT_LIBRARY = library;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = library;
  }
})(typeof window !== "undefined" ? window : global);
