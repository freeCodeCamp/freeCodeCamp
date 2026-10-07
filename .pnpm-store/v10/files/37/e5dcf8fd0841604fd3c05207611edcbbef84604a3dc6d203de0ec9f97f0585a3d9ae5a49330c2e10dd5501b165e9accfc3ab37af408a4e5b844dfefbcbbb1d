"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var globals_exports = {};
__export(globals_exports, {
  currentTestInfo: () => currentTestInfo,
  currentlyLoadingFileSuite: () => currentlyLoadingFileSuite,
  isWorkerProcess: () => isWorkerProcess,
  setCurrentTestInfo: () => setCurrentTestInfo,
  setCurrentlyLoadingFileSuite: () => setCurrentlyLoadingFileSuite,
  setIsWorkerProcess: () => setIsWorkerProcess
});
module.exports = __toCommonJS(globals_exports);
let currentTestInfoValue = null;
function setCurrentTestInfo(testInfo) {
  currentTestInfoValue = testInfo;
}
function currentTestInfo() {
  return currentTestInfoValue;
}
let currentFileSuite;
function setCurrentlyLoadingFileSuite(suite) {
  currentFileSuite = suite;
}
function currentlyLoadingFileSuite() {
  return currentFileSuite;
}
let _isWorkerProcess = false;
function setIsWorkerProcess() {
  _isWorkerProcess = true;
}
function isWorkerProcess() {
  return _isWorkerProcess;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  currentTestInfo,
  currentlyLoadingFileSuite,
  isWorkerProcess,
  setCurrentTestInfo,
  setCurrentlyLoadingFileSuite,
  setIsWorkerProcess
});
