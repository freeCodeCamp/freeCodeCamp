"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.sourceNodesApiRunner = sourceNodesApiRunner;
var _apiRunnerNode = _interopRequireDefault(require("./api-runner-node"));
function sourceNodesApiRunner({
  traceId,
  deferNodeMutation,
  parentSpan,
  webhookBody,
  pluginName
}) {
  return (0, _apiRunnerNode.default)(`sourceNodes`, {
    traceId,
    waitForCascadingActions: true,
    deferNodeMutation,
    parentSpan,
    webhookBody: webhookBody || {},
    pluginName
  });
}
//# sourceMappingURL=source-nodes-api-runner.js.map