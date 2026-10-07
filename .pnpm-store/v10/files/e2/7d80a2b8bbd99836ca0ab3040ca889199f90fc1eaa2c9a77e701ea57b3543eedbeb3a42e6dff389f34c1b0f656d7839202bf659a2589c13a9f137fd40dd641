function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import assertString from './util/assertString';
import includes from './util/includesArray';
import merge from './util/merge';
var default_json_options = {
  allow_primitives: false,
  allow_any_value: false
};
export default function isJSON(str, options) {
  assertString(str);
  try {
    options = merge(options, default_json_options);
    var obj = JSON.parse(str);

    // When allow_any_value is true, accept anything that JSON.parse successfully parses
    if (options.allow_any_value) {
      return true;
    }
    var primitives = [];
    if (options.allow_primitives) {
      primitives = [null, false, true];
    }
    return includes(primitives, obj) || !!obj && _typeof(obj) === 'object';
  } catch (e) {/* ignore */}
  return false;
}