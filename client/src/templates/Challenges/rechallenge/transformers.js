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

import sassData from '../../../../config/browser-scripts/sass-compile.json';
import {
  transformContents,
  transformHeadTailAndContents,
  compileHeadTail,
  createSource
} from '../../../../../shared/utils/polyvinyl';
import { WorkerExecutor } from '../utils/worker-executor';
import {
  compileTypeScriptCode,
  checkTSServiceIsReady
} from '../utils/typescript-worker-handler';

const { filename: sassCompile } = sassData;

const protectTimeout = 100;
const testProtectTimeout = 1500;
const loopsPerTimeoutCheck = 100;
const testLoopsPerTimeoutCheck = 2000;
const MODULE_TRANSFORM_PLUGIN = 'transform-modules-umd';

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
  Babel = await import(
    /* webpackChunkName: "@babel/standalone" */ '@babel/standalone'
  );
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
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );

  presetsJS = {
    presets: [presetEnv]
  };
}

async function loadPresetReact() {
  if (!presetReact)
    presetReact = await import(
      /* webpackChunkName: "@babel/preset-react" */ '@babel/preset-react'
    );
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );

  presetsJSX = {
    presets: [presetEnv, presetReact]
  };
}

const babelTransformCode = options => code =>
  Babel.transform(code, options).code;

const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testJS = matchesProperty('ext', 'js');
const testJSX = matchesProperty('ext', 'jsx');
const testTypeScript = matchesProperty('ext', 'ts');
const testHTML = matchesProperty('ext', 'html');
const testHTML$JS$JSX$TS = overSome(testHTML, testJS, testJSX, testTypeScript);

const replaceNBSP = cond([
  [
    testHTML$JS$JSX$TS,
    partial(transformContents, contents => contents.replace(NBSPReg, ' '))
  ],
  [stubTrue, identity]
]);

const getJSTranspiler = loopProtectOptions => async challengeFile => {
  await loadBabel();
  await loadPresetEnv();
  const babelOptions = getBabelOptions(presetsJS, loopProtectOptions);
  return transformHeadTailAndContents(
    babelTransformCode(babelOptions),
    challengeFile
  );
};

const getJSXTranspiler = loopProtectOptions => async challengeFile => {
  await loadBabel();
  await loadPresetReact();
  const babelOptions = getBabelOptions(presetsJSX, loopProtectOptions);
  return transformHeadTailAndContents(
    babelTransformCode(babelOptions),
    challengeFile
  );
};

const getJSXModuleTranspiler = loopProtectOptions => async challengeFile => {
  await loadBabel();
  await loadPresetReact();
  const baseOptions = getBabelOptions(presetsJSX, loopProtectOptions);
  const babelOptions = {
    ...baseOptions,
    plugins: [...baseOptions.plugins, MODULE_TRANSFORM_PLUGIN],
    moduleId: 'index' // TODO: this should be dynamic
  };
  return transformContents(babelTransformCode(babelOptions), challengeFile);
};

const getTSTranspiler = loopProtectOptions => async challengeFile => {
  await loadBabel();
  await checkTSServiceIsReady();
  const babelOptions = getBabelOptions(presetsJS, loopProtectOptions);
  return flow(
    partial(transformHeadTailAndContents, compileTypeScriptCode),
    partial(transformHeadTailAndContents, babelTransformCode(babelOptions))
  )(challengeFile);
};

const createTranspiler = loopProtectOptions => {
  return cond([
    [testJS, getJSTranspiler(loopProtectOptions)],
    [testJSX, getJSXTranspiler(loopProtectOptions)],
    [testTypeScript, getTSTranspiler(loopProtectOptions)],
    [testHTML, getHtmlTranspiler({ useModules: false })],
    [stubTrue, identity]
  ]);
};

