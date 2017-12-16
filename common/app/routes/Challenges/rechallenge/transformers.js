import _ from 'lodash';

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

const isJS = _.matchesProperty('ext', 'js');
const testHTMLJS = _.overSome(isJS, _.matchesProperty('ext', 'html'));
const testJS$JSX = _.overSome(isJS, _.matchesProperty('ext', 'jsx'));

// if shouldProxyConsole then we change instances of console log
// to `window.__console.log`
// this let's us tap into logging into the console.
// currently we only do this to the main window and not the test window
export const proxyLoggerTransformer = _.partial(
  vinyl.transformHeadTailAndContents,
  source => (
      source.replace(console$logReg, (match, methodCall) => {
      return 'window.__console' + methodCall;
  })),
);

const addLoopProtect = _.partial(
  vinyl.transformContents,
  contents => {
    /* eslint-disable import/no-unresolved */
    const loopProtect = require('loop-protect');
    /* eslint-enable import/no-unresolved */
    loopProtect.hit = loopProtectHit;
    return loopProtect(contents);
  }
);

export const addLoopProtectHtmlJsJsx = _.cond([
  [
    _.overEvery(
      testHTMLJS,
      _.partial(
        vinyl.testContents,
        contents => contents.toLowerCase().includes('<script>')
      )
    ),
    addLoopProtect
  ],
  [ testJS$JSX, addLoopProtect ],
  [ _.stubTrue, _.identity ]
]);

export const replaceNBSP = _.cond([
  [
    testHTMLJS,
    _.partial(
      vinyl.transformContents,
      contents => contents.replace(NBSPReg, ' ')
    )
  ],
  [ _.stubTrue, _.identity ]
]);

export const babelTransformer = _.cond([
  [
    testJS$JSX,
    _.flow(
      _.partial(
        vinyl.transformHeadTailAndContents,
        babelTransformCode
      ),
      _.partial(vinyl.setExt, 'js')
    )
  ],
  [ _.stubTrue, _.identity ]
]);

export const _transformers = [
  addLoopProtectHtmlJsJsx,
  replaceNBSP,
  babelTransformer
];

export function applyTransformers(file, transformers = _transformers) {
  return transformers.reduce(
    (obs, transformer) => {
      return obs.flatMap(file => castToObservable(transformer(file)));
    },
    Observable.of(file)
  );
}
