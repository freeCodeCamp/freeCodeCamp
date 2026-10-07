"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.clearStaticQueryCaches = clearStaticQueryCaches;
exports.getStaticQueryResult = exports.getStaticQueryPath = exports.getStaticQueryContext = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const {
  join
} = path.posix;
const getStaticQueryPath = hash => join(`page-data`, `sq`, `d`, `${hash}.json`);
exports.getStaticQueryPath = getStaticQueryPath;
const getStaticQueryResult = async hash => {
  const staticQueryPath = getStaticQueryPath(hash);
  const absoluteStaticQueryPath = join(process.cwd(), `public`, staticQueryPath);
  const staticQueryRaw = await _fsExtra.default.readFile(absoluteStaticQueryPath);
  return JSON.parse(staticQueryRaw.toString());
};
exports.getStaticQueryResult = getStaticQueryResult;
const staticQueryResultCache = new Map();
const inFlightStaticQueryPromise = new Map();
function clearStaticQueryCaches() {
  staticQueryResultCache.clear();
  inFlightStaticQueryPromise.clear();
}
const getStaticQueryContext = async staticQueryHashes => {
  const staticQueryResultPromises = [];
  const staticQueryContext = {};
  for (const staticQueryHash of staticQueryHashes) {
    const memoizedStaticQueryResult = staticQueryResultCache.get(staticQueryHash);
    if (memoizedStaticQueryResult) {
      staticQueryContext[staticQueryHash] = memoizedStaticQueryResult;
      continue;
    }
    let getStaticQueryPromise = inFlightStaticQueryPromise.get(staticQueryHash);
    if (!getStaticQueryPromise) {
      getStaticQueryPromise = getStaticQueryResult(staticQueryHash);
      inFlightStaticQueryPromise.set(staticQueryHash, getStaticQueryPromise);
      getStaticQueryPromise.then(() => {
        inFlightStaticQueryPromise.delete(staticQueryHash);
      });
    }
    staticQueryResultPromises.push(getStaticQueryPromise.then(results => {
      staticQueryContext[staticQueryHash] = results;
    }));
  }
  await Promise.all(staticQueryResultPromises);
  return {
    staticQueryContext
  };
};
exports.getStaticQueryContext = getStaticQueryContext;
//# sourceMappingURL=static-query-utils.js.map