const createModuleTransformer = loopProtectOptions => {
  return cond([
    [testJSX, getJSXModuleTranspiler(loopProtectOptions)],
    [testHTML, getHtmlTranspiler({ useModules: true })],
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

async function transformScript(documentElement, { useModules }) {
  await loadBabel();
  await loadPresetEnv();
  await loadPresetReact();
  const scriptTags = documentElement.querySelectorAll('script');
  scriptTags.forEach(script => {
    const isBabel = script.type === 'text/babel';
    const hasSource = !!script.src;
    // TODO: make the use of JSX conditional on more than just the script type.
    // It should only be used for React challenges since it would be confusing
    // for learners to see the results of a transformation they didn't ask for.
    const baseOptions = isBabel ? presetsJSX : presetsJS;

    const options = {
      ...baseOptions,
      ...(useModules && { plugins: [MODULE_TRANSFORM_PLUGIN] })
    };

    // The type has to be removed, otherwise the browser will ignore the script.
    // However, if we're importing modules, the type will be removed when the
    // scripts are embedded in the HTML.
    if (isBabel && !useModules) script.removeAttribute('type');
    // We could use babel standalone to transform inline code in the preview,
    // but that generates a warning that's shown to learner. By removing the
    // type attribute and transforming the code we can avoid that warning.
    if (isBabel && !hasSource) {
      script.removeAttribute('type');
      script.setAttribute('data-type', 'text/babel');
    }

    // Skip unnecessary transformations
    script.innerHTML = script.innerHTML
      ? babelTransformCode(options)(script.innerHTML)
      : '';
  });
}

// This does the final transformations of the files needed to embed them into
// HTML.
export const embedFilesInHtml = async function (challengeFiles) {
  const { indexHtml, stylesCss, scriptJs, indexJsx, indexTs } =
    challengeFilesToObject(challengeFiles);

  const embedStylesAndScript = contentDocument => {
    const documentElement = contentDocument.documentElement;
    const link =
      documentElement.querySelector('link[href="styles.css"]') ??
      documentElement.querySelector('link[href="./styles.css"]');
    const script =
      documentElement.querySelector('script[src="script.js"]') ??
      documentElement.querySelector('script[src="./script.js"]');

    const tsScript =
      documentElement.querySelector('script[src="index.ts"]') ??
      documentElement.querySelector('script[src="./index.ts"]');

    const jsxScript =
      documentElement.querySelector(
        `script[data-plugins="${MODULE_TRANSFORM_PLUGIN}"][type="text/babel"][src="index.jsx"]`
      ) ??
      documentElement.querySelector(
        `script[data-plugins="${MODULE_TRANSFORM_PLUGIN}"][type="text/babel"][src="./index.jsx"]`
      );

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
    if (tsScript) {
      tsScript.innerHTML = indexTs?.contents;
      tsScript.removeAttribute('src');
      tsScript.setAttribute('data-src', 'index.ts');
    }
    if (jsxScript) {
      jsxScript.innerHTML = indexJsx?.contents;
      jsxScript.removeAttribute('src');
      jsxScript.removeAttribute('type');
      jsxScript.setAttribute('data-src', 'index.jsx');
      jsxScript.setAttribute('data-type', 'text/babel');
    }
    return documentElement.innerHTML;
  };

  if (indexHtml) {
    const contents = await parseAndTransform(
      embedStylesAndScript,
      indexHtml.contents
    );
    return contents;
  } else if (indexJsx) {
    return `<script>${indexJsx.contents}</script>`;
  } else if (scriptJs) {
    return `<script>${scriptJs.contents}</script>`;
  } else if (indexTs) {
    return `<script>${indexTs.contents}</script>`;
  } else {
    throw Error('No html, ts or js(x) file found');
  }
};

function challengeFilesToObject(challengeFiles) {
  const indexHtml = challengeFiles.find(file => file.fileKey === 'indexhtml');
  const indexJsx = challengeFiles.find(file => file.fileKey === 'indexjsx');
  const stylesCss = challengeFiles.find(file => file.fileKey === 'stylescss');
  const scriptJs = challengeFiles.find(file => file.fileKey === 'scriptjs');
  const indexTs = challengeFiles.find(file => file.fileKey === 'indexts');
  return { indexHtml, indexJsx, stylesCss, scriptJs, indexTs };
}

const parseAndTransform = async function (transform, contents) {
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(contents, 'text/html');

  return await transform(newDoc);
};

const getHtmlTranspiler = scriptOptions =>
  async function (file) {
    const transform = async contentDocument => {
      const documentElement = contentDocument.documentElement;
      await Promise.all([
        transformSASS(documentElement),
        transformScript(documentElement, scriptOptions)
      ]);
      return documentElement.innerHTML;
    };

    const contents = await parseAndTransform(transform, file.contents);
    return transformContents(() => contents, file);
  };

export const getTransformers = loopProtectOptions => [
  createSource,
  replaceNBSP,
  createTranspiler(loopProtectOptions),
  partial(compileHeadTail, '')
];

export const getMultifileJSXTransformers = loopProtectOptions => [
  createSource,
  replaceNBSP,
  createModuleTransformer(loopProtectOptions)
];

export const getPythonTransformers = () => [
  createSource,
  replaceNBSP,
  partial(compileHeadTail, '')
];
