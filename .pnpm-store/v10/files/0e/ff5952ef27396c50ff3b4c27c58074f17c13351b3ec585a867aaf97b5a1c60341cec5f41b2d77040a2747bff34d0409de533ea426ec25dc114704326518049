"use strict";

const EventTargetImpl = require("../events/EventTarget-impl").implementation;

class PerformanceImpl extends EventTargetImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this.timeOrigin = privateData.timeOrigin;
    this._nowAtTimeOrigin = privateData.nowAtTimeOrigin;
  }

  now() {
    return performance.now() - this._nowAtTimeOrigin;
  }

  toJSON() {
    return { timeOrigin: this.timeOrigin };
  }
}

exports.implementation = PerformanceImpl;
