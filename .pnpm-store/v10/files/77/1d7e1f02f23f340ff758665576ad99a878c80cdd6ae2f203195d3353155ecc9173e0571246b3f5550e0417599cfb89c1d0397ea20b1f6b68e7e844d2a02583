"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.sourceNodes = sourceNodes;
var _sourceNodes = _interopRequireDefault(require("../utils/source-nodes"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _assertStore = require("../utils/assert-store");
var _changedPages = require("../utils/changed-pages");
async function sourceNodes({
  parentSpan,
  webhookBody,
  webhookSourcePluginName,
  store,
  deferNodeMutation = false
}) {
  (0, _assertStore.assertStore)(store);
  const activity = _reporter.default.activityTimer(`source and transform nodes`, {
    parentSpan
  });
  activity.start();
  const currentPages = new Map(store.getState().pages);
  await (0, _sourceNodes.default)({
    parentSpan: activity.span,
    deferNodeMutation,
    webhookBody,
    pluginName: webhookSourcePluginName
  });
  _reporter.default.verbose(`Checking for deleted pages`);
  const tim = _reporter.default.activityTimer(`Checking for changed pages`, {
    parentSpan
  });
  tim.start();
  const {
    changedPages,
    deletedPages
  } = (0, _changedPages.findChangedPages)(currentPages, store.getState().pages);
  _reporter.default.verbose(`Deleted ${deletedPages.length} page${deletedPages.length === 1 ? `` : `s`}`);
  _reporter.default.verbose(`Found ${changedPages.length} changed page${changedPages.length === 1 ? `` : `s`}`);
  tim.end();
  activity.end();
  return {
    deletedPages,
    changedPages
  };
}
//# sourceMappingURL=source-nodes.js.map