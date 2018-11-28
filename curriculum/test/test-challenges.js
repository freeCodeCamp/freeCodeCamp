const { assert, AssertionError } = require('chai');
const Mocha = require('mocha');

const { flatten } = require('lodash');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const vm = require('vm');

const jsdom = require('jsdom');
const jQuery = require('jquery');
const Sass = require('node-sass');
const Babel = require('babel-standalone');
const presetEnv = require('babel-preset-env');
const presetReact = require('babel-preset-react');

const rework = require('rework');
const visit = require('rework-visit');

const { getChallengesForLang } = require('../getChallenges');

const MongoIds = require('./utils/mongoIds');
const ChallengeTitles = require('./utils/challengeTitles');
const { validateChallenge } = require('../schema/challengeSchema');
const { challengeTypes } = require('../../client/utils/challengeTypes');

const { LOCALE: lang = 'english' } = process.env;

const oldRunnerFail = Mocha.Runner.prototype.fail;
Mocha.Runner.prototype.fail = function(test, err) {
  // Don't show stacktrace for assertion errors.
  if (err.stack && err instanceof AssertionError) {
    delete err.stack;
  }
  return oldRunnerFail.call(this, test, err);
};

let mongoIds = new MongoIds();
let challengeTitles = new ChallengeTitles();

const { JSDOM } = jsdom;

const babelOptions = {
  plugins: ['transform-runtime'],
  presets: [presetEnv, presetReact]
};

const jQueryScript = fs.readFileSync(
  path.resolve('./node_modules/jquery/dist/jquery.slim.min.js')
);

