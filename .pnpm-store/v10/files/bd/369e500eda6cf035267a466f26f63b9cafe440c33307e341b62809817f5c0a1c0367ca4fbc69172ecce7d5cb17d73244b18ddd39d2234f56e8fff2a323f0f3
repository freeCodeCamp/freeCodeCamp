"use strict";

exports.__esModule = true;
exports.default = void 0;
exports.resetCache = resetCache;
var _lmdb = require("lmdb");
var fs = _interopRequireWildcard(require("fs-extra"));
var path = _interopRequireWildcard(require("path"));
var _process$env$FORCE_TE, _global$__GATSBY;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Since the regular GatsbyCache saves to "caches" this should be "caches-lmdb"
const cacheDbFile = process.env.NODE_ENV === `test` ? `caches-lmdb-${
// FORCE_TEST_DATABASE_ID will be set if this gets executed in worker context
// when running jest tests. JEST_WORKER_ID will be set when this gets executed directly
// in test context (jest will use jest-worker internally).
(_process$env$FORCE_TE = process.env.FORCE_TEST_DATABASE_ID) !== null && _process$env$FORCE_TE !== void 0 ? _process$env$FORCE_TE : process.env.JEST_WORKER_ID}` : `caches-lmdb`;
const dbPath = path.join(((_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) || process.cwd(), `.cache/${cacheDbFile}`);
function getAlreadyOpenedStore() {
  if (!globalThis.__GATSBY_OPEN_ROOT_LMDBS) {
    globalThis.__GATSBY_OPEN_ROOT_LMDBS = new Map();
  }
  return globalThis.__GATSBY_OPEN_ROOT_LMDBS.get(dbPath);
}
class GatsbyCacheLmdb {
  // Needed for plugins that want to write data to the cache directory

  // TODO: remove `.cache` in v4. This is compat mode - cache-manager cache implementation
  // expose internal cache that gives access to `.del` function that wasn't available in public
  // cache interface (gatsby-plugin-sharp use it to clear no longer needed data)

  constructor({
    name = `db`,
    encoding = `json`
  }) {
    this.name = name;
    this.encoding = encoding;
    this.directory = path.join(process.cwd(), `.cache/caches/${name}`);
    this.cache = this;
  }
  init() {
    fs.ensureDirSync(this.directory);
    return this;
  }
  static getStore() {
    let rootDb = getAlreadyOpenedStore();
    if (rootDb) {
      return rootDb;
    }
    rootDb = (0, _lmdb.open)({
      name: `root`,
      path: dbPath,
      compression: true,
      maxDbs: 200
    });
    globalThis.__GATSBY_OPEN_ROOT_LMDBS.set(dbPath, rootDb);
    return rootDb;
  }
  getDb() {
    if (!this.db) {
      this.db = GatsbyCacheLmdb.getStore().openDB({
        name: this.name,
        encoding: this.encoding
      });
    }
    return this.db;
  }
  async get(key) {
    return this.getDb().get(key);
  }
  async set(key, value) {
    await this.getDb().put(key, value);
    return value;
  }
  async del(key) {
    return this.getDb().remove(key);
  }
}
exports.default = GatsbyCacheLmdb;
async function resetCache() {
  const store = getAlreadyOpenedStore();
  if (store) {
    await store.close();
    globalThis.__GATSBY_OPEN_ROOT_LMDBS.delete(dbPath);
  }
  await fs.emptyDir(dbPath);
}
//# sourceMappingURL=cache-lmdb.js.map