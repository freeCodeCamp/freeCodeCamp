"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.bootstrap = bootstrap;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _redirectsWriter = require("./redirects-writer");
var _services = require("../services");
var _createGraphqlRunner = require("./create-graphql-runner");
var _opentracing = require("opentracing");
var _pageData = require("../utils/page-data");
var _redux = require("../redux");
const tracer = (0, _opentracing.globalTracer)();
async function bootstrap(initialContext) {
  const spanArgs = initialContext.parentSpan ? {
    childOf: initialContext.parentSpan
  } : {};
  const parentSpan = tracer.startSpan(`bootstrap`, spanArgs);
  const bootstrapContext = {
    ...initialContext,
    parentSpan,
    shouldRunCreatePagesStatefully: true
  };
  const context = {
    ...bootstrapContext,
    ...(await (0, _services.initialize)(bootstrapContext))
  };
  const workerPool = context.workerPool;
  const program = context.store.getState().program;
  const directory = (0, _gatsbyCoreUtils.slash)(program.directory);
  workerPool.all.loadConfigAndPlugins({
    siteDirectory: directory,
    program
  });
  await (0, _services.customizeSchema)(context);
  await (0, _services.sourceNodes)(context);
  await (0, _services.buildSchema)(context);
  context.gatsbyNodeGraphQLFunction = (0, _createGraphqlRunner.createGraphQLRunner)(context.store, _reporter.default);
  await (0, _services.createPages)(context);
  await (0, _pageData.handleStalePageData)(parentSpan);
  (0, _redux.savePartialStateToDisk)([`inferenceMetadata`]);
  workerPool.all.buildSchema();
  await (0, _services.extractQueries)(context);
  (0, _redux.savePartialStateToDisk)([`components`, `staticQueryComponents`]);
  await (0, _services.writeOutRedirects)(context);
  (0, _redirectsWriter.startRedirectListener)();
  await (0, _services.postBootstrap)(context);
  parentSpan.finish();
  return {
    gatsbyNodeGraphQLFunction: context.gatsbyNodeGraphQLFunction,
    workerPool,
    adapterManager: context.adapterManager
  };
}
//# sourceMappingURL=index.js.map