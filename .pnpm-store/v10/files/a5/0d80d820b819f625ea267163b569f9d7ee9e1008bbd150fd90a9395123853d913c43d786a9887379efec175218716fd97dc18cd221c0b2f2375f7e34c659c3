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
var compat_exports = {};
__export(compat_exports, {
  fromLegacyOnUnhandledRequest: () => fromLegacyOnUnhandledRequest
});
module.exports = __toCommonJS(compat_exports);
var import_outvariant = require("outvariant");
var import_onUnhandledRequest = require("../utils/request/onUnhandledRequest");
var import_on_unhandled_frame = require("./on-unhandled-frame");
var import_http_frame = require("./frames/http-frame");
var import_websocket_frame = require("./frames/websocket-frame");
function fromLegacyOnUnhandledRequest(getLegacyValue) {
  return ({ frame, defaults }) => {
    const legacyOnUnhandledRequestStrategy = getLegacyValue();
    if (legacyOnUnhandledRequestStrategy == null) {
      return;
    }
    if (typeof legacyOnUnhandledRequestStrategy === "function") {
      const request = frame instanceof import_http_frame.HttpNetworkFrame ? frame.data.request : frame instanceof import_websocket_frame.WebSocketNetworkFrame ? new Request(frame.data.connection.client.url, {
        headers: {
          connection: "upgrade",
          upgrade: "websocket"
        }
      }) : null;
      (0, import_outvariant.invariant)(
        request != null,
        'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',
        frame.protocol
      );
      return legacyOnUnhandledRequestStrategy(request, {
        warning: defaults.warn,
        error: defaults.error
      });
    }
    return (0, import_on_unhandled_frame.executeUnhandledFrameHandle)(frame, legacyOnUnhandledRequestStrategy);
  };
}
//# sourceMappingURL=compat.js.map