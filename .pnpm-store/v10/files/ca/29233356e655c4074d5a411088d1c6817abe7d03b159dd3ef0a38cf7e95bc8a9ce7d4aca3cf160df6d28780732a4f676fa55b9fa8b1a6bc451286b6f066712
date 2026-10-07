"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _getStaticDir = require("../utils/get-static-dir");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _express = _interopRequireDefault(require("express"));
var _inspector = _interopRequireDefault(require("inspector"));
var _tracer = require("../utils/tracer");
var _detectPortInUseAndPrompt = require("../utils/detect-port-in-use-and-prompt");
var _feedback = require("../utils/feedback");
var _webpackStatus = require("../utils/webpack-status");
var _xstate = require("xstate");
var _opentracing = require("opentracing");
var _develop = require("../state-machines/develop");
var _stateMachineLogging = require("../utils/state-machine-logging");
const tracer = (0, _opentracing.globalTracer)();

// const isInteractive = process.stdout.isTTY

// Watch the static directory and copy files to public as they're added or
// changed. Wait 10 seconds so copying doesn't interfere with the regular
// bootstrap.
setTimeout(() => {
  (0, _getStaticDir.syncStaticDir)();
}, 10000);

// Time for another story...
// When the parent process is killed by SIGKILL, Node doesm't kill spawned child processes
// Hence, we peiodically send a heart beat to the parent to check if it is still alive
// This will crash with Error [ERR_IPC_CHANNEL_CLOSED]: Channel closed
// and kill the orphaned child process as a result
if (process.send) {
  setInterval(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.send({
      type: `HEARTBEAT`
    });
  }, 1000);
}
process.on(`message`, msg => {
  if (msg.type === `COMMAND` && msg.action.type === `EXIT`) {
    process.exit(msg.action.payload);
  }
});
const openDebuggerPort = debugInfo => {
  if (_inspector.default.url() !== undefined) {
    return; // fixes #26708
  }

  if (debugInfo.break) {
    _inspector.default.open(debugInfo.port, undefined, true);
    // eslint-disable-next-line no-debugger
    debugger;
  } else {
    _inspector.default.open(debugInfo.port);
  }
};
module.exports = async program => {
  // provide global Gatsby object
  global.__GATSBY = process.env.GATSBY_NODE_GLOBALS ? JSON.parse(process.env.GATSBY_NODE_GLOBALS) : {};
  if ((0, _gatsbyCoreUtils.isTruthy)(process.env.VERBOSE)) {
    program.verbose = true;
  }
  _reporter.default.setVerbose(program.verbose);
  if (program.debugInfo) {
    openDebuggerPort(program.debugInfo);
  }

  // We want to prompt the feedback request when users quit develop
  // assuming they pass the heuristic check to know they are a user
  // we want to request feedback from, and we're not annoying them.
  process.on(`SIGINT`, async () => {
    if (await (0, _feedback.userGetsSevenDayFeedback)()) {
      (0, _feedback.showSevenDayFeedbackRequest)();
    } else if (await (0, _feedback.userPassesFeedbackRequestHeuristic)()) {
      (0, _feedback.showFeedbackRequest)();
    }
    process.exit(0);
  });
  await (0, _tracer.initTracer)(process.env.GATSBY_OPEN_TRACING_CONFIG_FILE || program.openTracingConfigFile);
  (0, _webpackStatus.markWebpackStatusAsPending)();
  _reporter.default.pendingActivity({
    id: `webpack-develop`
  });
  const port = typeof program.port === `string` ? parseInt(program.port, 10) : program.port;
  const hostname = program.host;
  try {
    program.port = await (0, _detectPortInUseAndPrompt.detectPortInUseAndPrompt)(port, hostname);
  } catch (e) {
    if (e.message === `USER_REJECTED`) {
      process.exit(0);
    }
    throw e;
  }
  const app = (0, _express.default)();
  const parentSpan = tracer.startSpan(`bootstrap`);
  app.use((req, res, next) => {
    try {
      decodeURIComponent(req.path);
    } catch (e) {
      return res.status(500).send(`URI malformatted`);
    }
    return next();
  });
  const machine = _develop.developMachine.withContext({
    program,
    parentSpan,
    app,
    reporter: _reporter.default,
    pendingQueryRuns: new Set([`/`]),
    shouldRunInitialTypegen: true
  });
  const service = (0, _xstate.interpret)(machine);
  if (program.verbose) {
    (0, _stateMachineLogging.logTransitions)(service);
  }
  service.start();
};
//# sourceMappingURL=develop-process.js.map