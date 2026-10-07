/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {flag} from './flag.js';
import {getActual} from './getActual.js';
import {objDisplay} from './objDisplay.js';

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {object} obj object (constructed Assertion)
 * @param {IArguments} args chai.Assertion.prototype.assert arguments
 * @returns {string}
 * @namespace Utils
 * @name getMessage
 * @public
 */
export function getMessage(obj, args) {
  let negate = flag(obj, 'negate');
  let val = flag(obj, 'object');
  let expected = args[3];
  let actual = getActual(obj, args);
  let msg = negate ? args[2] : args[1];
  let flagMsg = flag(obj, 'message');

  if (typeof msg === 'function') msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () {
      return objDisplay(val);
    })
    .replace(/#\{act\}/g, function () {
      return objDisplay(actual);
    })
    .replace(/#\{exp\}/g, function () {
      return objDisplay(expected);
    });

  return flagMsg ? flagMsg + ': ' + msg : msg;
}
