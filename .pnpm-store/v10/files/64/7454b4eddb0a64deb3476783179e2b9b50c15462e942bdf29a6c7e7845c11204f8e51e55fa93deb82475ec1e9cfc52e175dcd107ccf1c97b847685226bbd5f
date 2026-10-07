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
var WebSocketMemoryClientStore_exports = {};
__export(WebSocketMemoryClientStore_exports, {
  WebSocketMemoryClientStore: () => WebSocketMemoryClientStore
});
module.exports = __toCommonJS(WebSocketMemoryClientStore_exports);
var import_WebSocketClientStore = require("./WebSocketClientStore");
class WebSocketMemoryClientStore {
  store;
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  async add(client) {
    this.store.set(client.id, { id: client.id, url: client.url.href });
  }
  getAll() {
    return Promise.resolve(Array.from(this.store.values()));
  }
  async deleteMany(clientIds) {
    for (const clientId of clientIds) {
      this.store.delete(clientId);
    }
  }
}
//# sourceMappingURL=WebSocketMemoryClientStore.js.map