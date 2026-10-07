"use strict";

exports.__esModule = true;
exports.lock = lock;
var _lock = require("lock");
const lockInstance = (0, _lock.Lock)();
function lock(resources) {
  return new Promise(resolve => lockInstance(resources, release => {
    const releaseLock = release(() => {});
    resolve(releaseLock);
  }));
}