"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedule = schedule;
exports.delay = delay;

const getGlob = () => {
  if (typeof window !== 'undefined' && window.setImmediate && window.setTimeout && window.setTimeout.apply) {
    return window;
  }

  return global;
};

const setImmediate = (glob => glob.setImmediate || ((fn, ...args) => glob.setTimeout(fn, 0, ...args)))(getGlob());

function schedule(fn, args = []) {
  return new Promise(resolve => {
    setImmediate(() => {
      const result = fn(...args);
      resolve(result);
    });
  });
}

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}