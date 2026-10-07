import assertString from './util/assertString';
import isNullOrUndefined from './util/nullUndefinedCheck';
var _int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;
export default function isInt(str, options) {
  assertString(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.allow_leading_zeroes === false ? _int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || isNullOrUndefined(options.min) || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || isNullOrUndefined(options.max) || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || isNullOrUndefined(options.lt) || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || isNullOrUndefined(options.gt) || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}