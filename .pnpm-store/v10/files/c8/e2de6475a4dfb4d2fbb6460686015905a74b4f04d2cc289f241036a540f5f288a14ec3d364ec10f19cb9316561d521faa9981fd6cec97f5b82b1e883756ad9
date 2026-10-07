"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initializeJSONLogger = initializeJSONLogger;
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _index = require("../../redux/index");
var _stripAnsi = _interopRequireDefault(require("strip-ansi"));
const isStringPayload = action => typeof action.payload === `string`;
const sanitizeAction = action => {
  const copiedAction = (0, _cloneDeep2.default)(action);
  if (isStringPayload(copiedAction)) {
    return copiedAction;
  }
  if (`text` in copiedAction.payload && copiedAction.payload.text) {
    copiedAction.payload.text = (0, _stripAnsi.default)(copiedAction.payload.text);
  }
  if (`statusText` in copiedAction.payload && copiedAction.payload.statusText) {
    copiedAction.payload.statusText = (0, _stripAnsi.default)(copiedAction.payload.statusText);
  }
  return copiedAction;
};
function initializeJSONLogger() {
  (0, _index.onLogAction)(action => {
    const sanitizedAction = sanitizeAction(action);
    process.stdout.write(JSON.stringify(sanitizedAction) + `\n`);
  });
}