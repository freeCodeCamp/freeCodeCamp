"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.VIRTUAL_MODULES_BASE_PATH = exports.GatsbyWebpackVirtualModules = void 0;
exports.getAbsolutePathForVirtualModule = getAbsolutePathForVirtualModule;
exports.writeModule = writeModule;
var _webpackVirtualModules = _interopRequireDefault(require("webpack-virtual-modules"));
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const fileContentLookup = {};
const instances = [];
const VIRTUAL_MODULES_BASE_PATH = `.cache/_this_is_virtual_fs_path_`;
exports.VIRTUAL_MODULES_BASE_PATH = VIRTUAL_MODULES_BASE_PATH;
class GatsbyWebpackVirtualModules {
  apply(compiler) {
    const virtualModules = new _webpackVirtualModules.default(fileContentLookup);
    virtualModules.apply(compiler);
    instances.push({
      writeModule: virtualModules.writeModule.bind(virtualModules)
    });
  }
}
exports.GatsbyWebpackVirtualModules = GatsbyWebpackVirtualModules;
function getAbsolutePathForVirtualModule(filePath) {
  return path.join(process.cwd(), VIRTUAL_MODULES_BASE_PATH, filePath);
}
function writeModule(filePath, fileContents) {
  const adjustedFilePath = getAbsolutePathForVirtualModule(filePath);
  if (fileContentLookup[adjustedFilePath] === fileContents) {
    // we already have this, no need to cause invalidation
    return;
  }

  // workaround webpack marking virtual modules as deleted because those files don't really exist
  // so we create those files just so watchpack doesn't mark them as initially missing
  fs.outputFileSync(adjustedFilePath, fileContents);
  fileContentLookup[adjustedFilePath] = fileContents;
  instances.forEach(instance => {
    instance.writeModule(adjustedFilePath, fileContents);
  });
}
//# sourceMappingURL=gatsby-webpack-virtual-modules.js.map