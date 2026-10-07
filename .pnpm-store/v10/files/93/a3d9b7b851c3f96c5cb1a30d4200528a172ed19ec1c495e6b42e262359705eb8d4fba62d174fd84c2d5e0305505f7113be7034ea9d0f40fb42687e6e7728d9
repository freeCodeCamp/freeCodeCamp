"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeFallback;

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeFallback(fallback, originalOptions) {
  let loader = 'file-loader';
  let options = {};

  if (typeof fallback === 'string') {
    loader = fallback;
    const index = fallback.indexOf('?');

    if (index >= 0) {
      loader = fallback.substr(0, index);
      options = _loaderUtils.default.parseQuery(fallback.substr(index));
    }
  }

  if (fallback !== null && typeof fallback === 'object') {
    ({
      loader,
      options
    } = fallback);
  }

  options = Object.assign({}, originalOptions, options);
  delete options.fallback;
  return {
    loader,
    options
  };
}