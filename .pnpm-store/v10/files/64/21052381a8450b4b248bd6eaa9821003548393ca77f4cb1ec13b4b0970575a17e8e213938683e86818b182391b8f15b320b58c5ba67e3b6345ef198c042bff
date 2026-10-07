"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.buildSchema = buildSchema;
exports.setInferenceMetadata = setInferenceMetadata;
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _redux = require("../../../redux");
var _actions = require("../../../redux/actions");
var _schema = require("../../../schema");
var _apiRunnerNode = _interopRequireDefault(require("../../api-runner-node"));
var _state = require("./state");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function setInferenceMetadata() {
  (0, _state.setState)([`inferenceMetadata`]);
}
async function buildSchema() {
  var _workerStore$config$p, _workerStore$config;
  const workerStore = _redux.store.getState();

  // pathPrefix: '' will at least be defined when config is loaded
  if (((_workerStore$config$p = workerStore === null || workerStore === void 0 ? void 0 : (_workerStore$config = workerStore.config) === null || _workerStore$config === void 0 ? void 0 : _workerStore$config.pathPrefix) !== null && _workerStore$config$p !== void 0 ? _workerStore$config$p : null) === null) {
    throw Error(`Config loading didn't finish before attempting to build schema in worker`);
  }
  const schemaSnapshotPath = path.join(workerStore.program.directory, `.cache`, `schema.gql`);
  if (await fs.pathExists(schemaSnapshotPath)) {
    const schemaSnapshot = await fs.readFile(schemaSnapshotPath, `utf-8`);
    _redux.store.dispatch(_actions.actions.createTypes(schemaSnapshot));
  }
  setInferenceMetadata();
  await (0, _apiRunnerNode.default)(`createSchemaCustomization`);

  // build() runs other lifecycles like "createResolvers" or "setFieldsOnGraphQLNodeType" internally
  await (0, _schema.build)({
    fullMetadataBuild: false,
    parentSpan: {}
  });
}
//# sourceMappingURL=schema.js.map