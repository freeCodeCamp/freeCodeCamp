"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.create = void 0;
exports.mergeWorkerState = mergeWorkerState;
exports.runQueriesInWorkersQueue = runQueriesInWorkersQueue;
var _chunk2 = _interopRequireDefault(require("lodash/chunk"));
var _gatsbyWorker = require("gatsby-worker");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _workerMessaging = require("../jobs/worker-messaging");
var _reporter2 = require("./reporter");
var _redux = require("../../redux");
const create = () => {
  var _global$__GATSBY;
  const numWorkers = Math.max(1, (0, _gatsbyCoreUtils.cpuCoreCount)() - 1);
  _reporter.default.verbose(`Creating ${numWorkers} worker`);
  const worker = new _gatsbyWorker.WorkerPool(require.resolve(`./child`), {
    numWorkers,
    env: {
      GATSBY_NODE_GLOBALS: JSON.stringify((_global$__GATSBY = global.__GATSBY) !== null && _global$__GATSBY !== void 0 ? _global$__GATSBY : {}),
      GATSBY_WORKER_POOL_WORKER: `true`,
      GATSBY_SKIP_WRITING_SCHEMA_TO_FILE: `true`
    }
  });
  (0, _workerMessaging.initJobsMessagingInMainProcess)(worker);
  (0, _reporter2.initReporterMessagingInMainProcess)(worker);
  return worker;
};
exports.create = create;
const queriesChunkSize = Number(process.env.GATSBY_PARALLEL_QUERY_CHUNK_SIZE) || 50;
function handleRunQueriesInWorkersQueueError(e) {
  _reporter.default.panic({
    id: `85928`,
    context: {},
    error: e
  });
}
async function runQueriesInWorkersQueue(pool, queryIds, opts) {
  const activity = _reporter.default.createProgress(`run queries in workers`, queryIds.staticQueryIds.length + queryIds.pageQueryIds.length, 0, {
    parentSpan: opts === null || opts === void 0 ? void 0 : opts.parentSpan
  });
  activity.start();
  try {
    var _opts$chunkSize, _opts$chunkSize2;
    const staticQuerySegments = (0, _chunk2.default)(queryIds.staticQueryIds, (_opts$chunkSize = opts === null || opts === void 0 ? void 0 : opts.chunkSize) !== null && _opts$chunkSize !== void 0 ? _opts$chunkSize : queriesChunkSize);
    const pageQuerySegments = (0, _chunk2.default)(queryIds.pageQueryIds, (_opts$chunkSize2 = opts === null || opts === void 0 ? void 0 : opts.chunkSize) !== null && _opts$chunkSize2 !== void 0 ? _opts$chunkSize2 : queriesChunkSize);
    pool.all.setComponents();
    for (const segment of staticQuerySegments) {
      pool.single.runQueries({
        pageQueryIds: [],
        staticQueryIds: segment,
        sliceQueryIds: []
      }).then(replayWorkerActions).then(() => {
        activity.tick(segment.length);
      }).catch(handleRunQueriesInWorkersQueueError);
    }
    for (const segment of pageQuerySegments) {
      pool.single.runQueries({
        pageQueryIds: segment,
        staticQueryIds: [],
        sliceQueryIds: []
      }).then(replayWorkerActions).then(() => {
        activity.tick(segment.length);
      }).catch(handleRunQueriesInWorkersQueueError);
    }

    // note that we only await on this and not on anything before (`.setComponents()` or `.runQueries()`)
    // because gatsby-worker will queue tasks internally and worker will never execute multiple tasks at the same time
    // so awaiting `.saveQueriesDependencies()` is enough to make sure `.setComponents()` and `.runQueries()` finished
    await Promise.all(pool.all.saveQueriesDependencies());
  } catch (e) {
    handleRunQueriesInWorkersQueueError(e);
  } finally {
    activity.end();
  }
}
async function mergeWorkerState(pool, parentSpan) {
  const activity = _reporter.default.activityTimer(`Merge worker state`, {
    parentSpan
  });
  activity.start();
  for (const {
    workerId
  } of pool.getWorkerInfo()) {
    const state = (0, _redux.loadPartialStateFromDisk)([`queries`, `telemetry`], String(workerId));
    const queryStateChunk = state.queries;
    const queryStateTelemetryChunk = state.telemetry;
    const payload = {};
    if (queryStateChunk) {
      payload.queryStateChunk = queryStateChunk;
    }
    if (queryStateTelemetryChunk) {
      payload.queryStateTelemetryChunk = queryStateTelemetryChunk;
    }
    if (Object.keys(payload).length) {
      // When there are too little queries, some worker can be inactive and its state is empty
      _redux.store.dispatch({
        type: `MERGE_WORKER_QUERY_STATE`,
        payload: {
          workerId,
          ...payload
        }
      });
      await new Promise(resolve => process.nextTick(resolve));
    }
  }
  activity.end();
}
async function replayWorkerActions(actions) {
  let i = 1;
  for (const action of actions) {
    _redux.store.dispatch(action);

    // Give event loop some breath
    if (i++ % 100 === 0) {
      await new Promise(resolve => process.nextTick(resolve));
    }
  }
}
//# sourceMappingURL=pool.js.map