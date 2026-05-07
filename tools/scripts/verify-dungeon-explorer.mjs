import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const STEPS = 50;
const ID_OFFSET = 0xca;
const HEX = n =>
  '66faa500000000000000' + (ID_OFFSET + n).toString(16).padStart(4, '0');
const DIR =
  '/Users/marcosantos/code/freeCodeCamp/curriculum/challenges/english/blocks/workshop-top-down-dungeon-explorer';

const stripRegions = text => text.replace(/^--fcc-editable-region--\n/gm, '');

const extractJsBlocks = md => {
  const blocks = [];
  const re = /```js\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(md))) blocks.push(m[1]);
  return blocks;
};

const extractSeedJs = md => {
  // The seed is the LAST ```js block (after html, css come first in seed-contents).
  const blocks = extractJsBlocks(md);
  return blocks[blocks.length - 1];
};

const extractAllAsserts = md => {
  // hints are the ```js blocks except the last (which is the seed).
  const blocks = extractJsBlocks(md);
  const hintBlocks = blocks.slice(0, -1);
  const asserts = [];
  for (const block of hintBlocks) {
    // each block may contain multiple assert.match calls
    const re = /assert\.match\(\s*code\s*,\s*\/([\s\S]*?)\/\s*\)\s*;/g;
    let m;
    while ((m = re.exec(block))) asserts.push(m[1]);
  }
  return asserts;
};

const buildSolution = (n, seedNplus1) => {
  // we don't have direct solutions; reconstruct via running the generator? Skip.
  // Instead, derive solution[n] = seed[n+1] minus the markers.
  // For step 50, use stripRegions(seed[50]) — represents the state before 50.
  return null;
};

let failures = 0;
const fail = msg => {
  failures++;
  console.error('FAIL:', msg);
};

// We treat solution[n] as stripRegions(seed[n+1]). For step 50 we don't have a
// next step, so we approximate solution[50] by reconstructing it locally: the
// seed[50] minus markers will lack the step-50 mutation. Instead read solution
// directly by re-running the python state machine... too complex. Simpler: we
// just check that hints[n] match seed[n+1] (the canonical post-step state) and
// do NOT match seed[n] (the pre-step state).

const seeds = {};
const hints = {};
for (let n = 1; n <= STEPS; n++) {
  const md = fs.readFileSync(path.join(DIR, `${HEX(n)}.md`), 'utf8');
  seeds[n] = extractSeedJs(md);
  hints[n] = extractAllAsserts(md);
}

import os from 'node:os';

const solutionsArr = JSON.parse(
  fs.readFileSync(
    path.join(os.tmpdir(), 'fcc-dungeon-explorer-solutions.json'),
    'utf8'
  )
);
const solutions = {};
for (let n = 1; n <= STEPS; n++) solutions[n] = solutionsArr[n];

// 1. Each solution should parse as ECMAScript.
for (let n = 1; n <= STEPS; n++) {
  try {
    new vm.Script(`(() => { ${solutions[n]} })()`);
  } catch (err) {
    fail(`step ${n} solution parse error: ${err.message}`);
  }
}

// 2. Each hint regex must match its own solution.
for (let n = 1; n <= STEPS; n++) {
  for (const re of hints[n]) {
    const r = new RegExp(re);
    if (!r.test(solutions[n])) {
      fail(`step ${n} hint not found in solution: /${re}/`);
    }
  }
}

// 3. No trivial passes: hints[n] must NOT match solutions[n-1].
for (let n = 2; n <= STEPS; n++) {
  const prev = solutions[n - 1];
  for (const re of hints[n]) {
    const r = new RegExp(re);
    if (r.test(prev)) {
      fail(
        `TRIVIAL PASS: step ${n} hint matches step ${n - 1} solution: /${re}/`
      );
    }
  }
}

if (failures === 0) {
  console.log(
    `OK: ${STEPS} steps validated (parse + hint-match + no-trivial-pass).`
  );
  process.exit(0);
} else {
  console.error(`\n${failures} failure(s).`);
  process.exit(1);
}
