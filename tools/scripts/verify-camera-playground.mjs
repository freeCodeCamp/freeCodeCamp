import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';

const STEPS = 25;
const ID_OFFSET = 0xa9;
const HEX = n =>
  '66faa600000000000000' + (ID_OFFSET + n).toString(16).padStart(4, '0');
const DIR =
  '/Users/marcosantos/code/freeCodeCamp/curriculum/challenges/english/blocks/workshop-camera-playground';

const extractJsBlocks = md => {
  const blocks = [];
  const re = /```js\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(md))) blocks.push(m[1]);
  return blocks;
};

const extractSeedJs = md => {
  // hints are ```js blocks before the seed; the LAST ```js block before the
  // optional --solutions-- section is the seed.
  const beforeSolutions = md.split('# --solutions--')[0];
  const blocks = extractJsBlocks(beforeSolutions);
  return blocks[blocks.length - 1];
};

const extractAllAsserts = md => {
  const beforeSeed = md.split('# --seed--')[0];
  const blocks = extractJsBlocks(beforeSeed);
  const asserts = [];
  for (const block of blocks) {
    const re = /assert\.match\(\s*code\s*,\s*\/([\s\S]*?)\/\s*\)\s*;/g;
    let m;
    while ((m = re.exec(block))) asserts.push(m[1]);
  }
  return asserts;
};

let failures = 0;
const fail = msg => {
  failures++;
  console.error('FAIL:', msg);
};

const seeds = {};
const hints = {};
for (let n = 1; n <= STEPS; n++) {
  const md = fs.readFileSync(path.join(DIR, `${HEX(n)}.md`), 'utf8');
  seeds[n] = extractSeedJs(md);
  hints[n] = extractAllAsserts(md);
}

const solutionsArr = JSON.parse(
  fs.readFileSync(
    path.join(os.tmpdir(), 'fcc-camera-playground-solutions.json'),
    'utf8'
  )
);
const solutions = {};
for (let n = 1; n <= STEPS; n++) solutions[n] = solutionsArr[n];

for (let n = 1; n <= STEPS; n++) {
  try {
    new vm.Script(`(() => { ${solutions[n]} })()`);
  } catch (err) {
    fail(`step ${n} solution parse error: ${err.message}`);
  }
}

for (let n = 1; n <= STEPS; n++) {
  for (const re of hints[n]) {
    const r = new RegExp(re);
    if (!r.test(solutions[n])) {
      fail(`step ${n} hint not found in solution: /${re}/`);
    }
  }
}

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
