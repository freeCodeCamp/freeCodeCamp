"use strict";

const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");
const { fireAnEvent } = require("../helpers/events");
const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const AbortSignal = require("../generated/AbortSignal");

class AbortSignalImpl extends EventTargetImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    // make event firing possible
    this._ownerDocument = globalObject.document;

    this.aborted = false;
    this.abortAlgorithms = new Set();
  }

  static abort(globalObject) {
    const abortSignal = AbortSignal.createImpl(globalObject, []);
    abortSignal.aborted = true;
    return abortSignal;
  }

  _signalAbort() {
    if (this.aborted) {
      return;
    }
    this.aborted = true;

    for (const algorithm of this.abortAlgorithms) {
      algorithm();
    }
    this.abortAlgorithms.clear();

    fireAnEvent("abort", this);
  }

  _addAlgorithm(algorithm) {
    if (this.aborted) {
      return;
    }
    this.abortAlgorithms.add(algorithm);
  }

  _removeAlgorithm(algorithm) {
    this.abortAlgorithms.delete(algorithm);
  }
}

setupForSimpleEventAccessors(AbortSignalImpl.prototype, ["abort"]);

module.exports = {
  implementation: AbortSignalImpl
};
