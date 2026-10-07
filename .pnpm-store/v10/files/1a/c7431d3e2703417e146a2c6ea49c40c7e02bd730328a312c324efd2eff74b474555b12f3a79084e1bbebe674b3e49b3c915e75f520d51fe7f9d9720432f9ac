"use strict";

exports.__esModule = true;
exports.createStructuredLoggingDiagnosticsMiddleware = createStructuredLoggingDiagnosticsMiddleware;
exports.registerAdditionalDiagnosticOutputHandler = registerAdditionalDiagnosticOutputHandler;
var _constants = require("../constants");
var _calcElapsedTime = require("../../util/calc-elapsed-time");
var _utils = require("./utils");
function calculateTimeoutDelay(envVarValue, defaultValue, min) {
  if (!envVarValue) {
    return 0;
  } else if (envVarValue === `1`) {
    // Toggling env vars with "1" is quite common - because we allow to set
    // specific timeout values with env var, this special case is added
    // (1ms timeout makes little sense - that's too low value to be used as-is)
    return defaultValue;
  }
  const parsedToNumber = parseInt(envVarValue, 10);
  if (isNaN(parsedToNumber)) {
    // It's truthy, but not a number - let's enable it with default value
    return defaultValue;
  }

  // Allow to custom specific timeout value, but also put some minimal
  // timeout bound as there is little usefulness of setting it to
  // something less than few seconds.
  return Math.max(parsedToNumber, min);
}
const FIVE_MINUTES = 1000 * 60 * 5;
const FIVE_SECONDS = 1000 * 5;
const TEN_MINUTES = 1000 * 60 * 10;
const TEN_SECONDS = 1000 * 10;
const additionalDiagnosticOutputHandlers = [];
function registerAdditionalDiagnosticOutputHandler(handler) {
  additionalDiagnosticOutputHandlers.push(handler);
}
function generateAdditionalOutput() {
  const extraMessages = [];
  for (const handler of additionalDiagnosticOutputHandlers) {
    const msg = handler();
    if (msg) {
      extraMessages.push(msg);
    }
  }
  return extraMessages.length > 0 ? `\n\nAdditional debugging logs:\n\n${extraMessages.join(`\n\n`)}` : ``;
}
function createStructuredLoggingDiagnosticsMiddleware(getStore) {
  const stuckStatusDiagnosticTimeoutDelay = calculateTimeoutDelay(process.env.GATSBY_DIAGNOSTIC_STUCK_STATUS_TIMEOUT, FIVE_MINUTES,
  // default timeout
  FIVE_SECONDS // minimal timeout (this is mostly useful for debugging diagnostic code itself)
  );

  const stuckStatusWatchdogTimeoutDelay = calculateTimeoutDelay(process.env.GATSBY_WATCHDOG_STUCK_STATUS_TIMEOUT, TEN_MINUTES,
  // default timeout
  TEN_SECONDS // minimal timeout (this is mostly useful for debugging diagnostic code itself)
  );

  if (!stuckStatusDiagnosticTimeoutDelay && !stuckStatusWatchdogTimeoutDelay) {
    // none of timers are enabled, so this is no-op middleware
    return () => {};
  }
  let displayedStuckStatusDiagnosticWarning = false;
  let displayingStuckStatusDiagnosticWarning = false;
  let stuckStatusDiagnosticTimer = null;
  let stuckStatusWatchdogTimer = null;
  let reporter;
  function inProgressActivities() {
    const {
      activities
    } = getStore().getState().logs;
    return Object.values(activities).filter(activity => (0, _utils.isActivityInProgress)(activity.status)).map(activity => {
      if (!activity.startTime) {
        return activity;
      }
      return {
        ...activity,
        diagnostics_elapsed_seconds: (0, _calcElapsedTime.calcElapsedTime)(activity.startTime)
      };
    });
  }
  function generateStuckStatusDiagnosticMessage() {
    const activities = inProgressActivities();
    return Object.values(activities).map(activity => `- Activity "${activity.text}" of type "${activity.type}" is currently in state "${activity.status}"`).join(`\n`);
  }
  return function diagnosticMiddleware(action) {
    // ignore diagnostic logs, otherwise diagnostic message itself will reset
    // the timers
    if (!displayingStuckStatusDiagnosticWarning) {
      const currentStatus = getStore().getState().logs.status;
      if (!reporter) {
        // yuck, we have situation of circular dependencies here
        // so this `reporter` import is delayed until it's actually needed
        reporter = require(`../reporter`).reporter;
      }
      if (stuckStatusDiagnosticTimeoutDelay) {
        if (stuckStatusDiagnosticTimer) {
          clearTimeout(stuckStatusDiagnosticTimer);
          stuckStatusDiagnosticTimer = null;
        }
        if (displayedStuckStatusDiagnosticWarning) {
          // using nextTick here to prevent infinite recursion (report.warn would
          // result in another call of this function and so on)
          process.nextTick(() => {
            const activitiesDiagnosticsMessage = generateStuckStatusDiagnosticMessage();
            reporter.warn(`This is just diagnostic information (enabled by GATSBY_DIAGNOSTIC_STUCK_STATUS_TIMEOUT):\n\nThere was activity since last diagnostic message. Log action:\n\n${JSON.stringify(action, null, 2)}\n\nCurrently Gatsby is in: "${getStore().getState().logs.status}" state.${activitiesDiagnosticsMessage.length > 0 ? `\n\nActivities preventing Gatsby from transitioning to idle state:\n\n${activitiesDiagnosticsMessage}` : ``}`);
          });
          displayedStuckStatusDiagnosticWarning = false;
        }
        if (currentStatus === _constants.ActivityStatuses.InProgress) {
          stuckStatusDiagnosticTimer = setTimeout(function logStuckStatusDiagnostic() {
            displayingStuckStatusDiagnosticWarning = true;
            reporter.warn(`This is just diagnostic information (enabled by GATSBY_DIAGNOSTIC_STUCK_STATUS_TIMEOUT):\n\nGatsby is in "${getStore().getState().logs.status}" state without any updates for ${(stuckStatusDiagnosticTimeoutDelay / 1000).toFixed(3)} seconds. Activities preventing Gatsby from transitioning to idle state:\n\n${generateStuckStatusDiagnosticMessage()}${stuckStatusWatchdogTimeoutDelay ? `\n\nProcess will be terminated in ${((stuckStatusWatchdogTimeoutDelay - stuckStatusDiagnosticTimeoutDelay) / 1000).toFixed(3)} seconds if nothing will change.` : ``}${generateAdditionalOutput()}`);
            displayingStuckStatusDiagnosticWarning = false;
            displayedStuckStatusDiagnosticWarning = true;
          }, stuckStatusDiagnosticTimeoutDelay);
        }
      }
      if (stuckStatusWatchdogTimeoutDelay) {
        if (stuckStatusWatchdogTimer) {
          clearTimeout(stuckStatusWatchdogTimer);
          stuckStatusWatchdogTimer = null;
        }
        if (currentStatus === _constants.ActivityStatuses.InProgress) {
          stuckStatusWatchdogTimer = setTimeout(function fatalStuckStatusHandler() {
            reporter.panic({
              id: `11701`,
              context: {
                activities: inProgressActivities(),
                status: getStore().getState().logs.status,
                stuckStatusDiagnosticMessage: generateStuckStatusDiagnosticMessage(),
                stuckStatusWatchdogTimeoutDelay,
                additionalOutput: generateAdditionalOutput()
              }
            });
          }, stuckStatusWatchdogTimeoutDelay);
        }
      }
    }
  };
}