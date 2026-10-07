"use strict";

exports.__esModule = true;
exports.default = withResolverContext;
var _addPageDependency = require("../redux/actions/add-page-dependency");
var _nodeModel = require("./node-model");
var _resolvers = require("./resolvers");
function withResolverContext({
  schema,
  schemaComposer,
  context,
  customContext,
  nodeModel,
  stats,
  tracer,
  telemetryResolverTimings
}) {
  if (!nodeModel) {
    nodeModel = new _nodeModel.LocalNodeModel({
      schema,
      schemaComposer,
      createPageDependency: _addPageDependency.createPageDependency
    });
  }
  return {
    ...(context || {}),
    ...(customContext || {}),
    defaultFieldResolver: _resolvers.defaultFieldResolver,
    nodeModel: nodeModel.withContext({
      path: context ? context.path : undefined
    }),
    stats: stats || null,
    tracer: tracer || null,
    telemetryResolverTimings
  };
}
module.exports = withResolverContext;
//# sourceMappingURL=context.js.map