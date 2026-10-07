"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.dataLayerActions = exports.assignGraphQLRunners = exports.assignChangedPages = void 0;
var _xstate = require("xstate");
var _createGraphqlRunner = require("../../bootstrap/create-graphql-runner");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _assertStore = require("../../utils/assert-store");
var _graphqlRunner = require("../../query/graphql-runner");
const concatUnique = (array1 = [], array2 = []) => Array.from(new Set(array1.concat(array2)));
const assignChangedPages = (0, _xstate.assign)((context, event) => {
  return {
    pagesToBuild: concatUnique(context.pagesToBuild, event.data.changedPages),
    pagesToDelete: concatUnique(context.pagesToDelete, event.data.deletedPages)
  };
});
exports.assignChangedPages = assignChangedPages;
const assignGraphQLRunners = (0, _xstate.assign)(({
  store,
  program
}) => {
  (0, _assertStore.assertStore)(store);
  return {
    gatsbyNodeGraphQLFunction: (0, _createGraphqlRunner.createGraphQLRunner)(store, _reporter.default),
    graphqlRunner: new _graphqlRunner.GraphQLRunner(store, {
      collectStats: true,
      graphqlTracing: program === null || program === void 0 ? void 0 : program.graphqlTracing
    })
  };
});
exports.assignGraphQLRunners = assignGraphQLRunners;
const dataLayerActions = {
  assignChangedPages,
  assignGraphQLRunners
};
exports.dataLayerActions = dataLayerActions;
//# sourceMappingURL=actions.js.map