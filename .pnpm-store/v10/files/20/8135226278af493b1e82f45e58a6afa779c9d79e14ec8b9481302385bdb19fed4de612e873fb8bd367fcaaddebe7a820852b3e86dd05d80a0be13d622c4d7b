"use strict";

exports.__esModule = true;
exports.runQueries = runQueries;
exports.saveQueriesDependencies = saveQueriesDependencies;
exports.setComponents = setComponents;
var _services = require("../../../services");
var _redux = require("../../../redux");
var _graphqlRunner = require("../../../query/graphql-runner");
var _datastore = require("../../../datastore");
var _state = require("./state");
var _schema = require("./schema");
var _pageData = require("../../page-data");
function setComponents() {
  (0, _state.setState)([`components`, `staticQueryComponents`]);
}
async function saveQueriesDependencies() {
  // Drop `queryNodes` from query state - it can be restored from other pieces of state
  // and is there only as a perf optimization
  const pickNecessaryQueryState = state => {
    var _state$queries;
    if (!(state !== null && state !== void 0 && (_state$queries = state.queries) !== null && _state$queries !== void 0 && _state$queries.queryNodes)) return state;
    return {
      ...state,
      queries: {
        ...state.queries,
        queryNodes: new Map()
      }
    };
  };
  (0, _redux.savePartialStateToDisk)([`queries`, `telemetry`], process.env.GATSBY_WORKER_ID, pickNecessaryQueryState);

  // make sure page query results we put in lmdb-store are flushed
  await (0, _pageData.waitUntilPageQueryResultsAreStored)();
}
let gqlRunner;
function getGraphqlRunner() {
  if (!gqlRunner) {
    gqlRunner = new _graphqlRunner.GraphQLRunner(_redux.store, {
      collectStats: true,
      graphqlTracing: _redux.store.getState().program.graphqlTracing
    });
  }
  return gqlRunner;
}
async function runQueries(queryIds) {
  const actionsToReplay = [];
  const unsubscribe = _redux.store.subscribe(() => {
    const action = _redux.store.getState().lastAction;
    if (action.type === `QUERY_START` || action.type === `PAGE_QUERY_RUN` || action.type === `ADD_PENDING_PAGE_DATA_WRITE`
    // Note: Instead of saving/replaying `CREATE_COMPONENT_DEPENDENCY` action
    // we do state merging once at the end of the query running (replaying this action is expensive)
    ) {
      actionsToReplay.push(action);
    }
  });
  try {
    await doRunQueries(queryIds);
    return actionsToReplay;
  } finally {
    unsubscribe();
  }
}
async function doRunQueries(queryIds) {
  const workerStore = _redux.store.getState();

  // If buildSchema() didn't run yet, execute it
  if (workerStore.schemaCustomization.composer === null) {
    await (0, _schema.buildSchema)();
  }
  const graphqlRunner = getGraphqlRunner();
  await (0, _services.runStaticQueries)({
    queryIds,
    store: _redux.store,
    graphqlRunner
  });
  await (0, _services.runPageQueries)({
    queryIds,
    store: _redux.store,
    graphqlRunner
  });
  await (0, _datastore.getDataStore)().ready();
}
//# sourceMappingURL=queries.js.map