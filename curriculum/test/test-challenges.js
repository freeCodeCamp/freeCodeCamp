/* eslint-disable no-loop-func */
const path = require('path');
const liveServer = require('live-server');
const stringSimilarity = require('string-similarity');

const spinner = require('ora')();

const clientPath = path.resolve(__dirname, '../../client');
require('@babel/polyfill');
require('@babel/register')({
  root: clientPath,
  babelrc: false,
  presets: ['@babel/preset-env'],
  plugins: ['dynamic-import-node'],
  ignore: [/node_modules/],
  only: [clientPath]
});

const createPseudoWorker = require('./utils/pseudo-worker');
const {
  default: createWorker
} = require('../../client/src/templates/Challenges/utils/worker-executor');

const { assert, AssertionError } = require('chai');
const Mocha = require('mocha');
const { flatten } = require('lodash');

const jsdom = require('jsdom');

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;

const vm = require('vm');

const puppeteer = require('puppeteer');

const { getChallengesForLang, getMetaForBlock } = require('../getChallenges');

const MongoIds = require('./utils/mongoIds');
const ChallengeTitles = require('./utils/challengeTitles');
const { challengeSchemaValidator } = require('../schema/challengeSchema');
const {
  challengeTypes,
  helpCategory
} = require('../../client/utils/challengeTypes');

const { dasherize } = require('../../utils/slugs');

const { testedLang } = require('../utils');

const {
  buildDOMChallenge,
  buildJSChallenge
} = require('../../client/src/templates/Challenges/utils/build');

const { createPoly } = require('../../utils/polyvinyl');

const testEvaluator = require('../../client/config/test-evaluator').filename;

