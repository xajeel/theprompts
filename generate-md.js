#!/usr/bin/env node
/**
 * Rebuilds prompts.md from docs/prompts-data.js.
 * Run after adding or editing public prompts: node generate-md.js
 */
const fs = require("fs");
const path = require("path");
const library = require("./docs/prompts-data.js");

function pad(n) {
  return String(n).padStart(2, "0");
}

const prompts = library.prompts;
const lines = [];

lines.push("# Coding Agent Prompts");
lines.push("");
lines.push("Copy-paste prompts for Claude, Cursor, and other coding agents during development.");
lines.push("");
lines.push("**To add a public prompt:** edit `docs/prompts-data.js`, refresh `docs/index.html`, then run `node generate-md.js`.");
lines.push("");
lines.push("**Private prompts** (not on the website) live as Markdown files in `unpublished/`.");
lines.push("");
lines.push("**Output rule:** these prompts often produce long reports. Do **not** create Claude artifacts or canvas documents. Write a single self-contained HTML file you can open in a browser. Put real code changes in the repo as normal files.");
lines.push("");
lines.push("---");
lines.push("");
lines.push("## How to use");
lines.push("");
lines.push("1. Pick the prompt that matches the job.");
lines.push("2. Copy the full **Ready to paste** block.");
lines.push("3. Add your extra context (repo path, bug, stack, constraints).");
lines.push("4. Ask the agent to put the HTML report in `reports/` (for example `reports/codebase-audit.html`).");
lines.push("");
lines.push("---");
lines.push("");

prompts.forEach(function (p, i) {
  const n = i + 1;
  lines.push("## " + n + ". " + p.title.replace(/^\w/, function (c) {
    return c.toUpperCase();
  }));
  lines.push("");
  lines.push("**When to use:** " + p.when);
  lines.push("");
  if (p.notes) {
    lines.push(p.notes);
    lines.push("");
  }
  lines.push("### Ready to paste");
  lines.push("");
  lines.push("```text");
  lines.push(library.composePrompt(p));
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
});

lines.push("## Quick picker");
lines.push("");
lines.push("| # | Prompt | Best for |");
lines.push("|---|--------|----------|");
prompts.forEach(function (p, i) {
  lines.push("| " + (i + 1) + " | " + p.title + " | " + (p.bestFor || p.when) + " |");
});
lines.push("");
lines.push("Open `docs/index.html` in a browser (or the GitHub Pages site) for a nicer reading view and one-click copy.");
lines.push("");

fs.writeFileSync(path.join(__dirname, "prompts.md"), lines.join("\n"));
console.log("Wrote prompts.md with " + prompts.length + " prompts (" + pad(prompts.length) + ").");
