"use strict";

exports.__esModule = true;
exports.default = void 0;
var _startLogger = require("./start-logger");
var _patchConsole = require("./patch-console");
var _catchExitSignals = require("./catch-exit-signals");
var _reporter = require("./reporter");
(0, _catchExitSignals.catchExitSignals)();
(0, _startLogger.startLogger)();
(0, _patchConsole.patchConsole)(_reporter.reporter);
var _default = _reporter.reporter;
exports.default = _default;
module.exports = _reporter.reporter;