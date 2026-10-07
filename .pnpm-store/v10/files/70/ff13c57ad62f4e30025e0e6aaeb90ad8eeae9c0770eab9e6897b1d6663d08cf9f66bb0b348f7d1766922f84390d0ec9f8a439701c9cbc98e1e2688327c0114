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

// lib/cookie/index.ts
var index_exports = {};
__export(index_exports, {
  Cookie: () => Cookie,
  CookieJar: () => CookieJar,
  MemoryCookieStore: () => MemoryCookieStore,
  ParameterError: () => ParameterError,
  PrefixSecurityEnum: () => PrefixSecurityEnum,
  Store: () => Store,
  canonicalDomain: () => canonicalDomain,
  cookieCompare: () => cookieCompare,
  defaultPath: () => defaultPath,
  domainMatch: () => domainMatch,
  formatDate: () => formatDate,
  fromJSON: () => fromJSON2,
  getPublicSuffix: () => getPublicSuffix,
  parse: () => parse2,
  parseDate: () => parseDate,
  pathMatch: () => pathMatch,
  permuteDomain: () => permuteDomain,
  permutePath: () => permutePath,
  version: () => version
});
module.exports = __toCommonJS(index_exports);

// lib/pathMatch.ts
function pathMatch(reqPath, cookiePath) {
  if (cookiePath === reqPath) {
    return true;
  }
  const idx = reqPath.indexOf(cookiePath);
  if (idx === 0) {
    if (cookiePath[cookiePath.length - 1] === "/") {
      return true;
    }
    if (reqPath.startsWith(cookiePath) && reqPath[cookiePath.length] === "/") {
      return true;
    }
  }
  return false;
}

// lib/getPublicSuffix.ts
var import_tldts = require("tldts");
var SPECIAL_USE_DOMAINS = ["local", "example", "invalid", "localhost", "test"];
var SPECIAL_TREATMENT_DOMAINS = ["localhost", "invalid"];
var defaultGetPublicSuffixOptions = {
  allowSpecialUseDomain: false,
  ignoreError: false
};
function getPublicSuffix(domain, options = {}) {
  options = { ...defaultGetPublicSuffixOptions, ...options };
  const domainParts = domain.split(".");
  const topLevelDomain = domainParts[domainParts.length - 1];
  const allowSpecialUseDomain = !!options.allowSpecialUseDomain;
  const ignoreError = !!options.ignoreError;
  if (allowSpecialUseDomain && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
    if (domainParts.length > 1) {
      const secondLevelDomain = domainParts[domainParts.length - 2];
      return `${secondLevelDomain}.${topLevelDomain}`;
    } else if (SPECIAL_TREATMENT_DOMAINS.includes(topLevelDomain)) {
      return topLevelDomain;
    }
  }
  if (!ignoreError && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
    throw new Error(
      `Cookie has domain set to the public suffix "${topLevelDomain}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`
    );
  }
  const publicSuffix = (0, import_tldts.getDomain)(domain, {
    allowIcannDomains: true,
    allowPrivateDomains: true
  });
  if (publicSuffix) return publicSuffix;
}

// lib/permuteDomain.ts
function permuteDomain(domain, allowSpecialUseDomain) {
  const pubSuf = getPublicSuffix(domain, {
    allowSpecialUseDomain
  });
  if (!pubSuf) {
    return void 0;
  }
  if (pubSuf == domain) {
    return [domain];
  }
  if (domain.slice(-1) == ".") {
    domain = domain.slice(0, -1);
  }
  const prefix = domain.slice(0, -(pubSuf.length + 1));
  const parts = prefix.split(".").reverse();
  let cur = pubSuf;
  const permutations = [cur];
  while (parts.length) {
    const part = parts.shift();
    cur = `${part}.${cur}`;
    permutations.push(cur);
  }
  return permutations;
}

