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
const testHTMLJS = overSome(isJS, matchesProperty('ext', 'html'));
export const testJS$JSX = overSome(isJS, matchesProperty('ext', 'jsx'));

// work around the absence of multi-flile editing
// this can be replaced with `matchesProperty('ext', 'sass')`
// when the time comes
const sassRE = /type='text\/sass'/i;
const testSASS = file => sassRE.test(file.contents);
// This can be done in the transformer when we have multi-file editing
const browserSassCompiler = `
  <script>
    var styleTags = [ ...document.querySelectorAll('style') ];
    [].slice.call(styleTags, 1).forEach(
      function compileSass(tag) {
        var scss = tag.innerHTML;
        Sass.compile(scss, function(result) {
          tag.type = 'text/css';
          tag.innerHTML = result.text;
        });
      }
    )
  </script>
`;
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

// const addLoopProtect = partial(vinyl.transformContents, contents => {
//   /* eslint-disable import/no-unresolved */
//   const loopProtect = require('loop-protect');
//   /* eslint-enable import/no-unresolved */
//   loopProtect.hit = loopProtectHit;
//   return loopProtect(contents);
// });

// export const addLoopProtectHtmlJsJsx = cond([
//   [
//     overEvery(
//       testHTMLJS,
//       partial(vinyl.testContents, contents =>
//         contents.toLowerCase().includes('<script>')
//       )
//     ),
//     addLoopProtect
//   ],
//   [testJS$JSX, addLoopProtect],
//   [stubTrue, identity]
// ]);

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
      const friendlyError = `${result}`
        .match(/[\w\W]+?\n/)[0]
        .replace(' unknown:', '');
      throw new Error(friendlyError);
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

export const sassTransformer = cond([
  [testSASS, partial(vinyl.appendToTail, browserSassCompiler)],
  [stubTrue, identity]
]);

export const _transformers = [
  // addLoopProtectHtmlJsJsx,
  replaceNBSP,
  babelTransformer,
  sassTransformer
];

export function applyTransformers(file, transformers = _transformers) {
  return transformers.reduce((obs, transformer) => {
    return obs.flatMap(file => castToObservable(transformer(file)));
  }, Observable.of(file));
}
