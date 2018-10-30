"use strict";
const legacyErrorCodes = require("./legacy-error-codes.json");
const idlUtils = require("./utils.js");

exports.implementation = class DOMExceptionImpl {
  constructor([message, name]) {
    this.name = name;
    this.message = message;
  }

  get code() {
    return legacyErrorCodes[this.name] || 0;
  }
};

// A proprietary V8 extension that causes the stack property to appear.
exports.init = impl => {
  if (Error.captureStackTrace) {
    const wrapper = idlUtils.wrapperForImpl(impl);
    Error.captureStackTrace(wrapper, wrapper.constructor);
  }
};
