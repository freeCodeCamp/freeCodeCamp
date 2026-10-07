"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.reportOnce = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyWorker = require("gatsby-worker");
const displayedWarnings = new Set();
const reportOnce = (message, method = `warn`, key) => {
  const messageId = key !== null && key !== void 0 ? key : message;
  if (!displayedWarnings.has(messageId) && !_gatsbyWorker.isWorker) {
    displayedWarnings.add(messageId);
    _reporter.default[method](message);
  }
};
exports.reportOnce = reportOnce;
//# sourceMappingURL=report-once.js.map