"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.startWebpackServer = startWebpackServer;
var _betterOpn = _interopRequireDefault(require("better-opn"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _chalk = _interopRequireDefault(require("chalk"));
var _types = require("../commands/types");
var _webpackErrorUtils = require("../utils/webpack-error-utils");
var _showExperimentNotice = require("../utils/show-experiment-notice");
var _printInstructions = require("../utils/print-instructions");
var _prepareUrls = require("../utils/prepare-urls");
var _startServer = require("../utils/start-server");
var _webpackStatus = require("../utils/webpack-status");
var _redux = require("../redux");
async function startWebpackServer({
  program,
  app,
  workerPool,
  store
}) {
  if (!program || !app || !store) {
    _reporter.default.panic(`Missing required params`);
  }
  let {
    compiler,
    webpackActivity,
    websocketManager,
    webpackWatching
  } = await (0, _startServer.startServer)(program, app, workerPool);
  compiler.hooks.invalid.tap(`log compiling`, function () {
    if (!webpackActivity) {
      // mark webpack as pending if we are not in the middle of compilation already
      // when input is invalidated during compilation, webpack will automatically
      // run another compilation round before triggering `done` event
      _reporter.default.pendingActivity({
        id: `webpack-develop`
      });
      (0, _webpackStatus.markWebpackStatusAsPending)();
    }
  });
  compiler.hooks.watchRun.tapAsync(`log compiling`, function (_, done) {
    if (!webpackActivity) {
      // there can be multiple `watchRun` events before receiving single `done` event
      // webpack will not emit assets or `done` event until all pending invalidated
      // inputs were compiled
      webpackActivity = _reporter.default.activityTimer(`Re-building development bundle`, {
        id: `webpack-develop`
      });
      webpackActivity.start();
    }
    done();
  });
  let isFirstCompile = true;
  return new Promise(resolve => {
    compiler.hooks.done.tapAsync(`print gatsby instructions`, async function (stats, done) {
      if (isFirstCompile) {
        webpackWatching.suspend();
      }
      const urls = (0, _prepareUrls.prepareUrls)(program.https ? `https` : `http`, program.host, program.port);
      const isSuccessful = !stats.hasErrors();
      if (isSuccessful && isFirstCompile) {
        // Show notices to users about potential experiments/feature flags they could
        // try.
        (0, _showExperimentNotice.showExperimentNotices)();
        (0, _printInstructions.printInstructions)(program.sitePackageJson.name || `(Unnamed package)`, urls);
        if (program.open) {
          try {
            await (0, _betterOpn.default)(urls.localUrlForBrowser);
          } catch {
            console.log(`${_chalk.default.yellow(`warn`)} Browser not opened because no browser was found`);
          }
        }
      }
      isFirstCompile = false;
      if (webpackActivity) {
        if (stats.hasWarnings()) {
          const rawMessages = stats.toJson({
            all: false,
            warnings: true
          });
          (0, _webpackErrorUtils.reportWebpackWarnings)(rawMessages.warnings, _reporter.default);
        }
        if (!isSuccessful) {
          const errors = (0, _webpackErrorUtils.structureWebpackErrors)(_types.Stage.Develop, stats.compilation.errors);
          webpackActivity.panicOnBuild(errors);
        }
        webpackActivity.end();
        webpackActivity = null;
      }
      (0, _webpackStatus.markWebpackStatusAsDone)();
      done();
      _redux.emitter.emit(`COMPILATION_DONE`, stats);
      resolve({
        compiler,
        websocketManager,
        webpackWatching
      });
    });
  });
}
//# sourceMappingURL=start-webpack-server.js.map