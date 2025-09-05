const path = require('path');
const { assert, AssertionError } = require('chai');
const jsdom = require('jsdom');
const liveServer = require('@compodoc/live-server');
const lodash = require('lodash');
const Mocha = require('mocha');
const mockRequire = require('mock-require');
const spinner = require('ora')();
const puppeteer = require('puppeteer');

// lodash-es can't easily be used in node environments, so we just mock it out
// for the original lodash in testing.
mockRequire('lodash-es', lodash);

const clientPath = path.resolve(__dirname, '../../client');
require('@babel/register')({
  root: clientPath,
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/typescript'],
  plugins: ['dynamic-import-node'],
  ignore: [/node_modules/],
  only: [clientPath]
});
const {
  buildChallenge,
  runnerTypes
} = require('../../client/src/templates/Challenges/utils/build');
const {
  challengeTypes,
  hasNoSolution
} = require('../../shared/config/challenge-types');
const { getLines } = require('../../shared/utils/get-lines');
const { getChallengesForLang } = require('../get-challenges');
const { challengeSchemaValidator } = require('../schema/challenge-schema');
const { testedLang } = require('../utils');
const {
  prefixDoctype,
  helperVersion
} = require('../../client/src/templates/Challenges/utils/frame');

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
  console.error('Unhandled rejection:');
  // setting the error code because node does not (yet) exit with a non-zero
  // code on unhandled exceptions.
  process.exitCode = 1;
  cleanup();
  console.error(err);
  if (process.env.FULL_OUTPUT !== 'true') process.exit();
};

const dom = new jsdom.JSDOM('');
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;

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
        this.timeout(5000);
        const superBlockChallenges = challenges.filter(
          c => c.superBlock === superBlock
        );

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
                  it('Check tests. No tests.');
                  return;
                }

                if (challengeType === challengeTypes.backend) {
                  it('Check tests is not implemented.');
                  return;
                }

                // The python tests are (currently) slow, so we give them more time.
                const timePerTest =
                  challengeType === challengeTypes.python ? 10000 : 5000;
                it('Test suite must fail on the initial contents', async function () {
                  // TODO: some tests take a surprisingly long time to setup the
                  // test runner, so this timeout is large while we investigate.
                  this.timeout(timePerTest * tests.length + 20000);
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
                  it('Check tests. No solutions');
                  return;
                }

                describe('Check tests against solutions', function () {
                  solutions.forEach((solution, index) => {
                    it(`Solution ${
                      index + 1
                    } must pass the tests`, async function () {
                      this.timeout(timePerTest * tests.length + 2000);
                      const testRunner = await createTestRunner(
                        challenge,
                        solution,
                        buildChallenge,
                        solutionFromNext
                      );

                      await testRunner(tests);
                    });
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
