const path = require('path');
const liveServer = require('live-server');

const spinner = require('ora')();

const clientPath = path.resolve(__dirname, '../../client');
require('@babel/polyfill');
require('@babel/register')({
  root: clientPath,
  babelrc: false,
  presets: ['@babel/preset-env'],
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

const { getChallengesForLang } = require('../getChallenges');

const MongoIds = require('./utils/mongoIds');
const ChallengeTitles = require('./utils/challengeTitles');
const { challengeSchemaValidator } = require('../schema/challengeSchema');
const {
  challengeTypes,
  helpCategory
} = require('../../client/utils/challengeTypes');

const { dasherize } = require('../../utils/slugs');

const { testedLangs } = require('../utils');

const {
  buildDOMChallenge,
  buildJSChallenge
} = require('../../client/src/templates/Challenges/utils/build');

const {
  createPoly
} = require('../../client/src/templates/Challenges/utils/polyvinyl');

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

runTests();

async function runTests() {
  process.on('unhandledRejection', err => {
    spinner.stop();
    throw new Error(`unhandledRejection: ${err.name}, ${err.message}`);
  });

  const testLangs = testedLangs();

  const challenges = await Promise.all(
    testLangs.map(lang => getChallenges(lang))
  );

  describe('Check challenges', function() {
    before(async function() {
      spinner.text = 'Testing';
      this.timeout(50000);
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
    });
    after(async function() {
      this.timeout(30000);
      if (browser) {
        await browser.close();
      }
      liveServer.shutdown();
      spinner.stop();
    });

    challenges.forEach(populateTestsForLang);
  });

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
  return { lang, challenges };
}

function validateBlock(challenge) {
  const dashedBlock = dasherize(challenge.block);
  if (!helpCategory.hasOwnProperty(dashedBlock)) {
    return `'${dashedBlock}' block not found as a helpCategory in client/utils/challengeTypes.js file for the '${challenge.title}' challenge`;
  } else {
    return null;
  }
}

function populateTestsForLang({ lang, challenges }) {
  const mongoIds = new MongoIds();
  const challengeTitles = new ChallengeTitles();
  const validateChallenge = challengeSchemaValidator(lang);

  describe(`Check challenges (${lang})`, function() {
    this.timeout(5000);

    challenges.forEach(challenge => {
      describe(challenge.title || 'No title', function() {
        it('Common checks', function() {
          const result = validateChallenge(challenge);
          const invalidBlock = validateBlock(challenge);

          if (result.error) {
            throw new AssertionError(result.error);
          }
          if (challenge.challengeType !== 7 && invalidBlock) {
            throw new Error(invalidBlock);
          }
          const { id, title, block, dashedName } = challenge;
          const dashedBlock = dasherize(block);
          const pathAndTitle = `${dashedBlock}/${dashedName}`;
          mongoIds.check(id, title);
          challengeTitles.check(title, pathAndTitle);
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
        let createTestRunner;
        if (challengeType === challengeTypes.backend) {
          it('Check tests is not implemented.');
          return;
        } else if (
          challengeType === challengeTypes.js ||
          challengeType === challengeTypes.bonfire
        ) {
          createTestRunner = createTestRunnerForJSChallenge;
        } else if (files.length === 1) {
          createTestRunner = createTestRunnerForDOMChallenge;
        } else {
          it('Check tests.', () => {
            throw new Error('Seed file should be only the one.');
          });
          return;
        }

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
              page
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
                page
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
}

async function createTestRunnerForDOMChallenge(
  { required = [], template, files },
  solution,
  context
) {
  if (solution) {
    files[0].contents = solution;
  }

  const { build, sources, loadEnzyme } = await buildDOMChallenge({
    files,
    required,
    template
  });

  await context.reload();
  await context.setContent(build);
  await context.evaluate(
    async (sources, loadEnzyme) => {
      const code = sources && 'index' in sources ? sources['index'] : '';
      const getUserInput = fileName => sources[fileName];
      await document.__initTestFrame({ code, getUserInput, loadEnzyme });
    },
    sources,
    loadEnzyme
  );

  return async ({ text, testString }) => {
    try {
      const { pass, err } = await Promise.race([
        new Promise((_, reject) => setTimeout(() => reject('timeout'), 5000)),
        await context.evaluate(async testString => {
          return await document.__runTest(testString);
        }, testString)
      ]);
      if (!pass) {
        throw new AssertionError(err.message);
      }
    } catch (err) {
      reThrow(err, text);
    }
  };
}

async function createTestRunnerForJSChallenge({ files }, solution) {
  if (solution) {
    files[0].contents = solution;
  }

  const { build, sources } = await buildJSChallenge({ files });
  const code = sources && 'index' in sources ? sources['index'] : '';

  const testWorker = createWorker(testEvaluator, { terminateWorker: true });
  return async ({ text, testString }) => {
    try {
      const { pass, err } = await testWorker.execute(
        { testString, build, code, sources },
        5000
      ).done;
      if (!pass) {
        throw new AssertionError(err.message);
      }
    } catch (err) {
      reThrow(err, text);
    }
  };
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
