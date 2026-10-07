"use strict";

exports.__esModule = true;
exports.buildSchema = void 0;
exports.deleteModuleCache = deleteModuleCache;
exports.setInferenceMetadata = exports.setComponents = exports.saveQueriesDependencies = exports.runQueries = exports.renderSlices = exports.renderPartialHydrationProd = exports.renderHTMLProd = exports.renderHTMLDev = exports.loadConfigAndPlugins = void 0;
var _gatsbyWorker = require("gatsby-worker");
var _workerMessaging = require("../../jobs/worker-messaging");
var _reporter = require("../reporter");
var _renderHtml = require("./render-html");
exports.renderHTMLProd = _renderHtml.renderHTMLProd;
exports.renderHTMLDev = _renderHtml.renderHTMLDev;
exports.renderPartialHydrationProd = _renderHtml.renderPartialHydrationProd;
exports.renderSlices = _renderHtml.renderSlices;
var _schema = require("./schema");
exports.setInferenceMetadata = _schema.setInferenceMetadata;
exports.buildSchema = _schema.buildSchema;
var _queries = require("./queries");
exports.setComponents = _queries.setComponents;
exports.runQueries = _queries.runQueries;
exports.saveQueriesDependencies = _queries.saveQueriesDependencies;
var _loadConfigAndPlugins = require("./load-config-and-plugins");
exports.loadConfigAndPlugins = _loadConfigAndPlugins.loadConfigAndPlugins;
(0, _workerMessaging.initJobsMessagingInWorker)();
(0, _reporter.initReporterMessagingInWorker)();

// set global gatsby object like we do in develop & build
if (_gatsbyWorker.isWorker) {
  global.__GATSBY = process.env.GATSBY_NODE_GLOBALS ? JSON.parse(process.env.GATSBY_NODE_GLOBALS) : {};
}
// Let Gatsby force worker to grab latest version of `public/render-page.js`
function deleteModuleCache(htmlComponentRendererPath) {
  delete require.cache[require.resolve(htmlComponentRendererPath)];
}
//# sourceMappingURL=index.js.map