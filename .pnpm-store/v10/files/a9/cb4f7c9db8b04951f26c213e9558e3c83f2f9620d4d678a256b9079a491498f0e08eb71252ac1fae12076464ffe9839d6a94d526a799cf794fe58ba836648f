import assertString from './util/assertString';

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
export default function isISRC(str) {
  assertString(str);
  return isrc.test(str);
}