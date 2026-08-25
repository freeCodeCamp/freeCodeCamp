import console from 'node:console';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const e2eDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(e2eDirectory, '..');
const curriculumPath = path.join(
  repositoryRoot,
  'curriculum/generated/curriculum.json'
);
const publicDirectory = path.join(repositoryRoot, 'client/public');

// These blocks are exercised through superblock search or navigation, so their
// challenge URLs do not appear literally in the specs.
const indirectlyReferencedBlocks = [
  'lecture-introduction-to-common-searching-and-sorting-algorithms',
  'lecture-understanding-html-attributes',
  'project-euler-problems-401-to-480',
  'workshop-curriculum-outline'
];

function fail(message) {
  console.error(`\nE2E build verification failed:\n\n${message}\n`);
  process.exitCode = 1;
}

if (!process.env.FCC_BLOCK) {
  fail('FCC_BLOCK is not set. This verification is only for selective builds.');
} else if (!fs.existsSync(curriculumPath)) {
  fail(`Curriculum data was not generated at ${curriculumPath}.`);
} else {
  const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
  const blockRoutes = new Map();

  for (const certification of Object.values(curriculum)) {
    for (const [blockName, block] of Object.entries(
      certification.blocks ?? {}
    )) {
      const routes = blockRoutes.get(blockName) ?? [];

      for (const challenge of block.challenges) {
        if (!challenge.superBlock || !challenge.dashedName) continue;

        routes.push(
          `/learn/${challenge.superBlock}/${challenge.block}/${challenge.dashedName}`
        );
      }

      blockRoutes.set(blockName, routes);
    }
  }

  const specSource = fs
    .readdirSync(e2eDirectory)
    .filter(fileName => fileName.endsWith('.spec.ts'))
    .map(fileName => fs.readFileSync(path.join(e2eDirectory, fileName), 'utf8'))
    .join('\n');

  const requiredBlocks = new Set(indirectlyReferencedBlocks);

  for (const [blockName, routes] of blockRoutes) {
    const referencesBlockDirectly =
      specSource.includes(`#${blockName}`) ||
      specSource.includes(`block: '${blockName}'`) ||
      specSource.includes(`block: "${blockName}"`);
    const referencesChallenge = routes.some(
      route => specSource.includes(route) || specSource.includes(route.slice(1))
    );

    if (referencesBlockDirectly || referencesChallenge) {
      requiredBlocks.add(blockName);
    }
  }

  const selectedBlocks = new Set(
    process.env.FCC_BLOCK.split(',')
      .map(block => block.trim())
      .filter(Boolean)
  );
  const unknownBlocks = [...selectedBlocks].filter(
    block => !blockRoutes.has(block)
  );
  const missingBlocks = [...requiredBlocks].filter(
    block => !selectedBlocks.has(block)
  );
  const blocksWithoutPages = [...requiredBlocks].filter(block => {
    const routes = blockRoutes.get(block) ?? [];

    return !routes.some(route =>
      fs.existsSync(path.join(publicDirectory, route, 'index.html'))
    );
  });

  const errors = [];

  if (unknownBlocks.length > 0) {
    errors.push(
      `FCC_BLOCK contains unknown blocks:\n${unknownBlocks
        .sort()
        .map(block => `  - ${block}`)
        .join('\n')}`
    );
  }

  if (missingBlocks.length > 0) {
    errors.push(
      `The E2E specs reference blocks that are missing from FCC_BLOCK:\n${missingBlocks
        .sort()
        .map(block => `  - ${block}`)
        .join(
          '\n'
        )}\n\nAdd them to FCC_BLOCK in .github/workflows/e2e-playwright.yml.`
    );
  }

  if (blocksWithoutPages.length > 0) {
    errors.push(
      `No built challenge page was found for these required blocks:\n${blocksWithoutPages
        .sort()
        .map(block => `  - ${block}`)
        .join('\n')}`
    );
  }

  if (errors.length > 0) {
    fail(errors.join('\n\n'));
  } else {
    console.log(
      `Verified ${requiredBlocks.size} curriculum blocks required by the E2E suite.`
    );
  }
}
