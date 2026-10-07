"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.patchConsole = patchConsole;
var _util = _interopRequireDefault(require("util"));
/*
 * This module is used to patch console through our reporter so we can track
 * these logs
 */

function patchConsole(reporter) {
  console.log = (...args) => {
    const [format, ...rest] = args;
    reporter.log(_util.default.format(format === undefined ? `` : format, ...rest));
  };
  console.warn = (...args) => {
    const [format, ...rest] = args;
    reporter.warn(_util.default.format(format === undefined ? `` : format, ...rest));
  };
  console.info = (...args) => {
    const [format, ...rest] = args;
    reporter.info(_util.default.format(format === undefined ? `` : format, ...rest));
  };
  console.error = (format, ...args) => {
    reporter.error(_util.default.format(format === undefined ? `` : format, ...args));
  };
}