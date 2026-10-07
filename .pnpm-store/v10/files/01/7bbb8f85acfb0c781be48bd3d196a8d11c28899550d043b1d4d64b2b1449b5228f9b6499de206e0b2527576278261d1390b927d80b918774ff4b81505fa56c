"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rewriteStackTrace = require("./rewrite-stack-trace.js");
class ConfigError extends Error {
  constructor(message, filename) {
    super(message);
    (0, _rewriteStackTrace.expectedError)(this);
    if (filename) (0, _rewriteStackTrace.injectVirtualStackFrame)(this, filename);
  }
}
exports.default = ConfigError;
0 && 0;

//# sourceMappingURL=config-error.js.map
