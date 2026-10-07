"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.reporter = void 0;
var _commonTags = require("common-tags");
var _chalk = _interopRequireDefault(require("chalk"));
var _opentracing = require("opentracing");
var reduxReporterActions = _interopRequireWildcard(require("./redux/actions"));
var _constants = require("./constants");
var _errors = require("./errors");
var _constructError = _interopRequireDefault(require("../structured-errors/construct-error"));
var _catchExitSignals = require("./catch-exit-signals");
var _reporterTimer = require("./reporter-timer");
var _reporterPhantom = require("./reporter-phantom");
var _reporterProgress = require("./reporter-progress");
var _diagnostics = require("./redux/diagnostics");
var _isTruthy = require("gatsby-core-utils/is-truthy");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const errorFormatter = (0, _errors.getErrorFormatter)();
const tracer = (0, _opentracing.globalTracer)();
let reporterActions = reduxReporterActions;
// eslint-disable-next-line prefer-const
let isVerbose = (0, _isTruthy.isTruthy)(process.env.GATSBY_REPORTER_ISVERBOSE);
function isLogIntentMessage(msg) {
  return msg && msg.type === `LOG_INTENT`;
}

/**
 * Reporter module.
 * @module reporter
 */
class Reporter {
  /**
   * Strip initial indentation template function.
   */
  stripIndent = _commonTags.stripIndent;
  format = _chalk.default;
  errorMap = {};

  /**
   * Set a custom error map to the reporter. This allows
   * the reporter to extend the internal error map
   *
   * Please note: The entered IDs ideally should be different from the ones we internally use:
   * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/structured-errors/error-map.ts
   */

  setErrorMap = entry => {
    this.errorMap = {
      ...this.errorMap,
      ...entry
    };
  };

  /**
   * Toggle verbosity.
   */
  setVerbose = (_isVerbose = true) => {
    isVerbose = _isVerbose;
    process.env.GATSBY_REPORTER_ISVERBOSE = isVerbose ? `1` : `0`;
  };

  /**
   * Turn off colors in error output.
   */
  setNoColor = (isNoColor = false) => {
    if (isNoColor) {
      errorFormatter.withoutColors();
    }

    // disables colors in popular terminal output coloring packages
    //  - chalk: see https://www.npmjs.com/package/chalk#chalksupportscolor
    //  - ansi-colors: see https://github.com/doowb/ansi-colors/blob/8024126c7115a0efb25a9a0e87bc5e29fd66831f/index.js#L5-L7
    if (isNoColor) {
      process.env.FORCE_COLOR = `0`;
      // chalk determines color level at import time. Before we reach this point,
      // chalk was already imported, so we need to retroactively adjust level
      _chalk.default.level = 0;
    }
  };

  /**
   * Log arguments and exit process with status 1.
   */
  panic = (errorMeta, error, pluginName) => {
    this.error(errorMeta, error, pluginName);
    (0, _catchExitSignals.prematureEnd)();
    return process.exit(1);
  };
  panicOnBuild = (errorMeta, error, pluginName) => {
    const reporterError = this.error(errorMeta, error, pluginName);
    if (process.env.gatsby_executing_command === `build`) {
      (0, _catchExitSignals.prematureEnd)();
      process.exit(1);
    }
    return reporterError;
  };
  error = (errorMeta, error, pluginName) => {
    let details = {
      context: {}
    };

    // Many paths to retain backcompat :scream:
    // 1.
    //   reporter.error(any, Error);
    //   reporter.error(any, [Error]);
    if (error) {
      if (Array.isArray(error)) {
        return error.map(errorItem => this.error(errorMeta, errorItem));
      }
      details.error = error;
      details.context = {
        sourceMessage: errorMeta + ` ` + error.message
      };
      // 2.
      //    reporter.error(Error);
    } else if (errorMeta instanceof Error) {
      details.error = errorMeta;
      details.context = {
        sourceMessage: errorMeta.message
      };
      // 3.
      //    reporter.error([Error]);
    } else if (Array.isArray(errorMeta)) {
      // when we get an array of messages, call this function once for each error
      return errorMeta.map(errorItem => this.error(errorItem));
      // 4.
      //    reporter.error(errorMeta);
    } else if (typeof errorMeta === `object`) {
      details = {
        ...errorMeta
      };
      // 5.
      //    reporter.error('foo');
    } else if (typeof errorMeta === `string`) {
      details.context = {
        sourceMessage: errorMeta
      };
    }
    if (pluginName) {
      var _details;
      details.pluginName = pluginName;
      const id = (_details = details) === null || _details === void 0 ? void 0 : _details.id;
      if (id) {
        const isPrefixed = id.includes(`${pluginName}_`);
        if (!isPrefixed) {
          details.id = `${pluginName}_${id}`;
        }
      }
    }
    const structuredError = (0, _constructError.default)({
      details
    }, this.errorMap);
    if (structuredError) {
      reporterActions.createLog(structuredError);
    }

    // TODO: remove this once Error component can render this info
    // log formatted stacktrace
    if (structuredError.error) {
      this.log(errorFormatter.render(structuredError.error));
    }
    return structuredError;
  };

