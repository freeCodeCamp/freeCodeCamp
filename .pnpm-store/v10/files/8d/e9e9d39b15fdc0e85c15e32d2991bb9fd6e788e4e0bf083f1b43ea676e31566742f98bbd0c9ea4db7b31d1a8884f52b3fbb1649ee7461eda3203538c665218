"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.bootstrapSchemaHotReloader = bootstrapSchemaHotReloader;
exports.startSchemaHotReloader = startSchemaHotReloader;
exports.stopSchemaHotReloader = stopSchemaHotReloader;
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _redux = require("../redux");
var _schema = require("../schema");
var _inferenceMetadata = require("../schema/infer/inference-metadata");
var _queryWatcher = require("../query/query-watcher");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const inferredTypesChanged = (typeMap, prevTypeMap) => Object.keys(typeMap).some(type => typeMap[type].dirty && !(0, _inferenceMetadata.haveEqualFields)(typeMap[type], prevTypeMap[type]));
let lastMetadata;

// API_RUNNING_QUEUE_EMPTY could be emitted multiple types
// in a short period of time, so debounce seems reasonable
const maybeRebuildSchema = (0, _debounce2.default)(async () => {
  const {
    inferenceMetadata
  } = _redux.store.getState();
  if (!inferredTypesChanged(inferenceMetadata.typeMap, lastMetadata.typeMap)) {
    return;
  }
  const activity = _reporter.default.activityTimer(`rebuild schema`);
  activity.start();
  await (0, _schema.rebuild)({
    parentSpan: activity
  });
  await (0, _queryWatcher.updateStateAndRunQueries)(false, {
    parentSpan: activity.span
  });
  activity.end();
}, 1000);
function snapshotInferenceMetadata() {
  const {
    inferenceMetadata
  } = _redux.store.getState();
  lastMetadata = (0, _cloneDeep2.default)(inferenceMetadata);
}
function bootstrapSchemaHotReloader() {
  // Snapshot inference metadata at the time of the last schema rebuild
  // (even if schema was rebuilt elsewhere)
  // Using the snapshot later to check if inferred types actually changed since the last rebuild
  snapshotInferenceMetadata();
  _redux.emitter.on(`SET_SCHEMA`, snapshotInferenceMetadata);
  startSchemaHotReloader();
}
function startSchemaHotReloader() {
  // Listen for node changes outside of a regular sourceNodes API call,
  // e.g. markdown file update via watcher
  _redux.emitter.on(`API_RUNNING_QUEUE_EMPTY`, maybeRebuildSchema);
}
function stopSchemaHotReloader() {
  _redux.emitter.off(`API_RUNNING_QUEUE_EMPTY`, maybeRebuildSchema);
  maybeRebuildSchema.cancel();
}
//# sourceMappingURL=schema-hot-reloader.js.map