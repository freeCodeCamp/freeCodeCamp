import path from 'node:path';
import { createRequire } from 'node:module';
import { describe, it, afterAll } from 'vitest';
import { assert, AssertionError } from 'chai';
import jsdom from 'jsdom';
import liveServer from '@compodoc/live-server';
import lodash from 'lodash';
import ora from 'ora';
import puppeteer from 'puppeteer';
import {
  buildChallenge,
  runnerTypes
} from '../../client/src/templates/Challenges/utils/build';
import {
  challengeTypes,
  hasNoSolution
} from '../../shared/config/challenge-types';
import { getLines } from '../../shared/utils/get-lines';
import {
  prefixDoctype,
  helperVersion
} from '../../client/src/templates/Challenges/utils/frame';

const require = createRequire(import.meta.url);

const clientPath = path.resolve(__dirname, '../../client');
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

const testFilter = {
  block: process.env.FCC_BLOCK ? process.env.FCC_BLOCK.trim() : undefined,
  challengeId: process.env.FCC_CHALLENGE_ID
    ? process.env.FCC_CHALLENGE_ID.trim()
    : undefined,
  superBlock: process.env.FCC_SUPERBLOCK
    ? process.env.FCC_SUPERBLOCK.trim()
    : undefined
};

// Surface unhandled rejections and uncaught exceptions, but let Vitest handle exit codes
process.on('unhandledRejection', err => handleRejection(err));
process.on('uncaughtException', err => {
  console.error('Uncaught exception:');
  console.error(err);
});

// some errors *may* not be reported, since cleanup is triggered by the first
// error and that starts shutting down the browser and the server.
const handleRejection = err => {
  console.error('Unhandled rejection:');
  cleanup();
  console.error(err);
};

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;

async function newPageContext(browser) {
  const page = await browser.newPage();
  // it's needed for workers as context.
  await page.goto('http://127.0.0.1:8080/index.html');
  return page;
}

const spinner = ora();
spinner.start();
spinner.text = 'Populate tests.';

let browser;
let page;

const challengeData = await setup().catch(err => {
  handleRejection(err);
  throw err;
});

async function setup() {
  // liveServer starts synchronously
  liveServer.start({
    host: '127.0.0.1',
    port: '8080',
    root: path.resolve(__dirname, 'stubs'),
    mount: [
      [
        '/dist',
        path.join(clientPath, `static/js/test-runner/${helperVersion}`)
      ],
      ['/js', path.join(clientPath, 'static/js')]
    ],
    open: false,
    logLevel: 0
  });
  browser = await puppeteer.launch({
    args: [
      // Required for Docker version of Puppeteer
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage'
      // dumpio: true
    ],
    headless: 'new'
  });
  global.Worker = createPseudoWorker(await newPageContext(browser));

  page = await newPageContext(browser);
  await page.setViewport({ width: 300, height: 150 });

  const lang = testedLang();
  const challenges = await getChallenges(lang, testFilter);
  const nonCertificationChallenges = challenges.filter(
    ({ challengeType }) => challengeType !== 7
  );

  if (isEmpty(nonCertificationChallenges)) {
    throw Error(
      `No challenges to test when using filter ${JSON.stringify(testFilter)}
If the challenge file exists, try running 'build:curriculum' for more information.
      `
    );
  }

  // the next few statements create a list of all blocks and superblocks
  // as they appear in the list of challenges
  const superBlocks = challenges.map(({ superBlock }) => superBlock);
  const targetSuperBlockStrings = [
    ...new Set(superBlocks.filter(el => Boolean(el)))
  ];

  const meta = {};
  for (const challenge of challenges) {
    const dashedBlockName = challenge.block;
    // certifications do not have dashedBlockName's and don't have metas so
    // we can skip them.
    // TODO: omit certifications from the list of challenges
    if (dashedBlockName && !meta[dashedBlockName]) {
      meta[dashedBlockName] = getBlockStructure(dashedBlockName);
      const result = validateMetaSchema(meta[dashedBlockName]);

      if (result.error) {
        throw new AssertionError(result.error);
      }
    }
  }
  return {
    meta,
    challenges,
    lang,
    superBlocks: targetSuperBlockStrings
  };
}

// cleanup calls some async functions, but it's the last thing that happens, so
// no need to await anything.
function cleanup() {
  if (browser) {
    browser.close();
  }
  liveServer.shutdown();
  spinner.stop();
}

spinner.text = 'Testing';
describe('Check challenges', () => {
  afterAll(() => {
    cleanup();
  });
  populateTestsForLang(challengeData);
});

