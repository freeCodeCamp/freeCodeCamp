"use strict";

exports.__esModule = true;
exports.createMutex = createMutex;
exports.releaseAllMutexes = releaseAllMutexes;
var _getStorage = require("./utils/get-storage");
// Random number to re-check if mutex got released
const DEFAULT_MUTEX_INTERVAL = 3000;
async function waitUntilUnlocked(storage, key, timeout) {
  const isUnlocked = await storage.mutex.ifNoExists(key, () => {
    storage.mutex.put(key, _getStorage.LockStatus.Locked);
  });
  if (isUnlocked) {
    return;
  }
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(waitUntilUnlocked(storage, key, timeout));
    }, timeout);
  });
}

/**
 * Creates a mutex, make sure to call `release` when you're done with it.
 *
 * @param {string} key A unique key
 */
function createMutex(key, timeout = DEFAULT_MUTEX_INTERVAL) {
  var _global$__GATSBY$buil, _global$__GATSBY;
  const storage = (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)());
  const BUILD_ID = (_global$__GATSBY$buil = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.buildId) !== null && _global$__GATSBY$buil !== void 0 ? _global$__GATSBY$buil : ``;
  const prefixedKey = `${BUILD_ID}-${key}`;
  return {
    acquire: () => waitUntilUnlocked(storage, prefixedKey, timeout),
    release: async () => {
      await storage.mutex.remove(prefixedKey);
    }
  };
}
async function releaseAllMutexes() {
  const storage = (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)());
  await storage.mutex.clearAsync();
}