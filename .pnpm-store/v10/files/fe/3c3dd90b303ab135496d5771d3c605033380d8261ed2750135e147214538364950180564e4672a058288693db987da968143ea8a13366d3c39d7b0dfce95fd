"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createPageDependencyBatcher = exports.createPageDependency = void 0;
var _ = require("../");
var _batcher = _interopRequireDefault(require("../../utils/batcher"));
var _internal = require("./internal");
const createPageDependencyBatcher = new _batcher.default(1000);
exports.createPageDependencyBatcher = createPageDependencyBatcher;
createPageDependencyBatcher.bulkCall(createCalls => {
  const dependencyPayloads = createCalls.map(call => call[0]);
  _.store.dispatch((0, _internal.createPageDependencies)(dependencyPayloads));
});
const createPageDependency = ({
  path,
  nodeId,
  connection
}) => {
  const {
    queries
  } = _.store.getState();

  // Check that the dependencies aren't already recorded so we
  // can avoid creating lots of very noisy actions.
  let nodeDependencyExists = false;
  let connectionDependencyExists = false;
  if (!nodeId) {
    nodeDependencyExists = true;
  }
  if (nodeId && queries.byNode.has(nodeId) && queries.byNode.get(nodeId).has(path)) {
    nodeDependencyExists = true;
  }
  if (!connection) {
    connectionDependencyExists = true;
  }
  if (connection && queries.byConnection.has(connection) && queries.byConnection.get(connection).has(path)) {
    connectionDependencyExists = true;
  }
  if (nodeDependencyExists && connectionDependencyExists) {
    return;
  }

  // It's new, let's dispatch it
  createPageDependencyBatcher.add({
    path,
    nodeId,
    connection
  });
};
exports.createPageDependency = createPageDependency;
//# sourceMappingURL=add-page-dependency.js.map