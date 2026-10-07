"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _cacheManager = _interopRequireDefault(require("cache-manager"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var fsStore = _interopRequireWildcard(require("../cache/cache-fs"));
var _path = _interopRequireDefault(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MAX_CACHE_SIZE = 250;
const TTL = Number.MAX_SAFE_INTEGER;
class GatsbyCache {
  // TODO: remove `.cache` in v4. This is compat mode - cache-manager cache implementation
  // expose internal cache that gives access to `.del` function that wasn't available in public
  // cache interface (gatsby-plugin-sharp use it to clear no longer needed data)

  // @ts-ignore - set & get types are missing from fsStore?
  constructor({
    name = `db`,
    store = fsStore
  } = {}) {
    var _global$__GATSBY$root, _global$__GATSBY;
    this.name = name;
    this.store = store;
    this.directory = _path.default.join((_global$__GATSBY$root = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) !== null && _global$__GATSBY$root !== void 0 ? _global$__GATSBY$root : process.cwd(), `.cache`, `caches`, name);
  }
  init() {
    _fsExtra.default.ensureDirSync(this.directory);
    const configs = [{
      store: `memory`,
      max: MAX_CACHE_SIZE,
      ttl: TTL
    }, {
      store: this.store,
      ttl: TTL,
      options: {
        path: this.directory,
        ttl: TTL
      }
    }];
    const caches = configs.map(cache => _cacheManager.default.caching(cache));
    this.cache = _cacheManager.default.multiCaching(caches);
    return this;
  }
  async get(key) {
    return new Promise(resolve => {
      if (!this.cache) {
        throw new Error(`GatsbyCache wasn't initialised yet, please run the init method first`);
      }
      this.cache.get(key, (err, res) => {
        resolve(err ? undefined : res);
      });
    });
  }
  async set(key, value, args = {
    ttl: TTL
  }) {
    return new Promise(resolve => {
      if (!this.cache) {
        throw new Error(`GatsbyCache wasn't initialised yet, please run the init method first`);
      }
      this.cache.set(key, value, args, err => {
        resolve(err ? undefined : value);
      });
    });
  }
  async del(key) {
    if (!this.cache) {
      throw new Error(`GatsbyCache wasn't initialised yet, please run the init method first`);
    }
    return this.cache.del(key);
  }
}
exports.default = GatsbyCache;
//# sourceMappingURL=cache.js.map