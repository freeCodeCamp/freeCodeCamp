import { Observable } from 'rx';
import cond from 'lodash/cond';
import identity from 'lodash/identity';
import stubTrue from 'lodash/stubTrue';
import conforms from 'lodash/conforms';

import castToObservable from '../../common/app/utils/cast-to-observable.js';

const HTML$JSReg = /html|js/;

const testHTMLJS = conforms({ ext: (ext) => HTML$JSReg.test(ext) });
// const testJS = matchesProperty('ext', 'js');
const passToNext = [ stubTrue, identity ];

// Detect if a JS multi-line comment is left open
const throwIfOpenComments = cond([
  [
    testHTMLJS,
    function _checkForComments({ contents }) {
      const openingComments = contents.match(/\/\*/gi);
      const closingComments = contents.match(/\*\//gi);
      if (
        openingComments &&
        (!closingComments || openingComments.length > closingComments.length)
      ) {
        throw new SyntaxError('Unfinished multi-line comment');
      }
    }
  ],
  passToNext
]);


// Nested dollar sign calls breaks browsers
const nestedJQCallReg = /\$\s*?\(\s*?\$\s*?\)/gi;
const throwIfNestedJquery = cond([
  [
    testHTMLJS,
    function({ contents }) {
      if (nestedJQCallReg.test(contents)) {
        throw new SyntaxError('Nested jQuery calls breaks browsers');
      }
    }
  ],
  passToNext
]);

const functionReg = /function/g;
const functionCallReg = /function\s*?\(|function\s+\w+\s*?\(/gi;
// lonely function keywords breaks browsers
const ThrowIfUnfinishedFunction = cond([

  [
    testHTMLJS,
    function({ contents }) {
      if (
        functionReg.test(contents) &&
        !functionCallReg.test(contents)
      ) {
        throw new SyntaxError(
          'Unsafe or unfinished function declaration'
        );
      }
    }
  ],
  passToNext
]);


// console call stops tests scripts from running
const unsafeConsoleCallReg = /if\s\(null\)\sconsole\.log\(1\);/gi;
const throwIfUnsafeConsoleCall = cond([
  [
    testHTMLJS,
    function({ contents }) {
      if (unsafeConsoleCallReg.test(contents)) {
        throw new SyntaxError(
          '`if (null) console.log(1)` detected. This will break tests'
        );
      }
    }
  ],
  passToNext
]);

// Code with the URL hyperdev.com should not be allowed to run,
const goMixReg = /glitch\.(com|me)/gi;
const throwIfGomixDetected = cond([
  [
    testHTMLJS,
    function({ contents }) {
      if (goMixReg.test(contents)) {
        throw new Error('Glitch.com or Glitch.me should not be in the code');
      }
    }
  ],
  passToNext
]);

const validators = [
  throwIfOpenComments,
  throwIfGomixDetected,
  throwIfNestedJquery,
  ThrowIfUnfinishedFunction,
  throwIfUnsafeConsoleCall
];

export default function validate(file) {
  return validators.reduce((obs, validator) => obs.flatMap(file => {
    try {
      return castToObservable(validator(file));
    } catch (err) {
      return Observable.throw(err);
    }
  }), Observable.of(file))
    // if no error has occured map to the original file
    .map(() => file)
    // if err add it to the file
    // and return file
    .catch(err => {
      file.error = err;
      return Observable.just(file);
    });
}
