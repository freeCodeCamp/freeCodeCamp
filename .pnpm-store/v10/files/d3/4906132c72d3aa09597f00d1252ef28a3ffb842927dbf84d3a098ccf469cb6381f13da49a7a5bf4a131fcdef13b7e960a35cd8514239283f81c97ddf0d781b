import { isNodeProcess } from "is-node-process";
import { hasRefCounted } from './utils/internal/hasRefCounted.mjs';
const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
const MIN_SERVER_RESPONSE_TIME = 100;
const MAX_SERVER_RESPONSE_TIME = 400;
const NODE_SERVER_RESPONSE_TIME = 5;
function getRealisticResponseTime() {
  if (isNodeProcess()) {
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
    if (delayTime === SET_TIMEOUT_MAX_ALLOWED_INT && isNodeProcess() && hasRefCounted(timeoutId)) {
      timeoutId.unref();
    }
  });
}
export {
  MAX_SERVER_RESPONSE_TIME,
  MIN_SERVER_RESPONSE_TIME,
  NODE_SERVER_RESPONSE_TIME,
  SET_TIMEOUT_MAX_ALLOWED_INT,
  delay
};
//# sourceMappingURL=delay.mjs.map