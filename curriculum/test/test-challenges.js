import { createRequire } from 'node:module';

import { describe, it, beforeAll, expect } from 'vitest';
import { assert, AssertionError } from 'chai';
import jsdom from 'jsdom';
import lodash from 'lodash';

import {
  buildChallenge,
  runnerTypes
} from '../../client/src/templates/Challenges/utils/build';
import {
  challengeTypes,
  hasNoSolution
} from '../../shared/config/challenge-types';
import { getLines } from '../../shared/utils/get-lines';
import { prefixDoctype } from '../../client/src/templates/Challenges/utils/frame';

const require = createRequire(import.meta.url);

const { getChallengesForLang } = require('../get-challenges');
const { challengeSchemaValidator } = require('../schema/challenge-schema');
const { testedLang } = require('../utils');

const { curriculumSchemaValidator } = require('../schema/curriculum-schema');
const { validateMetaSchema } = require('../schema/meta-schema');
const { getBlockStructure } = require('../file-handler');
const ChallengeTitles = require('./utils/challenge-titles');
const MongoIds = require('./utils/mongo-ids');
const createPseudoWorker = require('./utils/pseudo-worker');

const { sortChallenges } = require('./utils/sort-challenges');

const { flatten, isEmpty, cloneDeep } = lodash;

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;

// The puppeteer page is global so that we can recreate it during tests, if
// needed.
let page;

const poolId = process.env.VITEST_POOL_ID;

async function createAndVisitNewPage() {
  const page = await globalThis.puppeteerBrowserContext[poolId].newPage();
  await page.goto(`http://127.0.0.1:8080/index.html`);
  return page;
}

async function newPageContext() {
  // Reuse a single page per worker/pool to avoid the overhead of creating a
  // new page for every block file.
  globalThis.__fccPuppeteerPages ??= {};
  globalThis.__fccPuppeteerPages[poolId] ??= globalThis.__fccPuppeteerPages[
    poolId
  ] = createAndVisitNewPage();

  return globalThis.__fccPuppeteerPages[poolId];
}

export async function defineTestsForBlock({ block }) {
  const lang = testedLang();
  const challenges = await getChallenges(lang, { block });
  const nonCertificationChallenges = challenges.filter(
    ({ challengeType }) => challengeType !== 7
  );
  if (isEmpty(nonCertificationChallenges)) {
    console.warn(`No non-certification challenges to test for block ${block}.`);
    describe('Check challenges', () => {
      it('No non-certification challenges to test', () => {});
    });
    return;
  }
  const meta = {};
  for (const challenge of challenges) {
    const dashedBlockName = challenge.block;
    if (dashedBlockName && !meta[dashedBlockName]) {
      meta[dashedBlockName] = getBlockStructure(dashedBlockName);
      describe(`Meta structure for block ${dashedBlockName}`, () => {
        it('Has valid structure', () => {
          const result = validateMetaSchema(meta[dashedBlockName]);
          expect(result.error).toBeUndefined();
        });
      });
    }
  }

  const challengeData = { meta, challenges, lang };

  describe('Check challenges', () => {
    beforeAll(async () => {
      page = await newPageContext();
      global.Worker = createPseudoWorker(page);
    });

    populateTestsForLang(challengeData, () => page);
  });
}

export async function getChallenges(lang, filters) {
  const challenges = await getChallengesForLang(lang, filters).then(
    curriculum => {
      // If there are filters, we're testing a single challenge or block, so we
      // can skip the validation.
      if (isEmpty(filters)) {
        const result = curriculumSchemaValidator(curriculum);
        if (result.error)
          throw new Error(
            `Curriculum validation failed: ${result.error.message}`
          );
      }
      return Object.keys(curriculum)
        .map(key => curriculum[key].blocks)
        .reduce((challengeArray, superBlock) => {
          const challengesForBlock = Object.keys(superBlock).map(
            key => superBlock[key].challenges
          );
          return [...challengeArray, ...flatten(challengesForBlock)];
        }, []);
    }
  );
  // This matches the order Gatsby uses (via a GraphQL query). Ideally both
  // should be sourced and sorted using a single query, but we're not there yet.
  return sortChallenges(challenges);
}

