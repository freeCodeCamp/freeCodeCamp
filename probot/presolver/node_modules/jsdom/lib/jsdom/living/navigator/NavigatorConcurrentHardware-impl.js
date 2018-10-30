"use strict";
const os = require("os");

exports.implementation = class NavigatorConcurrentHardwareImpl {
  get hardwareConcurrency() {
    return os.cpus().length;
  }
};
