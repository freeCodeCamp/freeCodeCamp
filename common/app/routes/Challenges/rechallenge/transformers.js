import {
  cond,
  flow,
  identity,
  matchesProperty,
  overEvery,
  overSome,
  partial,
  stubTrue
} from 'lodash';

import * as babel from 'babel-core';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import { Observable } from 'rx';

import * as vinyl from '../../../../utils/polyvinyl.js';
import castToObservable from '../../../utils/cast-to-observable.js';

const babelOptions = { presets: [ presetEs2015, presetReact ] };
const babelTransformCode = code => babel.transform(code, babelOptions).code;
function loopProtectHit(line) {
  var err = 'Exiting potential infinite loop at line ' +
    line +
    '. To disable loop protection, write: \n\/\/ noprotect\nas the first ' +
    'line. Beware that if you do have an infinite loop in your code, ' +
    'this will crash your browser.';
  throw new Error(err);
}

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const console$logReg = /(?:\b)console(\.log\S+)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const isJS = matchesProperty('ext', 'js');
const testHTMLJS = overSome(isJS, matchesProperty('ext', 'html'));
const testJS$JSX = overSome(isJS, matchesProperty('ext', 'jsx'));

// work around the absence of multi-flile editing
// this can be replaced with `matchesProperty('ext', 'sass')`
// when the time comes
const testSASS = file => (/type='text\/sass'/i).test(file.contents);
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
  source => (
      source.replace(console$logReg, (match, methodCall) => {
      return 'window.__console' + methodCall;
  })),
);

const addLoopProtect = partial(
  vinyl.transformContents,
  contents => {
    /* eslint-disable import/no-unresolved */
    const loopProtect = require('loop-protect');
    /* eslint-enable import/no-unresolved */
    loopProtect.hit = loopProtectHit;
    return loopProtect(contents);
  }
);

export const addLoopProtectHtmlJsJsx = cond([
  [
    overEvery(
      testHTMLJS,
      partial(
        vinyl.testContents,
        contents => contents.toLowerCase().includes('<script>')
      )
    ),
    addLoopProtect
  ],
  [ testJS$JSX, addLoopProtect ],
  [ stubTrue, identity ]
]);

export const replaceNBSP = cond([
  [
    testHTMLJS,
    partial(
      vinyl.transformContents,
      contents => contents.replace(NBSPReg, ' ')
    )
  ],
  [ stubTrue, identity ]
]);

export const babelTransformer = cond([
  [
    testJS$JSX,
    flow(
      partial(
        vinyl.transformHeadTailAndContents,
        babelTransformCode
      ),
      partial(vinyl.setExt, 'js')
    )
  ],
  [ stubTrue, identity ]
]);

export const sassTransformer = cond([
  [
    testSASS,
    partial(
      vinyl.appendToTail,
      browserSassCompiler
    )
  ],
  [ stubTrue, identity ]
]);

export const _transformers = [
  addLoopProtectHtmlJsJsx,
  replaceNBSP,
  babelTransformer,
  sassTransformer
];

export function applyTransformers(file, transformers = _transformers) {
  return transformers.reduce(
    (obs, transformer) => {
      return obs.flatMap(file => castToObservable(transformer(file)));
    },
    Observable.of(file)
  );
}
