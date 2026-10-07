"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.clearValidationCache = clearValidationCache;
exports.validateComponent = validateComponent;
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _parseComponentPath = require("gatsby-core-utils/parse-component-path");
const validationCache = new Set();
const isNotTestEnv = process.env.NODE_ENV !== `test`;
const isProductionEnv = process.env.NODE_ENV === `production`;
function validateComponent(args) {
  const {
    input,
    pluginName,
    errorIdMap
  } = args || {};

  // No component path passed
  if (!(input !== null && input !== void 0 && input.component)) {
    return {
      error: {
        id: errorIdMap.noPath,
        context: {
          pluginName,
          input
        }
      }
    };
  }
  const componentPath = (0, _parseComponentPath.getPathToLayoutComponent)(input === null || input === void 0 ? void 0 : input.component);
  const errorContext = {
    input,
    pluginName,
    componentPath
  };

  // Component path already validated in previous pass
  if (validationCache.has(componentPath)) {
    return {};
  }

  // Component path must be absolute
  if (!_path.default.isAbsolute(componentPath)) {
    return {
      error: {
        id: errorIdMap.notAbsolute,
        context: errorContext
      }
    };
  }

  // Component path must exist
  if (isNotTestEnv) {
    if (!_fsExtra.default.existsSync(componentPath)) {
      return {
        error: {
          id: errorIdMap.doesNotExist,
          context: errorContext
        }
      };
    }
  }
  if (!componentPath.includes(`/.cache/`) && isProductionEnv) {
    const fileContent = _fsExtra.default.readFileSync(componentPath, `utf-8`);

    // Component must not be empty
    if (fileContent === ``) {
      return {
        error: {
          id: errorIdMap.empty,
          context: errorContext
        },
        panicOnBuild: true
      };
    }

    // Component must have a default export
    if ([`.js`, `.jsx`, `.ts`, `.tsx`].includes(_path.default.extname(componentPath))) {
      const includesDefaultExport = fileContent.includes(`export default`) || fileContent.includes(`module.exports`) || fileContent.includes(`exports.default`) || fileContent.includes(`exports["default"]`) || fileContent.match(/export \{.* as default.*\}/s) || fileContent.match(/export \{\s*default\s*\}/s);
      if (!includesDefaultExport) {
        return {
          error: {
            id: errorIdMap.noDefaultExport,
            context: errorContext
          },
          panicOnBuild: true
        };
      }
    }
  }
  validationCache.add(componentPath);
  return {};
}
function clearValidationCache() {
  validationCache.clear();
}
//# sourceMappingURL=validate-component.js.map