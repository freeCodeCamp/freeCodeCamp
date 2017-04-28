import cond from 'lodash/cond';
import identity from 'lodash/identity';
import matchesProperty from 'lodash/matchesProperty';
import stubTrue from 'lodash/stubTrue';
import conforms from 'lodash/conforms';

import * as babel from 'babel-core';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import { Observable } from 'rx';
/* eslint-disable import/no-unresolved */
import loopProtect from 'loop-protect';
/* eslint-enable import/no-unresolved */

import {
  transformHeadTailAndContents,
  setContent
} from '../../common/utils/polyvinyl.js';
import castToObservable from '../../common/app/utils/cast-to-observable.js';

const babelOptions = { presets: [ presetEs2015, presetReact ] };
loopProtect.hit = function hit(line) {
  var err = 'Exiting potential infinite loop at line ' +
    line +
    '. To disable loop protection, write: \n\/\/ noprotect\nas the first ' +
    'line. Beware that if you do have an infinite loop in your code, ' +
    'this will crash your browser.';
  throw new Error(err);
};

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const HTML$JSReg = /html|js/;
const console$logReg = /(?:\b)console(\.log\S+)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testHTMLJS = conforms({ ext: (ext) => HTML$JSReg.test(ext) });
const testJS = matchesProperty('ext', 'js');

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

export const addLoopProtect = cond([
  [
    testHTMLJS,
    function(file) {
      const _contents = file.contents.toLowerCase();
      if (file.ext === 'html' && !_contents.indexOf('<script>') !== -1) {
        // No JavaScript in user code, so no need for loopProtect
        return file;
      }
      return setContent(loopProtect(file.contents), file);
    }
  ],
  [ stubTrue, identity ]
]);
export const replaceNBSP = cond([
  [
    testHTMLJS,
    function(file) {
      return setContent(
      file.contents.replace(NBSPReg, ' '),
        file
    );
    }
  ],
  [ stubTrue, identity ]
]);

export const babelTransformer = cond([
  [
    testJS,
    function(file) {
      const result = babel.transform(file.contents, babelOptions);
      return setContent(
      result.code,
        file
    );
    }
  ],
  [ stubTrue, identity ]
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