function populateTestsForLang({ lang, challenges, meta }) {
  const validateChallenge = challengeSchemaValidator();

  describe(`Language: ${lang}`, function () {
    const challengeTitles = new ChallengeTitles();
    const mongoIds = new MongoIds();

    challenges.forEach((challenge, id) => {
      // When testing single challenge, in project based curriculum,
      // challenge to test (current challenge) might not have solution.
      // Instead seed from next challenge is tested against tests from
      // current challenge. Next challenge is skipped from testing.
      if (process.env.FCC_CHALLENGE_ID && id > 0) return;

      const dashedBlockName = challenge.block;
      // TODO: once certifications are not included in the list of challenges,
      // stop returning early here.
      if (typeof dashedBlockName === 'undefined') return;
      describe(`Block: ${challenge.block}`, function () {
        describe(`Title: ${challenge.title}`, function () {
          describe(`ID: ${challenge.id}`, function () {
            // Note: the title in meta.json are purely for human readability and
            // do not include translations, so we do not validate against them.
            it('Matches an ID in meta.json', function () {
              const index = meta[dashedBlockName]?.challengeOrder?.findIndex(
                ({ id }) => id === challenge.id
              );

              if (index < 0) {
                throw new AssertionError(
                  `Cannot find ID "${challenge.id}" in meta.json file for block "${dashedBlockName}"`
                );
              }
            });

            it('Common checks', function () {
              const result = validateChallenge(challenge);

              if (result.error) {
                throw new AssertionError(result.error);
              }
              const { id, block, dashedName } = challenge;
              assert.exists(
                dashedName,
                `Missing dashedName for challenge ${id} in ${block}.`
              );
              const pathAndTitle = `${block}/${dashedName}`;
              const idVerificationMessage = mongoIds.check(id, block);
              assert.isNull(idVerificationMessage, idVerificationMessage);
              const dupeTitleCheck = challengeTitles.check(dashedName, block);
              assert.isTrue(
                dupeTitleCheck,
                `All challenges within a block must have a unique dashed name. ${dashedName} (at ${pathAndTitle}) is already assigned`
              );
            });

            const { challengeType } = challenge;

            if (hasNoSolution(challengeType)) return;

            let { tests = [] } = challenge;
            tests = tests.filter(test => !!test.testString);
            if (tests.length === 0) {
              it('Check tests. No tests.', () => {});
              return;
            }

            if (challengeType === challengeTypes.backend) {
              it('Check tests is not implemented.', () => {});
              return;
            }

            // The python tests are (currently) slow, so we give them more time.
            const timePerTest =
              challengeType === challengeTypes.python ? 10000 : 5000;
            it(
              'Test suite must fail on the initial contents',
              async function () {
                // suppress errors in the console.
                const oldConsoleError = console.error;
                console.error = () => {};
                let fails = false;
                let testRunner;
                // TODO: if this times out, try wrapping this whole test in a
                // new describe block and create the runner in a beforeAll (i.e.
                // same as "Check tests against solutions")
                try {
                  testRunner = await createTestRunner(
                    challenge,
                    challenge.challengeFiles,
                    buildChallenge
                  );
                } catch (e) {
                  console.error(
                    `Error creating test runner for initial contents`
                  );
                  console.error(e);
                  fails = true;
                }
                if (!fails) {
                  try {
                    await testRunner(tests);
                  } catch {
                    fails = true;
                  }
                }
                console.error = oldConsoleError;
                assert(
                  fails,
                  'Test suite does not fail on the initial contents'
                );
              },
              timePerTest * tests.length + 20000
            );

            let { solutions = [] } = challenge;

            // if there's an empty string as solution, this is likely a mistake
            // TODO: what does this look like now? (this being detection of empty
            // lines in solutions - rather than entirely missing solutions)

            // We need to track where the solution came from to give better
            // feedback if the solution is failing.
            let solutionFromNext = false;

            if (isEmpty(solutions)) {
              // if there are no solutions in the challenge, it's assumed the next
              // challenge's seed will be a solution to the current challenge.
              // This is expected to happen in the project based curriculum.

              const nextChallenge = challenges[id + 1];

              if (nextChallenge) {
                const solutionFiles = cloneDeep(nextChallenge.challengeFiles);
                if (!solutionFiles) {
                  throw Error(
                    `No solution found.
Check the next challenge (${nextChallenge.title}): it should have a seed which solves the current challenge.
For example:

# --seed--

## --seed-contents--

\`\`\`js
seed goes here
\`\`\`
                  `
                  );
                }
                const solutionFilesWithEditableContents = solutionFiles.map(
                  file => ({
                    ...file,
                    editableContents: getLines(
                      file.contents,
                      file.editableRegionBoundaries
                    )
                  })
                );
                // Since there is only one seed, there can only be one solution,
                // but the tests assume solutions is an array.
                solutions = [solutionFilesWithEditableContents];
                solutionFromNext = true;
              } else {
                throw Error(
                  `solution omitted for ${challenge.superBlock} ${challenge.block} ${challenge.title}`
                );
              }
            }

            // TODO: the no-solution filtering is a little convoluted:
            const noSolution = new RegExp('// solution required');

            const filteredSolutions = solutions.filter(solution => {
              return !isEmpty(
                solution.filter(
                  challengeFile => !noSolution.test(challengeFile.contents)
                )
              );
            });

            if (isEmpty(filteredSolutions)) {
              it('Check tests. No solutions', () => {});
              return;
            }

            describe('Check tests against solutions', function () {
              solutions.forEach((solution, index) => {
                let testRunner;
                // Creating the test runner can be slow, so we do it in
                // beforeAll rather than the test itself.
                beforeAll(async () => {
                  testRunner = await createTestRunner(
                    challenge,
                    solution,
                    buildChallenge,
                    solutionFromNext
                  );
                });

                it(
                  `Solution ${index + 1} must pass the tests`,
                  async function () {
                    await testRunner(tests);
                  },
                  timePerTest * tests.length + 2000
                );
              });
            });
          });
        });
      });
    });
  });
}

