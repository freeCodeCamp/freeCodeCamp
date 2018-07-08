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

import * as Babel from 'babel-standalone';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import { Observable } from 'rxjs';
import protect from 'loop-protect';

import * as vinyl from '../utils/polyvinyl.js';

const { castToObservable } = vinyl;

const protectTimeout = 100;
Babel.registerPlugin('loopProtection', protect(protectTimeout));

const babelOptions = {
  plugins: ['loopProtection'],
  presets: [presetEs2015, presetReact]
};
const babelTransformCode = code => Babel.transform(code, babelOptions).code;

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const console$logReg = /(?:\b)console(\.log\S+)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const isJS = matchesProperty('ext', 'js');
const testHTML = matchesProperty('ext', 'html');
const testHTMLJS = overSome(isJS, testHTML);
export const testJS$JSX = overSome(isJS, matchesProperty('ext', 'jsx'));

// if shouldProxyConsole then we change instances of console log
// to `window.__console.log`
// this let's us tap into logging into the console.
// currently we only do this to the main window and not the test window
export const proxyLoggerTransformer = partial(
  vinyl.transformHeadTailAndContents,
  source =>
    source.replace(console$logReg, (match, methodCall) => {
      return 'window.__console' + methodCall;
    })
);

export const replaceNBSP = cond([
  [
    testHTMLJS,
    partial(vinyl.transformContents, contents => contents.replace(NBSPReg, ' '))
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
    testJS$JSX,
    flow(
      partial(
        vinyl.transformHeadTailAndContents,
        tryTransform(babelTransformCode)
      ),
      partial(vinyl.setExt, 'js')
    )
  ],
  [stubTrue, identity]
]);

const htmlSassTransformCode = file => {
  let doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = file.contents;
  let styleTags = [].filter.call(
      doc.querySelectorAll('style'),
      style => style.type === 'text/sass'
  );
  if (styleTags.length === 0 || typeof Sass === 'undefined') {
    return vinyl.transformContents(() => doc.body.innerHTML, file);
  }
  return styleTags.reduce((obs, style) => {
    return obs.flatMap(file => new Promise(resolve => {
      window.Sass.compile(style.innerHTML, function(result) {
        style.type = 'text/css';
        style.innerHTML = result.text;
        resolve(vinyl.transformContents(() => doc.body.innerHTML, file));
      });
    }));
  }, Observable.of(file));
};

export const htmlSassTransformer = cond([
  [testHTML, htmlSassTransformCode],
  [stubTrue, identity]
]);

export const _transformers = [
  replaceNBSP,
  babelTransformer,
  htmlSassTransformer
];

export function applyTransformers(file, transformers = _transformers) {
  return transformers.reduce((obs, transformer) => {
    return obs.flatMap(file => castToObservable(transformer(file)));
  }, Observable.of(file));
}
