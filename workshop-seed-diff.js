#!/usr/bin/env node
/*
 * workshop-seed-diff.js
 *
 * Surface the seed evolution of a freeCodeCamp workshop for review.
 *
 * Run from the root of the freeCodeCamp/freeCodeCamp repo:
 *   node /home/ilenia/Claude/freeCodeCamp/workshop-seed-diff.js <workshop-dashedname> [output.md]
 *
 * Output: if the optional second argument is given it is used verbatim
 * (relative paths resolve against the current working directory). Otherwise the
 * report is written next to this script (its own directory, __dirname) as
 * `<workshop-dashedname>-seed-diff.md` — NOT into the repo you run it from.
 *
 * It produces a markdown file that contains:
 *   - the full seed of Step 1
 *   - the seed diffs walked in learner order. A step that has a solution is
 *     shown as seed -> solution, then solution -> next-step seed (the
 *     carry-forward starts from the solution). A step with no solution is shown
 *     as seed -> next-step seed.
 *
 * "Seed" = everything below the `## --seed-contents--` header (that header line
 * excluded). It runs to the end of the file, unless the step also has a
 * `# --solutions--` header, in which case the seed stops there and the solution
 * is everything below that header. A solution may appear on any step, not just
 * the last (rare, but handled). Works the same whether the seed has one code
 * block or several (multifile).
 *
 * `--fcc-editable-region--` marker lines are stripped everywhere before diffing.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const dashedName = process.argv[2];
if (!dashedName) {
  console.error("Usage: node workshop-seed-diff.js <workshop-dashedname> [output.md]");
  process.exit(1);
}

const cwd = process.cwd();
const blockJsonPath = path.join(cwd, "curriculum", "structure", "blocks", `${dashedName}.json`);
const challengesDir = path.join(cwd, "curriculum", "challenges", "english", "blocks", dashedName);

if (!fs.existsSync(blockJsonPath)) {
  console.error(`Block JSON not found: ${blockJsonPath}`);
  console.error("Are you running from the root of the freeCodeCamp/freeCodeCamp repo?");
  process.exit(1);
}
if (!fs.existsSync(challengesDir)) {
  console.error(`Challenges directory not found: ${challengesDir}`);
  process.exit(1);
}

const SEED_RE = /^#{1,6}\s+--seed--\s*$/;
const SEED_CONTENTS_RE = /^#{1,6}\s+--seed-contents--\s*$/;
const SOLUTION_RE = /^#{1,6}\s+--solutions?--\s*$/;

// Return { seed, solution } bodies for a challenge file. solution is null when absent.
function extractSections(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");

  const seedIdx = lines.findIndex((l) => SEED_RE.test(l));
  if (seedIdx === -1) return { seed: null, solution: null };

  // Seed content starts below the `## --seed-contents--` subheader (excluded).
  let contentsIdx = -1;
  for (let i = seedIdx + 1; i < lines.length; i++) {
    if (SEED_CONTENTS_RE.test(lines[i])) {
      contentsIdx = i;
      break;
    }
  }
  const seedStart = contentsIdx === -1 ? seedIdx : contentsIdx;

  // First solution header that appears after the seed header.
  let solutionIdx = -1;
  for (let i = seedStart + 1; i < lines.length; i++) {
    if (SOLUTION_RE.test(lines[i])) {
      solutionIdx = i;
      break;
    }
  }

  const seedEnd = solutionIdx === -1 ? lines.length : solutionIdx;
  const seed = trimBlankEdges(lines.slice(seedStart + 1, seedEnd));
  const solution =
    solutionIdx === -1 ? null : trimBlankEdges(lines.slice(solutionIdx + 1));

  return { seed, solution };
}

function trimBlankEdges(lines) {
  const out = lines.slice();
  while (out.length && out[0].trim() === "") out.shift();
  while (out.length && out[out.length - 1].trim() === "") out.pop();
  return out.join("\n");
}

// Drop editable-region marker lines so they don't pollute the diff when they shift.
function stripEditableRegion(text) {
  return text
    .split("\n")
    .filter((l) => l.trim() !== "--fcc-editable-region--")
    .join("\n");
}

// Unified diff between two strings using the system `diff`. Returns "" when identical.
// Editable-region markers are removed from both sides before comparing.
function unifiedDiff(a, b, labelA, labelB) {
  a = stripEditableRegion(a);
  b = stripEditableRegion(b);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wsdiff-"));
  const fa = path.join(dir, "a");
  const fb = path.join(dir, "b");
  fs.writeFileSync(fa, a.endsWith("\n") ? a : a + "\n");
  fs.writeFileSync(fb, b.endsWith("\n") ? b : b + "\n");
  let out = "";
  try {
    execFileSync("diff", ["-u", "--label", labelA, "--label", labelB, fa, fb], {
      encoding: "utf8",
    });
    // exit 0 => identical
  } catch (e) {
    if (e.status === 1) {
      out = e.stdout; // exit 1 => differences
    } else {
      throw e;
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  return out;
}

const block = JSON.parse(fs.readFileSync(blockJsonPath, "utf8"));
const order = block.challengeOrder || [];
if (order.length === 0) {
  console.error(`No challengeOrder found in ${blockJsonPath}`);
  process.exit(1);
}

// Load every step's sections up front.
const steps = order.map((step, i) => {
  const filePath = path.join(challengesDir, `${step.id}.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing challenge file for ${step.title} (${step.id}): ${filePath}`);
    process.exit(1);
  }
  const { seed, solution } = extractSections(filePath);
  if (seed === null) {
    console.error(`No --seed-- section found in ${filePath} (${step.title})`);
    process.exit(1);
  }
  return { ...step, index: i, filePath, seed, solution };
});

// Build the markdown report.
const md = [];
const withSolution = steps.filter((s) => s.solution !== null);
md.push(`# Workshop seed diff: \`${dashedName}\``);
md.push("");
md.push(`- Steps: **${steps.length}**`);
md.push(
  `- Steps with a \`# --solutions--\` section: **${withSolution.length}**` +
    (withSolution.length
      ? ` (${withSolution.map((s) => s.title).join(", ")})`
      : "")
);
md.push("");
md.push(
  "Diffs are unified (`diff -u`) over everything below each step's `# --seed--` header. `--fcc-editable-region--` marker lines are stripped everywhere so they don't add noise."
);
md.push("");
md.push("---");
md.push("");

// Step 1 full seed. Fence with ~~~ so the seed's own ``` fences don't collide.
md.push(`## ${steps[0].title} seed (full)`);
md.push("");
md.push("~~~~md");
md.push(stripEditableRegion(steps[0].seed));
md.push("~~~~");
md.push("");

// Emit one heading + diff block into the report.
function pushDiff(heading, a, b, labelA, labelB, emptyMsg) {
  md.push(`### ${heading}`);
  md.push("");
  const d = unifiedDiff(a, b, labelA, labelB);
  if (d.trim() === "") {
    md.push(emptyMsg);
  } else {
    md.push("````diff");
    md.push(d.replace(/\n$/, ""));
    md.push("````");
  }
  md.push("");
}

// Diffs in learner order. For a step with a solution the chain is
// seed → solution → next-step seed (two diffs); the carry-forward diff starts
// from the solution, since that is the learner's end state for the step. A step
// without a solution just gets seed → next-step seed.
md.push("## Seed diffs");
md.push("");
for (let i = 0; i < steps.length; i++) {
  const cur = steps[i];
  const hasSol = cur.solution !== null;
  if (hasSol) {
    pushDiff(
      `${cur.title} → ${cur.title} solution`,
      cur.seed,
      cur.solution,
      `${cur.title} seed`,
      `${cur.title} solution`,
      "_Seed and solution are identical._"
    );
  }
  if (i < steps.length - 1) {
    const next = steps[i + 1];
    const left = hasSol ? cur.solution : cur.seed;
    const leftLabel = hasSol ? `${cur.title} solution` : `${cur.title} seed`;
    const heading = hasSol
      ? `${cur.title} solution → ${next.title}`
      : `${cur.title} → ${next.title}`;
    pushDiff(
      heading,
      left,
      next.seed,
      leftLabel,
      `${next.title} seed`,
      "_No change._"
    );
  }
}

const outPath =
  process.argv[3] || path.join(__dirname, `${dashedName}-seed-diff.md`);
fs.writeFileSync(outPath, md.join("\n"));
console.log(`Wrote ${outPath}`);