async function getChallenges(lang, filters) {
  const challenges = await getChallengesForLang(lang, filters).then(
    curriculum => {
      const result = curriculumSchemaValidator(curriculum);
      // If there are filters, we're testing a single challenge or block, so we
      // can skip the validation.
      if (result.error && isEmpty(filters)) {
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

function populateTestsForLang({ lang, challenges, meta, superBlocks }) {
  const validateChallenge = challengeSchemaValidator();

  superBlocks.forEach(superBlock => {
    describe(`Language: ${lang}`, function () {
      describe(`SuperBlock: ${superBlock}`, function () {
        const superBlockChallenges = challenges.filter(
          c => c.superBlock === superBlock
        );

        // daily challenge tests
        if (superBlock === 'dev-playground') {
          describe('Daily Coding Challenges', function () {
            const jsDailyChallenges = superBlockChallenges.filter(
              c => c.block === 'daily-coding-challenges-javascript'
            );

            const pyDailyChallenges = superBlockChallenges.filter(
              c => c.block === 'daily-coding-challenges-python'
            );

            it('should have matching number of JavaScript and Python challenges', function () {
              assert.equal(
                jsDailyChallenges.length,
                pyDailyChallenges.length,
                `JavaScript challenges: ${jsDailyChallenges.length}, Python challenges: ${pyDailyChallenges.length}`
              );
            });

            for (let i = 0; i < jsDailyChallenges.length; i++) {
              describe(`Challenge ${i + 1} Parity`, function () {
                const jsChallenge = jsDailyChallenges[i];
                const pyChallenge = pyDailyChallenges[i];

                it("should have matching ID's", function () {
                  assert.equal(
                    jsChallenge.id,
                    pyChallenge.id,
                    `Challenge ${i + 1} ID mismatch - JS: ${jsChallenge.id}, Python: ${pyChallenge.id}`
                  );
                });

                it(`should have matching titles`, function () {
                  assert.equal(
                    jsChallenge.title,
                    pyChallenge.title,
                    `Challenge ${i + 1} title mismatch - JS: ${jsChallenge.title}, Python: ${pyChallenge.title}`
                  );
                });

                it('should have matching descriptions', function () {
                  assert.equal(
                    jsChallenge.description,
                    pyChallenge.description,
                    `Challenge ${i + 1} description mismatch`
                  );
                });

                it('should have the same number of tests', function () {
                  const jsTestCount = jsChallenge.tests.length;
                  const pyTestCount = pyChallenge.tests.length;
                  assert.equal(
                    jsTestCount,
                    pyTestCount,
                    `Challenge ${i + 1} test count mismatch - JS: ${jsTestCount}, Python: ${pyTestCount}`
                  );
                });
              });
            }
          });
        }

        const challengeTitles = new ChallengeTitles();
        const mongoIds = new MongoIds();

        superBlockChallenges.forEach((challenge, id) => {
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
                  const index = meta[
                    dashedBlockName
                  ]?.challengeOrder?.findIndex(({ id }) => id === challenge.id);

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
                  const dupeTitleCheck = challengeTitles.check(
                    dashedName,
                    block
                  );
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
                      for (const test of tests) {
                        try {
                          await testRunner(test);
                        } catch {
                          fails = true;
                          break;
                        }
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

                  const nextChallenge = superBlockChallenges[id + 1];

                  if (nextChallenge) {
                    const solutionFiles = cloneDeep(
                      nextChallenge.challengeFiles
                    );
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
                    it(
                      `Solution ${index + 1} must pass the tests`,
                      async function () {
                        const testRunner = await createTestRunner(
                          challenge,
                          solution,
                          buildChallenge,
                          solutionFromNext
                        );
                        for (const test of tests) {
                          await testRunner(test);
                        }
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

  const evaluator = await getContextEvaluator({
    // passing in challengeId so it's easier to debug timeouts
    challengeId: challenge.id,
    build,
    sources,
    type: runnerTypes[challenge.challengeType],
    loadEnzyme,
    hooks: challenge.hooks
  });

  return async ({ text, testString }) => {
    try {
      const { pass, err } = await evaluator.evaluate(testString, 5000);
      if (!pass) {
        throw err;
      }
    } catch (err) {
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
    evaluate: async (testString, timeout) =>
      Promise.race([
        new Promise((_, reject) =>
          setTimeout(
            () =>
              reject(
                Error(`timeout in challenge
${config.challengeId}
while evaluating test:
${testString}
`)
              ),
            timeout
          )
        ),
        await page.evaluate(
          async (testString, type) => {
            return await window.FCCTestRunner.getRunner(type).runTest(
              testString
            );
          },
          testString,
          config.type
        )
      ])
  };
}

async function initializeTestRunner({
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
