"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElementToBeRemoved = waitForElementToBeRemoved;
var _waitFor = require("./wait-for");
const isRemoved = result => !result || Array.isArray(result) && !result.length;

// Check if the element is not present.
// As the name implies, waitForElementToBeRemoved should check `present` --> `removed`
function initialCheck(elements) {
  if (isRemoved(elements)) {
    throw new Error('The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.');
  }
}
async function waitForElementToBeRemoved(callback, options) {
  // created here so we get a nice stacktrace
  const timeoutError = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof callback !== 'function') {
    initialCheck(callback);
    const elements = Array.isArray(callback) ? callback : [callback];
    const getRemainingElements = elements.map(element => {
      let parent = element.parentElement;
      if (parent === null) return () => null;
      while (parent.parentElement) parent = parent.parentElement;
      return () => parent.contains(element) ? element : null;
    });
    callback = () => getRemainingElements.map(c => c()).filter(Boolean);
  }
  initialCheck(callback());
  return (0, _waitFor.waitFor)(() => {
    let result;
    try {
      result = callback();
    } catch (error) {
      if (error.name === 'TestingLibraryElementError') {
        return undefined;
      }
      throw error;
    }
    if (!isRemoved(result)) {
      throw timeoutError;
    }
    return undefined;
  }, options);
}

/*
eslint
  require-await: "off"
*/