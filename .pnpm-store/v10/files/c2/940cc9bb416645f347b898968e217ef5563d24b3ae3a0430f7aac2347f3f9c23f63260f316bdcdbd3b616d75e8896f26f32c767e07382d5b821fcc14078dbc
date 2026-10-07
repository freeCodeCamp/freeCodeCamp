"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.runStaticQueries = runStaticQueries;
var _query = require("../query");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _assertStore = require("../utils/assert-store");
async function runStaticQueries({
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
    staticQueryIds
  } = queryIds;
  if (!staticQueryIds.length) {
    return;
  }
  const state = store.getState();
  const activity = _reporter.default.createProgress(`run static queries`, staticQueryIds.length, 0, {
    id: `static-query-running`,
    parentSpan
  });
  await (0, _query.processStaticQueries)(staticQueryIds, {
    state,
    activity,
    graphqlRunner,
    graphqlTracing: program === null || program === void 0 ? void 0 : program.graphqlTracing
  });
}
//# sourceMappingURL=run-static-queries.js.map