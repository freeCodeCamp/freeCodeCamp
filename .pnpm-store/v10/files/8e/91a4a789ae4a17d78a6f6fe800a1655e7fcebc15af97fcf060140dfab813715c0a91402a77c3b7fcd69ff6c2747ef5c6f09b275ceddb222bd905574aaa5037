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
var network_source_exports = {};
__export(network_source_exports, {
  NetworkSource: () => NetworkSource
});
module.exports = __toCommonJS(network_source_exports);
var import_rettime = require("rettime");
var import_network_frame = require("../frames/network-frame");
class NetworkFrameEvent extends import_rettime.TypedEvent {
  frame;
  constructor(type, frame) {
    super(...[type, {}]);
    this.frame = frame;
  }
}
class NetworkSource {
  emitter;
  constructor() {
    this.emitter = new import_rettime.Emitter();
  }
  async queue(frame) {
    await this.emitter.emitAsPromise(
      // @ts-expect-error Trouble handling a conditional type parameter.
      new NetworkFrameEvent("frame", frame)
    );
  }
  on(type, listener, options) {
    this.emitter.on(type, listener, options);
  }
  disable() {
    this.emitter.removeAllListeners();
  }
}
//# sourceMappingURL=network-source.js.map