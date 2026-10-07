"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.recompile = recompile;
var fs = _interopRequireWildcard(require("fs-extra"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redux = require("../redux");
var _buildHtml = require("../commands/build-html");
var _types = require("../commands/types");
var _clearRequireCache = require("../utils/clear-require-cache");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable no-unused-expressions */

async function recompile(context) {
  const [stats] = await Promise.all([recompileDevBundle(context), recompileSSRBundle(context)]);
  return stats;
}
async function recompileDevBundle({
  webpackWatching
}) {
  if (!webpackWatching) {
    _reporter.default.panic(`Missing compiler`);
  }
  return new Promise(resolve => {
    function finish(stats) {
      _redux.emitter.off(`COMPILATION_DONE`, finish);
      resolve(stats);
    }
    _redux.emitter.on(`COMPILATION_DONE`, finish);
    webpackWatching.resume();
    // Suspending is just a flag, so it's safe to re-suspend right away
    webpackWatching.suspend();
  });
}
async function recompileSSRBundle({
  program,
  websocketManager,
  recompiledFiles = new Set()
}) {
  if (!(await includesSSRComponent(recompiledFiles))) {
    return;
  }
  _reporter.default.verbose(`Recompiling SSR bundle`);
  const {
    close,
    rendererPath
  } = await (0, _buildHtml.buildRenderer)(program, _types.Stage.DevelopHTML);
  (0, _clearRequireCache.clearRequireCacheRecursively)(rendererPath);
  if (websocketManager) {
    websocketManager.emitStaleServerData();
  }
  await close();
}
async function includesSSRComponent(recompiledFiles) {
  const result = await Promise.all(Array.from(recompiledFiles).map(path => isSSRPageComponent(path)));
  return result.some(isSSR => isSSR === true);
}
async function isSSRPageComponent(filename) {
  if (!(await fs.pathExists(filename)) || !(await fs.lstat(filename)).isFile()) {
    return false;
  }
  const text = await fs.readFile(filename, `utf8`);
  return text.includes(`getServerData`);
}
//# sourceMappingURL=recompile.js.map