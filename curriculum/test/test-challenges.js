import path from 'node:path';
import net from 'node:net';
import { createRequire } from 'node:module';
import liveServer from '@compodoc/live-server';
import { describe, it, beforeAll, afterAll } from 'vitest';
import { assert, AssertionError } from 'chai';
import jsdom from 'jsdom';
import lodash from 'lodash';
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
  console.error(err);
};

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;

async function newPageContext(browser, baseUrl) {
  const page = await browser.newPage();
  // it's needed for workers as context.
  await page.goto(`${baseUrl}/index.html`);
  return page;
}

function getFreePort(host = '127.0.0.1') {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.listen(0, host, () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

async function startLiveServer() {
  const host = '127.0.0.1';
  const port = await getFreePort(host);
  liveServer.start({
    host,
    port: String(port),
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
  return {
    baseUrl: `http://${host}:${port}`,
    shutdown: () => liveServer.shutdown()
  };
}

export async function defineTestsForBlock({ superBlock, block }) {
  let browser;
  let page;
  let serverRef;

  const lang = testedLang();
  const challenges = await getChallenges(lang, { superBlock, block });
  const nonCertificationChallenges = challenges.filter(
    ({ challengeType }) => challengeType !== 7
  );
  if (isEmpty(nonCertificationChallenges)) {
    throw Error(
      `No challenges to test for block ${block} in superblock ${superBlock}.`
    );
  }
  const meta = {};
  for (const challenge of challenges) {
    const dashedBlockName = challenge.block;
    if (dashedBlockName && !meta[dashedBlockName]) {
      meta[dashedBlockName] = getBlockStructure(dashedBlockName);
      const result = validateMetaSchema(meta[dashedBlockName]);
      if (result.error) throw new AssertionError(result.error);
    }
  }

  const challengeData = { meta, challenges, lang, superBlocks: [superBlock] };

  function cleanup() {
    if (browser) browser.close();
    serverRef?.shutdown?.();
  }

  describe('Check challenges', () => {
    beforeAll(async () => {
      serverRef = await startLiveServer();
      browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage'
        ],
        headless: 'new'
      });
      try {
        const contextPage = await newPageContext(browser, serverRef.baseUrl);
        global.Worker = createPseudoWorker(contextPage);
        page = await newPageContext(browser, serverRef.baseUrl);
      } catch (e) {
        if (browser) await browser.close().catch(() => {});
        serverRef?.shutdown?.();
        throw e;
      }
    });
    afterAll(() => cleanup());
    populateTestsForLang(
      {
        ...challengeData,
        challenges: challenges.filter(c => c.block === block)
      },
      () => page
    );
  });
}

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

function populateTestsForLang(
  { lang, challenges, meta, superBlocks },
  getPage
) {
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
                        getPage,
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
                          getPage,
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
  getPage,
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

  const page = getPage();
  if (!page) throw new Error('Browser page is not ready yet');

  const evaluator = await getContextEvaluator(page, {
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

async function getContextEvaluator(page, config) {
  await initializeTestRunner(page, config);

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
        page.evaluate(
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

async function initializeTestRunner(
  page,
  { build, sources, type, hooks, loadEnzyme }
) {
  const source = type === 'dom' ? prefixDoctype({ build, sources }) : build;

  // Ensure FCCTestRunner is available before creating it
  await page.waitForFunction(
    'window.FCCTestRunner && window.FCCTestRunner.createTestRunner',
    { timeout: 15000 }
  );

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
