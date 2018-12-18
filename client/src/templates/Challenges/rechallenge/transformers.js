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
} from 'lodash';

import * as Babel from '@babel/standalone';
import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';
import protect from 'loop-protect';

import * as vinyl from '../utils/polyvinyl.js';
import WorkerExecutor from '../utils/worker-executor';

const protectTimeout = 100;
Babel.registerPlugin('loopProtection', protect(protectTimeout));

const babelOptionsJSX = {
  plugins: ['loopProtection'],
  presets: [presetEnv, presetReact]
};

const babelOptionsJS = {
  presets: [presetEnv]
};

const babelTransformCode = options => code =>
  Babel.transform(code, options).code;

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testJS = matchesProperty('ext', 'js');
const testJSX = matchesProperty('ext', 'jsx');
const testHTML = matchesProperty('ext', 'html');
const testHTML$JS$JSX = overSome(testHTML, testJS, testJSX);
export const testJS$JSX = overSome(testJS, testJSX);

export const replaceNBSP = cond([
  [
    testHTML$JS$JSX,
    partial(vinyl.transformContents, contents =>
      contents.replace(NBSPReg, ' ')
    )
  ],
  [stubTrue, identity]
]);

function tryTransform(wrap = identity) {
  return function transformWrappedPoly(source) {
    const result = attempt(wrap, source);
    if (isError(result)) {
      console.error(result);
      // note(Bouncey): Error thrown here to collapse the build pipeline
      // At the minute, it will not bubble up
      // We collapse the pipeline so the app doesn't fall over trying
      // parse bad code (syntax/type errors etc...)
      throw result;
    }
    return result;
  };
}

export const babelTransformer = cond([
  [
    testJS,
    flow(
      partial(
        vinyl.transformHeadTailAndContents,
        tryTransform(babelTransformCode(babelOptionsJS))
      )
    )
  ],
  [
    testJSX,
    flow(
      partial(
        vinyl.transformHeadTailAndContents,
        tryTransform(babelTransformCode(babelOptionsJSX))
      ),
      partial(vinyl.setExt, 'js')
    )
  ],
  [stubTrue, identity]
]);

const sassWorker = new WorkerExecutor('sass-compile');

const htmlSassTransformCode = file => {
  const div = document.createElement('div');
  div.innerHTML = file.contents;
  const styleTags = div.querySelectorAll('style[type="text/sass"]');
  if (styleTags.length > 0) {
    return Promise.all(
      [].map.call(styleTags, async style => {
        style.type = 'text/css';
        style.innerHTML = await sassWorker.execute(style.innerHTML, 2000);
      })
    ).then(() => vinyl.transformContents(() => div.innerHTML, file));
  }
  return vinyl.transformContents(() => div.innerHTML, file);
};

export const htmlSassTransformer = cond([
  [testHTML, htmlSassTransformCode],
  [stubTrue, identity]
]);

export const transformers = [
  replaceNBSP,
  babelTransformer,
  htmlSassTransformer
];
