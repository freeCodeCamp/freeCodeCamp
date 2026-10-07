import { isNodeProcess } from "is-node-process";
import { invariant } from "outvariant";
import {
  Cookie,
  CookieJar,
  MemoryCookieStore
} from "tough-cookie";
import { jsonParse } from './internal/jsonParse.mjs';
class CookieStore {
  #storageKey = "__msw-cookie-store__";
  #jar;
  #memoryStore;
  constructor() {
    if (!isNodeProcess()) {
      invariant(
        typeof localStorage !== "undefined",
        "Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly."
      );
    }
    this.#memoryStore = new MemoryCookieStore();
    this.#memoryStore.idx = this.getCookieStoreIndex();
    this.#jar = new CookieJar(this.#memoryStore);
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
    const rawCookies = jsonParse(cookiesString);
    if (rawCookies == null) {
      return {};
    }
    const cookies = {};
    for (const rawCookie of rawCookies) {
      const cookie = Cookie.fromJSON(rawCookie);
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
export {
  cookieStore
};
//# sourceMappingURL=cookieStore.mjs.map