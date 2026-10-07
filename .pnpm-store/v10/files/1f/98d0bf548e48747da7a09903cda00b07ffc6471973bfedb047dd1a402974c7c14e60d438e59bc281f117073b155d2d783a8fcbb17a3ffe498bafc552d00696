"use strict";

exports.__esModule = true;
exports.resolveModule = void 0;
var fs = _interopRequireWildcard(require("fs"));
var _enhancedResolve = _interopRequireWildcard(require("enhanced-resolve"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const resolveModule = modulePath => {
  let resolve;
  try {
    resolve = _enhancedResolve.default.create.sync({
      fileSystem: new _enhancedResolve.CachedInputFileSystem(fs, 5000),
      extensions: [`.ts`, `.tsx`, `.js`, `.jsx`]
    });
  } catch (err) {
    // ignore
  }

  // @ts-ignore - See https://github.com/microsoft/TypeScript/issues/9568
  return resolve({}, modulePath, modulePath);
};
exports.resolveModule = resolveModule;
//# sourceMappingURL=module-resolver.js.map