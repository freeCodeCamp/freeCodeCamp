"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _repl = _interopRequireDefault(require("repl"));
var _graphql = require("graphql");
var _bootstrap = require("../bootstrap");
var _datastore = require("../datastore");
var _nodes = require("../utils/nodes");
var _redux = require("../redux");
module.exports = async program => {
  // run bootstrap
  await (0, _bootstrap.bootstrap)({
    program
  });

  // get all the goodies from the store
  const {
    schema,
    config,
    babelrc,
    pages,
    components,
    staticQueryComponents
  } = _redux.store.getState();
  const nodes = (0, _datastore.getNodes)();
  const query = async query => {
    const result = await (0, _graphql.graphql)({
      schema,
      source: query,
      rootValue: {},
      contextValue: {}
    });
    console.log(`query result: ${JSON.stringify(result)}`);
  };

  // init new repl
  const _ = _repl.default.start({
    prompt: `gatsby > `
  });

  // set some globals to make life easier
  _.context.babelrc = babelrc;
  _.context.components = components;
  _.context.getNode = _datastore.getNode;
  _.context.getNodes = _datastore.getNodes;
  _.context.getNodesByType = _datastore.getNodesByType;
  _.context.loadNodeContent = _nodes.loadNodeContent;
  _.context.nodes = [...nodes.entries()];
  _.context.pages = [...pages.entries()];
  _.context.graphql = query;
  _.context.schema = schema;
  _.context.siteConfig = config;
  _.context.staticQueries = staticQueryComponents;
  _.on(`exit`, () => {
    process.exit(0);
  });
};
//# sourceMappingURL=repl.js.map