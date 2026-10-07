import assertString from './util/assertString';
import toString from './util/toString';
import merge from './util/merge';
var defaultContainsOptions = {
  ignoreCase: false,
  minOccurrences: 1
};
export default function contains(str, elem, options) {
  assertString(str);
  options = merge(options, defaultContainsOptions);
  if (options.ignoreCase) {
    return str.toLowerCase().split(toString(elem).toLowerCase()).length > options.minOccurrences;
  }
  return str.split(toString(elem)).length > options.minOccurrences;
}