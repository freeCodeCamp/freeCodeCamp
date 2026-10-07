"use strict";

exports.__esModule = true;
exports.isRunning = exports.isPromise = void 0;
const isPromise = obj => !!obj && (typeof obj === `object` || typeof obj === `function`) && typeof obj.then === `function`;
exports.isPromise = isPromise;
const isRunning = pid => {
  try {
    // "As a special case, a signal of 0 can be used to test for the existence of a process."
    // See https://nodejs.org/api/process.html#process_process_kill_pid_signal
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return false;
  }
};
exports.isRunning = isRunning;