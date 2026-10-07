"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getGlobalStatus = exports.getElapsedTimeMS = exports.getActivity = exports.delayedCall = void 0;
exports.isActivityInProgress = isActivityInProgress;
exports.isInternalAction = void 0;
var _index = require("./index");
var _convertHrtime = _interopRequireDefault(require("convert-hrtime"));
var _constants = require("../constants");
var _signalExit = _interopRequireDefault(require("signal-exit"));
function isActivityInProgress(activityStatus) {
  return activityStatus === _constants.ActivityStatuses.InProgress || activityStatus === _constants.ActivityStatuses.NotStarted;
}
const getGlobalStatus = (id, status) => {
  const {
    logs
  } = (0, _index.getStore)().getState();
  const currentActivities = [id, ...Object.keys(logs.activities)];
  return currentActivities.reduce((generatedStatus, activityId) => {
    const activityStatus = activityId === id ? status : logs.activities[activityId].status;
    if (isActivityInProgress(activityStatus)) {
      return _constants.ActivityStatuses.InProgress;
    } else if (activityStatus === _constants.ActivityStatuses.Failed && generatedStatus !== _constants.ActivityStatuses.InProgress) {
      return _constants.ActivityStatuses.Failed;
    } else if (activityStatus === _constants.ActivityStatuses.Interrupted && generatedStatus !== _constants.ActivityStatuses.InProgress) {
      return _constants.ActivityStatuses.Interrupted;
    }
    return generatedStatus;
  }, _constants.ActivityStatuses.Success);
};
exports.getGlobalStatus = getGlobalStatus;
const getActivity = id => (0, _index.getStore)().getState().logs.activities[id];

/**
 * @returns {Number} Milliseconds from activity start
 */
exports.getActivity = getActivity;
const getElapsedTimeMS = activity => {
  const elapsed = process.hrtime(activity.startTime);
  return (0, _convertHrtime.default)(elapsed).milliseconds;
};
exports.getElapsedTimeMS = getElapsedTimeMS;
const isInternalAction = action => {
  switch (action.type) {
    case _constants.Actions.PendingActivity:
    case _constants.Actions.CancelActivity:
    case _constants.Actions.ActivityErrored:
      return true;
    case _constants.Actions.StartActivity:
    case _constants.Actions.EndActivity:
      return action.payload.type === _constants.ActivityTypes.Hidden;
    default:
      return false;
  }
};

/**
 * Like setTimeout, but also handle signalExit
 */
exports.isInternalAction = isInternalAction;
const delayedCall = (fn, timeout) => {
  const fnWrap = () => {
    fn();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    clear();
  };
  const timeoutID = setTimeout(fnWrap, timeout);
  const cancelSignalExit = (0, _signalExit.default)(fnWrap);
  const clear = () => {
    clearTimeout(timeoutID);
    cancelSignalExit();
  };
  return clear;
};
exports.delayedCall = delayedCall;