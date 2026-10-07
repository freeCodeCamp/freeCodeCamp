"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyBucketServiceSync = exports.StickyBucketService = exports.RedisStickyBucketService = exports.LocalStorageStickyBucketService = exports.ExpressCookieStickyBucketService = exports.BrowserCookieStickyBucketService = void 0;
var _util = require("./util");
var _core = require("./core");
/**
 * Responsible for reading and writing documents which describe sticky bucket assignments.
 */
class StickyBucketService {
  constructor(opts) {
    opts = opts || {};
    this.prefix = opts.prefix || "";
  }
  /**
   * The SDK calls getAllAssignments to populate sticky buckets. This in turn will
   * typically loop through individual getAssignments calls. However, some StickyBucketService
   * instances (i.e. Redis) will instead perform a multi-query inside getAllAssignments instead.
   */
  async getAllAssignments(attributes) {
    const docs = {};
    (await Promise.all(Object.entries(attributes).map(([attributeName, attributeValue]) => this.getAssignments(attributeName, attributeValue)))).forEach(doc => {
      if (doc) {
        const key = (0, _core.getStickyBucketAttributeKey)(doc.attributeName, doc.attributeValue);
        docs[key] = doc;
      }
    });
    return docs;
  }
  getKey(attributeName, attributeValue) {
    return `${this.prefix}${attributeName}||${attributeValue}`;
  }
}
exports.StickyBucketService = StickyBucketService;
class StickyBucketServiceSync extends StickyBucketService {
  async getAssignments(attributeName, attributeValue) {
    return this.getAssignmentsSync(attributeName, attributeValue);
  }
  async saveAssignments(doc) {
    this.saveAssignmentsSync(doc);
  }
  getAllAssignmentsSync(attributes) {
    const docs = {};
    Object.entries(attributes).map(([attributeName, attributeValue]) => this.getAssignmentsSync(attributeName, attributeValue)).forEach(doc => {
      if (doc) {
        const key = (0, _core.getStickyBucketAttributeKey)(doc.attributeName, doc.attributeValue);
        docs[key] = doc;
      }
    });
    return docs;
  }
}
exports.StickyBucketServiceSync = StickyBucketServiceSync;
class LocalStorageStickyBucketService extends StickyBucketService {
  constructor(opts) {
    opts = opts || {};
    super();
    this.prefix = opts.prefix || "gbStickyBuckets__";
    try {
      this.localStorage = opts.localStorage || globalThis.localStorage;
    } catch (e) {
      // Ignore localStorage errors
    }
  }
  async getAssignments(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.localStorage) return doc;
    try {
      const raw = (await this.localStorage.getItem(key)) || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    return doc;
  }
  async saveAssignments(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.localStorage) return;
    try {
      await this.localStorage.setItem(key, JSON.stringify(doc));
    } catch (e) {
      // Ignore localStorage errors
    }
  }
}
exports.LocalStorageStickyBucketService = LocalStorageStickyBucketService;
class ExpressCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value must be manually encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */

  constructor({
    prefix = "gbStickyBuckets__",
    req,
    res,
    cookieAttributes = {
      maxAge: 180 * 24 * 3600 * 1000
    } // 180 days
  }) {
    super();
    this.prefix = prefix;
    this.req = req;
    this.res = res;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.req) return doc;
    try {
      const raw = this.req.cookies[key] || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  saveAssignmentsSync(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.res) return;
    const str = JSON.stringify(doc);
    this.res.cookie(encodeURIComponent(key), encodeURIComponent(str), this.cookieAttributes);
  }
}
exports.ExpressCookieStickyBucketService = ExpressCookieStickyBucketService;
class BrowserCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with npm: 'js-cookie'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value is automatically encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */

  constructor({
    prefix = "gbStickyBuckets__",
    jsCookie,
    cookieAttributes = {
      expires: 180
    } // 180 days
  }) {
    super();
    this.prefix = prefix;
    this.jsCookie = jsCookie;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.jsCookie) return doc;
    try {
      const raw = this.jsCookie.get(key);
      const data = JSON.parse(raw || "{}");
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  async saveAssignmentsSync(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.jsCookie) return;
    const str = JSON.stringify(doc);
    this.jsCookie.set(key, str, this.cookieAttributes);
  }
}
exports.BrowserCookieStickyBucketService = BrowserCookieStickyBucketService;
class RedisStickyBucketService extends StickyBucketService {
  /** Intended to be used with npm: 'ioredis'. **/

  constructor({
    redis
  }) {
    super();
    this.redis = redis;
  }
  async getAllAssignments(attributes) {
    const docs = {};
    const keys = Object.entries(attributes).map(([attributeName, attributeValue]) => (0, _core.getStickyBucketAttributeKey)(attributeName, attributeValue));
    if (!this.redis) return docs;
    await this.redis.mget(...keys).then(values => {
      values.forEach(raw => {
        try {
          const data = JSON.parse(raw || "{}");
          if (data.attributeName && "attributeValue" in data && data.assignments) {
            const key = (0, _core.getStickyBucketAttributeKey)(data.attributeName, (0, _util.toString)(data.attributeValue));
            docs[key] = data;
          }
        } catch (e) {
          // ignore redis doc parse errors
        }
      });
    });
    return docs;
  }
  async getAssignments(_attributeName, _attributeValue) {
    // not implemented
    return null;
  }
  async saveAssignments(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.redis) return;
    await this.redis.set(key, JSON.stringify(doc));
  }
}
exports.RedisStickyBucketService = RedisStickyBucketService;
//# sourceMappingURL=sticky-bucket-service.js.map