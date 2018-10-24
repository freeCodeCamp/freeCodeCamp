/* eslint-disable no-process-exit, no-unused-vars */

const { Observable } = require('rx');
const tape = require('tape');
const { flatten } = require('lodash');
const vm = require('vm');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { JSDOM } = require('jsdom');
const jQuery = require('jquery');
const Sass = require('node-sass');
const Babel = require('babel-standalone');
const presetEnv = require('babel-preset-env');
const presetReact = require('babel-preset-react');

const rework = require('rework');
const visit = require('rework-visit');

const { getChallengesForLang } = require('./getChallenges');

const MongoIds = require('./mongoIds');
const ChallengeTitles = require('./challengeTitles');
const addAssertsToTapTest = require('./addAssertsToTapTest');
const { validateChallenge } = require('./schema/challengeSchema');
const { challengeTypes } = require('../client/utils/challengeTypes');

const { LOCALE: lang = 'english' } = process.env;

let mongoIds = new MongoIds();
let challengeTitles = new ChallengeTitles();

const babelOptions = {
  plugins: ['transform-runtime'],
  presets: [presetEnv, presetReact]
};

const jQueryScript = fs.readFileSync(
  path.resolve('./node_modules/jquery/dist/jquery.slim.min.js')
);

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

function isPromise(value) {
  return (
    value &&
    typeof value.subscribe !== 'function' &&
    typeof value.then === 'function'
  );
}

function checkSyntax(test, tapTest) {
  try {
    // eslint-disable-next-line
    new vm.Script(test.testString);
    tapTest.pass(test.text);
  } catch (e) {
    tapTest.fail(e);
  }
}

async function runScript(scriptString, sandbox) {
  const context = vm.createContext(sandbox);
  scriptString += `;
    (async () => {
      const testResult = eval(test);
      if (typeof testResult === 'function') {
        const __result = testResult(() => code);
        if (isPromise(__result)) {
          await __result;
        }
      }
    })();`;
  const script = new vm.Script(scriptString);
  script.runInContext(context);
}

function transformSass(solution) {
  const fragment = JSDOM.fragment(`<div>${solution}</div>`);
  const styleTags = fragment.querySelectorAll('style[type="text/sass"]');
  if (styleTags.length > 0) {
    styleTags.forEach(styleTag => {
      styleTag.innerHTML = Sass.renderSync({ data: styleTag.innerHTML }).css;
      styleTag.type = 'text/css';
    });
    return fragment.children[0].innerHTML;
  }
  return solution;
}

const colors = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 255, 0)',
  blue: 'rgb(0, 0, 255)',
  black: 'rgb(0, 0, 0)',
  gray: 'rgb(128, 128, 128)',
  yellow: 'rgb(255, 255, 0)'
};

function replaceColorNamesPlugin(style) {
  visit(style, (declarations, node) => {
    declarations
      .filter(decl => decl.type === 'declaration')
      .forEach(decl => {
        if (colors[decl.value]) {
          decl.value = colors[decl.value];
        }
      });
  });
}

// JSDOM uses CSSStyleDeclaration, which does not convert color keywords
// to 'rgb()' https://github.com/jsakas/CSSStyleDeclaration/issues/48.
// It's a workaround.
function replaceColorNames(solution) {
  const fragment = JSDOM.fragment(`<div>${solution}</div>`);
  const styleTags = fragment.querySelectorAll('style');
  if (styleTags.length > 0) {
    styleTags.forEach(styleTag => {
      styleTag.innerHTML = rework(styleTag.innerHTML)
        .use(replaceColorNamesPlugin)
        .toString();
    });
    return fragment.children[0].innerHTML;
  }
  return solution;

}

async function evaluateHtmlTest(
  challengeType,
  solution,
  assert,
  required,
  files,
  test,
  tapTest
) {
  try {
    const code = solution;
    const { head = '', tail = '' } = files.html;

    const options = {
      resources: 'usable',
      runScripts: 'dangerously'
    };

    const links = required
      .map(({ link, src }) => {
        if (link && src) {
          throw new Error(`
A required file can not have both a src and a link: src = ${src}, link = ${link}
  `);
        }
        if (src) {
          return `<script src='${src}' type='text/javascript'></script>`;
        }
        if (link) {
          return `<link href='${link}' rel='stylesheet' />`;
        }
        return '';
      })
      .reduce((head, required) => head.concat(required), '');

    const scripts = `
    <head>
      <script>${jQueryScript}</script>
      ${links}
    </head>
    `;

    solution = transformSass(solution);
    solution = replaceColorNames(solution);

    const jsdom = new JSDOM(`
      <!doctype html>
      <html>
        ${scripts}
        ${head}
        ${solution}
        ${tail}
      </html>
    `, options);

    // jQuery used by tests
    jQuery(jsdom.window);

    if (links || challengeType === challengeTypes.modern) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    jsdom.window.assert = assert;
    jsdom.window.code = code;
    jsdom.window.DeepEqual = DeepEqual;
    jsdom.window.DeepFreeze = DeepFreeze;
    jsdom.window.isPromise = isPromise;
    jsdom.window.__test = test.testString;
    const scriptString = `;
    (async () => {
      const testResult = eval(__test);
      if (typeof testResult === 'function') {
        const __result = testResult(() => code);
        if (isPromise(__result)) {
          await __result;
        }
      }
    })();`;
    const script = new vm.Script(scriptString);
    jsdom.runVMScript(script);
    jsdom.window.close();
  } catch (e) {
    tapTest.fail(e);
  }
}

