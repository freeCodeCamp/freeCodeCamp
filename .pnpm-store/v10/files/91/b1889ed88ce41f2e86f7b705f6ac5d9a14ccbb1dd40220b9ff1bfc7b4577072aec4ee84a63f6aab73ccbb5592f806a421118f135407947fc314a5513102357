"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.runPageQueries = runPageQueries;
var _query = require("../query");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _assertStore = require("../utils/assert-store");
async function runPageQueries({
  parentSpan,
  queryIds,
  store,
  program,
  graphqlRunner
}) {
  (0, _assertStore.assertStore)(store);
  const state = store.getState();
  if (!queryIds) {
    return;
  }
  const {
    pageQueryIds
  } = queryIds;
  if (pageQueryIds.length === 0) {
    return;
  }
  const activity = _reporter.default.createProgress(`run page queries`, pageQueryIds.length, 0, {
    id: `page-query-running`,
    parentSpan
  });
  await (0, _query.processPageQueries)(pageQueryIds, {
    state,
    activity,
    graphqlRunner,
    graphqlTracing: program === null || program === void 0 ? void 0 : program.graphqlTracing
  });
}
//# sourceMappingURL=run-page-queries.js.map