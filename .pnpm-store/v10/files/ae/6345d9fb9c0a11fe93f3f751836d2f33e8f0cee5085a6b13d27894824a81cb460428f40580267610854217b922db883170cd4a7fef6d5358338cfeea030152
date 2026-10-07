"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.prematureEnd = exports.catchExitSignals = void 0;
var _signalExit = _interopRequireDefault(require("signal-exit"));
var _redux = require("./redux");
var _actions = require("./redux/actions");
var _constants = require("./constants");
var _reporter = require("./reporter");
/*
 * This module is used to catch if the user kills the gatsby process via cmd+c
 * When this happens, there is some clean up logic we need to fire offf
 */

const interruptActivities = () => {
  const {
    activities
  } = (0, _redux.getStore)().getState().logs;
  Object.keys(activities).forEach(activityId => {
    const activity = activities[activityId];
    if (activity.status === _constants.ActivityStatuses.InProgress || activity.status === _constants.ActivityStatuses.NotStarted) {
      _reporter.reporter.completeActivity(activityId, _constants.ActivityStatuses.Interrupted);
    }
  });
};
const prematureEnd = () => {
  // hack so at least one activity is surely failed, so
  // we are guaranteed to generate FAILED status
  // if none of activity did explicitly fail
  (0, _actions.createPendingActivity)({
    id: `panic`,
    status: _constants.ActivityStatuses.Failed
  });
  interruptActivities();
};
exports.prematureEnd = prematureEnd;
const catchExitSignals = () => {
  (0, _signalExit.default)((code, signal) => {
    if (code !== 0 && signal !== `SIGINT` && signal !== `SIGTERM`) prematureEnd();else interruptActivities();
  });
};
exports.catchExitSignals = catchExitSignals;