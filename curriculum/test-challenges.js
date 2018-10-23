/* eslint-disable no-process-exit, no-unused-vars */

const { Observable } = require('rx');
const tape = require('tape');
const { flatten } = require('lodash');
const vm = require('vm');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { getChallengesForLang } = require('./getChallenges');

const MongoIds = require('./mongoIds');
const ChallengeTitles = require('./challengeTitles');
const addAssertsToTapTest = require('./addAssertsToTapTest');
const { validateChallenge } = require('./schema/challengeSchema');

const { LOCALE: lang } = process.env;

const { challengeTypes } = require('../client/utils/challengeTypes');

let mongoIds = new MongoIds();
let challengeTitles = new ChallengeTitles();

function checkSyntax(test, tapTest) {
  try {
    // eslint-disable-next-line
    new vm.Script(test.testString);
    tapTest.pass(test.text);
  } catch (e) {
    tapTest.fail(e);
  }
}

function evaluateHtmlJsTest(
  solution,
  assert,
  files,
  test,
  tapTest
) {
  // Fake Deep Equal dependency
  const DeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  const DeepFreeze = o => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
      if (
        o.hasOwnProperty(prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };

  let sandbox = {
    assert,
    code: solution,
    DeepEqual,
    DeepFreeze,
    test: test.testString
  };

  if (files.html) {
    const { head, tail } = files.html;
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM(`
      <!doctype html>
      <html>
        ${head}
        ${solution}
        ${tail}
      </html>
    `);
    const jQuery = require('jquery')(jsdom.window);
    sandbox = {
      ...sandbox,
      window: jsdom.window,
      document: jsdom.window.document,
      $: jQuery
    };
  }

  let scriptString = '';
  if (files.js) {
    const { head, tail } = files.js;
    scriptString = head + '\n' + solution + '\n' + tail + '\n';
  }

  try {
    const context = vm.createContext(sandbox);
    scriptString += `
      const testResult = eval(test);
      if (typeof testResult === 'function') {
        testResult(() => code);
      }`;
    const script = new vm.Script(scriptString);
    script.runInContext(context);
  } catch (e) {
    // console.log(scriptString);
    // console.log(e);
    tapTest.fail(e);
    // process.exit(1);
  }
}

function evaluateReactReduxTest() {
  /* NOTE: Provide dependencies for React/Redux challenges
               * and configure testing environment
               */
  // let React, ReactDOM, Redux, ReduxThunk, ReactRedux, Enzyme, document;

  // if (react || redux || reactRedux) {
  //   // Provide dependencies, just provide all of them
  //   React = require('react');
  //   ReactDOM = require('react-dom');
  //   Redux = require('redux');
  //   ReduxThunk = require('redux-thunk');
  //   ReactRedux = require('react-redux');
  //   Enzyme = require('enzyme');
  //   const Adapter15 = require('enzyme-adapter-react-15');
  //   Enzyme.configure({ adapter: new Adapter15() });

  //   /* Transpile ALL the code
  //                * (we may use JSX in head or tail or tests, too): */
  //   const transform = require('babel-standalone').transform;
  //   const options = { presets: ['es2015', 'react'] };

  //   head = transform(head, options).code;
  //   solution = transform(solution, options).code;
  //   tail = transform(tail, options).code;
  //   test = transform(test, options).code;

  //   const { JSDOM } = require('jsdom');
  //   // Mock DOM document for ReactDOM.render method
  //   const jsdom = new JSDOM(`<!doctype html>
  //                 <html>
  //                   <body>
  //                     <div id="challenge-node"></div>
  //                   </body>
  //                 </html>
  //               `);
  //   const { window } = jsdom;

  //   // Mock DOM for ReactDOM tests
  //   document = window.document;
  //   global.window = window;
  //   global.document = window.document;
  // }

  /* eslint-enable no-unused-vars */

  // No support for async tests
  // const isAsync = s => s.includes('(async () => ');

  // try {
  //   if (!isAsync(test.testString)) {
  //     const context = vm.createContext(sandbox);
  //     const scriptString =
  //       head + '\n' + solution + '\n' + tail + '\n' + `
  //       const testResult = eval(test);
  //       if (typeof testResult === 'function') {
  //         testResult(() => code);
  //       }`;
  //     const script = new vm.Script(scriptString);
  //     script.runInContext(context);
  //   } else {
  //     // For async tests only check syntax
  //     // eslint-disable-next-line
  //     new vm.Script(test.testString);
  //     tapTest.pass(test.text);
  //   }
  // } catch (e) {
  //   console.log(head + '\n' + solution + '\n' + tail + '\n' + test.testString);
  //   // console.log(e);
  //   tapTest.fail(e);
  //   // process.exit(1);
  // }
}

function createTest({
  title,
  id = '',
  challengeType,
  tests = [],
  solutions = [],
  files = []
}) {
  mongoIds.check(id, title);
  challengeTitles.check(title);

  // if title starts with [word] [number], for example `Problem 5`,
  // tap-spec does not recognize it as test suite.
  const titleRe = new RegExp('^([a-z]+\\s+)(\\d+.*)$', 'i');
  const match = titleRe.exec(title);
  if (match) {
    title = `${match[1]}#${match[2]}`;
  }

  const testSuite = Observable.fromCallback(tape)(title);

  tests = tests.filter(test => !!test.testString);
  if (tests.length === 0) {
    return testSuite.flatMap(tapTest => {
      tapTest.end();
      return Observable.just(title);
    });
  }

  const noSolution = new RegExp('// solution required');
  solutions = solutions.filter(solution => (
    !!solution && !noSolution.test(solution)
  ));

  const skipTests = challengeType !== challengeTypes.html &&
    challengeType !== challengeTypes.js &&
    challengeType !== challengeTypes.bonfire &&
    challengeType !== challengeTypes.zipline;

  // For problems without a solution, check only the syntax of the tests.
  if (solutions.length === 0 || skipTests) {
    return testSuite.flatMap(tapTest => {
      tapTest.plan(tests.length);
      tests.forEach(test => {
        checkSyntax(test, tapTest);
      });
      return Observable.just(title);
    });
  }

  const exts = Array.from(new Set(files.map(({ ext }) => ext)));
  const groupedFiles = exts.reduce((result, ext) => {
    const file = files.filter(file => file.ext === ext ).reduce(
      (result, file) => ({
        head: result.head + ';' + file.head,
        tail: result.tail + ';' + file.tail
      }),
      { head: '', tail: '' }
    );
    return {
      ...result,
      [ext]: file
    };
  }, {});

  const plan = tests.length * solutions.length;
  return testSuite
    .flatMap(tapTest => {
      tapTest.plan(plan);
      return (
        Observable.just(tapTest)
          .map(addAssertsToTapTest)
          .doOnNext(assert => {
            solutions.forEach(solution => {
              tests.forEach(test => {
                evaluateHtmlJsTest(
                  solution,
                  assert,
                  groupedFiles,
                  test,
                  tapTest
                );
              });
            });
          })
          .ignoreElements()
      );
    });
}

Observable.fromPromise(getChallengesForLang(lang || 'english'))
  .flatMap(curriculum => {
    const allChallenges = Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challengeArray, superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challengeArray, ...flatten(challengesForBlock)];
    }, []);
    return Observable.from(allChallenges);
  })
  .do(challenge => {
    const result = validateChallenge(challenge);
    if (result.error) {
      console.log(result.value);
      throw new Error(result.error);
    }
  })
  .flatMap(challenge => {
    return createTest(challenge);
  })
  .toArray()
  .subscribe(
    noSolutions => {
      if (noSolutions) {
        console.log(
          `# These challenges have no solutions (${noSolutions.length})\n` +
          '- [ ] ' + noSolutions.join('\n- [ ] ')
        );
      }
    },
    err => {
      throw err;
    },
    () => process.exit(0)
  );
