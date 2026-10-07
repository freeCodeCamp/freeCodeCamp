"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createGraphQLRunner = void 0;
var _stackTrace = _interopRequireDefault(require("stack-trace"));
var _graphqlRunner = require("../query/graphql-runner");
var _errorParser = _interopRequireDefault(require("../query/error-parser"));
var _redux = require("../redux");
const createGraphQLRunner = (store, reporter, {
  parentSpan,
  graphqlTracing
} = {
  parentSpan: undefined,
  graphqlTracing: false
}) => {
  // TODO: Move tracking of changed state inside GraphQLRunner itself. https://github.com/gatsbyjs/gatsby/issues/20941
  let runner = new _graphqlRunner.GraphQLRunner(store, {
    graphqlTracing
  });
  const eventTypes = [`DELETE_CACHE`, `CREATE_NODE`, `DELETE_NODE`, `SET_SCHEMA_COMPOSER`, `SET_SCHEMA`, `ADD_FIELD_TO_NODE`, `ADD_CHILD_NODE_TO_PARENT_NODE`];
  eventTypes.forEach(type => {
    _redux.emitter.on(type, () => {
      runner = undefined;
    });
  });
  return (query, context) => {
    if (!runner) {
      runner = new _graphqlRunner.GraphQLRunner(store, {
        graphqlTracing
      });
    }
    return runner.query(query, context, {
      queryName: `gatsby-node query`,
      parentSpan
    }).then(result => {
      if (result.errors) {
        const structuredErrors = result.errors.map(e => {
          // Find the file where graphql was called.
          const file = _stackTrace.default.parse(e).find(file => /createPages/.test(file.getFunctionName()));
          if (file) {
            const structuredError = (0, _errorParser.default)({
              message: e.message,
              location: {
                start: {
                  line: file.getLineNumber(),
                  column: file.getColumnNumber()
                }
              },
              filePath: file.getFileName(),
              error: e
            });
            structuredError.context = {
              ...structuredError.context,
              fromGraphQLFunction: true
            };
            return structuredError;
          }
          return null;
        }).filter(Boolean);
        if (structuredErrors.length) {
          // panic on build exits the process
          reporter.panicOnBuild(structuredErrors);
        }
      }
      return result;
    });
  };
};
exports.createGraphQLRunner = createGraphQLRunner;
//# sourceMappingURL=create-graphql-runner.js.map