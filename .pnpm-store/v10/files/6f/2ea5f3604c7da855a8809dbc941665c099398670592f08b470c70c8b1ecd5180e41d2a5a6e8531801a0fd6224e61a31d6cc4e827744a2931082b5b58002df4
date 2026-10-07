"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.LockStatus = void 0;
exports.closeDatabase = closeDatabase;
exports.getDatabaseDir = getDatabaseDir;
exports.getStorage = getStorage;
var _path = _interopRequireDefault(require("path"));
var _getLmdb = require("./get-lmdb");
let LockStatus;
exports.LockStatus = LockStatus;
(function (LockStatus) {
  LockStatus[LockStatus["Locked"] = 0] = "Locked";
  LockStatus[LockStatus["Unlocked"] = 1] = "Unlocked";
})(LockStatus || (exports.LockStatus = LockStatus = {}));
let databases;
let rootDb;
function getDatabaseDir() {
  var _global$__GATSBY$root, _global$__GATSBY;
  const rootDir = (_global$__GATSBY$root = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) !== null && _global$__GATSBY$root !== void 0 ? _global$__GATSBY$root : process.cwd();
  return _path.default.join(rootDir, `.cache`, `data`, `gatsby-core-utils`);
}
function getStorage(fullDbPath) {
  if (!databases) {
    if (!fullDbPath) {
      throw new Error(`LMDB path is not set!`);
    }

    // __GATSBY_OPEN_LMDBS tracks if we already opened given db in this process
    // In `gatsby serve` case we might try to open it twice - once for engines
    // and second to get access to `SitePage` nodes (to power trailing slashes
    // redirect middleware). This ensure there is single instance within a process.
    // Using more instances seems to cause weird random errors.
    if (!globalThis.__GATSBY_OPEN_LMDBS) {
      globalThis.__GATSBY_OPEN_LMDBS = new Map();
    }
    databases = globalThis.__GATSBY_OPEN_LMDBS.get(fullDbPath);
    if (databases) {
      return databases;
    }
    const open = (0, _getLmdb.getLmdb)().open;
    rootDb = open({
      name: `root`,
      path: fullDbPath,
      compression: true,
      sharedStructuresKey: Symbol.for(`structures`)
    });
    databases = {
      remoteFileInfo: rootDb.openDB({
        name: `remote-file`
      }),
      mutex: rootDb.openDB({
        name: `mutex`
      })
    };
    globalThis.__GATSBY_OPEN_LMDBS.set(fullDbPath, databases);
  }
  return databases;
}
async function closeDatabase() {
  if (rootDb) {
    await rootDb.close();
    databases = undefined;
  }
}