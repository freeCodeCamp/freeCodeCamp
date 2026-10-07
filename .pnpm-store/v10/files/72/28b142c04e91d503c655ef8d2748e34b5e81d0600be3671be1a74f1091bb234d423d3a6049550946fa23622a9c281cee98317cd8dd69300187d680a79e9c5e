"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _postcss = _interopRequireDefault(require("postcss"));

var _semver = require("semver");

var _package = _interopRequireDefault(require("postcss/package.json"));

var _Warning = _interopRequireDefault(require("./Warning"));

var _Error = _interopRequireDefault(require("./Error"));

var _options = _interopRequireDefault(require("./options.json"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * **PostCSS Loader**
 *
 * Loads && processes CSS with [PostCSS](https://github.com/postcss/postcss)
 *
 * @method loader
 *
 * @param {String} content Source
 * @param {Object} sourceMap Source Map
 * @param {Object} meta Meta
 *
 * @return {callback} callback Result
 */
async function loader(content, sourceMap, meta) {
  const options = this.getOptions(_options.default);
  const callback = this.async();
  const configOption = typeof options.postcssOptions === "undefined" || typeof options.postcssOptions.config === "undefined" ? true : options.postcssOptions.config;
  const postcssFactory = options.implementation || _postcss.default;
  let loadedConfig;

  if (configOption) {
    try {
      loadedConfig = await (0, _utils.loadConfig)(this, configOption, options.postcssOptions);
    } catch (error) {
      callback(error);
      return;
    }
  }

  const useSourceMap = typeof options.sourceMap !== "undefined" ? options.sourceMap : this.sourceMap;
  const {
    plugins,
    processOptions
  } = await (0, _utils.getPostcssOptions)(this, loadedConfig, options.postcssOptions);

  if (useSourceMap) {
    processOptions.map = {
      inline: false,
      annotation: false,
      ...processOptions.map
    };
  }

  if (sourceMap && processOptions.map) {
    processOptions.map.prev = (0, _utils.normalizeSourceMap)(sourceMap, this.context);
  }

  let root; // Reuse PostCSS AST from other loaders

  if (meta && meta.ast && meta.ast.type === "postcss" && (0, _semver.satisfies)(meta.ast.version, `^${_package.default.version}`)) {
    ({
      root
    } = meta.ast);
  }

  if (!root && options.execute) {
    // eslint-disable-next-line no-param-reassign
    content = (0, _utils.exec)(content, this);
  }

  let result;

  try {
    result = await postcssFactory(plugins).process(root || content, processOptions);
  } catch (error) {
    if (error.file) {
      this.addDependency(error.file);
    }

    if (error.name === "CssSyntaxError") {
      callback(new _Error.default(error));
    } else {
      callback(error);
    }

    return;
  }

  for (const warning of result.warnings()) {
    this.emitWarning(new _Warning.default(warning));
  }

  for (const message of result.messages) {
    // eslint-disable-next-line default-case
    switch (message.type) {
      case "dependency":
        this.addDependency(message.file);
        break;

      case "build-dependency":
        this.addBuildDependency(message.file);
        break;

      case "missing-dependency":
        this.addMissingDependency(message.file);
        break;

      case "context-dependency":
        this.addContextDependency(message.file);
        break;

      case "dir-dependency":
        this.addContextDependency(message.dir);
        break;

      case "asset":
        if (message.content && message.file) {
          this.emitFile(message.file, message.content, message.sourceMap, message.info);
        }

    }
  } // eslint-disable-next-line no-undefined


  let map = result.map ? result.map.toJSON() : undefined;

  if (map && useSourceMap) {
    map = (0, _utils.normalizeSourceMapAfterPostcss)(map, this.context);
  }

  const ast = {
    type: "postcss",
    version: result.processor.version,
    root: result.root
  };
  callback(null, result.css, map, {
    ast
  });
}