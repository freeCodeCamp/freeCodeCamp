import assertString from './util/assertString';
import isNullOrUndefined from './util/nullUndefinedCheck';
import { decimal } from './alpha';
export default function isFloat(str, options) {
  assertString(str);
  options = options || {};
  var _float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (str === '' || str === '.' || str === ',' || str === '-' || str === '+') {
    return false;
  }
  var value = parseFloat(str.replace(',', '.'));
  return _float.test(str) && (!options.hasOwnProperty('min') || isNullOrUndefined(options.min) || value >= options.min) && (!options.hasOwnProperty('max') || isNullOrUndefined(options.max) || value <= options.max) && (!options.hasOwnProperty('lt') || isNullOrUndefined(options.lt) || value < options.lt) && (!options.hasOwnProperty('gt') || isNullOrUndefined(options.gt) || value > options.gt);
}
export var locales = Object.keys(decimal);