"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.trackRequestedQueryRun = exports.spawnWebpackListener = exports.spawnMutationListener = exports.setRecompiledFiles = exports.schemaTypegen = exports.saveDbState = exports.resetRecompileCount = exports.panicBecauseOfInfiniteLoop = exports.panic = exports.markSourceFilesDirty = exports.markSourceFilesClean = exports.markQueryFilesDirty = exports.markNodesDirty = exports.markNodesClean = exports.logError = exports.incrementRecompileCount = exports.finishParentSpan = exports.definitionsTypegen = exports.clearWebhookBody = exports.clearPendingQueryRuns = exports.callApi = exports.buildActions = exports.assignWebhookBody = exports.assignStoreAndWorkerPool = exports.assignServiceResult = exports.assignServers = exports.addNodeMutation = void 0;
var _xstate = require("xstate");
var _actions = require("../../redux/actions");
var _listenForMutations = require("../../services/listen-for-mutations");
var _saveState = require("../../redux/save-state");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redux = require("../../redux");
var _types = require("../../redux/types");
var _listenToWebpack = require("../../services/listen-to-webpack");
var _callDeferredApi = require("../../utils/call-deferred-api");
var _fileWrites = require("../../utils/graphql-typegen/file-writes");
var _tsCodegen = require("../../utils/graphql-typegen/ts-codegen");
/**
 * Handler for when we're inside handlers that should be able to mutate nodes
 * Instead of queueing, we call it right away
 */
const callApi = ({
  store
}, event) => (0, _callDeferredApi.callRealApi)(event.payload, store);

/**
 * Event handler used in all states where we're not ready to process node
 * mutations. Instead we add it to a batch to process when we're next idle
 */
exports.callApi = callApi;
const addNodeMutation = (0, _xstate.assign)({
  nodeMutationBatch: ({
    nodeMutationBatch = []
  }, {
    payload
  }) => {
    // It's not pretty, but it's much quicker than concat
    nodeMutationBatch.push(payload);
    return nodeMutationBatch;
  }
});
exports.addNodeMutation = addNodeMutation;
const assignStoreAndWorkerPool = (0, _xstate.assign)((_context, event) => {
  const {
    store,
    workerPool
  } = event.data;
  return {
    store,
    workerPool
  };
});
exports.assignStoreAndWorkerPool = assignStoreAndWorkerPool;
const setQueryRunningFinished = async () => {
  _redux.store.dispatch(_actions.actions.setProgramStatus(_types.ProgramStatus.BOOTSTRAP_QUERY_RUNNING_FINISHED));
};
const markQueryFilesDirty = (0, _xstate.assign)({
  queryFilesDirty: true
});
exports.markQueryFilesDirty = markQueryFilesDirty;
const markSourceFilesDirty = (0, _xstate.assign)((context, event) => {
  var _context$changedSourc, _event$payload;
  const prev = (_context$changedSourc = context.changedSourceFiles) !== null && _context$changedSourc !== void 0 ? _context$changedSourc : new Set();
  return {
    sourceFilesDirty: true,
    changedSourceFiles: prev.add((_event$payload = event.payload) !== null && _event$payload !== void 0 ? _event$payload : event.file)
  };
});
exports.markSourceFilesDirty = markSourceFilesDirty;
const markSourceFilesClean = (0, _xstate.assign)({
  sourceFilesDirty: false,
  changedSourceFiles: () => new Set()
});
exports.markSourceFilesClean = markSourceFilesClean;
const setRecompiledFiles = (0, _xstate.assign)(context => {
  return {
    recompiledFiles: context.changedSourceFiles
  };
});
exports.setRecompiledFiles = setRecompiledFiles;
const markNodesDirty = (0, _xstate.assign)({
  nodesMutatedDuringQueryRun: true
});
exports.markNodesDirty = markNodesDirty;
const markNodesClean = (0, _xstate.assign)({
  nodesMutatedDuringQueryRun: false
});
exports.markNodesClean = markNodesClean;
const incrementRecompileCount = (0, _xstate.assign)({
  nodesMutatedDuringQueryRunRecompileCount: ({
    nodesMutatedDuringQueryRunRecompileCount: count = 0
  }) => {
    _reporter.default.verbose(`Re-running queries because nodes mutated during query run. Count: ${count + 1}`);
    return count + 1;
  }
});
exports.incrementRecompileCount = incrementRecompileCount;
const resetRecompileCount = (0, _xstate.assign)({
  nodesMutatedDuringQueryRunRecompileCount: 0,
  nodesMutatedDuringQueryRun: false
});
exports.resetRecompileCount = resetRecompileCount;
const assignServiceResult = (0, _xstate.assign)((_context, {
  data
}) => data);

/**
 * This spawns the service that listens to the `emitter` for various mutation events
 */
