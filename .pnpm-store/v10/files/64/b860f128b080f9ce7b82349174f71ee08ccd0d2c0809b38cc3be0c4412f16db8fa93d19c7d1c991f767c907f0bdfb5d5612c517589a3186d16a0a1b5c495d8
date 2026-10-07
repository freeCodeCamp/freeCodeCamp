"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _plugin = require("@parcel/plugin");
var _namerDefault = _interopRequireDefault(require("@parcel/namer-default"));
var path = _interopRequireWildcard(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CONFIG = Symbol.for(`parcel-plugin-config`);
const defaultNamerOpts = _namerDefault.default[CONFIG];
var _default = new _plugin.Namer({
  async name(opts) {
    // @parcel/namer-default will find "most common denominator" directory
    // depending on entries and make it a "relative root" for output.
    // This means that output is not deterministic based JUST on configuration
    // as adding/removing entries can change output directory structure.
    // To make it deterministic we add "middleware" namer which will use
    // @parcel/namer-default for filename, but (possibly) adjust directory
    // structure.

    const relativePathFromDefaultNamer = await defaultNamerOpts.name(opts);
    if (relativePathFromDefaultNamer) {
      const mainEntry = opts.bundle.getMainEntry();
      if (!mainEntry) {
        return null;
      }

      // For now treating CWD as root. For current gatsby use case
      // this is enough, for various other projects it might need to be configurable
      // or just smarter (for example cover common dirs like `src` or `lib` etc)
      const root = (0, _gatsbyCoreUtils.slash)(process.cwd());
      const sourceRelativeToRoot = path.posix.relative(root, (0, _gatsbyCoreUtils.slash)(path.dirname(mainEntry.filePath)));

      // newPath will be output relative to "distDir".
      // we want to preserve directory structure in distDir that we have
      // between entries and root
      const newPath = path.posix.join(sourceRelativeToRoot, path.basename(relativePathFromDefaultNamer));
      return newPath;
    }
    return null;
  }
});
exports.default = _default;