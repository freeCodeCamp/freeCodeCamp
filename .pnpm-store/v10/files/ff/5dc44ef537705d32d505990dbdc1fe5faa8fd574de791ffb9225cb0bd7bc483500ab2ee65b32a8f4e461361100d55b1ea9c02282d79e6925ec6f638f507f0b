"use strict";

exports.__esModule = true;
exports.WorkerError = exports.MESSAGE_TYPES = void 0;
let MESSAGE_TYPES;
exports.MESSAGE_TYPES = MESSAGE_TYPES;
(function (MESSAGE_TYPES) {
  MESSAGE_TYPES["JOB_CREATED"] = "JOB_CREATED";
  MESSAGE_TYPES["JOB_COMPLETED"] = "JOB_COMPLETED";
  MESSAGE_TYPES["JOB_FAILED"] = "JOB_FAILED";
  MESSAGE_TYPES["JOB_NOT_WHITELISTED"] = "JOB_NOT_WHITELISTED";
})(MESSAGE_TYPES || (exports.MESSAGE_TYPES = MESSAGE_TYPES = {}));
class WorkerError extends Error {
  constructor(error) {
    if (typeof error === `string`) {
      super(error);
    } else {
      var _error$message;
      // use error.message or else stringiyf the object so we don't get [Object object]
      super((_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : JSON.stringify(error));
    }
    this.name = `WorkerError`;
    if (typeof error === `string`) {
      Error.captureStackTrace(this, WorkerError);
    } else {
      // inherit stack from original error so actual stack trace persist
      this.stack = error.stack;
    }
  }
}
exports.WorkerError = WorkerError;
//# sourceMappingURL=types.js.map