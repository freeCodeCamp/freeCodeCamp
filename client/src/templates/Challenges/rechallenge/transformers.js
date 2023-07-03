import protect from '@freecodecamp/loop-protect';
import {
  attempt,
  cond,
  flow,
  identity,
  isError,
  matchesProperty,
  overSome,
  partial,
  stubTrue
} from 'lodash-es';

import sassData from '../../../../../config/client/sass-compile.json';
import {
  transformContents,
  transformHeadTailAndContents,
  setExt,
  compileHeadTail
} from '../../../../../utils/polyvinyl';
import createWorker from '../utils/worker-executor';

const { filename: sassCompile } = sassData;

const protectTimeout = 100;
const testProtectTimeout = 1500;
const loopsPerTimeoutCheck = 2000;

function loopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may fail if this is not changed.`
  );
}

function testLoopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may be failing because of this.`
  );
}

// hold Babel and presets so we don't try to import them multiple times

let Babel;
let presetEnv, presetReact;
let presetsJS, presetsJSX;

async function loadBabel() {
  if (Babel) return;
  /* eslint-disable no-inline-comments */
  Babel = await import(
    /* webpackChunkName: "@babel/standalone" */ '@babel/standalone'
  );
  /* eslint-enable no-inline-comments */
  Babel.registerPlugin(
    'loopProtection',
    protect(protectTimeout, loopProtectCB)
  );
  Babel.registerPlugin(
    'testLoopProtection',
    protect(testProtectTimeout, testLoopProtectCB, loopsPerTimeoutCheck)
  );
}

async function loadPresetEnv() {
  /* eslint-disable no-inline-comments */
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );
  /* eslint-enable no-inline-comments */

  presetsJS = {
    presets: [presetEnv]
  };
}

async function loadPresetReact() {
  /* eslint-disable no-inline-comments */
  if (!presetReact)
    presetReact = await import(
      /* webpackChunkName: "@babel/preset-react" */ '@babel/preset-react'
    );
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );
  /* eslint-enable no-inline-comments */
  presetsJSX = {
    presets: [presetEnv, presetReact]
  };
}

const babelTransformCode = options => code =>
  Babel.transform(code, options).code;

const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testJS = matchesProperty('ext', 'js');
const testJSX = matchesProperty('ext', 'jsx');
const testHTML = matchesProperty('ext', 'html');
const testPython = matchesProperty('ext', 'py');
const testHTML$JS$JSX = overSome(testHTML, testJS, testJSX);

const replaceNBSP = cond([
  [
    testHTML$JS$JSX,
    partial(transformContents, contents => contents.replace(NBSPReg, ' '))
  ],
  [stubTrue, identity]
]);

function tryTransform(wrap = identity) {
  return function transformWrappedPoly(source) {
    const result = attempt(wrap, source);
    if (isError(result)) {
      // note(Bouncey): Error thrown here to collapse the build pipeline
      // At the minute, it will not bubble up
      // We collapse the pipeline so the app doesn't fall over trying
      // parse bad code (syntax/type errors etc...)
      throw result;
    }
    return result;
  };
}

const babelTransformer = loopProtectOptions => {
  return cond([
    [
      testJS,
      async code => {
        await loadBabel();
        await loadPresetEnv();
        const babelOptions = getBabelOptions(presetsJS, loopProtectOptions);
        return partial(
          transformHeadTailAndContents,
          tryTransform(babelTransformCode(babelOptions))
        )(code);
      }
    ],
    [
      testJSX,
      async code => {
        await loadBabel();
        await loadPresetReact();
        const babelOptions = getBabelOptions(presetsJSX, loopProtectOptions);
        return flow(
          partial(
            transformHeadTailAndContents,
            tryTransform(babelTransformCode(babelOptions))
          ),
          partial(setExt, 'js')
        )(code);
      }
    ],
    [stubTrue, identity]
  ]);
};

