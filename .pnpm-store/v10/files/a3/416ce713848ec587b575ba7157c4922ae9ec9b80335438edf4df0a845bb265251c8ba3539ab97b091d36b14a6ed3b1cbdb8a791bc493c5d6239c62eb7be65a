"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.extractQueries = extractQueries;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _queryWatcher = require("../query/query-watcher");
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
async function extractQueries({
  parentSpan
}) {
  const activity = _reporter.default.activityTimer(`onPreExtractQueries`, {
    parentSpan
  });
  activity.start();
  await (0, _apiRunnerNode.default)(`onPreExtractQueries`, {
    parentSpan: activity.span
  });
  activity.end();
  await (0, _queryWatcher.extractQueries)({
    parentSpan
  });
}
//# sourceMappingURL=extract-queries.js.map