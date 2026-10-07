/**
 * @license React
 * scheduler-unstable_post_task.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

var perf = window.performance;
var setTimeout = window.setTimeout; // Use experimental Chrome Scheduler postTask API.

var scheduler = global.scheduler;
var getCurrentTime = perf.now.bind(perf);
var unstable_now = getCurrentTime; // Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.

var yieldInterval = 5;
var deadline = 0;
var currentPriorityLevel_DEPRECATED = NormalPriority; // `isInputPending` is not available. Since we have no way of knowing if
// there's pending input, always yield at the end of the frame.

function unstable_shouldYield() {
  return getCurrentTime() >= deadline;
}
function unstable_requestPaint() {// Since we yield every frame regardless, `requestPaint` has no effect.
}
function unstable_scheduleCallback(priorityLevel, callback, options) {
  var postTaskPriority;

  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
      postTaskPriority = 'user-blocking';
      break;

    case LowPriority:
    case NormalPriority:
      postTaskPriority = 'user-visible';
      break;

    case IdlePriority:
      postTaskPriority = 'background';
      break;

    default:
      postTaskPriority = 'user-visible';
      break;
  }

  var controller = new TaskController();
  var postTaskOptions = {
    priority: postTaskPriority,
    delay: typeof options === 'object' && options !== null ? options.delay : 0,
    signal: controller.signal
  };
  var node = {
    _controller: controller
  };
  scheduler.postTask(runTask.bind(null, priorityLevel, postTaskPriority, node, callback), postTaskOptions).catch(handleAbortError);
  return node;
}

function runTask(priorityLevel, postTaskPriority, node, callback) {
  deadline = getCurrentTime() + yieldInterval;

  try {
    currentPriorityLevel_DEPRECATED = priorityLevel;
    var _didTimeout_DEPRECATED = false;
    var result = callback(_didTimeout_DEPRECATED);

    if (typeof result === 'function') {
      // Assume this is a continuation
      var continuation = result;
      var continuationController = new TaskController();
      var continuationOptions = {
        priority: postTaskPriority,
        signal: continuationController.signal
      }; // Update the original callback node's controller, since even though we're
      // posting a new task, conceptually it's the same one.

      node._controller = continuationController;
      scheduler.postTask(runTask.bind(null, priorityLevel, postTaskPriority, node, continuation), continuationOptions).catch(handleAbortError);
    }
  } catch (error) {
    // We're inside a `postTask` promise. If we don't handle this error, then it
    // will trigger an "Unhandled promise rejection" error. We don't want that,
    // but we do want the default error reporting behavior that normal
    // (non-Promise) tasks get for unhandled errors.
    //
    // So we'll re-throw the error inside a regular browser task.
    setTimeout(function () {
      throw error;
    });
  } finally {
    currentPriorityLevel_DEPRECATED = NormalPriority;
  }
}

function handleAbortError(error) {// Abort errors are an implementation detail. We don't expose the
  // TaskController to the user, nor do we expose the promise that is returned
  // from `postTask`. So we should suppress them, since there's no way for the
  // user to handle them.
}

function unstable_cancelCallback(node) {
  var controller = node._controller;
  controller.abort();
}
function unstable_runWithPriority(priorityLevel, callback) {
  var previousPriorityLevel = currentPriorityLevel_DEPRECATED;
  currentPriorityLevel_DEPRECATED = priorityLevel;

  try {
    return callback();
  } finally {
    currentPriorityLevel_DEPRECATED = previousPriorityLevel;
  }
}
function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel_DEPRECATED;
}
function unstable_next(callback) {
  var priorityLevel;

  switch (currentPriorityLevel_DEPRECATED) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel_DEPRECATED;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel_DEPRECATED;
  currentPriorityLevel_DEPRECATED = priorityLevel;

  try {
    return callback();
  } finally {
    currentPriorityLevel_DEPRECATED = previousPriorityLevel;
  }
}
function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel_DEPRECATED;
  return function () {
    var previousPriorityLevel = currentPriorityLevel_DEPRECATED;
    currentPriorityLevel_DEPRECATED = parentPriorityLevel;

    try {
      return callback();
    } finally {
      currentPriorityLevel_DEPRECATED = previousPriorityLevel;
    }
  };
}
function unstable_forceFrameRate() {}
function unstable_pauseExecution() {}
function unstable_continueExecution() {}
function unstable_getFirstCallbackNode() {
  return null;
} // Currently no profiling build

var unstable_Profiling = null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_forceFrameRate = unstable_forceFrameRate;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_now = unstable_now;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_shouldYield = unstable_shouldYield;
exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}
