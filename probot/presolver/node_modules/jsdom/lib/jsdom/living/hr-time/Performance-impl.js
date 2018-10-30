"use strict";

const EventTargetImpl = require("../events/EventTarget-impl").implementation;

class PerformanceImpl extends EventTargetImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._rawPerformance = privateData.rawPerformance;
  }

  now() {
    return this._rawPerformance.now();
  }

  get timeOrigin() {
    return this._rawPerformance.timeOrigin;
  }

  toJSON() {
    return this._rawPerformance.toJSON();
  }
}

exports.implementation = PerformanceImpl;
