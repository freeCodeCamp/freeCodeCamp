"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _terser() {
  const data = require("terser");

  _terser = function () {
    return data;
  };

  return data;
}

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new (_plugin().Optimizer)({
  async loadConfig({
    config,
    options
  }) {
    let userConfig = await config.getConfigFrom(_path().default.join(options.projectRoot, 'index'), ['.terserrc', '.terserrc.js', '.terserrc.cjs']);

    if (userConfig) {
      let isJavascript = _path().default.extname(userConfig.filePath) === '.js';

      if (isJavascript) {
        config.invalidateOnStartup();
      }
    }

    return userConfig === null || userConfig === void 0 ? void 0 : userConfig.contents;
  },

  async optimize({
    contents,
    map,
    bundle,
    config: userConfig,
    options,
    getSourceMapReference
  }) {
    if (!bundle.env.shouldOptimize) {
      return {
        contents,
        map
      };
    }

    let code = await (0, _utils().blobToString)(contents);
    let originalMap = map ? await map.stringify({}) : null;
    let config = { ...userConfig,
      sourceMap: bundle.env.sourceMap ? {
        filename: _path().default.relative(options.projectRoot, _path().default.join(bundle.target.distDir, bundle.name)),
        asObject: true,
        content: originalMap
      } : false,
      toplevel: bundle.env.outputFormat === 'esmodule' || bundle.env.outputFormat === 'commonjs',
      module: bundle.env.outputFormat === 'esmodule'
    };
    let result;

    try {
      result = await (0, _terser().minify)(code, config);
    } catch (error) {
      // $FlowFixMe
      let {
        message,
        line,
        col
      } = error;

      if (line != null && col != null) {
        message = (0, _diagnostic().escapeMarkdown)(message);
        let diagnostics = [];
        let mapping = map === null || map === void 0 ? void 0 : map.findClosestMapping(line, col);

        if (mapping && mapping.original && mapping.source) {
          let {
            source,
            original
          } = mapping;

          let filePath = _path().default.resolve(options.projectRoot, source);

          diagnostics.push({
            message,
            origin: '@parcel/optimizer-terser',
            codeFrames: [{
              language: 'js',
              filePath,
              code: await options.inputFS.readFile(filePath, 'utf8'),
              codeHighlights: [{
                message,
                start: original,
                end: original
              }]
            }],
            hints: ["It's likely that Terser doesn't support this syntax yet."]
          });
        }

        if (diagnostics.length === 0 || options.logLevel === 'verbose') {
          let loc = {
            line: line,
            column: col
          };
          diagnostics.push({
            message,
            origin: '@parcel/optimizer-terser',
            codeFrames: [{
              language: 'js',
              filePath: undefined,
              code,
              codeHighlights: [{
                message,
                start: loc,
                end: loc
              }]
            }],
            hints: ["It's likely that Terser doesn't support this syntax yet."]
          });
        }

        throw new (_diagnostic().default)({
          diagnostic: diagnostics
        });
      } else {
        throw error;
      }
    }

    let sourceMap = null;
    let minifiedContents = (0, _nullthrows().default)(result.code);
    let resultMap = result.map;

    if (resultMap && typeof resultMap !== 'string') {
      sourceMap = new (_sourceMap().default)(options.projectRoot);
      sourceMap.addVLQMap(resultMap);
      let sourcemapReference = await getSourceMapReference(sourceMap);

      if (sourcemapReference) {
        minifiedContents += `\n//# sourceMappingURL=${sourcemapReference}\n`;
      }
    }

    return {
      contents: minifiedContents,
      map: sourceMap
    };
  }

});

exports.default = _default;