async function createTestRunner(
  challenge,
  solutionFiles,
  buildChallenge,
  solutionFromNext
) {
  const challengeFiles = replaceChallengeFilesContentsWithSolutions(
    challenge.challengeFiles,
    solutionFiles
  );

  const { build, sources, loadEnzyme } = await buildChallenge(
    {
      ...challenge,
      challengeFiles
    },
    { usesTestRunner: true }
  );

  if (!page) throw new Error('Browser page is not ready yet');

  const evaluator = await getContextEvaluator({
    // passing in challengeId so it's easier to debug timeouts
    challengeId: challenge.id,
    build,
    sources,
    type: runnerTypes[challenge.challengeType],
    loadEnzyme,
    hooks: challenge.hooks
  });

  return async tests => {
    const testStrings = tests.map(test => test.testString);

    const results = await evaluator.evaluate(testStrings, 5000);
    for (let i = 0; i < results.length; i++) {
      const { err } = results[i];
      let { text } = tests[i];
      if (err) {
        text = 'Test text: ' + text;
        const newMessage = solutionFromNext
          ? 'Check next step for solution!\n' + text
          : text;
        // if the stack is missing, the message should be included. Otherwise it
        // is redundant.
        err.message = err.stack
          ? newMessage
          : `${newMessage}
      ${err.message}`;
        throw err;
      }
    }
  };
}

function replaceChallengeFilesContentsWithSolutions(
  challengeFiles,
  solutionFiles
) {
  return challengeFiles.map(file => {
    const matchingSolutionFile = solutionFiles.find(
      ({ ext, name }) => ext === file.ext && file.name === name
    );
    if (!matchingSolutionFile) {
      throw Error(
        `No matching solution file found for ${file.name}.${file.ext} - this likely means the seed code for the next step is missing the ${file.ext} code block.`
      );
    }
    return {
      ...file,
      contents: matchingSolutionFile.contents,
      editableContents: matchingSolutionFile.editableContents
    };
  });
}

async function getContextEvaluator(config) {
  await initializeTestRunner(config);

  return {
    evaluate: async (testStrings, timeout) =>
      await page.evaluate(
        async (type, testStrings, timeout) => {
          return await window.FCCTestRunner.getRunner(type).runAllTests(
            testStrings,
            timeout
          );
        },
        config.type,
        testStrings,
        timeout
      )
  };
}

async function _initializeTestRunner({
  build,
  sources,
  type,
  hooks,
  loadEnzyme
}) {
  const source = type === 'dom' ? prefixDoctype({ build, sources }) : build;
  await page.evaluate(
    async (sources, source, type, hooks, loadEnzyme) => {
      await window.FCCTestRunner.createTestRunner({
        source,
        type,
        code: sources,
        hooks,
        loadEnzyme
      });
    },
    sources,
    source,
    type,
    hooks,
    loadEnzyme
  );
}

async function initializeTestRunner({
  build,
  sources,
  type,
  hooks,
  loadEnzyme
}) {
  // Ensure FCCTestRunner is available before creating it
  await page.waitForFunction(
    'window.FCCTestRunner && window.FCCTestRunner.createTestRunner',
    { timeout: 5000 }
  );

  try {
    await _initializeTestRunner({ build, sources, type, hooks, loadEnzyme });
  } catch (e) {
    // It's not clear why, but sometimes the iframe load times out. It seems to
    // be an issue with Puppeteer, so we give it one more try to reduce test
    // flakiness.
    if (e.message.includes('Timed out waiting for the test frame to load')) {
      console.warn('Test frame load timed out. Retrying...');
      page = await createAndVisitNewPage();
      await _initializeTestRunner({ build, sources, type, hooks, loadEnzyme });
    } else {
      throw e;
    }
  }
}
