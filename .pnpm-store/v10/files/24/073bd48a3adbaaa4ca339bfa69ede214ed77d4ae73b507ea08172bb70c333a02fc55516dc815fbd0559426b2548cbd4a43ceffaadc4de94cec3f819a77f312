"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;
var _path = _interopRequireDefault(require("path"));
var _package = _interopRequireDefault(require("postcss/package.json"));
var _options = _interopRequireDefault(require("./options.json"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let hasExplicitDependencyOnPostCSS = false;

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
  let implementation;
  try {
    implementation = (0, _utils.getPostcssImplementation)(this, options.implementation);
  } catch (error) {
    callback(error);
    return;
  }
  if (!implementation) {
    callback(new Error(`The Postcss implementation "${options.implementation}" not found`));
    return;
  }
  let loadedConfig;
  if (configOption) {
    try {
      loadedConfig = await (0, _utils.loadConfig)(this, configOption, options.postcssOptions);
    } catch (error) {
      callback(error);
      return;
    }
  }
  const {
    plugins,
    processOptions
  } = await (0, _utils.getPostcssOptions)(this, loadedConfig, options.postcssOptions);
  const useSourceMap = typeof options.sourceMap !== "undefined" ? options.sourceMap : this.sourceMap;
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
  let root;

  // Reuse PostCSS AST from other loaders
  if (meta && meta.ast && meta.ast.type === "postcss" &&
  // eslint-disable-next-line global-require
  require("semver").satisfies(meta.ast.version, `^${_package.default.version}`)) {
    ({
      root
    } = meta.ast);
  }
  if (!root && options.execute) {
    // eslint-disable-next-line no-param-reassign
    content = (0, _utils.exec)(content, this);
  }
  let result;
  let processor;
  try {
    processor = implementation(plugins);
    result = await processor.process(root || content, processOptions);
  } catch (error) {
    // Check postcss versions to avoid using PostCSS 7.
    // For caching reasons, we use the readFileSync and existsSync functions from the context,
    // not the functions from the `fs` module.
    if (!hasExplicitDependencyOnPostCSS && processor && processor.version && processor.version.startsWith("7.")) {
      // The `findPackageJsonDir` function returns `string` or `null`.
      // This is used to do for caching, that is, an explicit comparison with `undefined`
      // is used to make the condition body run once.
      const packageJSONDir = (0, _utils.findPackageJSONDir)(process.cwd(), this.fs.statSync);
      if (packageJSONDir) {
        let bufferOfPackageJSON;
        try {
          bufferOfPackageJSON = this.fs.readFileSync(_path.default.resolve(packageJSONDir, "package.json"), "utf8");
        } catch (_error) {
          // Nothing
        }
        if (bufferOfPackageJSON) {
          let pkg;
          try {
            pkg = JSON.parse(bufferOfPackageJSON);
          } catch (_error) {
            // Nothing
          }
          if (pkg) {
            const {
              dependencies = {},
              devDependencies = {}
            } = pkg;
            if (!dependencies.postcss && !devDependencies.postcss) {
              this.emitWarning(new Error("Add postcss as project dependency. postcss is not a peer dependency for postcss-loader. " + "Use `npm install postcss` or `yarn add postcss`"));
            } else {
              hasExplicitDependencyOnPostCSS = true;
            }
          }
        }
      }
    }
    (0, _utils.reportError)(this, callback, error);
    return;
  }
  for (const warning of result.warnings()) {
    this.emitWarning((0, _utils.warningFactory)(warning));
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
  }

  // eslint-disable-next-line no-undefined
  let map = result.map ? result.map.toJSON() : undefined;
  if (map && useSourceMap) {
    map = (0, _utils.normalizeSourceMapAfterPostcss)(map, this.context);
  }
  let ast;
  try {
    ast = {
      type: "postcss",
      version: result.processor.version,
      root: result.root
    };
  } catch (error) {
    (0, _utils.reportError)(this, callback, error);
    return;
  }
  callback(null, result.css, map, {
    ast
  });
}