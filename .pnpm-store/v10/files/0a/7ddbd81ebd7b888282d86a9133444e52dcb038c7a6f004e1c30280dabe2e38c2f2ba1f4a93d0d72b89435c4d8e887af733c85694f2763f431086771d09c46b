import assertString from './util/assertString';

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

export default function isMultibyte(str) {
  assertString(str);
  return multibyte.test(str);
}