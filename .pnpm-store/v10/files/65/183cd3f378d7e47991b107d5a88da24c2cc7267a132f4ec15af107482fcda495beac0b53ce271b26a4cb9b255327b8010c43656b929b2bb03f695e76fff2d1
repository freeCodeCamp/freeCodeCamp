"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initializeIPCLogger = void 0;
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _index = require("../../redux/index");
var _constants = require("../../constants");
var _stripAnsi = _interopRequireDefault(require("strip-ansi"));
const isStringPayload = action => typeof action.payload === `string`;

/**
 * Payload can either be a String or an Object
 * See more at integration-tests/structured-logging/__tests__/to-do.js
 */
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
const initializeIPCLogger = () => {
  (0, _index.onLogAction)(action => {
    if (!process.send) return;
    const sanitizedAction = sanitizeAction(action);

    // we mutate sanitizedAction but this is already deep copy of action so we should be good
    if (sanitizedAction.type === _constants.Actions.Log) {
      // Don't emit Debug over IPC
      if ([_constants.LogLevels.Debug].includes(sanitizedAction.payload.level)) {
        return;
      }
      // Override Success and Log types to Info over IPC
      if ([_constants.LogLevels.Success, _constants.LogLevels.Log].includes(sanitizedAction.payload.level)) {
        sanitizedAction.payload.level = _constants.LogLevels.Info;
      }
    }
    process.send({
      type: _constants.Actions.LogAction,
      action: sanitizedAction
    });
  });
};
exports.initializeIPCLogger = initializeIPCLogger;