async function evaluateJsTest(
  challengeType,
  solution,
  assert,
  required,
  files,
  test,
  tapTest
) {

  try {
    let sandbox = {
      assert,
      code: solution,
      DeepEqual,
      DeepFreeze,
      isPromise,
      test: test.testString
    };

    const { head = '', tail = '' } = files.js;
    const scriptString = head + '\n' + solution + '\n' + tail + '\n';

    runScript(scriptString, sandbox);
  } catch (e) {
    tapTest.fail(e);
  }

}

async function evaluateReactReduxTest(
  challengeType,
  solution,
  assert,
  required,
  files,
  test,
  tapTest
) {

  try {
    const code = solution;
    let sandbox = {
      assert,
      code,
      DeepEqual,
      DeepFreeze,
      isPromise
    };
    /* Transpile ALL the code
    * (we may use JSX in head or tail or tests, too): */
    solution = Babel.transform(solution, babelOptions).code;
    const testString = Babel.transform(test.testString, babelOptions).code;

    sandbox = {
      ...sandbox,
      test: testString
    };

    let head = '', tail = '';
    if (files.js) {
      const { head: headJs = '', tail: tailJs = '' } = files.js;
      head += Babel.transform(headJs, babelOptions).code + '\n';
      tail += Babel.transform(tailJs, babelOptions).code + '\n';
    }
    if (files.jsx) {
      const { head: headJsx = '', tail: tailJsx = '' } = files.jsx;
      head += Babel.transform(headJsx, babelOptions).code + '\n';
      tail += Babel.transform(tailJsx, babelOptions).code + '\n';
    }

    const scriptString = head + '\n' + solution + '\n' + tail + '\n';

    // Mock DOM document for ReactDOM.render method
    const jsdom = new JSDOM(`
      <!doctype html>
      <html>
        <body>
        <div id="root"><div id="challenge-node"></div>
        </body>
      </html>
    `);

    const { window } = jsdom;
    const document = window.document;

    global.window = window;
    global.document = document;

    global.navigator = {
      userAgent: 'node.js'
    };
    global.requestAnimationFrame = callback => setTimeout(callback, 0);
    global.cancelAnimationFrame = id => clearTimeout(id);
    // copyProps(window, global);

    // Provide dependencies, just provide all of them
    const React = require('react');
    const ReactDOM = require('react-dom');
    const PropTypes = require('prop-types');
    const Redux = require('redux');
    const ReduxThunk = require('redux-thunk');
    const ReactRedux = require('react-redux');
    const Enzyme = require('enzyme');
    const Adapter16 = require('enzyme-adapter-react-16');
    Enzyme.configure({ adapter: new Adapter16() });

    sandbox = {
      ...sandbox,
      require,
      setTimeout,
      window,
      document,
      React,
      ReactDOM,
      PropTypes,
      Redux,
      ReduxThunk,
      ReactRedux,
      Enzyme,
      editor: {
        getValue() {
          return code;
        }
      }
    };

    runScript(scriptString, sandbox);
    jsdom.window.close();
  } catch (e) {
    tapTest.fail(e);
  }
}

function createTest({
  title,
  id = '',
  challengeType,
  required = [],
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

  const skipTests =
    challengeType !== challengeTypes.html &&
    challengeType !== challengeTypes.js &&
    challengeType !== challengeTypes.bonfire &&
    challengeType !== challengeTypes.modern;

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
        head: result.head + '\n' + file.head,
        tail: result.tail + '\n' + file.tail
      }),
      { head: '', tail: '' }
    );
    return {
      ...result,
      [ext]: file
    };
  }, {});

  let evaluateTest;
  if (challengeType === challengeTypes.modern &&
     (groupedFiles.js || groupedFiles.jsx)) {
    evaluateTest = evaluateReactReduxTest;
  } else if (groupedFiles.html) {
    evaluateTest = evaluateHtmlTest;
  } else if (groupedFiles.js) {
    evaluateTest = evaluateJsTest;
  } else {
    throw new Error(`Unknown challenge type ${title}`);
  }
  const plan = tests.length * solutions.length;
  return testSuite
    .flatMap(tapTest => {
      tapTest.plan(plan);
      return (
        Observable.just(tapTest)
          .map(addAssertsToTapTest)
          .flatMap(assert =>
            Observable.from(solutions)
              .flatMap(solution =>
                Observable.from(tests)
                  .flatMap(test => evaluateTest(
                    challengeType,
                    solution,
                    assert,
                    required,
                    groupedFiles,
                    test,
                    tapTest
                  )
                )
              )
          )
          .ignoreElements()
      );
    });
}

Observable.fromPromise(getChallengesForLang(lang))
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
