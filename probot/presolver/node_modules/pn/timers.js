var timers = require("timers");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  //_unrefActive: // skipping
  active: { enumerable: true, value: bind(timers, timers.active) },
  clearImmediate: { enumerable: true, value: bind(timers, timers.clearImmediate) },
  clearInterval: { enumerable: true, value: bind(timers, timers.clearInterval) },
  clearTimeout: { enumerable: true, value: bind(timers, timers.clearTimeout) },
  enroll: { enumerable: true, value: bind(timers, timers.enroll) },
  setImmediate: { enumerable: true, value: promisify(timers, timers.setImmediate, 0, {"noError":true,"callbackIsFirstArg":true}) },
  setInterval: { enumerable: true, value: bind(timers, timers.setInterval) },
  setTimeout: { enumerable: true, value: promisify(timers, timers.setTimeout, 0, {"noError":true,"callbackIsFirstArg":true}) },
  unenroll: { enumerable: true, value: bind(timers, timers.unenroll) },
});