function getBabelOptions(
  presets,
  { preview, protect } = { preview: false, protect: true }
) {
  // we always protect the preview, since it evaluates as the user types and
  // they may briefly have infinite looping code accidentally
  if (preview) return { ...presets, plugins: ['loopProtection'] };
  if (protect) return { ...presets, plugins: ['testLoopProtection'] };
  return presets;
}

const sassWorker = createWorker(sassCompile);
async function transformSASS(documentElement) {
  // we only teach scss syntax, not sass. Also the compiler does not seem to be
  // able to deal with sass.
  const styleTags = documentElement.querySelectorAll(
    'style[type~="text/scss"]'
  );

  await Promise.all(
    [].map.call(styleTags, async style => {
      style.type = 'text/css';
      style.innerHTML = await sassWorker.execute(style.innerHTML, 5000).done;
    })
  );
}

async function transformScript(documentElement) {
  await loadBabel();
  await loadPresetEnv();
  const scriptTags = documentElement.querySelectorAll('script');
  scriptTags.forEach(script => {
    script.innerHTML = tryTransform(
      babelTransformCode(getBabelOptions(presetsJS))
    )(script.innerHTML);
  });
}

// This does the final transformations of the files needed to embed them into
// HTML.
export const embedFilesInHtml = async function (challengeFiles) {
  const { indexHtml, stylesCss, scriptJs, indexJsx, mainPy } =
    challengeFilesToObject(challengeFiles);

  const embedStylesAndScript = (documentElement, contentDocument) => {
    const link =
      documentElement.querySelector('link[href="styles.css"]') ??
      documentElement.querySelector('link[href="./styles.css"]');
    const script =
      documentElement.querySelector('script[src="script.js"]') ??
      documentElement.querySelector('script[src="./script.js"]');
    if (link) {
      const style = contentDocument.createElement('style');
      style.classList.add('fcc-injected-styles');
      style.innerHTML = stylesCss?.contents;

      link.parentNode.appendChild(style);

      link.removeAttribute('href');
      link.dataset.href = 'styles.css';
    }
    if (script) {
      script.innerHTML = scriptJs?.contents;
      script.removeAttribute('src');
      script.setAttribute('data-src', 'script.js');
    }
    return {
      contents: documentElement.innerHTML
    };
  };

  if (indexHtml) {
    const { contents } = await transformWithFrame(
      embedStylesAndScript,
      indexHtml.contents
    );
    return [challengeFiles, contents];
  } else if (indexJsx) {
    return [challengeFiles, `<script>${indexJsx.contents}</script>`];
  } else if (scriptJs) {
    return [challengeFiles, `<script>${scriptJs.contents}</script>`];
  } else if (mainPy) {
    // TODO: stop embedding python in html. embedFilesInHtml should not be used
    // for python challenges.
    return [challengeFiles, JSON.stringify(mainPy.contents)];
  } else {
    throw Error('No html or js(x) file found');
  }
};

function challengeFilesToObject(challengeFiles) {
  const indexHtml = challengeFiles.find(file => file.fileKey === 'indexhtml');
  const indexJsx = challengeFiles.find(
    file => file.fileKey === 'indexjs' && file.history[0] === 'index.jsx'
  );
  const stylesCss = challengeFiles.find(file => file.fileKey === 'stylescss');
  const scriptJs = challengeFiles.find(file => file.fileKey === 'scriptjs');
  const mainPy = challengeFiles.find(file => file.fileKey === 'mainpy');
  return { indexHtml, indexJsx, stylesCss, scriptJs, mainPy };
}

const transformWithFrame = async function (transform, contents) {
  // we use iframe here since file.contents is destined to be be inserted into
  // the root of an iframe.
  const frame = document.createElement('iframe');
  frame.style = 'display: none';
  let out = { contents };
  try {
    // the frame needs to be inserted into the document to create the html
    // element
    document.body.appendChild(frame);
    // replace the root element with user code
    frame.contentDocument.documentElement.innerHTML = contents;
    // grab the contents now, in case the transformation fails
    out = { contents: frame.contentDocument.documentElement.innerHTML };
    // it's important to pass around the documentElement and NOT the frame
    // itself. It appears that the frame's documentElement can get replaced by a
    // blank documentElement without the contents. This seems only to happen on
    // Firefox.
    out = await transform(
      frame.contentDocument.documentElement,
      frame.contentDocument
    );
  } finally {
    document.body.removeChild(frame);
  }
  return out;
};

