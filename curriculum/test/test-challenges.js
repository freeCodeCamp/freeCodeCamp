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
      });
    });
  });

  // if (lang === 'english') {
  //   describe('Daily Coding Challenges Parity', function () {

  //     const jsDailyChallenges = challenges.filter(
  //       challenge =>
  //         challenge.superBlock === 'dev-playground' &&
  //         challenge.block === 'daily-coding-challenges-javascript'
  //     );

  //     const pyDailyChallenges = challenges.filter(
  //       challenge =>
  //         challenge.superBlock === 'dev-playground' &&
  //         challenge.block === 'daily-coding-challenges-python'
  //     );

  //     function extractChallengeNumber(title) {
  //       const match = title.match(/Challenge (\d+):/);
  //       return match ? parseInt(match[1], 10) : null;
  //     }

  //     function findMatchingChallenge(challenge, otherLangChallenges) {
  //       const challengeNumber = extractChallengeNumber(challenge.title);
  //       if (!challengeNumber) return null;

  //       return otherLangChallenges.find(
  //         other => extractChallengeNumber(other.title) === challengeNumber
  //       );
  //     }

  //     it('should have matching number of JavaScript and Python challenges', function () {
  //       assert.equal(
  //         jsChallenges.length,
  //         pyChallenges.length,
  //         `JavaScript challenges: ${jsChallenges.length}, Python challenges: ${pyChallenges.length}`
  //       );
  //     });

  //     jsChallenges.forEach(jsChallenge => {
  //       const challengeNumber = extractChallengeNumber(jsChallenge.title);

  //       if (!challengeNumber) {
  //         it(`JavaScript challenge "${jsChallenge.title}" should have valid title format`, function () {
  //           assert.fail(
  //             `Challenge title does not match expected format "Challenge X: Title"`
  //           );
  //         });
  //         return;
  //       }

  //       describe(`Challenge ${challengeNumber} Parity`, function () {
  //         let pyChallenge;

  //         before(function () {
  //           pyChallenge = findMatchingChallenge(jsChallenge, pyChallenges);
  //         });

  //         it('should have matching Python challenge', function () {
  //           assert.isNotNull(
  //             pyChallenge,
  //             `No matching Python challenge found for JavaScript Challenge ${challengeNumber}`
  //           );
  //         });

  //         it('should have matching titles', function () {
  //           if (!pyChallenge) this.skip();

  //           const jsTitle = jsChallenge.title.replace(
  //             'JavaScript Challenge',
  //             'Challenge'
  //           );
  //           const pyTitle = pyChallenge.title.replace(
  //             'Python Challenge',
  //             'Challenge'
  //           );

  //           assert.equal(
  //             jsTitle,
  //             pyTitle,
  //             `Title mismatch for Challenge ${challengeNumber}`
  //           );
  //         });

  //         it('should have matching descriptions', function () {
  //           if (!pyChallenge) this.skip();

  //           assert.equal(
  //             jsChallenge.description,
  //             pyChallenge.description,
  //             `Description mismatch for Challenge ${challengeNumber}`
  //           );
  //         });

  //         it('should have matching instructions', function () {
  //           if (!pyChallenge) this.skip();

  //           // Instructions might not exist for daily challenges, so check if both have them
  //           if (jsChallenge.instructions && pyChallenge.instructions) {
  //             assert.equal(
  //               jsChallenge.instructions,
  //               pyChallenge.instructions,
  //               `Instructions mismatch for Challenge ${challengeNumber}`
  //             );
  //           } else {
  //             assert.equal(
  //               !!jsChallenge.instructions,
  //               !!pyChallenge.instructions,
  //               `Instructions presence mismatch for Challenge ${challengeNumber}`
  //             );
  //           }
  //         });

  //         it('should have same number of tests', function () {
  //           if (!pyChallenge) this.skip();

  //           const jsTestCount = jsChallenge.tests
  //             ? jsChallenge.tests.length
  //             : 0;
  //           const pyTestCount = pyChallenge.tests
  //             ? pyChallenge.tests.length
  //             : 0;

  //           assert.equal(
  //             jsTestCount,
  //             pyTestCount,
  //             `Test count mismatch for Challenge ${challengeNumber}: JS=${jsTestCount}, Python=${pyTestCount}`
  //           );
  //         });

  //         it('should have matching challenge types', function () {
  //           if (!pyChallenge) this.skip();

  //           // JavaScript challenges should be type 28, Python should be type 29
  //           assert.equal(
  //             jsChallenge.challengeType,
  //             28,
  //             'JavaScript challenge should be type 28'
  //           );
  //           assert.equal(
  //             pyChallenge.challengeType,
  //             29,
  //             'Python challenge should be type 29'
  //           );
  //         });

  //         it('should have matching dashedName pattern', function () {
  //           if (!pyChallenge) this.skip();

  //           const expectedJsDashedName = `javascript-challenge-${challengeNumber}`;
  //           const expectedPyDashedName = `python-challenge-${challengeNumber}`;

  //           assert.equal(
  //             jsChallenge.dashedName,
  //             expectedJsDashedName,
  //             `JavaScript dashedName mismatch for Challenge ${challengeNumber}`
  //           );

  //           assert.equal(
  //             pyChallenge.dashedName,
  //             expectedPyDashedName,
  //             `Python dashedName mismatch for Challenge ${challengeNumber}`
  //           );
  //         });

  //         it('should have different challenge IDs', function () {
  //           if (!pyChallenge) this.skip();

  //           assert.notEqual(
  //             jsChallenge.id,
  //             pyChallenge.id,
  //             `Challenge IDs should be different for Challenge ${challengeNumber}`
  //           );
  //         });

  //         it('should have valid seed code structure', function () {
  //           if (!pyChallenge) this.skip();

  //           // Check that both have seed files
  //           const jsHasSeed = jsChallenge.files && jsChallenge.files.length > 0;
  //           const pyHasSeed = pyChallenge.files && pyChallenge.files.length > 0;

  //           assert.isTrue(
  //             jsHasSeed,
  //             `JavaScript Challenge ${challengeNumber} should have seed files`
  //           );
  //           assert.isTrue(
  //             pyHasSeed,
  //             `Python Challenge ${challengeNumber} should have seed files`
  //           );

  //           if (jsHasSeed && pyHasSeed) {
  //             // Both should have exactly one seed file
  //             assert.equal(
  //               jsChallenge.files.length,
  //               1,
  //               `JavaScript Challenge ${challengeNumber} should have exactly one seed file`
  //             );
  //             assert.equal(
  //               pyChallenge.files.length,
  //               1,
  //               `Python Challenge ${challengeNumber} should have exactly one seed file`
  //             );
  //           }
  //         });

  //         it('should have valid solution structure', function () {
  //           if (!pyChallenge) this.skip();

  //           const jsHasSolution =
  //             jsChallenge.solutions && jsChallenge.solutions.length > 0;
  //           const pyHasSolution =
  //             pyChallenge.solutions && pyChallenge.solutions.length > 0;

  //           assert.equal(
  //             jsHasSolution,
  //             pyHasSolution,
  //             `Solution presence mismatch for Challenge ${challengeNumber}`
  //           );

  //           if (jsHasSolution && pyHasSolution) {
  //             assert.equal(
  //               jsChallenge.solutions.length,
  //               pyChallenge.solutions.length,
  //               `Solution count mismatch for Challenge ${challengeNumber}`
  //             );
  //           }
  //         });
  //       });
  //     });

  //     pyChallenges.forEach(pyChallenge => {
  //       const challengeNumber = extractChallengeNumber(pyChallenge.title);

  //       if (challengeNumber) {
  //         it(`Python Challenge ${challengeNumber} should have matching JavaScript challenge`, function () {
  //           const jsMatch = findMatchingChallenge(pyChallenge, jsChallenges);
  //           assert.isNotNull(
  //             jsMatch,
  //             `No matching JavaScript challenge found for Python Challenge ${challengeNumber}`
  //           );
  //         });
  //       }
  //     });
  //   });
  // }
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