(async function() {
  const allChallenges = await getChallengesForLang(lang).then(curriculum => (
    Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challengeArray, superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challengeArray, ...flatten(challengesForBlock)];
    }, [])
  ));

  describe('Check challenges tests', async function() {
    this.timeout(5000);

    allChallenges.forEach(challenge => {
      describe(challenge.title || 'No title', async function() {

        it('Common checks', function() {
          const result = validateChallenge(challenge);
          if (result.error) {
            console.log(result.value);
            throw new Error(result.error);
          }
          const { id, title } = challenge;
          mongoIds.check(id, title);
          challengeTitles.check(title);
        });

        const { challengeType } = challenge;
        if (challengeType !== challengeTypes.html &&
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
              assert.doesNotThrow(
                () => new vm.Script(test.testString)
              );
            });
          });
        });

        const { files = [], required = [] } = challenge;
        const exts = Array.from(new Set(files.map(({ ext }) => ext)));
        const groupedFiles = exts.reduce((result, ext) => {
          const file = files.filter(file => file.ext === ext ).reduce(
            (result, file) => ({
              head: result.head + '\n' + file.head,
              contents: result.contents + '\n' + file.contents,
              tail: result.tail + '\n' + file.tail
            }),
            { head: '', contents: '', tail: '' }
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
          it('Check tests. Unknown file type.');
          return;
        }

        it('Test suite must fail on the initial contents', async function() {
          this.timeout(20000);
          // suppress errors in the console.
          const oldConsoleError = console.error;
          console.error = () => {};
          let fails = (
          await Promise.all(tests.map(async function(test) {
            try {
              await evaluateTest({
                challengeType,
                required,
                files: groupedFiles,
                test
              });
              return false;
            } catch (e) {
              return true;
            }
          }))).some(v => v);
          console.error = oldConsoleError;
          assert(fails, 'Test suit does not fail on the initial contents');
        });

        let { solutions = [] } = challenge;
        const noSolution = new RegExp('// solution required');
        solutions = solutions.filter(solution => (
          !!solution && !noSolution.test(solution)
        ));

        if (solutions.length === 0) {
          it('Check tests. No solutions');
          return;
        }

        describe('Check tests against solutions', async function() {
          solutions.forEach((solution, index) => {
            describe(`Solution ${index + 1}`, async function() {
              tests.forEach(test => {
                it(test.text, async function() {
                  await evaluateTest({
                    challengeType,
                    solution,
                    required,
                    files: groupedFiles,
                    test
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  run();

})();

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

function timeout(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
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
  visit(style, declarations => {
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

async function evaluateHtmlTest({
  challengeType,
  solution,
  required,
  files,
  test
}) {

  const { head = '', contents = '', tail = '' } = files.html;
  if (!solution) {
    solution = contents;
  }
  const code = solution;

  const options = {
    resources: 'usable',
    runScripts: 'dangerously',
    virtualConsole: new jsdom.VirtualConsole()
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

  const sandbox = { solution, transformSass };
  const context = vm.createContext(sandbox);
  vm.runInContext(
    'solution = transformSass(solution);',
    context,
    {
      timeout: 2000
    }
  );
  solution = sandbox.solution;
  solution = replaceColorNames(solution);

  const dom = new JSDOM(`
    <!doctype html>
    <html>
      ${scripts}
      ${head}
      ${solution}
      ${tail}
    </html>
  `, options);

  if (links || challengeType === challengeTypes.modern) {
    await timeout(1000);
  }

  dom.window.code = code;
  await runTestInJsdom(dom, test.testString);
}

async function evaluateJsTest({
  solution,
  files,
  test
}) {

  const virtualConsole = new jsdom.VirtualConsole();
  const dom = new JSDOM('', { runScripts: 'dangerously', virtualConsole });

  const { head = '', contents = '', tail = '' } = files.js;
  let scriptString = '';
  if (!solution) {
    solution = contents;
    scriptString = head + '\n' + contents + '\n' + tail + '\n';
    try {
      // eslint-disable-next-line
      new vm.Script(scriptString);
    } catch (e) {
      scriptString = '';
    }
  } else {
    scriptString = head + '\n' + solution + '\n' + tail + '\n';
  }

  dom.window.code = solution;

  await runTestInJsdom(dom, test.testString, scriptString);
}

async function evaluateReactReduxTest({
  solution,
  files,
  test
}) {

  let head = '', tail = '';
  if (files.js) {
    const { head: headJs = '', tail: tailJs = '' } = files.js;
    head += headJs + '\n';
    tail += tailJs + '\n';
  }
  if (files.jsx) {
    const { head: headJsx = '', tail: tailJsx = '' } = files.jsx;
    head += headJsx + '\n';
    tail += tailJsx + '\n';
  }

  /* Transpile ALL the code
  * (we may use JSX in head or tail or tests, too): */

  let scriptString = '';
  if (!solution) {
    const contents = (files.js ? files.js.contents || '' : '') +
      (files.jsx ? files.jsx.contents || '' : '');
    solution = contents;
    scriptString = head + '\n' + contents + '\n' + tail + '\n';
    try {
      scriptString = Babel.transform(scriptString, babelOptions).code;
    } catch (e) {
      scriptString = '';
    }
  } else {
    scriptString = head + '\n' + solution + '\n' + tail + '\n';
    scriptString = Babel.transform(scriptString, babelOptions).code;
  }

  const code = solution;

  const testString = Babel.transform(test.testString, babelOptions).code;

  const virtualConsole = new jsdom.VirtualConsole();
  // Mock DOM document for ReactDOM.render method
  const dom = new JSDOM(`
    <!doctype html>
    <html>
      <body>
      <div id="root"><div id="challenge-node"></div>
      </body>
    </html>
  `, {
    runScripts: 'dangerously',
    virtualConsole,
    url: 'http://localhost'
  });

  const { window } = dom;
  const document = window.document;

  global.window = window;
  global.document = document;

  global.navigator = {
    userAgent: 'node.js'
  };
  global.requestAnimationFrame = callback => setTimeout(callback, 0);
  global.cancelAnimationFrame = id => clearTimeout(id);

  // Provide dependencies, just provide all of them
  dom.window.React = require('react');
  dom.window.ReactDOM = require('react-dom');
  dom.window.PropTypes = require('prop-types');
  dom.window.Redux = require('redux');
  dom.window.ReduxThunk = require('redux-thunk');
  dom.window.ReactRedux = require('react-redux');
  dom.window.Enzyme = require('enzyme');
  const Adapter16 = require('enzyme-adapter-react-16');
  dom.window.Enzyme.configure({ adapter: new Adapter16() });

  dom.window.require = require;
  dom.window.code = code;
  dom.window.editor = {
    getValue() {
      return code;
    }
  };

  await runTestInJsdom(dom, testString, scriptString);
}

async function runTestInJsdom(dom, testString, scriptString = '') {
  // jQuery used by tests
  jQuery(dom.window);

  dom.window.assert = assert;
  dom.window.DeepEqual = DeepEqual;
  dom.window.DeepFreeze = DeepFreeze;
  dom.window.isPromise = isPromise;

  dom.window.__test = testString;
  scriptString += `;
  window.__result =
  (async () => {
    try {
      const testResult = eval(__test);
      if (typeof testResult === 'function') {
        const __result = testResult(() => code);
        if (isPromise(__result)) {
          await __result;
        }
      }
    }catch (e) {
      window.__error = e;
    }
  })();`;
  const script = new vm.Script(scriptString);
  dom.runVMScript(script, { timeout: 5000 });
  await dom.window.__result;
  if (dom.window.__error) {
    throw dom.window.__error;
  }
}
