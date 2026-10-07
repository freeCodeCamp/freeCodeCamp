"use strict";

exports.__esModule = true;
exports.trackRequestedQueryRun = exports.queryActions = exports.markSourceFilesDirty = exports.markSourceFilesClean = exports.flushPageData = exports.clearCurrentlyHandledPendingQueryRuns = exports.assignDirtyQueries = void 0;
var _xstate = require("xstate");
var _pageData = require("../../utils/page-data");
const flushPageData = context => {
  (0, _pageData.enqueueFlush)(context.parentSpan);
};
exports.flushPageData = flushPageData;
const assignDirtyQueries = (0, _xstate.assign)((_context, {
  data
}) => {
  const {
    queryIds
  } = data;
  return {
    queryIds
  };
});
exports.assignDirtyQueries = assignDirtyQueries;
const markSourceFilesDirty = (0, _xstate.assign)({
  filesDirty: true
});
exports.markSourceFilesDirty = markSourceFilesDirty;
const markSourceFilesClean = (0, _xstate.assign)({
  filesDirty: false
});
exports.markSourceFilesClean = markSourceFilesClean;
const trackRequestedQueryRun = (0, _xstate.assign)({
  pendingQueryRuns: (context, {
    payload
  }) => {
    const pendingQueryRuns = context.pendingQueryRuns || new Set();
    if (payload !== null && payload !== void 0 && payload.pagePath) {
      pendingQueryRuns.add(payload.pagePath);
    }
    return pendingQueryRuns;
  }
});
exports.trackRequestedQueryRun = trackRequestedQueryRun;
const clearCurrentlyHandledPendingQueryRuns = (0, _xstate.assign)({
  currentlyHandledPendingQueryRuns: undefined
});
exports.clearCurrentlyHandledPendingQueryRuns = clearCurrentlyHandledPendingQueryRuns;
const queryActions = {
  assignDirtyQueries,
  flushPageData,
  markSourceFilesDirty,
  markSourceFilesClean,
  trackRequestedQueryRun,
  clearCurrentlyHandledPendingQueryRuns
};
exports.queryActions = queryActions;
//# sourceMappingURL=actions.js.map