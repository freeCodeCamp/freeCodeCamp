"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = void 0;
exports.parseAsync = parseAsync;
exports.parseSync = parseSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _index = require("./config/index.js");
var _index2 = require("./parser/index.js");
var _normalizeOpts = require("./transformation/normalize-opts.js");
var _rewriteStackTrace = require("./errors/rewrite-stack-trace.js");
const parseRunner = _gensync()(function* parse(code, opts) {
  const config = yield* (0, _index.default)(opts);
  if (config === null) {
    return null;
  }
  return yield* (0, _index2.default)(config.passes, (0, _normalizeOpts.default)(config), code);
});
const parse = exports.parse = function parse(code, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = undefined;
  }
  if (callback === undefined) {
    {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(code, opts);
    }
  }
  (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.errback)(code, opts, callback);
};
function parseSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(...args);
}
function parseAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.async)(...args);
}
0 && 0;

//# sourceMappingURL=parse.js.map
