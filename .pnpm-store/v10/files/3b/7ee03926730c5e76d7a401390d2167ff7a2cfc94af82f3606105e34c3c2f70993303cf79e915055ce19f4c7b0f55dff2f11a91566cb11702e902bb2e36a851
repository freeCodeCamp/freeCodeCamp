"use strict";

exports.__esModule = true;
exports.presetEnvSilentDebugHeader = void 0;
exports.stringifyTargets = stringifyTargets;
exports.stringifyTargetsMultiline = stringifyTargetsMultiline;
var _helperCompilationTargets = require("@babel/helper-compilation-targets");
const presetEnvSilentDebugHeader = "#__secret_key__@babel/preset-env__don't_log_debug_header_and_resolved_targets";
exports.presetEnvSilentDebugHeader = presetEnvSilentDebugHeader;
function stringifyTargetsMultiline(targets) {
  return JSON.stringify((0, _helperCompilationTargets.prettifyTargets)(targets), null, 2);
}
function stringifyTargets(targets) {
  return JSON.stringify(targets).replace(/,/g, ", ").replace(/^\{"/, '{ "').replace(/"\}$/, '" }');
}