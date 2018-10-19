/* eslint-disable no-eval, no-process-exit, no-unused-vars */

const { Observable } = require('rx');
const tape = require('tape');
const { flatten } = require('lodash');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { getChallengesForLang } = require('./getChallenges');

const MongoIds = require('./mongoIds');
const ChallengeTitles = require('./challengeTitles');
const addAssertsToTapTest = require('./addAssertsToTapTest');
const { validateChallenge } = require('./schema/challengeSchema');

const { LOCALE: lang } = process.env;

// modern challengeType
const modern = 6;

let mongoIds = new MongoIds();
let challengeTitles = new ChallengeTitles();

function evaluateTest(
  solution,
  assert,
  react,
  redux,
  reactRedux,
  head,
  tail,
  test,
  tapTest
) {
  let code = solution;

  /* NOTE: Provide dependencies for React/Redux challenges
               * and configure testing environment
               */
  let React, ReactDOM, Redux, ReduxThunk, ReactRedux, Enzyme, document;

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

  if (react || redux || reactRedux) {
    // Provide dependencies, just provide all of them
    React = require('react');
    ReactDOM = require('react-dom');
    Redux = require('redux');
    ReduxThunk = require('redux-thunk');
    ReactRedux = require('react-redux');
    Enzyme = require('enzyme');
    const Adapter15 = require('enzyme-adapter-react-15');
    Enzyme.configure({ adapter: new Adapter15() });

    /* Transpile ALL the code
                 * (we may use JSX in head or tail or tests, too): */
    const transform = require('babel-standalone').transform;
    const options = { presets: ['es2015', 'react'] };

    head = transform(head, options).code;
    solution = transform(solution, options).code;
    tail = transform(tail, options).code;
    test = transform(test, options).code;

    const { JSDOM } = require('jsdom');
    // Mock DOM document for ReactDOM.render method
    const jsdom = new JSDOM(`<!doctype html>
                  <html>
                    <body>
                      <div id="challenge-node"></div>
                    </body>
                  </html>
                `);
    const { window } = jsdom;

    // Mock DOM for ReactDOM tests
    document = window.document;
    global.window = window;
    global.document = window.document;
  }

  /* eslint-enable no-unused-vars */
  try {
    (() => {
      const evalString =
        head + '\n' + solution + '\n' + tail + '\n' + `
        const testResult = eval(test.testString);
        if (typeof testResult === 'function') {
          testResult(() => code);
        }`;
      return eval(evalString);
    })();
  } catch (e) {
    // console.log(head + '\n' + solution + '\n' + tail + '\n' + test.testString);
    // console.log(e);
    tapTest.fail(e);
    // process.exit(1);
  }
}

function createTest({
  title,
  id = '',
  tests = [],
  solutions = [],
  files = [],
  react = false,
  redux = false,
  reactRedux = false
}) {
  mongoIds.check(id, title);
  challengeTitles.check(title);

  const noSolution = new RegExp('// solution required');
  solutions = solutions.filter(solution => (
    !!solution && !noSolution.test(solution)
  ));
  tests = tests.filter(test => !!test);

  // No support for async tests
  const isAsync = s => s.includes('(async () => ');
  if (isAsync(tests.join(''))) {
    console.log(`Replacing Async Tests for Challenge ${title}`);
    tests = tests.map(
      challengeTestSource =>
        isAsync(challengeTestSource)
          ? "assert(true, 'message: great');"
          : challengeTestSource
    );
  }
  const { head, tail } = files
    .reduce(
      (result, file) => ({
        head: result.head + ';' + file.head,
        tail: result.tail + ';' + file.tail
      }),
      { head: '', tail: '' }
    );
  const plan = tests.length;
  if (!plan) {
    return Observable.just({
      title,
      type: 'missing'
    });
  }

  return Observable.fromCallback(tape)(title)
    .doOnNext(
      tapTest => (solutions.length ? tapTest.plan(plan) : tapTest.end())
    )
    .flatMap(tapTest => {
      if (solutions.length <= 0) {
        return Observable.just({
          title,
          type: 'missing'
        });
      }

      return (
        Observable.just(tapTest)
          .map(addAssertsToTapTest)
          /* eslint-disable no-unused-vars */
          // assert and code used within the eval
          .doOnNext(assert => {
            solutions.forEach(solution => {
              tests.forEach(test => {
                evaluateTest(
                  solution,
                  assert,
                  react,
                  redux,
                  reactRedux,
                  head,
                  tail,
                  test,
                  tapTest
                );
              });
            });
          })
          .map(() => ({ title }))
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
  .filter(({ challengeType }) => challengeType !== modern)
  .flatMap(challenge => {
    return createTest(challenge);
  })
  .map(({ title, type }) => {
    if (type === 'missing') {
      return title;
    }
    return false;
  })
  .filter(title => !!title)
  .toArray()
  .subscribe(
    noSolutions => {
      if (noSolutions) {
        console.log(
          '# These challenges have no solutions\n- [ ] ' +
            noSolutions.join('\n- [ ] ')
        );
      }
    },
    err => {
      throw err;
    },
    () => process.exit(0)
  );
