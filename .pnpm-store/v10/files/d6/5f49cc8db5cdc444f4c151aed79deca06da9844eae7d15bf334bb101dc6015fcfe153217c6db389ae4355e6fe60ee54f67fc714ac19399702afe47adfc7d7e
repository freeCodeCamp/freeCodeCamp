import assertString from './util/assertString';
import merge from './util/merge';
var base32 = /^[A-Z2-7]+=*$/;
var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
var defaultBase32Options = {
  crockford: false
};
export default function isBase32(str, options) {
  assertString(str);
  options = merge(options, defaultBase32Options);
  if (options.crockford) {
    return crockfordBase32.test(str);
  }
  return str.length % 8 === 0 && base32.test(str);
}