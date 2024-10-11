import protect from '@freecodecamp/loop-protect';
import {
  cond,
  flow,
  identity,
  matchesProperty,
  overSome,
  partial,
  stubTrue
} from 'lodash-es';

import sassData from '../../../../../client/config/browser-scripts/sass-compile.json';
import {
  transformContents,
  transformHeadTailAndContents,
  setExt,
  compileHeadTail,
  createSource
} from '../../../../../shared/utils/polyvinyl';
import { WorkerExecutor } from '../utils/worker-executor';

const { filename: sassCompile } = sassData;

const protectTimeout = 100;
const testProtectTimeout = 1500;
const loopsPerTimeoutCheck = 100;
const testLoopsPerTimeoutCheck = 2000;

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
    protect(protectTimeout, loopProtectCB, loopsPerTimeoutCheck)
  );
  Babel.registerPlugin(
    'testLoopProtection',
    protect(testProtectTimeout, testLoopProtectCB, testLoopsPerTimeoutCheck)
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
const testHTML$JS$JSX = overSome(testHTML, testJS, testJSX);

const replaceNBSP = cond([
  [
    testHTML$JS$JSX,
    partial(transformContents, contents => contents.replace(NBSPReg, ' '))
  ],
  [stubTrue, identity]
]);

const babelTransformer = loopProtectOptions => {
  return cond([
    [
      testJS,
      async code => {
        await loadBabel();
        await loadPresetEnv();
        const babelOptions = getBabelOptions(presetsJS, loopProtectOptions);
        return transformHeadTailAndContents(
          babelTransformCode(babelOptions),
          code
        );
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
            babelTransformCode(babelOptions)
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
  { preview, disableLoopProtectTests, disableLoopProtectPreview } = {
    preview: false,
    disableLoopProtectTests: false,
    disableLoopProtectPreview: false
  }
) {
  // we protect the preview unless specifically disabled, since it evaluates as
  // the user types and they may briefly have infinite looping code accidentally
  if (preview && !disableLoopProtectPreview)
    return { ...presets, plugins: ['loopProtection'] };
  if (!disableLoopProtectTests)
    return { ...presets, plugins: ['testLoopProtection'] };
  return presets;
}

const sassWorkerExecutor = new WorkerExecutor(sassCompile);
async function transformSASS(documentElement) {
  // we only teach scss syntax, not sass. Also the compiler does not seem to be
  // able to deal with sass.
  const styleTags = documentElement.querySelectorAll(
    'style[type~="text/scss"]'
  );

  await Promise.all(
    [].map.call(styleTags, async style => {
      style.type = 'text/css';
      style.innerHTML = await sassWorkerExecutor.execute(style.innerHTML, 5000)
        .done;
    })
  );
}

async function transformScript(documentElement) {
  await loadBabel();
  await loadPresetEnv();
  await loadPresetReact();
  const scriptTags = documentElement.querySelectorAll('script');
  scriptTags.forEach(script => {
    const isBabel = script.type === 'text/babel';
    // TODO: make the use of JSX conditional on more than just the script type.
    // It should only be used for React challenges since it would be confusing
    // for learners to see the results of a transformation they didn't ask for.
    const options = isBabel ? presetsJSX : presetsJS;

    if (isBabel) script.removeAttribute('type'); // otherwise the browser will ignore the script
    script.innerHTML = babelTransformCode(getBabelOptions(options))(
      script.innerHTML
    );
  });
}

// This does the final transformations of the files needed to embed them into
// HTML.
export const embedFilesInHtml = async function (challengeFiles) {
  const { indexHtml, stylesCss, scriptJs, indexJsx } =
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
    return documentElement.innerHTML;
  };

  if (indexHtml) {
    const contents = await parseAndTransform(
      embedStylesAndScript,
      indexHtml.contents
    );
    return [challengeFiles, contents];
  } else if (indexJsx) {
    return [challengeFiles, `<script>${indexJsx.contents}</script>`];
  } else if (scriptJs) {
    return [challengeFiles, `<script>${scriptJs.contents}</script>`];
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
  return { indexHtml, indexJsx, stylesCss, scriptJs };
}

const parseAndTransform = async function (transform, contents) {
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(contents, 'text/html');

  return await transform(newDoc.documentElement, newDoc);
};

const transformHtml = async function (file) {
  const transform = async documentElement => {
    await Promise.all([
      transformSASS(documentElement),
      transformScript(documentElement)
    ]);
    return documentElement.innerHTML;
  };

  const contents = await parseAndTransform(transform, file.contents);
  return transformContents(() => contents, file);
};

const htmlTransformer = cond([
  [testHTML, flow(transformHtml)],
  [stubTrue, identity]
]);

export const getTransformers = loopProtectOptions => [
  createSource,
  replaceNBSP,
  babelTransformer(loopProtectOptions),
  partial(compileHeadTail, ''),
  htmlTransformer
];

export const getPythonTransformers = () => [
  createSource,
  replaceNBSP,
  partial(compileHeadTail, '')
];