exports.assignServiceResult = assignServiceResult;
const spawnMutationListener = (0, _xstate.assign)({
  // @ts-ignore - TODO: Fixing this seems more involved: https://xstate.js.org/docs/guides/typescript.html#troubleshooting & https://github.com/statelyai/xstate/issues/2664
  mutationListener: () => (0, _xstate.spawn)(_listenForMutations.listenForMutations, `listen-for-mutations`)
});
exports.spawnMutationListener = spawnMutationListener;
const assignServers = (0, _xstate.assign)((_context, {
  data
}) => {
  return {
    ...data
  };
});
exports.assignServers = assignServers;
const spawnWebpackListener = (0, _xstate.assign)({
  // @ts-ignore - TODO: Fixing this seems more involved: https://xstate.js.org/docs/guides/typescript.html#troubleshooting & https://github.com/statelyai/xstate/issues/2664
  webpackListener: ({
    compiler
  }) => {
    if (!compiler) {
      return undefined;
    }
    return (0, _xstate.spawn)((0, _listenToWebpack.createWebpackWatcher)(compiler));
  }
});
exports.spawnWebpackListener = spawnWebpackListener;
const assignWebhookBody = (0, _xstate.assign)({
  webhookBody: (_context, {
    payload
  }) => payload === null || payload === void 0 ? void 0 : payload.webhookBody,
  webhookSourcePluginName: (_context, {
    payload
  }) => payload === null || payload === void 0 ? void 0 : payload.pluginName
});
exports.assignWebhookBody = assignWebhookBody;
const clearWebhookBody = (0, _xstate.assign)({
  webhookBody: undefined,
  webhookSourcePluginName: undefined
});
exports.clearWebhookBody = clearWebhookBody;
const finishParentSpan = ({
  parentSpan
}) => parentSpan === null || parentSpan === void 0 ? void 0 : parentSpan.finish();
exports.finishParentSpan = finishParentSpan;
const saveDbState = () => (0, _saveState.saveState)();
exports.saveDbState = saveDbState;
const logError = (_context, event) => {
  _reporter.default.error(event.data);
};
exports.logError = logError;
const panic = (_context, event) => {
  _reporter.default.panic(event.data);
};
exports.panic = panic;
const panicBecauseOfInfiniteLoop = () => {
  _reporter.default.panic(_reporter.default.stripIndent(`
  Panicking because nodes appear to be being changed every time we run queries. This would cause the site to recompile infinitely.
  Check custom resolvers to see if they are unconditionally creating or mutating nodes on every query.
  This may happen if they create nodes with a field that is different every time, such as a timestamp or unique id.`));
};
exports.panicBecauseOfInfiniteLoop = panicBecauseOfInfiniteLoop;
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
const clearPendingQueryRuns = (0, _xstate.assign)(() => {
  return {
    pendingQueryRuns: new Set()
  };
});
exports.clearPendingQueryRuns = clearPendingQueryRuns;
const schemaTypegen = async (context, event) => {
  const schema = event.payload.payload;
  const directory = context.program.directory;
  context.reporter.verbose(`Re-Generating schema.graphql`);
  try {
    await (0, _fileWrites.writeGraphQLSchema)(directory, schema);
  } catch (err) {
    context.reporter.panicOnBuild({
      id: `12100`,
      context: {
        sourceMessage: err
      }
    });
  }
};
exports.schemaTypegen = schemaTypegen;
const definitionsTypegen = async (context, event) => {
  const definitions = event.payload.payload;
  const {
    schema,
    config
  } = context.store.getState();
  const directory = context.program.directory;
  const graphqlTypegenOptions = config.graphqlTypegen;
  if (!graphqlTypegenOptions) {
    throw new Error(`graphqlTypegen option is falsy. This should never happen.`);
  }
  context.reporter.verbose(`Re-Generating fragments.graphql & TS Types`);
  try {
    await (0, _fileWrites.writeGraphQLFragments)(directory, definitions);
    await (0, _tsCodegen.writeTypeScriptTypes)(directory, schema, definitions, graphqlTypegenOptions);
  } catch (err) {
    context.reporter.panicOnBuild({
      id: `12100`,
      context: {
        sourceMessage: err
      }
    });
  }
};
exports.definitionsTypegen = definitionsTypegen;
const buildActions = {
  callApi,
  markNodesDirty,
  addNodeMutation,
  spawnMutationListener,
  assignStoreAndWorkerPool,
  assignServiceResult,
  assignServers,
  markQueryFilesDirty,
  assignWebhookBody,
  clearWebhookBody,
  finishParentSpan,
  spawnWebpackListener,
  markSourceFilesDirty,
  markSourceFilesClean,
  setRecompiledFiles,
  markNodesClean,
  incrementRecompileCount,
  resetRecompileCount,
  panicBecauseOfInfiniteLoop,
  saveDbState,
  setQueryRunningFinished,
  panic,
  logError,
  trackRequestedQueryRun,
  clearPendingQueryRuns,
  schemaTypegen,
  definitionsTypegen
};
exports.buildActions = buildActions;
//# sourceMappingURL=actions.js.map