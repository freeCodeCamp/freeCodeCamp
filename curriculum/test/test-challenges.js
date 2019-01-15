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

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const vm = require('vm');

const puppeteer = require('puppeteer');

const { getChallengesForLang } = require('../getChallenges');

const MongoIds = require('./utils/mongoIds');
const ChallengeTitles = require('./utils/challengeTitles');
const { challengeSchemaValidator } = require('../schema/challengeSchema');
const { challengeTypes } = require('../../client/utils/challengeTypes');

const { supportedLangs } = require('../utils');

const {
  buildDOMChallenge,
  buildJSChallenge
} = require('../../client/src/templates/Challenges/utils/build');

const {
  createPoly
} = require('../../client/src/templates/Challenges/utils/polyvinyl');

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
  let testLangs = [...supportedLangs];
  if (process.env.TEST_CHALLENGES_FOR_LANGS) {
    const filterLangs = process.env.TEST_CHALLENGES_FOR_LANGS.split(',').map(
      lang => lang.trim().toLowerCase()
    );
    testLangs = testLangs.filter(lang => filterLangs.includes(lang));
  }

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
        args: ['--no-sandbox']
        // dumpio: true
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
          if (result.error) {
            throw new AssertionError(result.error);
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
        let evaluateTest;
        if (challengeType === challengeTypes.backend) {
          it('Check tests is not implemented.');
          return;
        } else if (
          challengeType === challengeTypes.js ||
          challengeType === challengeTypes.bonfire
        ) {
          evaluateTest = evaluateJsTest;
        } else if (files.length === 1) {
          evaluateTest = evaluateHtmlTest;
        } else {
          it('Check tests.', () => {
            throw new Error('Seed file should be only the one.');
          });
          return;
        }

        files = files.map(createPoly);
        it('Test suite must fail on the initial contents', async function() {
          this.timeout(20000);
          // suppress errors in the console.
          const oldConsoleError = console.error;
          console.error = () => {};
          let fails = (await Promise.all(
            tests.map(async function(test) {
              try {
                await evaluateTest(
                  {
                    ...challenge,
                    files,
                    test
                  },
                  page
                );
                return false;
              } catch (e) {
                return true;
              }
            })
          )).some(v => v);
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
            describe(`Solution ${index + 1}`, function() {
              tests.forEach(test => {
                it(test.text, async function() {
                  await evaluateTest(
                    {
                      ...challenge,
                      files,
                      solution,
                      test
                    },
                    page
                  );
                });
              });
            });
          });
        });
      });
    });
  });
}

async function evaluateHtmlTest(
  { solution, required = [], template, files, test },
  context
) {
  if (solution) {
    files[0].contents = solution;
  }

  const loadEnzyme = files[0].ext === 'jsx';

  const { build, sources } = await buildDOMChallenge(files, {
    required,
    template
  });

  await context.reload();
  await context.setContent(build);

  const result = await context.evaluate(
    async(sources, testString, loadEnzyme) => {
      document.__source = sources && 'index' in sources ? sources['index'] : '';
      document.__getUserInput = fileName => sources[fileName];
      document.__frameReady = () => {};
      document.__loadEnzyme = loadEnzyme;
      await document.__initTestFrame();

      const { pass, err } = await document.__runTest(testString);
      if (pass) {
        return true;
      } else {
        return { ...err };
      }
    },
    sources,
    test.testString,
    loadEnzyme
  );
  if (result !== true) {
    throw AssertionError(result.message);
  }
}

async function evaluateJsTest({ solution, files, test }) {
  if (solution) {
    files[0].contents = solution;
  }

  const { build, sources } = await buildJSChallenge(files);
  const code = sources && 'index' in sources ? sources['index'] : '';
  const script = build + '\n' + test.testString;

  const testWorker = createWorker('test-evaluator');

  try {
    const { pass, err } = await testWorker.execute(
      { script, code, sources },
      5000
    );
    if (!pass) {
      throw new AssertionError(err.message);
    }
  } finally {
    testWorker.killWorker();
  }
}
