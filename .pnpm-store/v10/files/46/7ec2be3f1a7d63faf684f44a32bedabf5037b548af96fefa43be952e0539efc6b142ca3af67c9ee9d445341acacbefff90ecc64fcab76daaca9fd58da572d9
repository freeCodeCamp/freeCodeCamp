"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.updateActivity = exports.startActivity = exports.setStatus = exports.setLogs = exports.setActivityTotal = exports.setActivityStatusText = exports.setActivityErrored = exports.renderPageTree = exports.endActivity = exports.createPendingActivity = exports.createLog = exports.activityTick = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _signalExit = _interopRequireDefault(require("signal-exit"));
var _ = require("./");
var _constants = require("../constants");
var _utils = require("./utils");
const ActivityStatusToLogLevel = {
  [_constants.ActivityStatuses.Interrupted]: _constants.ActivityLogLevels.Interrupted,
  [_constants.ActivityStatuses.Failed]: _constants.ActivityLogLevels.Failed,
  [_constants.ActivityStatuses.Success]: _constants.ActivityLogLevels.Success
};
let weShouldExit = false;
(0, _signalExit.default)(() => {
  weShouldExit = true;
});
let cancelDelayedSetStatus;
let pendingStatus = ``;

// We debounce "done" statuses because activities don't always overlap
// and there is timing window after one activity ends and before next one starts
// where technically we are "done" (all activities are done).
// We don't want to emit multiple SET_STATUS events that would toggle between
// IN_PROGRESS and SUCCESS/FAILED in short succession in those cases.
const setStatus = (status, force = false) => dispatch => {
  const currentStatus = (0, _.getStore)().getState().logs.status;
  if (cancelDelayedSetStatus) {
    cancelDelayedSetStatus();
    cancelDelayedSetStatus = null;
  }
  if (status !== currentStatus && (status === _constants.ActivityStatuses.InProgress || force || weShouldExit)) {
    dispatch({
      type: _constants.Actions.SetStatus,
      payload: status
    });
    pendingStatus = ``;
  } else {
    // use pending status if truthy, fallback to current status if we don't have pending status
    const pendingOrCurrentStatus = pendingStatus || currentStatus;
    if (status !== pendingOrCurrentStatus) {
      pendingStatus = status;
      cancelDelayedSetStatus = (0, _utils.delayedCall)(() => {
        setStatus(status, true)(dispatch);
      }, 1000);
    }
  }
};
exports.setStatus = setStatus;
const createLog = ({
  level,
  text,
  statusText,
  duration,
  group,
  code,
  type,
  category,
  filePath,
  location,
  docsUrl,
  context,
  activity_current,
  activity_total,
  activity_type,
  activity_uuid,
  stack,
  pluginName
}) => {
  return {
    type: _constants.Actions.Log,
    payload: {
      level,
      text: !text ? `\u2800` : text,
      statusText,
      duration,
      group,
      code,
      type,
      category,
      filePath,
      location,
      docsUrl,
      context,
      activity_current,
      activity_total,
      activity_type,
      activity_uuid,
      timestamp: new Date().toJSON(),
      stack,
      pluginName
    }
  };
};
exports.createLog = createLog;
const createPendingActivity = ({
  id,
  status = _constants.ActivityStatuses.NotStarted
}) => {
  const globalStatus = (0, _utils.getGlobalStatus)(id, status);
  return [setStatus(globalStatus), {
    type: _constants.Actions.PendingActivity,
    payload: {
      id,
      type: _constants.ActivityTypes.Pending,
      startTime: process.hrtime(),
      status
    }
  }];
};
exports.createPendingActivity = createPendingActivity;
const startActivity = ({
  id,
  text,
  type,
  status = _constants.ActivityStatuses.InProgress,
  current,
  total
}) => {
  const globalStatus = (0, _utils.getGlobalStatus)(id, status);
  return [setStatus(globalStatus), {
    type: _constants.Actions.StartActivity,
    payload: {
      id,
      uuid: _gatsbyCoreUtils.uuid.v4(),
      text,
      type,
      status,
      startTime: process.hrtime(),
      statusText: ``,
      current,
      total
    }
  }];
};
exports.startActivity = startActivity;
const endActivity = ({
  id,
  status
}) => {
  const activity = (0, _utils.getActivity)(id);
  if (!activity) {
    return null;
  }
  const actionsToEmit = [];
  const durationMS = (0, _utils.getElapsedTimeMS)(activity);
  const durationS = durationMS / 1000;
  if (activity.type === _constants.ActivityTypes.Pending) {
    actionsToEmit.push({
      type: _constants.Actions.CancelActivity,
      payload: {
        id,
        status: _constants.ActivityStatuses.Cancelled,
        type: activity.type,
        duration: durationS
      }
    });
  } else if (activity.status === _constants.ActivityStatuses.InProgress) {
    if (activity.errored) {
      status = _constants.ActivityStatuses.Failed;
    }
    actionsToEmit.push({
      type: _constants.Actions.EndActivity,
      payload: {
        uuid: activity.uuid,
        id,
        status,
        duration: durationS,
        type: activity.type
      }
    });
    if (activity.type !== _constants.ActivityTypes.Hidden) {
      actionsToEmit.push(createLog({
        text: activity.text,
        level: ActivityStatusToLogLevel[status],
        duration: durationS,
        statusText: activity.statusText || (status === _constants.ActivityStatuses.Success && activity.type === _constants.ActivityTypes.Progress ? `${activity.current}/${activity.total} ${((activity.total || 0) / durationS).toFixed(2)}/s` : undefined),
        activity_uuid: activity.uuid,
        activity_current: activity.current,
        activity_total: activity.total,
        activity_type: activity.type
      }));
    }
  }
  const globalStatus = (0, _utils.getGlobalStatus)(id, status);
  actionsToEmit.push(setStatus(globalStatus));
  return actionsToEmit;
};
exports.endActivity = endActivity;
const updateActivity = ({
  id = ``,
  ...rest
}) => {
  const activity = (0, _utils.getActivity)(id);
  if (!activity) {
    return null;
  }
  return {
    type: _constants.Actions.UpdateActivity,
    payload: {
      uuid: activity.uuid,
      id,
      ...rest
    }
  };
};
exports.updateActivity = updateActivity;
const setActivityErrored = ({
  id
}) => {
  const activity = (0, _utils.getActivity)(id);
  if (!activity) {
    return null;
  }
  return {
    type: _constants.Actions.ActivityErrored,
    payload: {
      id
    }
  };
};
exports.setActivityErrored = setActivityErrored;
const setActivityStatusText = ({
  id,
  statusText
}) => updateActivity({
  id,
  statusText
});
exports.setActivityStatusText = setActivityStatusText;
const setActivityTotal = ({
  id,
  total
}) => updateActivity({
  id,
  total
});
exports.setActivityTotal = setActivityTotal;
const activityTick = ({
  id,
  increment = 1
}) => {
  const activity = (0, _utils.getActivity)(id);
  if (!activity) {
    return null;
  }
  return updateActivity({
    id,
    current: (activity.current || 0) + increment
  });
};
exports.activityTick = activityTick;
const setLogs = logs => {
  return {
    type: _constants.Actions.SetLogs,
    payload: logs
  };
};
exports.setLogs = setLogs;
const renderPageTree = payload => {
  return {
    type: _constants.Actions.RenderPageTree,
    payload
  };
};
exports.renderPageTree = renderPageTree;