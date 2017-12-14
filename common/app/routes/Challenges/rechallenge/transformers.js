import _ from 'lodash';

import * as babel from 'babel-core';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import { Observable } from 'rx';

import {
  transformHeadTailAndContents,
  setContent,
  setExt
} from '../../../../utils/polyvinyl.js';
import castToObservable from '../../../utils/cast-to-observable.js';

const babelOptions = { presets: [ presetEs2015, presetReact ] };
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
export function proxyLoggerTransformer(file) {
  return transformHeadTailAndContents(
    (source) => (
      source.replace(console$logReg, (match, methodCall) => {
      return 'window.__console' + methodCall;
    })),
    file
  );
}

export const addLoopProtect = _.cond([
  [
    testHTMLJS,
    function(file) {
      const _contents = file.contents.toLowerCase();
      if (file.ext === 'html' && !_contents.indexOf('<script>') !== -1) {
        // No JavaScript in user code, so no need for loopProtect
        return file;
      }
      /* eslint-disable import/no-unresolved */
      const loopProtect = require('loop-protect');
      /* eslint-enable import/no-unresolved */
      loopProtect.hit = loopProtectHit;
      return setContent(loopProtect(file.contents), file);
    }
  ],
  [ _.stubTrue, _.identity ]
]);
export const replaceNBSP = _.cond([
  [
    testHTMLJS,
    function(file) {
      return setContent(
        file.contents.replace(NBSPReg, ' '),
        file
      );
    }
  ],
  [ _.stubTrue, _.identity ]
]);

export const babelTransformer = _.cond([
  [
    testJS$JSX,
    function(file) {
      const result = babel.transform(file.contents, babelOptions);
      return _.flow(
        _.partial(setContent, result.code),
        _.partial(setExt, 'js')
      )(file);
    }
  ],
  [ _.stubTrue, _.identity ]
]);

export const _transformers = [
  addLoopProtect,
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
