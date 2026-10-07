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
var cookieStore_exports = {};
__export(cookieStore_exports, {
  cookieStore: () => cookieStore
});
module.exports = __toCommonJS(cookieStore_exports);
var import_is_node_process = require("is-node-process");
var import_outvariant = require("outvariant");
var import_tough_cookie = require("tough-cookie");
var import_jsonParse = require("./internal/jsonParse");
class CookieStore {
  #storageKey = "__msw-cookie-store__";
  #jar;
  #memoryStore;
  constructor() {
    if (!(0, import_is_node_process.isNodeProcess)()) {
      (0, import_outvariant.invariant)(
        typeof localStorage !== "undefined",
        "Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly."
      );
    }
    this.#memoryStore = new import_tough_cookie.MemoryCookieStore();
    this.#memoryStore.idx = this.getCookieStoreIndex();
    this.#jar = new import_tough_cookie.CookieJar(this.#memoryStore);
  }
  getCookies(url) {
    return this.#jar.getCookiesSync(url);
  }
  async setCookie(cookieName, url) {
    await this.#jar.setCookie(cookieName, url);
    this.persist();
  }
  getCookieStoreIndex() {
    if (typeof localStorage === "undefined" || typeof localStorage.getItem !== "function") {
      return {};
    }
    const cookiesString = localStorage.getItem(this.#storageKey);
    if (cookiesString == null) {
      return {};
    }
    const rawCookies = (0, import_jsonParse.jsonParse)(cookiesString);
    if (rawCookies == null) {
      return {};
    }
    const cookies = {};
    for (const rawCookie of rawCookies) {
      const cookie = import_tough_cookie.Cookie.fromJSON(rawCookie);
      if (cookie != null && cookie.domain != null && cookie.path != null) {
        cookies[cookie.domain] ||= {};
        cookies[cookie.domain][cookie.path] ||= {};
        cookies[cookie.domain][cookie.path][cookie.key] = cookie;
      }
    }
    return cookies;
  }
  persist() {
    if (typeof localStorage === "undefined" || typeof localStorage.setItem !== "function") {
      return;
    }
    const data = [];
    const { idx } = this.#memoryStore;
    for (const domain in idx) {
      for (const path in idx[domain]) {
        for (const key in idx[domain][path]) {
          data.push(idx[domain][path][key].toJSON());
        }
      }
    }
    localStorage.setItem(this.#storageKey, JSON.stringify(data));
  }
}
const cookieStore = new CookieStore();
//# sourceMappingURL=cookieStore.js.map