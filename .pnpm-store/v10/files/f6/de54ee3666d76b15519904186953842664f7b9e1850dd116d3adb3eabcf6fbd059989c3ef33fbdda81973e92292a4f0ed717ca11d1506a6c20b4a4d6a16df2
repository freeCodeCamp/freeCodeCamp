var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _isNull, _item;
import { LRUCache } from "lru-cache";
import { valueToJsonString } from "./util.js";
const MAX_CACHE = 4096;
class CacheItem {
  /**
   * constructor
   */
  constructor(item, isNull = false) {
    /* private */
    __privateAdd(this, _isNull);
    __privateAdd(this, _item);
    __privateSet(this, _item, item);
    __privateSet(this, _isNull, !!isNull);
  }
  get item() {
    return __privateGet(this, _item);
  }
  get isNull() {
    return __privateGet(this, _isNull);
  }
}
_isNull = new WeakMap();
_item = new WeakMap();
class NullObject extends CacheItem {
  /**
   * constructor
   */
  constructor() {
    super(Symbol("null"), true);
  }
}
const lruCache = new LRUCache({
  max: MAX_CACHE
});
const setCache = (key, value) => {
  if (key) {
    if (value === null) {
      lruCache.set(key, new NullObject());
    } else if (value instanceof CacheItem) {
      lruCache.set(key, value);
    } else {
      lruCache.set(key, new CacheItem(value));
    }
  }
};
const getCache = (key) => {
  if (key && lruCache.has(key)) {
    const item = lruCache.get(key);
    if (item instanceof CacheItem) {
      return item;
    }
    lruCache.delete(key);
    return false;
  }
  return false;
};
const createCacheKey = (keyData, opt = {}) => {
  const { customProperty = {}, dimension = {} } = opt;
  let cacheKey = "";
  if (keyData && Object.keys(keyData).length && typeof customProperty.callback !== "function" && typeof dimension.callback !== "function") {
    keyData.opt = valueToJsonString(opt);
    cacheKey = valueToJsonString(keyData);
  }
  return cacheKey;
};
export {
  CacheItem,
  NullObject,
  createCacheKey,
  getCache,
  lruCache,
  setCache
};
//# sourceMappingURL=cache.js.map
