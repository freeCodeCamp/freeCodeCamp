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
var on_unhandled_frame_exports = {};
__export(on_unhandled_frame_exports, {
  executeUnhandledFrameHandle: () => executeUnhandledFrameHandle
});
module.exports = __toCommonJS(on_unhandled_frame_exports);
var import_outvariant = require("outvariant");
var import_isCommonAssetRequest = require("../isCommonAssetRequest");
var import_devUtils = require("../utils/internal/devUtils");
var import_http_frame = require("./frames/http-frame");
var import_network_frame = require("./frames/network-frame");
async function executeUnhandledFrameHandle(frame, handle) {
  const printStrategyMessage = async (strategy) => {
    if (strategy === "bypass") {
      return;
    }
    const message = await frame.getUnhandledMessage();
    switch (strategy) {
      case "warn": {
        return import_devUtils.devUtils.warn("Warning: %s", message);
      }
      case "error": {
        return import_devUtils.devUtils.error("Error: %s", message);
      }
    }
  };
  const applyStrategy = async (strategy) => {
    import_outvariant.invariant.as(
      import_devUtils.InternalError,
      strategy === "bypass" || strategy === "warn" || strategy === "error",
      /**
       * @fixme Rename "onUnhandledRequest" to "onUnhandledFrame" in the error message
       * with the next major release.
       */
      import_devUtils.devUtils.formatMessage(
        'Failed to react to an unhandled network frame: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
        strategy
      )
    );
    if (strategy === "bypass") {
      return;
    }
    await printStrategyMessage(strategy);
    if (strategy === "error") {
      return Promise.reject(
        new import_devUtils.InternalError(
          import_devUtils.devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        )
      );
    }
  };
  if (typeof handle === "function") {
    return handle({
      frame,
      defaults: {
        warn: printStrategyMessage.bind(null, "warn"),
        /**
         * @note The defaults only print the corresponding messages now.
         * They do not affect the frame resolution (e.g. do not error the frame).
         * That is only for backward compatibility reasons. In the future, these should
         * be an alias to `applyStrategy.bind(null, 'error')` instead.
         */
        error: printStrategyMessage.bind(null, "error")
      }
    });
  }
  if (frame instanceof import_http_frame.HttpNetworkFrame && (0, import_isCommonAssetRequest.isCommonAssetRequest)(frame.data.request)) {
    return;
  }
  return applyStrategy(handle);
}
//# sourceMappingURL=on-unhandled-frame.js.map