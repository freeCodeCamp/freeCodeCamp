"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_EXTENSIONS = void 0;
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return _file.default;
  }
});
Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: true,
  get: function () {
    return _buildExternalHelpers.default;
  }
});
Object.defineProperty(exports, "createConfigItem", {
  enumerable: true,
  get: function () {
    return _index2.createConfigItem;
  }
});
Object.defineProperty(exports, "createConfigItemAsync", {
  enumerable: true,
  get: function () {
    return _index2.createConfigItemAsync;
  }
});
Object.defineProperty(exports, "createConfigItemSync", {
  enumerable: true,
  get: function () {
    return _index2.createConfigItemSync;
  }
});
Object.defineProperty(exports, "getEnv", {
  enumerable: true,
  get: function () {
    return _environment.getEnv;
  }
});
Object.defineProperty(exports, "loadOptions", {
  enumerable: true,
  get: function () {
    return _index2.loadOptions;
  }
});
Object.defineProperty(exports, "loadOptionsAsync", {
  enumerable: true,
  get: function () {
    return _index2.loadOptionsAsync;
  }
});
Object.defineProperty(exports, "loadOptionsSync", {
  enumerable: true,
  get: function () {
    return _index2.loadOptionsSync;
  }
});
Object.defineProperty(exports, "loadPartialConfig", {
  enumerable: true,
  get: function () {
    return _index2.loadPartialConfig;
  }
});
Object.defineProperty(exports, "loadPartialConfigAsync", {
  enumerable: true,
  get: function () {
    return _index2.loadPartialConfigAsync;
  }
});
Object.defineProperty(exports, "loadPartialConfigSync", {
  enumerable: true,
  get: function () {
    return _index2.loadPartialConfigSync;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.parse;
  }
});
Object.defineProperty(exports, "parseAsync", {
  enumerable: true,
  get: function () {
    return _parse.parseAsync;
  }
});
Object.defineProperty(exports, "parseSync", {
  enumerable: true,
  get: function () {
    return _parse.parseSync;
  }
});
exports.resolvePreset = exports.resolvePlugin = void 0;
Object.defineProperty((0, exports), "template", {
  enumerable: true,
  get: function () {
    return _template().default;
  }
});
Object.defineProperty((0, exports), "tokTypes", {
  enumerable: true,
  get: function () {
    return _parser().tokTypes;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: true,
  get: function () {
    return _transform.transform;
  }
});
Object.defineProperty(exports, "transformAsync", {
  enumerable: true,
  get: function () {
    return _transform.transformAsync;
  }
});
Object.defineProperty(exports, "transformFile", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFile;
  }
});
Object.defineProperty(exports, "transformFileAsync", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFileAsync;
  }
});
Object.defineProperty(exports, "transformFileSync", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFileSync;
  }
});
Object.defineProperty(exports, "transformFromAst", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAst;
  }
});
Object.defineProperty(exports, "transformFromAstAsync", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAstAsync;
  }
});
Object.defineProperty(exports, "transformFromAstSync", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAstSync;
  }
});
Object.defineProperty(exports, "transformSync", {
  enumerable: true,
  get: function () {
    return _transform.transformSync;
  }
});
Object.defineProperty((0, exports), "traverse", {
  enumerable: true,
  get: function () {
    return _traverse().default;
  }
});
exports.version = exports.types = void 0;
var _file = require("./transformation/file/file.js");
var _buildExternalHelpers = require("./tools/build-external-helpers.js");
var resolvers = require("./config/files/index.js");
var _environment = require("./config/helpers/environment.js");
function _types() {
  const data = require("@babel/types");
  _types = function () {
    return data;
  };
  return data;
}
Object.defineProperty((0, exports), "types", {
  enumerable: true,
  get: function () {
    return _types();
  }
});
function _parser() {
  const data = require("@babel/parser");
  _parser = function () {
    return data;
  };
  return data;
}
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
function _template() {
  const data = require("@babel/template");
  _template = function () {
    return data;
  };
  return data;
}
var _index2 = require("./config/index.js");
var _transform = require("./transform.js");
var _transformFile = require("./transform-file.js");
var _transformAst = require("./transform-ast.js");
var _parse = require("./parse.js");
;
const version = exports.version = "7.28.5";
const resolvePlugin = (name, dirname) => resolvers.resolvePlugin(name, dirname, false).filepath;
exports.resolvePlugin = resolvePlugin;
const resolvePreset = (name, dirname) => resolvers.resolvePreset(name, dirname, false).filepath;
exports.resolvePreset = resolvePreset;
const DEFAULT_EXTENSIONS = exports.DEFAULT_EXTENSIONS = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
{
  exports.OptionManager = class OptionManager {
    init(opts) {
      return (0, _index2.loadOptionsSync)(opts);
    }
  };
  exports.Plugin = function Plugin(alias) {
    throw new Error(`The (${alias}) Babel 5 plugin is being run with an unsupported Babel version.`);
  };
}
0 && (exports.types = exports.traverse = exports.tokTypes = exports.template = 0);

//# sourceMappingURL=index.js.map
