"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.runSliceQueries = runSliceQueries;
var _query = require("../query");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _assertStore = require("../utils/assert-store");
async function runSliceQueries({
  parentSpan,
  queryIds,
  store,
  program,
  graphqlRunner
}) {
  (0, _assertStore.assertStore)(store);
  if (!queryIds) {
    return;
  }
  const {
    sliceQueryIds
  } = queryIds;
  if (!sliceQueryIds.length) {
    return;
  }
  const state = store.getState();
  const activity = _reporter.default.createProgress(`run slice queries`, sliceQueryIds.length, 0, {
    id: `slice-query-running`,
    parentSpan
  });
  activity.start();
  await (0, _query.processSliceQueries)(sliceQueryIds, {
    state,
    activity,
    graphqlRunner,
    graphqlTracing: program === null || program === void 0 ? void 0 : program.graphqlTracing
  });
  activity.done();
}
//# sourceMappingURL=run-slice-queries.js.map