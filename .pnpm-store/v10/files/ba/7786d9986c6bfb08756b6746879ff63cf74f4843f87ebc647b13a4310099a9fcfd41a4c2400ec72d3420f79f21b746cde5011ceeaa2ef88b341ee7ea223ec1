"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const babel = require("@babel/core");
const {
  promisify
} = require("util");
const LoaderError = require("./Error");
const transform = promisify(babel.transform);
module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (source, options) {
    let result;
    try {
      result = yield transform(source, options);
    } catch (err) {
      throw err.message && err.codeFrame ? new LoaderError(err) : err;
    }
    if (!result) return null;

    // We don't return the full result here because some entries are not
    // really serializable. For a full list of properties see here:
    // https://github.com/babel/babel/blob/main/packages/babel-core/src/transformation/index.js
    // For discussion on this topic see here:
    // https://github.com/babel/babel-loader/pull/629
    const {
      ast,
      code,
      map,
      metadata,
      sourceType,
      externalDependencies
    } = result;
    if (map && (!map.sourcesContent || !map.sourcesContent.length)) {
      map.sourcesContent = [source];
    }
    return {
      ast,
      code,
      map,
      metadata,
      sourceType,
      // Convert it from a Set to an Array to make it JSON-serializable.
      externalDependencies: Array.from(externalDependencies || [])
    };
  });
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports.version = babel.version;