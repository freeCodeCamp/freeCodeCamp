"use strict";

const AbortSignal = require("../generated/AbortSignal");

class AbortControllerImpl {
  constructor(globalObject) {
    this.signal = AbortSignal.createImpl(globalObject, []);
  }

  abort() {
    this.signal._signalAbort();
  }
}

module.exports = {
  implementation: AbortControllerImpl
};