const oldRunnerFail = Mocha.Runner.prototype.fail;
Mocha.Runner.prototype.fail = function(test, err) {
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
  .catch(err => {
    cleanup();
    // setting the error code because node does not (yet) exit with a non-zero
    // code on unhandled exceptions.
    process.exitCode = 1;
    throw err;
  });

async function setup() {
  if (process.env.npm_config_superblock && process.env.npm_config_block) {
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
  const targetBlockStrings = [...new Set(blocks)];
  const targetSuperBlockStrings = [...new Set(superBlocks)];

  // the next few statements will filter challenges based on command variables
  if (process.env.npm_config_superblock) {
    const filter = stringSimilarity.findBestMatch(
      process.env.npm_config_superblock,
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

  if (process.env.npm_config_block) {
    const filter = stringSimilarity.findBestMatch(
      process.env.npm_config_block,
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
    const dashedBlockName = dasherize(challenge.block);
    if (!meta[dashedBlockName]) {
      meta[dashedBlockName] = (await getMetaForBlock(
        dashedBlockName
      )).challengeOrder;
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
  // rethrow unhandled rejections to make sure the tests exit with -1
  process.on('unhandledRejection', err => {
    throw err;
  });

  describe('Check challenges', function() {
    after(function() {
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
  return challenges;
}

function validateBlock(challenge) {
  const dashedBlock = dasherize(challenge.block);
  if (!helpCategory.hasOwnProperty(dashedBlock)) {
    return `'${dashedBlock}' block not found as a helpCategory in client/utils/challengeTypes.js file for the '${challenge.title}' challenge`;
  } else {
    return null;
  }
}

function populateTestsForLang({ lang, challenges, meta }) {
  const mongoIds = new MongoIds();
  const challengeTitles = new ChallengeTitles();
  const validateChallenge = challengeSchemaValidator(lang);

  describe(`Check challenges (${lang})`, function() {
    this.timeout(5000);
    challenges.forEach(challenge => {
      const dashedBlockName = dasherize(challenge.block);
      describe(challenge.block || 'No block', function() {
        describe(challenge.title || 'No title', function() {
          it('Matches a title in meta.json', function() {
            const index = meta[dashedBlockName].findIndex(
              arr => arr[1] === challenge.title
            );

            if (index < 0) {
              throw new AssertionError(
                `Cannot find title "${challenge.title}" in meta.json file`
              );
            }
          });

          it('Matches an ID in meta.json', function() {
            const index = meta[dashedBlockName].findIndex(
              arr => arr[0] === challenge.id
            );

            if (index < 0) {
              throw new AssertionError(
                `Cannot find ID "${challenge.id}" in meta.json file`
              );
            }
          });

          it('Common checks', function() {
            const result = validateChallenge(challenge);
            const invalidBlock = validateBlock(challenge);

            if (result.error) {
              throw new AssertionError(result.error);
            }
            if (challenge.challengeType !== 7 && invalidBlock) {
              throw new Error(invalidBlock);
            }
            const { id, title } = challenge;
            mongoIds.check(id, title);
            challengeTitles.check(title);
          });

          const { challengeType } = challenge;
          if (
            challengeType !== challengeTypes.html &&
            challengeType !== challengeTypes.js &&
            challengeType !== challengeTypes.bonfire &&
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

          describe('Check tests syntax', function() {
            tests.forEach(test => {
              it(`Check for: ${test.text}`, function() {
                assert.doesNotThrow(() => new vm.Script(test.testString));
              });
            });
          });

          let { files = [] } = challenge;
          if (challengeType === challengeTypes.backend) {
            it('Check tests is not implemented.');
            return;
          }

          if (files.length > 1) {
            it('Check tests.', () => {
              throw new Error('Seed file should be only the one.');
            });
            return;
          }

          const buildChallenge =
            challengeType === challengeTypes.js ||
            challengeType === challengeTypes.bonfire
              ? buildJSChallenge
              : buildDOMChallenge;

          files = files.map(createPoly);
          it('Test suite must fail on the initial contents', async function() {
            this.timeout(5000 * tests.length + 1000);
            // suppress errors in the console.
            const oldConsoleError = console.error;
            console.error = () => {};
            let fails = false;
            let testRunner;
            try {
              testRunner = await createTestRunner(
                { ...challenge, files },
                '',
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
          const noSolution = new RegExp('// solution required');
          solutions = solutions.filter(
            solution => !!solution && !noSolution.test(solution)
          );

          if (solutions.length === 0) {
            it('Check tests. No solutions');
            return;
          }

          describe('Check tests against solutions', function() {
            solutions.forEach((solution, index) => {
              it(`Solution ${index + 1} must pass the tests`, async function() {
                this.timeout(5000 * tests.length + 1000);
                const testRunner = await createTestRunner(
                  { ...challenge, files },
                  solution,
                  buildChallenge
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
  { required = [], template, files },
  solution,
  buildChallenge
) {
  if (solution) {
    files[0].contents = solution;
  }

  const { build, sources, loadEnzyme } = await buildChallenge({
    files,
    required,
    template
  });
  const code = sources && 'index' in sources ? sources['index'] : '';

  const evaluator = await (buildChallenge === buildDOMChallenge
    ? getContextEvaluator(build, sources, code, loadEnzyme)
    : getWorkerEvaluator(build, sources, code));

  return async ({ text, testString }) => {
    try {
      const { pass, err } = await evaluator.evaluate(testString, 5000);
      if (!pass) {
        throw new AssertionError(err.message);
      }
    } catch (err) {
      reThrow(err, text);
    }
  };
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

async function getWorkerEvaluator(build, sources, code) {
  const testWorker = createWorker(testEvaluator, { terminateWorker: true });
  return {
    evaluate: async (testString, timeout) =>
      await testWorker.execute({ testString, build, code, sources }, timeout)
        .done
  };
}

async function initializeTestRunner(build, sources, code, loadEnzyme) {
  await page.reload();
  await page.setContent(build);
  await page.evaluate(
    async (code, sources, loadEnzyme) => {
      const getUserInput = fileName => sources[fileName];
      await document.__initTestFrame({ code, getUserInput, loadEnzyme });
    },
    code,
    sources,
    loadEnzyme
  );
}

function reThrow(err, text) {
  if (typeof err === 'string') {
    throw new AssertionError(
      `${text}
         ${err}`
    );
  } else {
    err.message = `${text}
       ${err.message}`;
    throw err;
  }
}
