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
var delay_exports = {};
__export(delay_exports, {
  MAX_SERVER_RESPONSE_TIME: () => MAX_SERVER_RESPONSE_TIME,
  MIN_SERVER_RESPONSE_TIME: () => MIN_SERVER_RESPONSE_TIME,
  NODE_SERVER_RESPONSE_TIME: () => NODE_SERVER_RESPONSE_TIME,
  SET_TIMEOUT_MAX_ALLOWED_INT: () => SET_TIMEOUT_MAX_ALLOWED_INT,
  delay: () => delay
});
module.exports = __toCommonJS(delay_exports);
var import_is_node_process = require("is-node-process");
var import_hasRefCounted = require("./utils/internal/hasRefCounted");
const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
const MIN_SERVER_RESPONSE_TIME = 100;
const MAX_SERVER_RESPONSE_TIME = 400;
const NODE_SERVER_RESPONSE_TIME = 5;
function getRealisticResponseTime() {
  if ((0, import_is_node_process.isNodeProcess)()) {
    return NODE_SERVER_RESPONSE_TIME;
  }
  return Math.floor(
    Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) + MIN_SERVER_RESPONSE_TIME
  );
}
async function delay(durationOrMode) {
  let delayTime;
  if (typeof durationOrMode === "string") {
    switch (durationOrMode) {
      case "infinite": {
        delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
        break;
      }
      case "real": {
        delayTime = getRealisticResponseTime();
        break;
      }
      default: {
        throw new Error(
          `Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`
        );
      }
    }
  } else if (typeof durationOrMode === "undefined") {
    delayTime = getRealisticResponseTime();
  } else {
    if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
      throw new Error(
        `Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
      );
    }
    delayTime = durationOrMode;
  }
  return new Promise((resolve) => {
    const timeoutId = setTimeout(resolve, delayTime);
    if (delayTime === SET_TIMEOUT_MAX_ALLOWED_INT && (0, import_is_node_process.isNodeProcess)() && (0, import_hasRefCounted.hasRefCounted)(timeoutId)) {
      timeoutId.unref();
    }
  });
}
//# sourceMappingURL=delay.js.map