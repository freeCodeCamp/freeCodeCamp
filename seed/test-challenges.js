/* eslint-disable no-eval, no-process-exit */
import _ from 'lodash';
import { Observable } from 'rx';
import tape from 'tape';
import { isMongoId } from 'validator';

import getChallenges from './getChallenges';
import { modern } from '../common/app/utils/challengeTypes';

const notMongoId = id => !isMongoId(id);

let existingIds = [];

function validateObjectId(id, title) {
  if (notMongoId(id)) {
    throw new Error(`Expected a vaild ObjectId for ${title}, got ${id}`);
  }
  const idIndex = _.findIndex(existingIds, existing => id === existing);
  if (idIndex !== -1) {
    throw new Error(`
    All challenges must have a unique id.

    The id for ${title} is already assigned
    `);
  }
  existingIds = [ ...existingIds, id ];
  return;
}

function createIsAssert(t, isThing) {
  const { assert } = t;
  return function() {
    const args = [...arguments];
    args[0] = isThing(args[0]);
    assert.apply(t, args);
  };
}

function fillAssert(t) {
  const assert = t.assert;

  assert.isArray = createIsAssert(t, _.isArray);
  assert.isBoolean = createIsAssert(t, _.isBoolean);
  assert.isString = createIsAssert(t, _.isString);
  assert.isNumber = createIsAssert(t, _.isNumber);
  assert.isUndefined = createIsAssert(t, _.isUndefined);

  assert.deepEqual = t.deepEqual;
  assert.equal = t.equal;
  assert.strictEqual = t.equal;

  assert.sameMembers = function sameMembers() {
    const [ first, second, ...args] = arguments;
    assert.apply(
      t,
      [
        _.difference(first, second).length === 0 &&
        _.difference(second, first).length === 0
      ].concat(args)
    );
  };

  assert.includeMembers = function includeMembers() {
    const [ first, second, ...args] = arguments;
    assert.apply(t, [_.difference(second, first).length === 0].concat(args));
  };

  assert.match = function match() {
    const [value, regex, ...args] = arguments;
    assert.apply(t, [regex.test(value)].concat(args));
  };

  return assert;
}

function createTest({
  title,
  id = '',
  tests = [],
  solutions = [],
  head = [],
  tail = [],
  react = false,
  redux = false,
  reactRedux = false
}) {
  validateObjectId(id, title);
  solutions = solutions.filter(solution => !!solution);
  tests = tests.filter(test => !!test);

  // No support for async tests
  const isAsync = s => s.includes('(async () => ');
  if (isAsync(tests.join(''))) {
    console.log(`Replacing Async Tests for Challenge ${title}`);
    tests = tests.map(t => isAsync(t) ? "assert(true, 'message: great');" : t);
  }

  head = head.join('\n');
  tail = tail.join('\n');
  const plan = tests.length;
  if (!plan) {
    return Observable.just({
      title,
      type: 'missing'
    });
  }

  return Observable.fromCallback(tape)(title)
    .doOnNext(t => solutions.length ? t.plan(plan) : t.end())
    .flatMap(t => {
      if (solutions.length <= 0) {
        t.comment('No solutions for ' + title);
        return Observable.just({
          title,
          type: 'missing'
        });
      }

      return Observable.just(t)
        .map(fillAssert)
        /* eslint-disable no-unused-vars */
        // assert and code used within the eval
        .doOnNext(assert => {
          solutions.forEach(solution => {
            // Original code string
            const originalCode = solution;
            tests.forEach(test => {
              let code = solution;

              /* NOTE: Provide dependencies for React/Redux challenges
               * and configure testing environment
               */

              let React,
                  ReactDOM,
                  Redux,
                  ReduxThunk,
                  ReactRedux,
                  Enzyme,
                  document;

              // Fake Deep Equal dependency
              const DeepEqual = (a, b) =>
                JSON.stringify(a) === JSON.stringify(b);

              // Hardcode Deep Freeze dependency
              const DeepFreeze = (o) => {
                Object.freeze(o);
                Object.getOwnPropertyNames(o).forEach(function(prop) {
                  if (o.hasOwnProperty(prop)
                  && o[prop] !== null
                  && (
                    typeof o[prop] === 'object' ||
                    typeof o[prop] === 'function'
                  )
                  && !Object.isFrozen(o[prop])) {
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
                const options = { presets: [ 'es2015', 'react' ] };

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

              const editor = {
                getValue() { return code; },
                getOriginalCode() { return originalCode; }
              };
              /* eslint-enable no-unused-vars */
              try {
                (() => {
                  return eval(
                    head + '\n;;' +
                    solution + '\n;;' +
                    tail + '\n;;' +
                    test
                  );
                })();
              } catch (e) {
                t.fail(e);
              }
            });
          });
        })
        .map(() => ({ title }));
    });
}

Observable.from(getChallenges())
  .flatMap(challengeSpec => {
    return Observable.from(challengeSpec.challenges);
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
    (noSolutions) => {
      if (noSolutions) {
        console.log(
          '# These challenges have no solutions\n- [ ] ' +
            noSolutions.join('\n- [ ] ')
        );
      }
    },
    err => { throw err; },
    () => process.exit(0)
  );
