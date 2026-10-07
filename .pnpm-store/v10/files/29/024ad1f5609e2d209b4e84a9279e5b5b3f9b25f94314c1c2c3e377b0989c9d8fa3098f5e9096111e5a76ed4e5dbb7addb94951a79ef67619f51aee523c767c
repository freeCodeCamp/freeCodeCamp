import assertString from './util/assertString';
import { CountryCodes } from './isISO31661Alpha2';

// https://en.wikipedia.org/wiki/ISO_9362
var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
export default function isBIC(str) {
  assertString(str);

  // toUpperCase() should be removed when a new major version goes out that changes
  // the regex to [A-Z] (per the spec).
  var countryCode = str.slice(4, 6).toUpperCase();
  if (!CountryCodes.has(countryCode) && countryCode !== 'XK') {
    return false;
  }
  return isBICReg.test(str);
}