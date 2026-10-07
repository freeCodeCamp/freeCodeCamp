interface LRFUExpirerOptions {
  lruSize?: number;
  cleanupInterval?: number;
}

export class LRFUExpirer {
  constructor(options?: LRFUExpirerOptions);
}

interface WeakLRUCacheOptions {
  cacheSize?: number;
  expirer?: LRFUExpirer | false;
  deferRegister?: boolean;
}

export class CacheEntry<V> {
  value?: V
  deref?(): V
}

export class WeakLRUCache<K, V> extends Map<K, CacheEntry<V>> {
  constructor(options?: WeakLRUCacheOptions);

  /**
   * Get a value from the cache, if it is still in memory. If the value is no longer cached, will return undefined.
   * @param key The key to use to retrieve the value
   */
  getValue(key: K): V | undefined;
  /**
   * Put a key-value into the cache
   * @param key The key to use to insert the entry
   * @param value The value to insert into the cache
   * @param expirationPriority A priority for expiration, a higher value will expire sooner
   */
   setValue(key: K, value: V, expirationPriority?: number): void;
}
