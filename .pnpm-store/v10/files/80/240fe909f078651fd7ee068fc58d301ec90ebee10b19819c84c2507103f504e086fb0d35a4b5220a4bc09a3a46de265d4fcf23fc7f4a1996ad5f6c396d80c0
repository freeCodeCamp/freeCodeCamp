"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _path = require("gatsby-core-utils/path");
var _path2 = _interopRequireDefault(require("path"));
/* eslint-disable @babel/no-invalid-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// we need to require this module, we can't use import here
const {
  createRequire
} = require(`module`);

// This is hacky webpack loader that does string replacements to
// allow lmdb@2 to be bundled by webpack for engines.
// Currently `@vercel/webpack-asset-relocator-loader doesn't handle
// the way lmdb is loading binaries and dictionary file
// (can't statically analyze it). So we perform few localized changes
// and we replace dynamic values with hardcoded ones to allow
// asset-relocator to pick those assets up and handle them.
//
// Because lmdb code can diverge, we also pin version in gatsby
// dependencies and will have manually bump it (with renovate most likely).
//
// To solve this upstream few things would need to change:
//  - https://github.com/DoctorEvidence/lmdb-js/blob/544b3fda402f24a70a0e946921e4c9134c5adf85/node-index.js#L14-L16
//  - https://github.com/DoctorEvidence/lmdb-js/blob/544b3fda402f24a70a0e946921e4c9134c5adf85/open.js#L77
// Reliance on `import.meta.url` + usage of `.replace` is what seems to cause problems currently.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _default(source) {
  let lmdbBinaryLocation;
  try {
    var _this$_module$resourc, _this$getOptions;
    const lmdbRoot = (this === null || this === void 0 ? void 0 : (_this$_module$resourc = this._module.resourceResolveData) === null || _this$_module$resourc === void 0 ? void 0 : _this$_module$resourc.descriptionFileRoot) || _path2.default.dirname(this.resourcePath).replace(`/dist`, ``);
    const lmdbRequire = createRequire(this.resourcePath);
    const forcedBinaryModule = (_this$getOptions = this.getOptions()) === null || _this$getOptions === void 0 ? void 0 : _this$getOptions.forcedBinaryModule;
    let absoluteModulePath;
    if (forcedBinaryModule) {
      try {
        absoluteModulePath = lmdbRequire.resolve(forcedBinaryModule);
      } catch (e) {
        // no-op
      }
    }
    if (!absoluteModulePath) {
      let nodeGypBuild;
      try {
        nodeGypBuild = lmdbRequire(`node-gyp-build-optional-packages`);
      } catch (e) {
        // lmdb@2.3.8 way of loading binaries failed, we will try to fallback to
        // old way before failing completely
      }
      if (!nodeGypBuild) {
        // if lmdb@2.3.8 didn't import expected node-gyp-build fork (node-gyp-build-optional-packages)
        // let's try falling back to upstream package - if that doesn't work, we will fail compilation
        nodeGypBuild = lmdbRequire(`node-gyp-build`);
      }
      absoluteModulePath = nodeGypBuild.path(lmdbRoot);
    }
    lmdbBinaryLocation = (0, _path.slash)(_path2.default.relative(_path2.default.dirname(this.resourcePath), absoluteModulePath));
  } catch (e) {
    return source;
  }
  if (!lmdbBinaryLocation) {
    return source;
  }
  return source.replace(`require$1('node-gyp-build-optional-packages')(dirName)`, `require(${JSON.stringify(lmdbBinaryLocation)})`).replace(`require$1('node-gyp-build')(dirName)`, `require(${JSON.stringify(lmdbBinaryLocation)})`).replace(`loadNAPI__default["default"](dirName);`, `require(${JSON.stringify(lmdbBinaryLocation)})`).replace(`require$2.resolve('./dict/dict.txt')`, `require.resolve('../dict/dict.txt')`).replace(/fs\.readFileSync\(new URL\('\.\/dict\/dict\.txt',\s*\(typeof\s*document\s*===\s*'undefined'\s*\?\s*new\s*\(require\('u'\s*\+\s*'rl'\)\.URL\)\s*\('file:'\s*\+\s*__filename\).href\s*:\s*\(document\.currentScript\s*&&\s*document\.currentScript\.src\s*\|\|\s*new URL\('index\.cjs',\s*document\.baseURI\)\.href\)\)\.replace\(\/dist\[\\\\\\\/\]index\.cjs\$\/,\s*''\)\)\)/g, `fs.readFileSync(require.resolve('../dict/dict.txt'))`);
}
//# sourceMappingURL=lmdb-bundling-patch.js.map