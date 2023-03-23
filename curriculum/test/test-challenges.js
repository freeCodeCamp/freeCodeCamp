/* eslint-disable no-loop-func */
const path = require('path');
const vm = require('vm');
const { assert, AssertionError } = require('chai');
const jsdom = require('jsdom');
const liveServer = require('@compodoc/live-server');
const lodash = require('lodash');
const Mocha = require('mocha');
const mockRequire = require('mock-require');
const spinner = require('ora')();
const puppeteer = require('puppeteer');
const stringSimilarity = require('string-similarity');

// lodash-es can't easily be used in node environments, so we just mock it out
// for the original lodash in testing.
mockRequire('lodash-es', lodash);

const clientPath = path.resolve(__dirname, '../../client');
require('@babel/polyfill');
require('@babel/register')({
  root: clientPath,
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/typescript'],
  plugins: ['dynamic-import-node'],
  ignore: [/node_modules/],
  only: [clientPath]
});
const {
  buildDOMChallenge,
  buildJSChallenge
} = require('../../client/src/templates/Challenges/utils/build');
const {
  default: createWorker
} = require('../../client/src/templates/Challenges/utils/worker-executor');
const { challengeTypes } = require('../../client/utils/challenge-types');
// the config files are created during the build, but not before linting
/* eslint-disable import/no-unresolved */
const testEvaluator =
  require('../../config/client/test-evaluator.json').filename;
/* eslint-enable import/no-unresolved */

const { getLines } = require('../../utils/get-lines');

const { getChallengesForLang, getMetaForBlock } = require('../get-challenges');
const { challengeSchemaValidator } = require('../schema/challenge-schema');
const { testedLang, getSuperOrder } = require('../utils');
const ChallengeTitles = require('./utils/challenge-titles');
const MongoIds = require('./utils/mongo-ids');
const createPseudoWorker = require('./utils/pseudo-worker');

const { sortChallenges } = require('./utils/sort-challenges');

const { flatten, isEmpty, cloneDeep } = lodash;

// rethrow unhandled rejections to make sure the tests exit with non-zero code
process.on('unhandledRejection', err => handleRejection(err));
// If an uncaught exception gets here, then mocha is in an unexpected state. All
// we can do is log the exception and exit with a non-zero code.
process.on('uncaughtException', err => {
  console.error('Uncaught exception:');
  console.error(err);
  process.exit(1);
});

// some errors *may* not be reported, since cleanup is triggered by the first
// error and that starts shutting down the browser and the server.
const handleRejection = err => {
  // setting the error code because node does not (yet) exit with a non-zero
  // code on unhandled exceptions.
  process.exitCode = 1;
  cleanup();
  console.error(err);
  if (process.env.FULL_OUTPUT !== 'true') process.exit();
};

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;

const oldRunnerFail = Mocha.Runner.prototype.fail;
Mocha.Runner.prototype.fail = function (test, err) {
  if (err instanceof AssertionError) {
    const errMessage = String(err.message || '');
    const assertIndex = errMessage.indexOf(': expected');
    if (assertIndex !== -1) {
      err.message = errMessage.slice(0, assertIndex);
    }
    // Don't show stacktrace for assertion errors.
    if (err.stack) {
      delete err.stack;
    }
  }
  return oldRunnerFail.call(this, test, err);
};

async function newPageContext(browser) {
  const page = await browser.newPage();
  // it's needed for workers as context.
  await page.goto('http://127.0.0.1:8080/index.html');
  return page;
}

spinner.start();
spinner.text = 'Populate tests.';

let browser;
let page;

setup()
  .then(runTests)
  .catch(err => handleRejection(err));

