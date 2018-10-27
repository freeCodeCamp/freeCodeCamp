const assert = require('chai').assert;

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
    this.timeout(200000);

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
            challengeType !== challengeTypes.modern
        ) {
          return;
        }

        let { tests } = challenge;
        tests = tests.filter(test => !!test.testString);
        if (tests.length === 0) {
          it.skip('Check tests syntax. No tests.');
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

        let { solutions } = challenge;
        const noSolution = new RegExp('// solution required');
        solutions = solutions.filter(solution => (
          !!solution && !noSolution.test(solution)
        ));

        if (solutions.length === 0) {
          it.skip('Check tests against solutions. No solutions');
          return;
        }

        const { files, required } = challenge;
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
          it.skip('Check tests against solutions. Unknown file type.');
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
  required = [],
  files,
  test
}) {

  const code = solution;
  const { head = '', tail = '' } = files.html;

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

  solution = transformSass(solution);
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
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  dom.window.code = code;
  runTestInJsdom(dom, test.testString);
}

async function evaluateJsTest({
  solution,
  files,
  test
}) {

  const virtualConsole = new jsdom.VirtualConsole();
  const dom = new JSDOM('', { runScripts: 'dangerously', virtualConsole });
  dom.window.code = solution;

  const { head = '', tail = '' } = files.js;
  const scriptString = head + '\n' + solution + '\n' + tail + '\n';

  await runTestInJsdom(dom, test.testString, scriptString);
}

async function evaluateReactReduxTest({
  solution,
  files,
  test
}) {

  const code = solution;
  /* Transpile ALL the code
  * (we may use JSX in head or tail or tests, too): */
  solution = Babel.transform(solution, babelOptions).code;
  const testString = Babel.transform(test.testString, babelOptions).code;

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
    virtualConsole
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
  dom.runVMScript(script);
  if (dom.window.__error) {
    throw dom.window.__error;
  }
}