const transformHtml = async function (file) {
  const transform = async documentElement => {
    await Promise.all([
      transformSASS(documentElement),
      transformScript(documentElement)
    ]);
    return { contents: documentElement.innerHTML };
  };

  const { contents } = await transformWithFrame(transform, file.contents);
  return transformContents(() => contents, file);
};

const htmlTransformer = cond([
  [testHTML, flow(transformHtml)],
  [stubTrue, identity]
]);

function modifyInputStatements(line) {
  // Use a regular expression to match input statements with chained methods
  const inputRegex = /(.*=\s*)input\((["'].*?["']\))(\.\w+\([^)]*\))*/;
  const match = line.match(inputRegex);
  if (match) {
    const inputStatement = match[0];
    const varAssignment = match[1];
    const inputCall =
      'input' +
      inputStatement
        .slice(varAssignment.length)
        .split('input')[1]
        .split('.')[0];
    const methods = inputStatement
      .slice(varAssignment.length + inputCall.length)
      .split('.')
      .slice(1);
    const tempVar = '_temp_input_var';
    const newStatements = [
      `${tempVar} = ${inputCall}`,
      ...methods.map(method => `${tempVar} = ${tempVar}.${method}`),
      `${varAssignment.trim()} ${tempVar}`
    ];
    // Get the indentation of the original line
    const indentation = line.match(/^\s*/)[0];
    // Apply the same indentation to each new statement
    const indentedStatements = newStatements.map(stmt => indentation + stmt);
    // Replace the original input statement in the line with the temporary variable
    const updatedLine = line.replace(
      inputStatement,
      indentedStatements.join('\n')
    );
    return updatedLine.split('\n');
  }
  return [line];
}

// TODO: handle input statements outside of functions
const transformPython = async function (file) {
  const code = file.contents;

  const lines = code.split('\n');
  const asyncFunctions = new Set();
  const modifiedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Modify input statements with chained methods
    const updatedLines = modifyInputStatements(line);

    // If the line contains an input statement, update it to use "await"
    if (updatedLines.some(updatedLine => updatedLine.includes('input('))) {
      updatedLines.forEach((updatedLine, index) => {
        if (updatedLine.includes('input(')) {
          updatedLines[index] = updatedLine.replace('input(', 'await input(');
        }
      });

      // Find the outer function definition and make it async
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].includes('def ')) {
          if (!modifiedLines[j].includes('async def ')) {
            const functionName = lines[j].match(
              /def\s+([a-zA-Z_][a-zA-Z_0-9]*)/
            )[1];
            asyncFunctions.add(functionName);
            modifiedLines[j] = modifiedLines[j].replace('def ', 'async def ');
          }
          break;
        }
      }
    }

    // Update function calls to include 'await' for async functions
    asyncFunctions.forEach(funcName => {
      updatedLines.forEach((updatedLine, index) => {
        if (
          updatedLine.includes(` ${funcName}(`) &&
          !updatedLine.includes(`await ${funcName}(`)
        ) {
          updatedLines[index] = updatedLine.replace(
            `${funcName}(`,
            `await ${funcName}(`
          );
        }
      });
    });

    modifiedLines.push(...updatedLines);
  }
  const newCode = modifiedLines.join('\n');
  return transformContents(() => newCode, file);
};

// TODO: So, transformers only run on build (duh!). So, python code will have to
// be handled differently. For now, I'll call buildDOMChallenge from
// updatePreviewSaga, but it's questionable if that's correct.
const pythonTransformer = cond([
  [testPython, transformPython],
  [stubTrue, identity]
]);

export const getTransformers = loopProtectOptions => [
  replaceNBSP,
  babelTransformer(loopProtectOptions),
  partial(compileHeadTail, ''),
  htmlTransformer,
  pythonTransformer
];