  /**
   * Set prefix on uptime.
   */
  uptime = prefix => {
    this.verbose(`${prefix}: ${(process.uptime() * 1000).toFixed(3)}ms`);
  };
  verbose = text => {
    if (isVerbose) {
      reporterActions.createLog({
        level: _constants.LogLevels.Debug,
        text
      });
    }
  };
  success = text => reporterActions.createLog({
    level: _constants.LogLevels.Success,
    text
  });
  info = text => reporterActions.createLog({
    level: _constants.LogLevels.Info,
    text
  });
  warn = text => reporterActions.createLog({
    level: _constants.LogLevels.Warning,
    text
  });
  log = text => reporterActions.createLog({
    level: _constants.LogLevels.Log,
    text
  });
  pendingActivity = reporterActions.createPendingActivity;
  completeActivity = (id, status = _constants.ActivityStatuses.Success) => {
    reporterActions.endActivity({
      id,
      status
    });
  };

  /**
   * Time an activity.
   */
  activityTimer = (text, activityArgs = {}, pluginName) => {
    let {
      parentSpan,
      id,
      tags
    } = activityArgs;
    const spanArgs = parentSpan ? {
      childOf: parentSpan,
      tags
    } : {
      tags
    };
    if (!id) {
      id = text;
    }
    const span = tracer.startSpan(text, spanArgs);
    return (0, _reporterTimer.createTimerReporter)({
      text,
      id,
      span,
      reporter: this,
      reporterActions,
      pluginName
    });
  };

  /**
   * Create an Activity that is not visible to the user
   *
   * During the lifecycle of the Gatsby process, sometimes we need to do some
   * async work and wait for it to complete. A typical example of this is a job.
   * This work should set the status of the process to `in progress` while running and
   * `complete` (or `failure`) when complete. Activities do just this! However, they
   * are visible to the user. So this function can be used to create a _hidden_ activity
   * that while not displayed in the CLI, still triggers a change in process status.
   */
  phantomActivity = (text, activityArgs = {}) => {
    let {
      parentSpan,
      id,
      tags
    } = activityArgs;
    const spanArgs = parentSpan ? {
      childOf: parentSpan,
      tags
    } : {
      tags
    };
    if (!id) {
      id = text;
    }
    const span = tracer.startSpan(text, spanArgs);
    return (0, _reporterPhantom.createPhantomReporter)({
      id,
      text,
      span,
      reporterActions
    });
  };

  /**
   * Create a progress bar for an activity
   */
  createProgress = (text, total = 0, start = 0, activityArgs = {}, pluginName) => {
    let {
      parentSpan,
      id,
      tags
    } = activityArgs;
    const spanArgs = parentSpan ? {
      childOf: parentSpan,
      tags
    } : {
      tags
    };
    if (!id) {
      id = text;
    }
    const span = tracer.startSpan(text, spanArgs);
    return (0, _reporterProgress.createProgressReporter)({
      id,
      text,
      total,
      start,
      span,
      reporter: this,
      reporterActions,
      pluginName
    });
  };

  // This method was called in older versions of gatsby, so we need to keep it to avoid
  // "reporter._setStage is not a function" error when gatsby@<2.16 is used with gatsby-cli@>=2.8
  _setStage = () => {};

  // This method is called by core when initializing worker process, so it can communicate with main process
  // and dispatch structured logs created by workers to parent process.
  _initReporterMessagingInWorker(sendMessage) {
    const intentifiedActionCreators = {};
    for (const actionCreatorName of Object.keys(reduxReporterActions)) {
      // swap each reporter action creator with function that send intent
      // to main process
      intentifiedActionCreators[actionCreatorName] = (...args) => {
        sendMessage({
          type: `LOG_INTENT`,
          payload: {
            name: actionCreatorName,
            args
          }
        });
      };
    }
    reporterActions = intentifiedActionCreators;
  }

  // This method is called by core when initializing worker pool, so main process can receive
  // messages from workers and dispatch structured logs created by workers to parent process.
  _initReporterMessagingInMain(onMessage) {
    onMessage(msg => {
      if (isLogIntentMessage(msg)) {
        reduxReporterActions[msg.payload.name].call(reduxReporterActions,
        // @ts-ignore Next line (`...msg.payload.args`) cause "A spread argument
        // must either have a tuple type or be passed to a rest parameter"
        ...msg.payload.args);
      }
    });
  }
  _renderPageTree(args) {
    reporterActions.renderPageTree(args);
  }
  _registerAdditionalDiagnosticOutputHandler(handler) {
    (0, _diagnostics.registerAdditionalDiagnosticOutputHandler)(handler);
  }
}
const reporter = new Reporter();
exports.reporter = reporter;