// lib/store.ts
var Store = class {
  constructor() {
    this.synchronous = false;
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(_domain, _path, _key, _callback) {
    throw new Error("findCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(_domain, _path, _allowSpecialUseDomain = false, _callback) {
    throw new Error("findCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(_cookie, _callback) {
    throw new Error("putCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(_oldCookie, _newCookie, _callback) {
    throw new Error("updateCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(_domain, _path, _key, _callback) {
    throw new Error("removeCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(_domain, _path, _callback) {
    throw new Error("removeCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(_callback) {
    throw new Error("removeAllCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(_callback) {
    throw new Error(
      "getAllCookies is not implemented (therefore jar cannot be serialized)"
    );
  }
};

// lib/utils.ts
var objectToString = (obj) => Object.prototype.toString.call(obj);
var safeArrayToString = (arr, seenArrays) => {
  if (typeof arr.join !== "function") return objectToString(arr);
  seenArrays.add(arr);
  const mapped = arr.map(
    (val) => val === null || val === void 0 || seenArrays.has(val) ? "" : safeToStringImpl(val, seenArrays)
  );
  return mapped.join();
};
var safeToStringImpl = (val, seenArrays = /* @__PURE__ */ new WeakSet()) => {
  if (typeof val !== "object" || val === null) {
    return String(val);
  } else if (typeof val.toString === "function") {
    return Array.isArray(val) ? (
      // Arrays have a weird custom toString that we need to replicate
      safeArrayToString(val, seenArrays)
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      String(val)
    );
  } else {
    return objectToString(val);
  }
};
var safeToString = (val) => safeToStringImpl(val);
function createPromiseCallback(cb) {
  let callback;
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  if (typeof cb === "function") {
    callback = (err, result) => {
      try {
        if (err) cb(err);
        else cb(null, result);
      } catch (e) {
        reject(e instanceof Error ? e : new Error());
      }
    };
  } else {
    callback = (err, result) => {
      try {
        if (err) reject(err);
        else resolve(result);
      } catch (e) {
        reject(e instanceof Error ? e : new Error());
      }
    };
  }
  return {
    promise,
    callback,
    resolve: (value) => {
      callback(null, value);
      return promise;
    },
    reject: (error) => {
      callback(error);
      return promise;
    }
  };
}
function inOperator(k, o) {
  return k in o;
}

// lib/memstore.ts
var MemoryCookieStore = class extends Store {
  /**
   * Create a new {@link MemoryCookieStore}.
   */
  constructor() {
    super();
    this.synchronous = true;
    this.idx = /* @__PURE__ */ Object.create(null);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(domain, path, key, callback) {
    const promiseCallback = createPromiseCallback(callback);
    if (domain == null || path == null || key == null) {
      return promiseCallback.resolve(void 0);
    }
    const result = this.idx[domain]?.[path]?.[key];
    return promiseCallback.resolve(result);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(domain, path, allowSpecialUseDomain = false, callback) {
    if (typeof allowSpecialUseDomain === "function") {
      callback = allowSpecialUseDomain;
      allowSpecialUseDomain = true;
    }
    const results = [];
    const promiseCallback = createPromiseCallback(callback);
    if (!domain) {
      return promiseCallback.resolve([]);
    }
    let pathMatcher;
    if (!path) {
      pathMatcher = function matchAll(domainIndex) {
        for (const curPath in domainIndex) {
          const pathIndex = domainIndex[curPath];
          for (const key in pathIndex) {
            const value = pathIndex[key];
            if (value) {
              results.push(value);
            }
          }
        }
      };
    } else {
      pathMatcher = function matchRFC(domainIndex) {
        for (const cookiePath in domainIndex) {
          if (pathMatch(path, cookiePath)) {
            const pathIndex = domainIndex[cookiePath];
            for (const key in pathIndex) {
              const value = pathIndex[key];
              if (value) {
                results.push(value);
              }
            }
          }
        }
      };
    }
    const domains = permuteDomain(domain, allowSpecialUseDomain) || [domain];
    const idx = this.idx;
    domains.forEach((curDomain) => {
      const domainIndex = idx[curDomain];
      if (!domainIndex) {
        return;
      }
      pathMatcher(domainIndex);
    });
    return promiseCallback.resolve(results);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(cookie, callback) {
    const promiseCallback = createPromiseCallback(callback);
    const { domain, path, key } = cookie;
    if (domain == null || path == null || key == null) {
      return promiseCallback.resolve(void 0);
    }
    const domainEntry = this.idx[domain] ?? /* @__PURE__ */ Object.create(null);
    this.idx[domain] = domainEntry;
    const pathEntry = domainEntry[path] ?? /* @__PURE__ */ Object.create(null);
    domainEntry[path] = pathEntry;
    pathEntry[key] = cookie;
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(_oldCookie, newCookie, callback) {
    if (callback) this.putCookie(newCookie, callback);
    else return this.putCookie(newCookie);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(domain, path, key, callback) {
    const promiseCallback = createPromiseCallback(callback);
    delete this.idx[domain]?.[path]?.[key];
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(domain, path, callback) {
    const promiseCallback = createPromiseCallback(callback);
    const domainEntry = this.idx[domain];
    if (domainEntry) {
      if (path) {
        delete domainEntry[path];
      } else {
        delete this.idx[domain];
      }
    }
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    this.idx = /* @__PURE__ */ Object.create(null);
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    const cookies = [];
    const idx = this.idx;
    const domains = Object.keys(idx);
    domains.forEach((domain) => {
      const domainEntry = idx[domain] ?? {};
      const paths = Object.keys(domainEntry);
      paths.forEach((path) => {
        const pathEntry = domainEntry[path] ?? {};
        const keys = Object.keys(pathEntry);
        keys.forEach((key) => {
          const keyEntry = pathEntry[key];
          if (keyEntry != null) {
            cookies.push(keyEntry);
          }
        });
      });
    });
    cookies.sort((a, b) => {
      return (a.creationIndex || 0) - (b.creationIndex || 0);
    });
    return promiseCallback.resolve(cookies);
  }
};

// lib/validators.ts
function isNonEmptyString(data) {
  return isString(data) && data !== "";
}
function isEmptyString(data) {
  return data === "" || data instanceof String && data.toString() === "";
}
function isString(data) {
  return typeof data === "string" || data instanceof String;
}
function isObject(data) {
  return objectToString(data) === "[object Object]";
}
function validate(bool, cbOrMessage, message) {
  if (bool) return;
  const cb = typeof cbOrMessage === "function" ? cbOrMessage : void 0;
  let options = typeof cbOrMessage === "function" ? message : cbOrMessage;
  if (!isObject(options)) options = "[object Object]";
  const err = new ParameterError(safeToString(options));
  if (cb) cb(err);
  else throw err;
}
var ParameterError = class extends Error {
};

// lib/version.ts
var version = "6.0.1";

// lib/cookie/constants.ts
var PrefixSecurityEnum = {
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
};
Object.freeze(PrefixSecurityEnum);
var IP_V6_REGEX = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
var IP_V6_REGEX_OBJECT = new RegExp(`^${IP_V6_REGEX}$`);
var IP_V4_REGEX = `(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])`;
var IP_V4_REGEX_OBJECT = new RegExp(`^${IP_V4_REGEX}$`);

// lib/cookie/canonicalDomain.ts
function domainToASCII(domain) {
  return new URL(`http://${domain}`).hostname;
}
function canonicalDomain(domainName) {
  if (domainName == null) {
    return void 0;
  }
  let str = domainName.trim().replace(/^\./, "");
  if (IP_V6_REGEX_OBJECT.test(str)) {
    if (!str.startsWith("[")) {
      str = "[" + str;
    }
    if (!str.endsWith("]")) {
      str = str + "]";
    }
    return domainToASCII(str).slice(1, -1);
  }
  if (/[^\u0001-\u007f]/.test(str)) {
    return domainToASCII(str);
  }
  return str.toLowerCase();
}

// lib/cookie/formatDate.ts
function formatDate(date) {
  return date.toUTCString();
}

// lib/cookie/parseDate.ts
function parseDate(cookieDate) {
  if (!cookieDate) {
    return void 0;
  }
  const flags = {
    foundTime: void 0,
    foundDayOfMonth: void 0,
    foundMonth: void 0,
    foundYear: void 0
  };
  const dateTokens = cookieDate.split(DELIMITER).filter((token) => token.length > 0);
  for (const dateToken of dateTokens) {
    if (flags.foundTime === void 0) {
      const [, hours, minutes, seconds] = TIME.exec(dateToken) || [];
      if (hours != void 0 && minutes != void 0 && seconds != void 0) {
        const parsedHours = parseInt(hours, 10);
        const parsedMinutes = parseInt(minutes, 10);
        const parsedSeconds = parseInt(seconds, 10);
        if (!isNaN(parsedHours) && !isNaN(parsedMinutes) && !isNaN(parsedSeconds)) {
          flags.foundTime = {
            hours: parsedHours,
            minutes: parsedMinutes,
            seconds: parsedSeconds
          };
          continue;
        }
      }
    }
    if (flags.foundDayOfMonth === void 0 && DAY_OF_MONTH.test(dateToken)) {
      const dayOfMonth = parseInt(dateToken, 10);
      if (!isNaN(dayOfMonth)) {
        flags.foundDayOfMonth = dayOfMonth;
        continue;
      }
    }
    if (flags.foundMonth === void 0 && MONTH.test(dateToken)) {
      const month = months.indexOf(dateToken.substring(0, 3).toLowerCase());
      if (month >= 0 && month <= 11) {
        flags.foundMonth = month;
        continue;
      }
    }
    if (flags.foundYear === void 0 && YEAR.test(dateToken)) {
      const parsedYear = parseInt(dateToken, 10);
      if (!isNaN(parsedYear)) {
        flags.foundYear = parsedYear;
        continue;
      }
    }
  }
  if (flags.foundYear !== void 0 && flags.foundYear >= 70 && flags.foundYear <= 99) {
    flags.foundYear += 1900;
  }
  if (flags.foundYear !== void 0 && flags.foundYear >= 0 && flags.foundYear <= 69) {
    flags.foundYear += 2e3;
  }
  if (flags.foundDayOfMonth === void 0 || flags.foundMonth === void 0 || flags.foundYear === void 0 || flags.foundTime === void 0) {
    return void 0;
  }
  if (flags.foundDayOfMonth < 1 || flags.foundDayOfMonth > 31) {
    return void 0;
  }
  if (flags.foundYear < 1601) {
    return void 0;
  }
  if (flags.foundTime.hours > 23) {
    return void 0;
  }
  if (flags.foundTime.minutes > 59) {
    return void 0;
  }
  if (flags.foundTime.seconds > 59) {
    return void 0;
  }
  const date = new Date(
    Date.UTC(
      flags.foundYear,
      flags.foundMonth,
      flags.foundDayOfMonth,
      flags.foundTime.hours,
      flags.foundTime.minutes,
      flags.foundTime.seconds
    )
  );
  if (date.getUTCFullYear() !== flags.foundYear || date.getUTCMonth() !== flags.foundMonth || date.getUTCDate() !== flags.foundDayOfMonth) {
    return void 0;
  }
  return date;
}
var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
var DELIMITER = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
var TIME = /^(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/;
var DAY_OF_MONTH = /^[0-9]{1,2}(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/;
var MONTH = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\x00-\xFF]*$/i;
var YEAR = /^[\x30-\x39]{2,4}(?:[\x00-\x2F\x3A-\xFF][\x00-\xFF]*)?$/;

// lib/cookie/cookie.ts
var COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;
var CONTROL_CHARS = /[\x00-\x1F]/;
var TERMINATORS = ["\n", "\r", "\0"];
function trimTerminator(str) {
  if (isEmptyString(str)) return str;
  for (let t = 0; t < TERMINATORS.length; t++) {
    const terminator = TERMINATORS[t];
    const terminatorIdx = terminator ? str.indexOf(terminator) : -1;
    if (terminatorIdx !== -1) {
      str = str.slice(0, terminatorIdx);
    }
  }
  return str;
}
function parseCookiePair(cookiePair, looseMode) {
  cookiePair = trimTerminator(cookiePair);
  let firstEq = cookiePair.indexOf("=");
  if (looseMode) {
    if (firstEq === 0) {
      cookiePair = cookiePair.substring(1);
      firstEq = cookiePair.indexOf("=");
    }
  } else {
    if (firstEq <= 0) {
      return void 0;
    }
  }
  let cookieName, cookieValue;
  if (firstEq <= 0) {
    cookieName = "";
    cookieValue = cookiePair.trim();
  } else {
    cookieName = cookiePair.slice(0, firstEq).trim();
    cookieValue = cookiePair.slice(firstEq + 1).trim();
  }
  if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
    return void 0;
  }
  const c = new Cookie();
  c.key = cookieName;
  c.value = cookieValue;
  return c;
}
function parse(str, options) {
  if (isEmptyString(str) || !isString(str)) {
    return void 0;
  }
  str = str.trim();
  const firstSemi = str.indexOf(";");
  const cookiePair = firstSemi === -1 ? str : str.slice(0, firstSemi);
  const c = parseCookiePair(cookiePair, options?.loose ?? false);
  if (!c) {
    return void 0;
  }
  if (firstSemi === -1) {
    return c;
  }
  const unparsed = str.slice(firstSemi + 1).trim();
  if (unparsed.length === 0) {
    return c;
  }
  const cookie_avs = unparsed.split(";");
  while (cookie_avs.length) {
    const av = (cookie_avs.shift() ?? "").trim();
    if (av.length === 0) {
      continue;
    }
    const av_sep = av.indexOf("=");
    let av_key, av_value;
    if (av_sep === -1) {
      av_key = av;
      av_value = null;
    } else {
      av_key = av.slice(0, av_sep);
      av_value = av.slice(av_sep + 1);
    }
    av_key = av_key.trim().toLowerCase();
    if (av_value) {
      av_value = av_value.trim();
    }
    switch (av_key) {
      case "expires":
        if (av_value) {
          const exp = parseDate(av_value);
          if (exp) {
            c.expires = exp;
          }
        }
        break;
      case "max-age":
        if (av_value) {
          if (/^-?[0-9]+$/.test(av_value)) {
            const delta = parseInt(av_value, 10);
            c.setMaxAge(delta);
          }
        }
        break;
      case "domain":
        if (av_value) {
          const domain = av_value.trim().replace(/^\./, "");
          if (domain) {
            c.domain = domain.toLowerCase();
          }
        }
        break;
      case "path":
        c.path = av_value && av_value[0] === "/" ? av_value : null;
        break;
      case "secure":
        c.secure = true;
        break;
      case "httponly":
        c.httpOnly = true;
        break;
      case "samesite":
        switch (av_value ? av_value.toLowerCase() : "") {
          case "strict":
            c.sameSite = "strict";
            break;
          case "lax":
            c.sameSite = "lax";
            break;
          case "none":
            c.sameSite = "none";
            break;
          default:
            c.sameSite = void 0;
            break;
        }
        break;
      default:
        c.extensions = c.extensions || [];
        c.extensions.push(av);
        break;
    }
  }
  return c;
}
function fromJSON(str) {
  if (!str || isEmptyString(str)) {
    return void 0;
  }
  let obj;
  if (typeof str === "string") {
    try {
      obj = JSON.parse(str);
    } catch {
      return void 0;
    }
  } else {
    obj = str;
  }
  const c = new Cookie();
  Cookie.serializableProperties.forEach((prop) => {
    if (obj && typeof obj === "object" && inOperator(prop, obj)) {
      const val = obj[prop];
      if (val === void 0) {
        return;
      }
      if (inOperator(prop, cookieDefaults) && val === cookieDefaults[prop]) {
        return;
      }
      switch (prop) {
        case "key":
        case "value":
        case "sameSite":
          if (typeof val === "string") {
            c[prop] = val;
          }
          break;
        case "expires":
        case "creation":
        case "lastAccessed":
          if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
            c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(val);
          } else if (val === null) {
            c[prop] = null;
          }
          break;
        case "maxAge":
          if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
            c[prop] = val;
          }
          break;
        case "domain":
        case "path":
          if (typeof val === "string" || val === null) {
            c[prop] = val;
          }
          break;
        case "secure":
        case "httpOnly":
          if (typeof val === "boolean") {
            c[prop] = val;
          }
          break;
        case "extensions":
          if (Array.isArray(val) && val.every((item) => typeof item === "string")) {
            c[prop] = val;
          }
          break;
        case "hostOnly":
        case "pathIsDefault":
          if (typeof val === "boolean" || val === null) {
            c[prop] = val;
          }
          break;
      }
    }
  });
  return c;
}
var cookieDefaults = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: false,
  httpOnly: false,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: void 0
};
var _Cookie = class _Cookie {
  /**
   * Create a new Cookie instance.
   * @public
   * @param options - The attributes to set on the cookie
   */
  constructor(options = {}) {
    this.key = options.key ?? cookieDefaults.key;
    this.value = options.value ?? cookieDefaults.value;
    this.expires = options.expires ?? cookieDefaults.expires;
    this.maxAge = options.maxAge ?? cookieDefaults.maxAge;
    this.domain = options.domain ?? cookieDefaults.domain;
    this.path = options.path ?? cookieDefaults.path;
    this.secure = options.secure ?? cookieDefaults.secure;
    this.httpOnly = options.httpOnly ?? cookieDefaults.httpOnly;
    this.extensions = options.extensions ?? cookieDefaults.extensions;
    this.creation = options.creation ?? cookieDefaults.creation;
    this.hostOnly = options.hostOnly ?? cookieDefaults.hostOnly;
    this.pathIsDefault = options.pathIsDefault ?? cookieDefaults.pathIsDefault;
    this.lastAccessed = options.lastAccessed ?? cookieDefaults.lastAccessed;
    this.sameSite = options.sameSite ?? cookieDefaults.sameSite;
    this.creation = options.creation ?? /* @__PURE__ */ new Date();
    Object.defineProperty(this, "creationIndex", {
      configurable: false,
      enumerable: false,
      // important for assert.deepEqual checks
      writable: true,
      value: ++_Cookie.cookiesCreated
    });
    this.creationIndex = _Cookie.cookiesCreated;
  }
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    const now = Date.now();
    const hostOnly = this.hostOnly != null ? this.hostOnly.toString() : "?";
    const createAge = this.creation && this.creation !== "Infinity" ? `${String(now - this.creation.getTime())}ms` : "?";
    const accessAge = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(now - this.lastAccessed.getTime())}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
  }
  /**
   * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
   *
   * @remarks
   * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
   *
   *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
   *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
   */
  toJSON() {
    const obj = {};
    for (const prop of _Cookie.serializableProperties) {
      const val = this[prop];
      if (val === cookieDefaults[prop]) {
        continue;
      }
      switch (prop) {
        case "key":
        case "value":
        case "sameSite":
          if (typeof val === "string") {
            obj[prop] = val;
          }
          break;
        case "expires":
        case "creation":
        case "lastAccessed":
          if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
            obj[prop] = val == "Infinity" ? "Infinity" : new Date(val).toISOString();
          } else if (val === null) {
            obj[prop] = null;
          }
          break;
        case "maxAge":
          if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
            obj[prop] = val;
          }
          break;
        case "domain":
        case "path":
          if (typeof val === "string" || val === null) {
            obj[prop] = val;
          }
          break;
        case "secure":
        case "httpOnly":
          if (typeof val === "boolean") {
            obj[prop] = val;
          }
          break;
        case "extensions":
          if (Array.isArray(val)) {
            obj[prop] = val;
          }
          break;
        case "hostOnly":
        case "pathIsDefault":
          if (typeof val === "boolean" || val === null) {
            obj[prop] = val;
          }
          break;
      }
    }
    return obj;
  }
  /**
   * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
   * @public
   */
  clone() {
    return fromJSON(this.toJSON());
  }
  /**
   * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
   * For now, it returns a boolean, but eventually could return a reason string.
   *
   * @remarks
   * Works for a few things, but is by no means comprehensive.
   *
   * @beta
   */
  validate() {
    if (!this.value || !COOKIE_OCTETS.test(this.value)) {
      return false;
    }
    if (this.expires != "Infinity" && !(this.expires instanceof Date) && !parseDate(this.expires)) {
      return false;
    }
    if (this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0)) {
      return false;
    }
    if (this.path != null && !PATH_VALUE.test(this.path)) {
      return false;
    }
    const cdomain = this.cdomain();
    if (cdomain) {
      if (cdomain.match(/\.$/)) {
        return false;
      }
      const suffix = getPublicSuffix(cdomain);
      if (suffix == null) {
        return false;
      }
    }
    return true;
  }
  /**
   * Sets the 'Expires' attribute on a cookie.
   *
   * @remarks
   * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
   * then the 'Expires' attribute will be set to `"Infinity"`.
   *
   * @param exp - the new value for the 'Expires' attribute of the cookie.
   */
  setExpires(exp) {
    if (exp instanceof Date) {
      this.expires = exp;
    } else {
      this.expires = parseDate(exp) || "Infinity";
    }
  }
  /**
   * Sets the 'Max-Age' attribute (in seconds) on a cookie.
   *
   * @remarks
   * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
   *
   * @param age - the new value for the 'Max-Age' attribute (in seconds).
   */
  setMaxAge(age) {
    if (age === Infinity) {
      this.maxAge = "Infinity";
    } else if (age === -Infinity) {
      this.maxAge = "-Infinity";
    } else {
      this.maxAge = age;
    }
  }
  /**
   * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
   * @public
   */
  cookieString() {
    const val = this.value || "";
    if (this.key) {
      return `${this.key}=${val}`;
    }
    return val;
  }
  /**
   * Encodes to a `Set-Cookie header` value.
   * @public
   */
  toString() {
    let str = this.cookieString();
    if (this.expires != "Infinity") {
      if (this.expires instanceof Date) {
        str += `; Expires=${formatDate(this.expires)}`;
      }
    }
    if (this.maxAge != null && this.maxAge != Infinity) {
      str += `; Max-Age=${String(this.maxAge)}`;
    }
    if (this.domain && !this.hostOnly) {
      str += `; Domain=${this.domain}`;
    }
    if (this.path) {
      str += `; Path=${this.path}`;
    }
    if (this.secure) {
      str += "; Secure";
    }
    if (this.httpOnly) {
      str += "; HttpOnly";
    }
    if (this.sameSite && this.sameSite !== "none") {
      if (this.sameSite.toLowerCase() === _Cookie.sameSiteCanonical.lax.toLowerCase()) {
        str += `; SameSite=${_Cookie.sameSiteCanonical.lax}`;
      } else if (this.sameSite.toLowerCase() === _Cookie.sameSiteCanonical.strict.toLowerCase()) {
        str += `; SameSite=${_Cookie.sameSiteCanonical.strict}`;
      } else {
        str += `; SameSite=${this.sameSite}`;
      }
    }
    if (this.extensions) {
      this.extensions.forEach((ext) => {
        str += `; ${ext}`;
      });
    }
    return str;
  }
  /**
   * Computes the TTL relative to now (milliseconds).
   *
   * @remarks
   * - `Infinity` is returned for cookies without an explicit expiry
   *
   * - `0` is returned if the cookie is expired.
   *
   * - Otherwise a time-to-live in milliseconds is returned.
   *
   * @param now - passing an explicit value is mostly used for testing purposes since this defaults to the `Date.now()`
   * @public
   */
  TTL(now = Date.now()) {
    if (this.maxAge != null && typeof this.maxAge === "number") {
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    }
    const expires = this.expires;
    if (expires === "Infinity") {
      return Infinity;
    }
    return (expires?.getTime() ?? now) - (now || Date.now());
  }
  /**
   * Computes the absolute unix-epoch milliseconds that this cookie expires.
   *
   * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
   * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
   *
   * If Expires ({@link Cookie.expires}) is set, that's returned.
   *
   * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
   */
  expiryTime(now) {
    if (this.maxAge != null) {
      const relativeTo = now || this.lastAccessed || /* @__PURE__ */ new Date();
      const maxAge = typeof this.maxAge === "number" ? this.maxAge : -Infinity;
      const age = maxAge <= 0 ? -Infinity : maxAge * 1e3;
      if (relativeTo === "Infinity") {
        return Infinity;
      }
      return relativeTo.getTime() + age;
    }
    if (this.expires == "Infinity") {
      return Infinity;
    }
    return this.expires ? this.expires.getTime() : void 0;
  }
  /**
   * Similar to {@link Cookie.expiryTime}, computes the absolute unix-epoch milliseconds that this cookie expires and returns it as a Date.
   *
   * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
   * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
   *
   * If Expires ({@link Cookie.expires}) is set, that's returned.
   *
   * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
   */
  expiryDate(now) {
    const millisec = this.expiryTime(now);
    if (millisec == Infinity) {
      return /* @__PURE__ */ new Date(2147483647e3);
    } else if (millisec == -Infinity) {
      return /* @__PURE__ */ new Date(0);
    } else {
      return millisec == void 0 ? void 0 : new Date(millisec);
    }
  }
  /**
   * Indicates if the cookie has been persisted to a store or not.
   * @public
   */
  isPersistent() {
    return this.maxAge != null || this.expires != "Infinity";
  }
  /**
   * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
   * @public
   */
  canonicalizedDomain() {
    return canonicalDomain(this.domain);
  }
  /**
   * Alias for {@link Cookie.canonicalizedDomain}
   * @public
   */
  cdomain() {
    return canonicalDomain(this.domain);
  }
  /**
   * Parses a string into a Cookie object.
   *
   * @remarks
   * Note: when parsing a `Cookie` header it must be split by ';' before each Cookie string can be parsed.
   *
   * @example
   * ```
   * // parse a `Set-Cookie` header
   * const setCookieHeader = 'a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT'
   * const cookie = Cookie.parse(setCookieHeader)
   * cookie.key === 'a'
   * cookie.value === 'bcd'
   * cookie.expires === new Date(Date.parse('Tue, 18 Oct 2011 07:05:03 GMT'))
   * ```
   *
   * @example
   * ```
   * // parse a `Cookie` header
   * const cookieHeader = 'name=value; name2=value2; name3=value3'
   * const cookies = cookieHeader.split(';').map(Cookie.parse)
   * cookies[0].name === 'name'
   * cookies[0].value === 'value'
   * cookies[1].name === 'name2'
   * cookies[1].value === 'value2'
   * cookies[2].name === 'name3'
   * cookies[2].value === 'value3'
   * ```
   *
   * @param str - The `Set-Cookie` header or a Cookie string to parse.
   * @param options - Configures `strict` or `loose` mode for cookie parsing
   */
  static parse(str, options) {
    return parse(str, options);
  }
  /**
   * Does the reverse of {@link Cookie.toJSON}.
   *
   * @remarks
   * Any Date properties (such as .expires, .creation, and .lastAccessed) are parsed via Date.parse, not tough-cookie's parseDate, since ISO timestamps are being handled at this layer.
   *
   * @example
   * ```
   * const json = JSON.stringify({
   *   key: 'alpha',
   *   value: 'beta',
   *   domain: 'example.com',
   *   path: '/foo',
   *   expires: '2038-01-19T03:14:07.000Z',
   * })
   * const cookie = Cookie.fromJSON(json)
   * cookie.key === 'alpha'
   * cookie.value === 'beta'
   * cookie.domain === 'example.com'
   * cookie.path === '/foo'
   * cookie.expires === new Date(Date.parse('2038-01-19T03:14:07.000Z'))
   * ```
   *
   * @param str - An unparsed JSON string or a value that has already been parsed as JSON
   */
  static fromJSON(str) {
    return fromJSON(str);
  }
};
_Cookie.cookiesCreated = 0;
/**
 * @internal
 */
_Cookie.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
/**
 * @internal
 */
_Cookie.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
/**
 * Cookie properties that will be serialized when using {@link Cookie.fromJSON} and {@link Cookie.toJSON}.
 * @public
 */
_Cookie.serializableProperties = [
  "key",
  "value",
  "expires",
  "maxAge",
  "domain",
  "path",
  "secure",
  "httpOnly",
  "extensions",
  "hostOnly",
  "pathIsDefault",
  "creation",
  "lastAccessed",
  "sameSite"
];
var Cookie = _Cookie;

// lib/cookie/cookieCompare.ts
var MAX_TIME = 2147483647e3;
function cookieCompare(a, b) {
  let cmp;
  const aPathLen = a.path ? a.path.length : 0;
  const bPathLen = b.path ? b.path.length : 0;
  cmp = bPathLen - aPathLen;
  if (cmp !== 0) {
    return cmp;
  }
  const aTime = a.creation && a.creation instanceof Date ? a.creation.getTime() : MAX_TIME;
  const bTime = b.creation && b.creation instanceof Date ? b.creation.getTime() : MAX_TIME;
  cmp = aTime - bTime;
  if (cmp !== 0) {
    return cmp;
  }
  cmp = (a.creationIndex || 0) - (b.creationIndex || 0);
  return cmp;
}

// lib/cookie/defaultPath.ts
function defaultPath(path) {
  if (!path || path.slice(0, 1) !== "/") {
    return "/";
  }
  if (path === "/") {
    return path;
  }
  const rightSlash = path.lastIndexOf("/");
  if (rightSlash === 0) {
    return "/";
  }
  return path.slice(0, rightSlash);
}

// lib/cookie/domainMatch.ts
var IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
function domainMatch(domain, cookieDomain, canonicalize) {
  if (domain == null || cookieDomain == null) {
    return void 0;
  }
  let _str;
  let _domStr;
  if (canonicalize !== false) {
    _str = canonicalDomain(domain);
    _domStr = canonicalDomain(cookieDomain);
  } else {
    _str = domain;
    _domStr = cookieDomain;
  }
  if (_str == null || _domStr == null) {
    return void 0;
  }
  if (_str == _domStr) {
    return true;
  }
  const idx = _str.lastIndexOf(_domStr);
  if (idx <= 0) {
    return false;
  }
  if (_str.length !== _domStr.length + idx) {
    return false;
  }
  if (_str.substring(idx - 1, idx) !== ".") {
    return false;
  }
  return !IP_REGEX_LOWERCASE.test(_str);
}

// lib/cookie/secureContext.ts
function isLoopbackV4(address) {
  const octets = address.split(".");
  return octets.length === 4 && octets[0] !== void 0 && parseInt(octets[0], 10) === 127;
}
function isLoopbackV6(address) {
  return address === "::1";
}
function isNormalizedLocalhostTLD(lowerHost) {
  return lowerHost.endsWith(".localhost");
}
function isLocalHostname(host) {
  const lowerHost = host.toLowerCase();
  return lowerHost === "localhost" || isNormalizedLocalhostTLD(lowerHost);
}
function hostNoBrackets(host) {
  if (host.length >= 2 && host.startsWith("[") && host.endsWith("]")) {
    return host.substring(1, host.length - 1);
  }
  return host;
}
function isPotentiallyTrustworthy(inputUrl, allowSecureOnLocal = true) {
  let url;
  if (typeof inputUrl === "string") {
    try {
      url = new URL(inputUrl);
    } catch {
      return false;
    }
  } else {
    url = inputUrl;
  }
  const scheme = url.protocol.replace(":", "").toLowerCase();
  const hostname = hostNoBrackets(url.hostname).replace(/\.+$/, "");
  if (scheme === "https" || scheme === "wss") {
    return true;
  }
  if (!allowSecureOnLocal) {
    return false;
  }
  if (IP_V4_REGEX_OBJECT.test(hostname)) {
    return isLoopbackV4(hostname);
  }
  if (IP_V6_REGEX_OBJECT.test(hostname)) {
    return isLoopbackV6(hostname);
  }
  return isLocalHostname(hostname);
}

// lib/cookie/cookieJar.ts
var defaultSetCookieOptions = {
  loose: false,
  sameSiteContext: void 0,
  ignoreError: false,
  http: true
};
var defaultGetCookieOptions = {
  http: true,
  expire: true,
  allPaths: false,
  sameSiteContext: void 0,
  sort: void 0
};
var SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function getCookieContext(url) {
  if (url && typeof url === "object" && "hostname" in url && typeof url.hostname === "string" && "pathname" in url && typeof url.pathname === "string" && "protocol" in url && typeof url.protocol === "string") {
    return {
      hostname: url.hostname,
      pathname: url.pathname,
      protocol: url.protocol
    };
  } else if (typeof url === "string") {
    try {
      return new URL(decodeURI(url));
    } catch {
      return new URL(url);
    }
  } else {
    throw new ParameterError("`url` argument is not a string or URL.");
  }
}
function checkSameSiteContext(value) {
  const context = String(value).toLowerCase();
  if (context === "none" || context === "lax" || context === "strict") {
    return context;
  } else {
    return void 0;
  }
}
function isSecurePrefixConditionMet(cookie) {
  const startsWithSecurePrefix = typeof cookie.key === "string" && cookie.key.startsWith("__Secure-");
  return !startsWithSecurePrefix || cookie.secure;
}
function isHostPrefixConditionMet(cookie) {
  const startsWithHostPrefix = typeof cookie.key === "string" && cookie.key.startsWith("__Host-");
  return !startsWithHostPrefix || Boolean(
    cookie.secure && cookie.hostOnly && cookie.path != null && cookie.path === "/"
  );
}
function getNormalizedPrefixSecurity(prefixSecurity) {
  const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
  switch (normalizedPrefixSecurity) {
    case PrefixSecurityEnum.STRICT:
    case PrefixSecurityEnum.SILENT:
    case PrefixSecurityEnum.DISABLED:
      return normalizedPrefixSecurity;
    default:
      return PrefixSecurityEnum.SILENT;
  }
}
var CookieJar = class _CookieJar {
  /**
   * Creates a new `CookieJar` instance.
   *
   * @remarks
   * - If a custom store is not passed to the constructor, an in-memory store ({@link MemoryCookieStore} will be created and used.
   * - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`
   *
   * @param store - a custom {@link Store} implementation (defaults to {@link MemoryCookieStore})
   * @param options - configures how cookies are processed by the cookie jar
   */
  constructor(store, options) {
    if (typeof options === "boolean") {
      options = { rejectPublicSuffixes: options };
    }
    this.rejectPublicSuffixes = options?.rejectPublicSuffixes ?? true;
    this.enableLooseMode = options?.looseMode ?? false;
    this.allowSpecialUseDomain = options?.allowSpecialUseDomain ?? true;
    this.allowSecureOnLocal = options?.allowSecureOnLocal ?? true;
    this.prefixSecurity = getNormalizedPrefixSecurity(
      options?.prefixSecurity ?? "silent"
    );
    this.store = store ?? new MemoryCookieStore();
  }
  callSync(fn) {
    if (!this.store.synchronous) {
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    }
    let syncErr = null;
    let syncResult = void 0;
    try {
      fn.call(this, (error, result) => {
        syncErr = error;
        syncResult = result;
      });
    } catch (err) {
      syncErr = err;
    }
    if (syncErr) throw syncErr;
    return syncResult;
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  setCookie(cookie, url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    let context;
    try {
      if (typeof url === "string") {
        validate(
          isNonEmptyString(url),
          callback,
          safeToString(options)
        );
      }
      context = getCookieContext(url);
      if (typeof url === "function") {
        return promiseCallback.reject(new Error("No URL was specified"));
      }
      if (typeof options === "function") {
        options = defaultSetCookieOptions;
      }
      validate(typeof cb === "function", cb);
      if (!isNonEmptyString(cookie) && !isObject(cookie) && cookie instanceof String && cookie.length == 0) {
        return promiseCallback.resolve(void 0);
      }
    } catch (err) {
      return promiseCallback.reject(err);
    }
    const host = canonicalDomain(context.hostname) ?? null;
    const loose = options?.loose || this.enableLooseMode;
    let sameSiteContext = null;
    if (options?.sameSiteContext) {
      sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      if (!sameSiteContext) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }
    if (typeof cookie === "string" || cookie instanceof String) {
      const parsedCookie = Cookie.parse(cookie.toString(), { loose });
      if (!parsedCookie) {
        const err = new Error("Cookie failed to parse");
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
      cookie = parsedCookie;
    } else if (!(cookie instanceof Cookie)) {
      const err = new Error(
        "First argument to setCookie must be a Cookie object or string"
      );
      return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
    }
    const now = options?.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && cookie.domain) {
      try {
        const cdomain = cookie.cdomain();
        const suffix = typeof cdomain === "string" ? getPublicSuffix(cdomain, {
          allowSpecialUseDomain: this.allowSpecialUseDomain,
          ignoreError: options?.ignoreError
        }) : null;
        if (suffix == null && !IP_V6_REGEX_OBJECT.test(cookie.domain)) {
          const err = new Error("Cookie has domain set to a public suffix");
          return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
        }
      } catch (err) {
        return options?.ignoreError ? promiseCallback.resolve(void 0) : (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          promiseCallback.reject(err)
        );
      }
    }
    if (cookie.domain) {
      if (!domainMatch(host ?? void 0, cookie.cdomain() ?? void 0, false)) {
        const err = new Error(
          `Cookie not in this host's domain. Cookie:${cookie.cdomain() ?? "null"} Request:${host ?? "null"}`
        );
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
      if (cookie.hostOnly == null) {
        cookie.hostOnly = false;
      }
    } else {
      cookie.hostOnly = true;
      cookie.domain = host;
    }
    if (!cookie.path || cookie.path[0] !== "/") {
      cookie.path = defaultPath(context.pathname);
      cookie.pathIsDefault = true;
    }
    if (options?.http === false && cookie.httpOnly) {
      const err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
      return options.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
    }
    if (cookie.sameSite !== "none" && cookie.sameSite !== void 0 && sameSiteContext) {
      if (sameSiteContext === "none") {
        const err = new Error(
          "Cookie is SameSite but this is a cross-origin request"
        );
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
    }
    const ignoreErrorForPrefixSecurity = this.prefixSecurity === PrefixSecurityEnum.SILENT;
    const prefixSecurityDisabled = this.prefixSecurity === PrefixSecurityEnum.DISABLED;
    if (!prefixSecurityDisabled) {
      let errorFound = false;
      let errorMsg;
      if (!isSecurePrefixConditionMet(cookie)) {
        errorFound = true;
        errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
      } else if (!isHostPrefixConditionMet(cookie)) {
        errorFound = true;
        errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
      }
      if (errorFound) {
        return options?.ignoreError || ignoreErrorForPrefixSecurity ? promiseCallback.resolve(void 0) : promiseCallback.reject(new Error(errorMsg));
      }
    }
    const store = this.store;
    if (!store.updateCookie) {
      store.updateCookie = async function(_oldCookie, newCookie, cb2) {
        return this.putCookie(newCookie).then(
          () => cb2?.(null),
          (error) => cb2?.(error)
        );
      };
    }
    const withCookie = function withCookie2(err, oldCookie) {
      if (err) {
        cb(err);
        return;
      }
      const next = function(err2) {
        if (err2) {
          cb(err2);
        } else if (typeof cookie === "string") {
          cb(null, void 0);
        } else {
          cb(null, cookie);
        }
      };
      if (oldCookie) {
        if (options && "http" in options && options.http === false && oldCookie.httpOnly) {
          err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
          if (options.ignoreError) cb(null, void 0);
          else cb(err);
          return;
        }
        if (cookie instanceof Cookie) {
          cookie.creation = oldCookie.creation;
          cookie.creationIndex = oldCookie.creationIndex;
          cookie.lastAccessed = now;
          store.updateCookie(oldCookie, cookie, next);
        }
      } else {
        if (cookie instanceof Cookie) {
          cookie.creation = cookie.lastAccessed = now;
          store.putCookie(cookie, next);
        }
      }
    };
    store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
    return promiseCallback.promise;
  }
  /**
   * Synchronously attempt to set the {@link Cookie} in the {@link CookieJar}.
   *
   * <strong>Note:</strong> Only works if the configured {@link Store} is also synchronous.
   *
   * @remarks
   * - If successfully persisted, the {@link Cookie} will have updated
   *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
   *     properties.
   *
   * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
   *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
   *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
   *     exact hostname match (not a {@link domainMatch} as per usual)
   *
   * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when storing the cookie.
   * @public
   */
  setCookieSync(cookie, url, options) {
    const setCookieFn = options ? this.setCookie.bind(this, cookie, url, options) : this.setCookie.bind(this, cookie, url);
    return this.callSync(setCookieFn);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookies(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = defaultGetCookieOptions;
    } else if (options === void 0) {
      options = defaultGetCookieOptions;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    let context;
    try {
      if (typeof url === "string") {
        validate(isNonEmptyString(url), cb, url);
      }
      context = getCookieContext(url);
      validate(
        isObject(options),
        cb,
        safeToString(options)
      );
      validate(typeof cb === "function", cb);
    } catch (parameterError) {
      return promiseCallback.reject(parameterError);
    }
    const host = canonicalDomain(context.hostname);
    const path = context.pathname || "/";
    const potentiallyTrustworthy = isPotentiallyTrustworthy(
      url,
      this.allowSecureOnLocal
    );
    let sameSiteLevel = 0;
    if (options.sameSiteContext) {
      const sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      if (sameSiteContext == null) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
      sameSiteLevel = Cookie.sameSiteLevel[sameSiteContext];
      if (!sameSiteLevel) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }
    const http = options.http ?? true;
    const now = Date.now();
    const expireCheck = options.expire ?? true;
    const allPaths = options.allPaths ?? false;
    const store = this.store;
    function matchingCookie(c) {
      if (c.hostOnly) {
        if (c.domain != host) {
          return false;
        }
      } else {
        if (!domainMatch(host ?? void 0, c.domain ?? void 0, false)) {
          return false;
        }
      }
      if (!allPaths && typeof c.path === "string" && !pathMatch(path, c.path)) {
        return false;
      }
      if (c.secure && !potentiallyTrustworthy) {
        return false;
      }
      if (c.httpOnly && !http) {
        return false;
      }
      if (sameSiteLevel) {
        let cookieLevel;
        if (c.sameSite === "lax") {
          cookieLevel = Cookie.sameSiteLevel.lax;
        } else if (c.sameSite === "strict") {
          cookieLevel = Cookie.sameSiteLevel.strict;
        } else {
          cookieLevel = Cookie.sameSiteLevel.none;
        }
        if (cookieLevel > sameSiteLevel) {
          return false;
        }
      }
      const expiryTime = c.expiryTime();
      if (expireCheck && expiryTime != void 0 && expiryTime <= now) {
        store.removeCookie(c.domain, c.path, c.key, () => {
        });
        return false;
      }
      return true;
    }
    store.findCookies(
      host,
      allPaths ? null : path,
      this.allowSpecialUseDomain,
      (err, cookies) => {
        if (err) {
          cb(err);
          return;
        }
        if (cookies == null) {
          cb(null, []);
          return;
        }
        cookies = cookies.filter(matchingCookie);
        if ("sort" in options && options.sort !== false) {
          cookies = cookies.sort(cookieCompare);
        }
        const now2 = /* @__PURE__ */ new Date();
        for (const cookie of cookies) {
          cookie.lastAccessed = now2;
        }
        cb(null, cookies);
      }
    );
    return promiseCallback.promise;
  }
  /**
   * Synchronously retrieve the list of cookies that can be sent in a Cookie header for the
   * current URL.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - The array of cookies returned will be sorted according to {@link cookieCompare}.
   *
   * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getCookiesSync(url, options) {
    return this.callSync(this.getCookies.bind(this, url, options)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookieString(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const next = function(err, cookies) {
      if (err) {
        promiseCallback.callback(err);
      } else {
        promiseCallback.callback(
          null,
          cookies?.sort(cookieCompare).map((c) => c.cookieString()).join("; ")
        );
      }
    };
    this.getCookies(url, options, next);
    return promiseCallback.promise;
  }
  /**
   * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
   * `Cookie` header rather than an Array.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getCookieStringSync(url, options) {
    return this.callSync(
      options ? this.getCookieString.bind(this, url, options) : this.getCookieString.bind(this, url)
    ) ?? "";
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getSetCookieStrings(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(
      callback
    );
    const next = function(err, cookies) {
      if (err) {
        promiseCallback.callback(err);
      } else {
        promiseCallback.callback(
          null,
          cookies?.map((c) => {
            return c.toString();
          })
        );
      }
    };
    this.getCookies(url, options, next);
    return promiseCallback.promise;
  }
  /**
   * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
   * Accepts the same options as `.getCookies()`.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getSetCookieStringsSync(url, options = {}) {
    return this.callSync(this.getSetCookieStrings.bind(this, url, options)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  serialize(callback) {
    const promiseCallback = createPromiseCallback(callback);
    let type = this.store.constructor.name;
    if (isObject(type)) {
      type = null;
    }
    const serialized = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${version}`,
      // add the store type, to make humans happy:
      storeType: type,
      // CookieJar configuration:
      rejectPublicSuffixes: this.rejectPublicSuffixes,
      enableLooseMode: this.enableLooseMode,
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (typeof this.store.getAllCookies !== "function") {
      return promiseCallback.reject(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    }
    this.store.getAllCookies((err, cookies) => {
      if (err) {
        promiseCallback.callback(err);
        return;
      }
      if (cookies == null) {
        promiseCallback.callback(null, serialized);
        return;
      }
      serialized.cookies = cookies.map((cookie) => {
        const serializedCookie = cookie.toJSON();
        delete serializedCookie.creationIndex;
        return serializedCookie;
      });
      promiseCallback.callback(null, serialized);
    });
    return promiseCallback.promise;
  }
  /**
   * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   */
  serializeSync() {
    return this.callSync((callback) => {
      this.serialize(callback);
    });
  }
  /**
   * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
   * with `JSON.stringify(cookieJar)`.
   */
  toJSON() {
    return this.serializeSync();
  }
  /**
   * Use the class method CookieJar.deserialize instead of calling this directly
   * @internal
   */
  _importCookies(serialized, callback) {
    let cookies = void 0;
    if (serialized && typeof serialized === "object" && inOperator("cookies", serialized) && Array.isArray(serialized.cookies)) {
      cookies = serialized.cookies;
    }
    if (!cookies) {
      callback(new Error("serialized jar has no cookies array"), void 0);
      return;
    }
    cookies = cookies.slice();
    const putNext = (err) => {
      if (err) {
        callback(err, void 0);
        return;
      }
      if (Array.isArray(cookies)) {
        if (!cookies.length) {
          callback(err, this);
          return;
        }
        let cookie;
        try {
          cookie = Cookie.fromJSON(cookies.shift());
        } catch (e) {
          callback(e instanceof Error ? e : new Error(), void 0);
          return;
        }
        if (cookie === void 0) {
          putNext(null);
          return;
        }
        this.store.putCookie(cookie, putNext);
      }
    };
    putNext(null);
  }
  /**
   * @internal
   */
  _importCookiesSync(serialized) {
    this.callSync(this._importCookies.bind(this, serialized));
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  clone(newStore, callback) {
    if (typeof newStore === "function") {
      callback = newStore;
      newStore = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    this.serialize((err, serialized) => {
      if (err) {
        return promiseCallback.reject(err);
      }
      return _CookieJar.deserialize(serialized ?? "", newStore, cb);
    });
    return promiseCallback.promise;
  }
  /**
   * @internal
   */
  _cloneSync(newStore) {
    const cloneFn = newStore && typeof newStore !== "function" ? this.clone.bind(this, newStore) : this.clone.bind(this);
    return this.callSync((callback) => {
      cloneFn(callback);
    });
  }
  /**
   * Produces a deep clone of this CookieJar. Modifications to the original do
   * not affect the clone, and vice versa.
   *
   * <strong>Note</strong>: Only works if both the configured Store and destination
   * Store are synchronous.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - Transferring between store types is supported so long as the source
   *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
   *
   * @param newStore - The target {@link Store} to clone cookies into.
   */
  cloneSync(newStore) {
    if (!newStore) {
      return this._cloneSync();
    }
    if (!newStore.synchronous) {
      throw new Error(
        "CookieJar clone destination store is not synchronous; use async API instead."
      );
    }
    return this._cloneSync(newStore);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  removeAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    const store = this.store;
    if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== Store.prototype.removeAllCookies) {
      store.removeAllCookies(cb);
      return promiseCallback.promise;
    }
    store.getAllCookies((err, cookies) => {
      if (err) {
        cb(err);
        return;
      }
      if (!cookies) {
        cookies = [];
      }
      if (cookies.length === 0) {
        cb(null, void 0);
        return;
      }
      let completedCount = 0;
      const removeErrors = [];
      const removeCookieCb = function removeCookieCb2(removeErr) {
        if (removeErr) {
          removeErrors.push(removeErr);
        }
        completedCount++;
        if (completedCount === cookies.length) {
          if (removeErrors[0]) cb(removeErrors[0]);
          else cb(null, void 0);
          return;
        }
      };
      cookies.forEach((cookie) => {
        store.removeCookie(
          cookie.domain,
          cookie.path,
          cookie.key,
          removeCookieCb
        );
      });
    });
    return promiseCallback.promise;
  }
  /**
   * Removes all cookies from the CookieJar.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - This is a new backwards-compatible feature of tough-cookie version 2.5,
   *     so not all Stores will implement it efficiently. For Stores that do not
   *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
   *     `getAllCookies`.
   *
   * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
   *
   * - If one or more of the `removeCookie` calls fail, only the first error is returned.
   */
  removeAllCookiesSync() {
    this.callSync((callback) => {
      this.removeAllCookies(callback);
    });
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  static deserialize(strOrObj, store, callback) {
    if (typeof store === "function") {
      callback = store;
      store = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    let serialized;
    if (typeof strOrObj === "string") {
      try {
        serialized = JSON.parse(strOrObj);
      } catch (e) {
        return promiseCallback.reject(e instanceof Error ? e : new Error());
      }
    } else {
      serialized = strOrObj;
    }
    const readSerializedProperty = (property) => {
      return serialized && typeof serialized === "object" && inOperator(property, serialized) ? serialized[property] : void 0;
    };
    const readSerializedBoolean = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "boolean" ? value : void 0;
    };
    const readSerializedString = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "string" ? value : void 0;
    };
    const jar = new _CookieJar(store, {
      rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
      looseMode: readSerializedBoolean("enableLooseMode"),
      allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
      prefixSecurity: getNormalizedPrefixSecurity(
        readSerializedString("prefixSecurity") ?? "silent"
      )
    });
    jar._importCookies(serialized, (err) => {
      if (err) {
        promiseCallback.callback(err);
        return;
      }
      promiseCallback.callback(null, jar);
    });
    return promiseCallback.promise;
  }
  /**
   * A new CookieJar is created and the serialized {@link Cookie} values are added to
   * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
   * the order in which they appear in the serialization.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
   *
   * @param strOrObj - A JSON string or object representing the deserialized cookies.
   * @param store - The underlying store to persist the deserialized cookies into.
   */
  static deserializeSync(strOrObj, store) {
    const serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
    const readSerializedProperty = (property) => {
      return serialized && typeof serialized === "object" && inOperator(property, serialized) ? serialized[property] : void 0;
    };
    const readSerializedBoolean = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "boolean" ? value : void 0;
    };
    const readSerializedString = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "string" ? value : void 0;
    };
    const jar = new _CookieJar(store, {
      rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
      looseMode: readSerializedBoolean("enableLooseMode"),
      allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
      prefixSecurity: getNormalizedPrefixSecurity(
        readSerializedString("prefixSecurity") ?? "silent"
      )
    });
    if (!jar.store.synchronous) {
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    }
    jar._importCookiesSync(serialized);
    return jar;
  }
  /**
   * Alias of {@link CookieJar.deserializeSync}.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
   *
   * @param jsonString - A JSON string or object representing the deserialized cookies.
   * @param store - The underlying store to persist the deserialized cookies into.
   */
  static fromJSON(jsonString, store) {
    return _CookieJar.deserializeSync(jsonString, store);
  }
};

// lib/cookie/permutePath.ts
function permutePath(path) {
  if (path === "/") {
    return ["/"];
  }
  const permutations = [path];
  while (path.length > 1) {
    const lindex = path.lastIndexOf("/");
    if (lindex === 0) {
      break;
    }
    path = path.slice(0, lindex);
    permutations.push(path);
  }
  permutations.push("/");
  return permutations;
}

// lib/cookie/index.ts
function parse2(str, options) {
  return Cookie.parse(str, options);
}
function fromJSON2(str) {
  return Cookie.fromJSON(str);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cookie,
  CookieJar,
  MemoryCookieStore,
  ParameterError,
  PrefixSecurityEnum,
  Store,
  canonicalDomain,
  cookieCompare,
  defaultPath,
  domainMatch,
  formatDate,
  fromJSON,
  getPublicSuffix,
  parse,
  parseDate,
  pathMatch,
  permuteDomain,
  permutePath,
  version
});
/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=index.cjs.map