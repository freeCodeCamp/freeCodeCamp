"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.postBootstrap = postBootstrap;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redux = require("../redux");
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
var _actions = require("../redux/actions");
async function postBootstrap({
  parentSpan,
  deferNodeMutation
}) {
  const activity = _reporter.default.activityTimer(`onPostBootstrap`, {
    parentSpan
  });
  activity.start();
  await (0, _apiRunnerNode.default)(`onPostBootstrap`, {
    parentSpan: activity.span,
    deferNodeMutation
  });
  activity.end();
  _reporter.default.info(_reporter.default.stripIndent`
    bootstrap finished - ${process.uptime().toFixed(3)}s
  `);
  _redux.emitter.emit(`BOOTSTRAP_FINISHED`, {});
  _redux.store.dispatch(_actions.actions.setProgramStatus(`BOOTSTRAP_FINISHED`));
}
//# sourceMappingURL=post-bootstrap.js.map