"use strict";

exports.__esModule = true;
exports.default = _default;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const webPolyfills = {
  "web.timers": {},
  "web.immediate": {},
  "web.dom.iterable": {}
};
const purePolyfills = {
  "es6.parse-float": {},
  "es6.parse-int": {},
  "es7.string.at": {}
};
function _default(targets, method, polyfills) {
  const targetNames = Object.keys(targets);
  const isAnyTarget = !targetNames.length;
  const isWebTarget = targetNames.some(name => name !== "node");
  return _extends({}, polyfills, method === "usage-pure" ? purePolyfills : null, isAnyTarget || isWebTarget ? webPolyfills : null);
}