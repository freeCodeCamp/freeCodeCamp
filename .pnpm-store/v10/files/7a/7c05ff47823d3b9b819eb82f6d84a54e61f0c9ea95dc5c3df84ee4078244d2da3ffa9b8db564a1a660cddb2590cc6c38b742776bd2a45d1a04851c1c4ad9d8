/**
 * A utility class for safely interacting with localStorage.
 */
export class LocalStorage {
  static store: Storage | undefined = ensureLocalStorage();

  /**
   * Safely get a value from localStorage.
   * If the value is not able to be parsed as JSON, this method will return null.
   *
   * @param key - String value of the key.
   * @returns Null if the key is not found or unable to be parsed, the value otherwise.
   */
  static get<T>(key: string): T | null {
    const val = this.store?.getItem(key);
    if (!val) {
      return null;
    }

    try {
      return JSON.parse(val) as T;
    } catch {
      return null;
    }
  }

  /**
   * Safely set a value in localStorage.
   * If the storage is full, this method will catch the error and log a warning.
   *
   * @param key - String value of the key.
   * @param value - Any value to store.
   */
  static set(key: string, value: any): void {
    try {
      this.store?.setItem(key, JSON.stringify(value));
    } catch {
      // eslint-disable-next-line no-console
      console.error(
        `Unable to set ${key} in localStorage, storage may be full.`
      );
    }
  }

  /**
   * Remove a value from localStorage.
   *
   * @param key - String value of the key.
   */
  static remove(key: string): void {
    this.store?.removeItem(key);
  }
}

function ensureLocalStorage(): Storage | undefined {
  try {
    const testKey = "__test_localStorage__";
    globalThis.localStorage.setItem(testKey, testKey);
    globalThis.localStorage.removeItem(testKey);
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}
