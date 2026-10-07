/**
 * cache
 */

import { LRUCache } from 'lru-cache';
import { Options } from './typedef';
import { valueToJsonString } from './util';

/* numeric constants */
const MAX_CACHE = 4096;

/**
 * CacheItem
 */
export class CacheItem {
  /* private */
  #isNull: boolean;
  #item: unknown;

  /**
   * constructor
   */
  constructor(item: unknown, isNull: boolean = false) {
    this.#item = item;
    this.#isNull = !!isNull;
  }

  get item() {
    return this.#item;
  }

  get isNull() {
    return this.#isNull;
  }
}

/**
 * NullObject
 */
export class NullObject extends CacheItem {
  /**
   * constructor
   */
  constructor() {
    super(Symbol('null'), true);
  }
}

/*
 * lru cache
 */
export const lruCache = new LRUCache({
  max: MAX_CACHE
});

/**
 * set cache
 * @param key - cache key
 * @param value - value to cache
 * @returns void
 */
export const setCache = (key: string, value: unknown): void => {
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

/**
 * get cache
 * @param key - cache key
 * @returns cached item or false otherwise
 */
export const getCache = (key: string): CacheItem | boolean => {
  if (key && lruCache.has(key)) {
    const item = lruCache.get(key);
    if (item instanceof CacheItem) {
      return item;
    }
    // delete unexpected cached item
    lruCache.delete(key);
    return false;
  }
  return false;
};

/**
 * create cache key
 * @param keyData - key data
 * @param [opt] - options
 * @returns cache key
 */
export const createCacheKey = (
  keyData: Record<string, string>,
  opt: Options = {}
): string => {
  const { customProperty = {}, dimension = {} } = opt;
  let cacheKey = '';
  if (
    keyData &&
    Object.keys(keyData).length &&
    typeof customProperty.callback !== 'function' &&
    typeof dimension.callback !== 'function'
  ) {
    keyData.opt = valueToJsonString(opt);
    cacheKey = valueToJsonString(keyData);
  }
  return cacheKey;
};
