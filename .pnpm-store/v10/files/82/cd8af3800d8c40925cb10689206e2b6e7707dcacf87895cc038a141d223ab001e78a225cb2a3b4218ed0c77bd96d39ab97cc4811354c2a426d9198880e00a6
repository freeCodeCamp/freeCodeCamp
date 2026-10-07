"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.detectPortInUseAndPrompt = void 0;
var _detectPort = _interopRequireDefault(require("detect-port"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _prompts = _interopRequireDefault(require("prompts"));
const detectPortInUseAndPrompt = async (port, hostname) => {
  const detectedPort = await (0, _detectPort.default)({
    port,
    hostname
  }).catch(err => _reporter.default.panic(err));
  if (port !== detectedPort) {
    _reporter.default.log(`\nSomething is already running at port ${port}`);
    const response = await (0, _prompts.default)({
      type: `confirm`,
      name: `newPort`,
      message: `Would you like to run the app at another port instead?`,
      initial: true
    });
    if (response.newPort) {
      port = detectedPort;
    } else {
      throw new Error(`USER_REJECTED`);
    }
  }
  return port;
};
exports.detectPortInUseAndPrompt = detectPortInUseAndPrompt;
//# sourceMappingURL=detect-port-in-use-and-prompt.js.map