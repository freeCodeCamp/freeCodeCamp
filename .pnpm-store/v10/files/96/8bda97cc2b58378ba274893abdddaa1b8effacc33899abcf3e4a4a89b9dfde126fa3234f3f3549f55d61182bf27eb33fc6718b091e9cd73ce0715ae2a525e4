"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.validateEnginesWithActivity = validateEnginesWithActivity;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyWorker = require("gatsby-worker");
var _enginesHelpers = require("../engines-helpers");
async function validateEnginesWithActivity(directory, buildSpan) {
  if (!(0, _isEqual2.default)((0, _enginesHelpers.getCurrentPlatformAndTarget)(), (0, _enginesHelpers.getFunctionsTargetPlatformAndTarget)())) {
    _reporter.default.info(`Skipping Rendering Engines validation as they are build for different platform and/or architecture`);
    return;
  }
  const validateEnginesActivity = _reporter.default.activityTimer(`Validating Rendering Engines`, {
    parentSpan: buildSpan
  });
  validateEnginesActivity.start();
  try {
    await validateEngines(directory);
  } catch (error) {
    validateEnginesActivity.panic({
      id: `98001`,
      context: {},
      error
    });
  } finally {
    validateEnginesActivity.end();
  }
}
async function validateEngines(directory) {
  const worker = new _gatsbyWorker.WorkerPool(require.resolve(`./child`), {
    numWorkers: 1,
    env: {
      // Do not "inherit" this env var for validation,
      // as otherwise validation will fail on any imports
      // that OpenTracing config might make
      GATSBY_OPEN_TRACING_CONFIG_FILE: ``
    },
    silent: true
  });
  try {
    await worker.single.validate(directory);
  } finally {
    worker.end();
  }
}
//# sourceMappingURL=index.js.map