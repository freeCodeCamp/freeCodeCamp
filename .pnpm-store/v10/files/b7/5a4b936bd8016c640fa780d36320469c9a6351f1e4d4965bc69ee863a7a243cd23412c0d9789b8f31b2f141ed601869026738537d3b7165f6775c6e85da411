"use strict";

exports.__esModule = true;
exports.isWebpackStatusPending = isWebpackStatusPending;
exports.markWebpackStatusAsDone = markWebpackStatusAsDone;
exports.markWebpackStatusAsPending = markWebpackStatusAsPending;
var _pageData = require("./page-data");
let isPendingStatus = false;
function isWebpackStatusPending() {
  return isPendingStatus;
}
function markWebpackStatusAsPending() {
  isPendingStatus = true;
}
function markWebpackStatusAsDone() {
  isPendingStatus = false;
  if ((0, _pageData.isFlushEnqueued)()) {
    (0, _pageData.flush)();
  }
}
//# sourceMappingURL=webpack-status.js.map