async function setup() {
  if (process.env.FCC_SUPERBLOCK && process.env.FCC_BLOCK) {
    throw new Error(`Please do not use both a block and superblock as input.`);
  }

  // liveServer starts synchronously
  liveServer.start({
    host: '127.0.0.1',
    port: '8080',
    root: path.resolve(__dirname, 'stubs'),
    mount: [['/js', path.join(clientPath, 'static/js')]],
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
    ]
  });
  global.Worker = createPseudoWorker(await newPageContext(browser));
  page = await newPageContext(browser);
  await page.setViewport({ width: 300, height: 150 });

  const lang = testedLang();

  let challenges = await getChallenges(lang);

  // the next few statements create a list of all blocks and superblocks
  // as they appear in the list of challenges
  const blocks = challenges.map(({ block }) => block);
  const superBlocks = challenges.map(({ superBlock }) => superBlock);
  const targetBlockStrings = [...new Set(blocks.filter(el => Boolean(el)))];
  const targetSuperBlockStrings = [
    ...new Set(superBlocks.filter(el => Boolean(el)))
  ];

  // the next few statements will filter challenges based on command variables
  if (process.env.FCC_SUPERBLOCK) {
    const filter = stringSimilarity.findBestMatch(
      process.env.FCC_SUPERBLOCK,
      targetSuperBlockStrings
    ).bestMatch.target;

    console.log(`\nsuperBlock being tested: ${filter}`);
    challenges = challenges.filter(
      challenge => challenge.superBlock === filter
    );

    if (!challenges.length) {
      throw new Error(`No challenges found with superBlock "${filter}"`);
    }
  }

  if (process.env.FCC_BLOCK) {
    const filter = stringSimilarity.findBestMatch(
      process.env.FCC_BLOCK,
      targetBlockStrings
    ).bestMatch.target;

    console.log(`\nblock being tested: ${filter}`);
    challenges = challenges.filter(challenge => challenge.block === filter);

    if (!challenges.length) {
      throw new Error(`No challenges found with block "${filter}"`);
    }
  }

  const meta = {};
  for (const challenge of challenges) {
    const dashedBlockName = challenge.block;
    // certifications do not have dashedBlockName's and don't have metas so
    // we can skip them.
    // TODO: omit certifications from the list of challenges
    if (dashedBlockName && !meta[dashedBlockName]) {
      meta[dashedBlockName] = await getMetaForBlock(dashedBlockName);
    }
  }
  return {
    meta,
    challenges,
    lang
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

function runTests(challengeData) {
  describe('Check challenges', function () {
    after(function () {
      cleanup();
    });
    populateTestsForLang(challengeData);
  });
  spinner.text = 'Testing';
  run();
}

async function getChallenges(lang) {
  const challenges = await getChallengesForLang(lang).then(curriculum =>
    Object.keys(curriculum)
      .map(key => curriculum[key].blocks)
      .reduce((challengeArray, superBlock) => {
        const challengesForBlock = Object.keys(superBlock).map(
          key => superBlock[key].challenges
        );
        return [...challengeArray, ...flatten(challengesForBlock)];
      }, [])
  );
  // This matches the order Gatsby uses (via a GraphQL query). Ideally both
  // should be sourced and sorted using a single query, but we're not there yet.
  return sortChallenges(challenges);
}

function populateTestsForLang({ lang, challenges, meta }) {
  const mongoIds = new MongoIds();
  const challengeTitles = new ChallengeTitles();
  const validateChallenge = challengeSchemaValidator();

  if (!process.env.FCC_BLOCK) {
    describe('Assert meta order', function () {
      /** This array can be used to skip a superblock - we'll use this
       * when we are working on the new project-based curriculum for
       * a superblock (because keeping those challenges in order is
       * tricky and needs cleaning up before deploying).
       */
      const superBlocksUnderDevelopment = [
        '2022/javascript-algorithms-and-data-structures'
      ];
      const superBlocks = new Set([
        ...Object.values(meta)
          .map(el => el.superBlock)
          .filter(el => !superBlocksUnderDevelopment.includes(el))
      ]);
      superBlocks.forEach(superBlock => {
        const filteredMeta = Object.values(meta)
          .filter(el => el.superBlock === superBlock)
          .sort((a, b) => a.order - b.order);
        if (!filteredMeta.length) {
          return;
        }
        it(`${superBlock} should have the same order in every meta`, function () {
          const firstOrder = getSuperOrder(filteredMeta[0].superBlock, {
            showNewCurriculum: process.env.SHOW_NEW_CURRICULUM
          });
          assert.isNumber(firstOrder);
          assert.isTrue(
            filteredMeta.every(
              el =>
                getSuperOrder(el.superBlock, {
                  showNewCurriculum: process.env.SHOW_NEW_CURRICULUM
                }) === firstOrder
            ),
            'The superOrder properties are mismatched.'
          );
        });
        filteredMeta.forEach((meta, index) => {
          it(`${meta.superBlock} ${meta.name} must be in order`, function () {
            assert.equal(meta.order, index);
          });
        });
      });
    });
  }

  describe(`Check challenges (${lang})`, function () {
    this.timeout(5000);
    challenges.forEach((challenge, id) => {
      const dashedBlockName = challenge.block;
      // TODO: once certifications are not included in the list of challenges,
      // stop returning early here.
      if (typeof dashedBlockName === 'undefined') return;
      describe(challenge.block || 'No block', function () {
        describe(challenge.title || 'No title', function () {
          // Note: the title in meta.json are purely for human readability and
          // do not include translations, so we do not validate against them.
          it('Matches an ID in meta.json', function () {
            const index = meta[dashedBlockName]?.challengeOrder?.findIndex(
              arr => arr[0] === challenge.id
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
            const { id, title, block, dashedName } = challenge;
            const pathAndTitle = `${block}/${dashedName}`;
            mongoIds.check(id, title);
            challengeTitles.check(title, pathAndTitle);
          });

          const { challengeType } = challenge;
          if (
            challengeType !== challengeTypes.html &&
            challengeType !== challengeTypes.js &&
            challengeType !== challengeTypes.jsProject &&
            challengeType !== challengeTypes.modern &&
            challengeType !== challengeTypes.backend
          ) {
            return;
          }

          let { tests = [] } = challenge;
          tests = tests.filter(test => !!test.testString);
          if (tests.length === 0) {
            it('Check tests. No tests.');
            return;
          }

          describe('Check tests syntax', function () {
            tests.forEach(test => {
              it(`Check for: ${test.text}`, function () {
                assert.doesNotThrow(() => new vm.Script(test.testString));
              });
            });
          });

          if (challengeType === challengeTypes.backend) {
            it('Check tests is not implemented.');
            return;
          }

          const buildChallenge =
            challengeType === challengeTypes.js ||
            challengeType === challengeTypes.jsProject
              ? buildJSChallenge
              : buildDOMChallenge;

          it('Test suite must fail on the initial contents', async function () {
            this.timeout(5000 * tests.length + 1000);
            // suppress errors in the console.
            const oldConsoleError = console.error;
            console.error = () => {};
            let fails = false;
            let testRunner;
            try {
              testRunner = await createTestRunner(
                challenge,
                [],
                buildChallenge
              );
            } catch {
              fails = true;
            }
            if (!fails) {
              for (const test of tests) {
                try {
                  await testRunner(test);
                } catch (e) {
                  fails = true;
                  break;
                }
              }
            }
            console.error = oldConsoleError;
            assert(fails, 'Test suit does not fail on the initial contents');
          });

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
            it('Check tests. No solutions');
            return;
          }

          describe('Check tests against solutions', function () {
            solutions.forEach((solution, index) => {
              it(`Solution ${
                index + 1
              } must pass the tests`, async function () {
                this.timeout(5000 * tests.length + 2000);
                const testRunner = await createTestRunner(
                  challenge,
                  solution,
                  buildChallenge,
                  solutionFromNext
                );
                for (const test of tests) {
                  await testRunner(test);
                }
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
  const { required = [], template, removeComments } = challenge;

  const challengeFiles = replaceChallengeFilesContentsWithSolutions(
    challenge.challengeFiles,
    solutionFiles
  );

  const { build, sources, loadEnzyme } = await buildChallenge(
    {
      challengeFiles,
      required,
      template
    },
    { usesTestRunner: true }
  );

  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const evaluator = await (buildChallenge === buildDOMChallenge
    ? getContextEvaluator(build, sources, code, loadEnzyme)
    : getWorkerEvaluator(build, sources, code, removeComments));

  return async ({ text, testString }) => {
    try {
      const { pass, err } = await evaluator.evaluate(testString, 5000);
      if (!pass) {
        throw err;
      }
    } catch (err) {
      // add more info to the error so the failing test can be identified.
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
      throw Error(`No matching solution file found`);
    }
    return {
      ...file,
      contents: matchingSolutionFile.contents,
      editableContents: matchingSolutionFile.editableContents
    };
  });
}

async function getContextEvaluator(build, sources, code, loadEnzyme) {
  await initializeTestRunner(build, sources, code, loadEnzyme);

  return {
    evaluate: async (testString, timeout) =>
      Promise.race([
        new Promise((_, reject) =>
          setTimeout(() => reject('timeout'), timeout)
        ),
        await page.evaluate(async testString => {
          return await document.__runTest(testString);
        }, testString)
      ])
  };
}

async function getWorkerEvaluator(build, sources, code, removeComments) {
  const testWorker = createWorker(testEvaluator, { terminateWorker: true });
  return {
    evaluate: async (testString, timeout) =>
      await testWorker.execute(
        { testString, build, code, sources, removeComments },
        timeout
      ).done
  };
}

async function initializeTestRunner(build, sources, code, loadEnzyme) {
  await page.reload();
  await page.setContent(build);
  await page.evaluate(
    async (code, sources, loadEnzyme) => {
      const getUserInput = fileName => sources[fileName];
      await document.__initTestFrame({
        code: sources,
        getUserInput,
        loadEnzyme
      });
    },
    code,
    sources,
    loadEnzyme
  );
}
