"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initReporterMessagingInMainProcess = initReporterMessagingInMainProcess;
exports.initReporterMessagingInWorker = initReporterMessagingInWorker;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _messaging = require("./messaging");
function initReporterMessagingInMainProcess(workerPool) {
  if (typeof _reporter.default._initReporterMessagingInMain === `function`) {
    _reporter.default._initReporterMessagingInMain(workerPool.onMessage.bind(workerPool));
  }
}
const gatsbyWorkerMessenger = (0, _messaging.getMessenger)();
function initReporterMessagingInWorker() {
  if (_messaging.isWorker && gatsbyWorkerMessenger && typeof _reporter.default._initReporterMessagingInWorker === `function`) {
    _reporter.default._initReporterMessagingInWorker(gatsbyWorkerMessenger.sendMessage.bind(gatsbyWorkerMessenger));
    process.on(`unhandledRejection`, reason => {
      _reporter.default.panic(reason || `Unhandled rejection`);
    });
    process.on(`uncaughtException`, function (err) {
      _reporter.default.panic(err);
    });
  }
}
//# sourceMappingURL=reporter.js.map