"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var os = _interopRequireWildcard(require("os"));

var _sourceMap = require("source-map");

var _schemaUtils = require("schema-utils");

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _pLimit = _interopRequireDefault(require("p-limit"));

var _jestWorker = _interopRequireDefault(require("jest-worker"));

var _utils = require("./utils");

var schema = _interopRequireWildcard(require("./options.json"));

var _minify = require("./minify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const warningRegex = /\s.+:+([0-9]+):+([0-9]+)/;

class CssMinimizerPlugin {
  constructor(options = {}) {
    (0, _schemaUtils.validate)(schema, options, {
      name: 'Css Minimizer Plugin',
      baseDataPath: 'options'
    });
    const {
      minify = _utils.cssnanoMinify,
      minimizerOptions,
      test = /\.css(\?.*)?$/i,
      warningsFilter = () => true,
      parallel = true,
      include,
      exclude
    } = options;
    this.options = {
      test,
      warningsFilter,
      parallel,
      include,
      exclude,
      minify,
      minimizerOptions
    };
  }

  static isSourceMap(input) {
    // All required options for `new SourceMapConsumer(...options)`
    // https://github.com/mozilla/source-map#new-sourcemapconsumerrawsourcemap
    return Boolean(input && input.version && input.sources && Array.isArray(input.sources) && typeof input.mappings === 'string');
  }

  static buildError(error, name, requestShortener, sourceMap) {
    let builtError;

    if (error.line) {
      const original = sourceMap && sourceMap.originalPositionFor({
        line: error.line,
        column: error.column
      });

      if (original && original.source && requestShortener) {
        builtError = new Error(`${name} from Css Minimizer Webpack Plugin\n${error.message} [${requestShortener.shorten(original.source)}:${original.line},${original.column}][${name}:${error.line},${error.column}]${error.stack ? `\n${error.stack.split('\n').slice(1).join('\n')}` : ''}`);
        builtError.file = name;
        return builtError;
      }

      builtError = new Error(`${name} from Css Minimizer \n${error.message} [${name}:${error.line},${error.column}]${error.stack ? `\n${error.stack.split('\n').slice(1).join('\n')}` : ''}`);
      builtError.file = name;
      return builtError;
    }

    if (error.stack) {
      builtError = new Error(`${name} from Css Minimizer\n${error.stack}`);
      builtError.file = name;
      return builtError;
    }

    builtError = new Error(`${name} from Css Minimizer\n${error.message}`);
    builtError.file = name;
    return builtError;
  }

  static buildWarning(warning, file, sourceMap, requestShortener, warningsFilter) {
    let warningMessage = warning;
    let locationMessage = '';
    let source;

    if (sourceMap) {
      const match = warningRegex.exec(warning);

      if (match) {
        const line = +match[1];
        const column = +match[2];
        const original = sourceMap.originalPositionFor({
          line,
          column
        });

        if (original && original.source && original.source !== file && requestShortener) {
          ({
            source
          } = original);
          warningMessage = `${warningMessage.replace(warningRegex, '')}`;
          locationMessage = `${requestShortener.shorten(original.source)}:${original.line}:${original.column}`;
        }
      }
    }

    if (warningsFilter && !warningsFilter(warning, file, source)) {
      return null;
    }

    return `Css Minimizer Plugin: ${warningMessage} ${locationMessage}`;
  }

  static getAvailableNumberOfCores(parallel) {
    // In some cases cpus() returns undefined
    // https://github.com/nodejs/node/issues/19022
    const cpus = os.cpus() || {
      length: 1
    };
    return parallel === true ? cpus.length - 1 : Math.min(Number(parallel) || 0, cpus.length - 1);
  }

  async optimize(compiler, compilation, assets, optimizeOptions) {
    const cache = compilation.getCache('CssMinimizerWebpackPlugin');
    let numberOfAssetsForMinify = 0;
    const assetsForMinify = await Promise.all(Object.keys(typeof assets === 'undefined' ? compilation.assets : assets).filter(name => {
      const {
        info
      } = compilation.getAsset(name);

      if ( // Skip double minimize assets from child compilation
      info.minimized) {
        return false;
      }

      if (!compiler.webpack.ModuleFilenameHelpers.matchObject.bind( // eslint-disable-next-line no-undefined
      undefined, this.options)(name)) {
        return false;
      }

      return true;
    }).map(async name => {
      const {
        info,
        source
      } = compilation.getAsset(name);
      const eTag = cache.getLazyHashedEtag(source);
      const cacheItem = cache.getItemCache(name, eTag);
      const output = await cacheItem.getPromise();

      if (!output) {
        numberOfAssetsForMinify += 1;
      }

      return {
        name,
        info,
        inputSource: source,
        output,
        cacheItem
      };
    }));
    let getWorker;
    let initializedWorker;
    let numberOfWorkers;

    if (optimizeOptions.availableNumberOfCores > 0) {
      // Do not create unnecessary workers when the number of files is less than the available cores, it saves memory
      numberOfWorkers = Math.min(numberOfAssetsForMinify, optimizeOptions.availableNumberOfCores);

      getWorker = () => {
        if (initializedWorker) {
          return initializedWorker;
        }

        initializedWorker = new _jestWorker.default(require.resolve('./minify'), {
          numWorkers: numberOfWorkers,
          enableWorkerThreads: true
        }); // https://github.com/facebook/jest/issues/8872#issuecomment-524822081

        const workerStdout = initializedWorker.getStdout();

        if (workerStdout) {
          workerStdout.on('data', chunk => process.stdout.write(chunk));
        }

        const workerStderr = initializedWorker.getStderr();

        if (workerStderr) {
          workerStderr.on('data', chunk => process.stderr.write(chunk));
        }

        return initializedWorker;
      };
    }

    const limit = (0, _pLimit.default)(getWorker && numberOfAssetsForMinify > 0 ? numberOfWorkers : Infinity);
    const {
      SourceMapSource,
      RawSource
    } = compiler.webpack.sources;
    const scheduledTasks = [];

    for (const asset of assetsForMinify) {
      scheduledTasks.push(limit(async () => {
        const {
          name,
          inputSource,
          cacheItem
        } = asset;
        let {
          output
        } = asset;

        if (!output) {
          let input;
          let inputSourceMap;
          const {
            source: sourceFromInputSource,
            map
          } = inputSource.sourceAndMap();
          input = sourceFromInputSource;

          if (map) {
            if (CssMinimizerPlugin.isSourceMap(map)) {
              inputSourceMap = map;
            } else {
              inputSourceMap = map;
              compilation.warnings.push(new Error(`${name} contains invalid source map`));
            }
          }

          if (Buffer.isBuffer(input)) {
            input = input.toString();
          }

          const options = {
            name,
            input,
            inputSourceMap,
            minify: this.options.minify,
            minifyOptions: this.options.minimizerOptions
          };

          try {
            output = await (getWorker ? getWorker().transform((0, _serializeJavascript.default)(options)) : (0, _minify.minify)(options));
          } catch (error) {
            compilation.errors.push(CssMinimizerPlugin.buildError(error, name, compilation.requestShortener, inputSourceMap && CssMinimizerPlugin.isSourceMap(inputSourceMap) ? new _sourceMap.SourceMapConsumer(inputSourceMap) : null));
            return;
          }

          if (output.map) {
            output.source = new SourceMapSource(output.code, name, output.map, input, inputSourceMap, true);
          } else {
            output.source = new RawSource(output.code);
          }

          if (output.warnings && output.warnings.length > 0) {
            output.warnings = output.warnings.map(warning => CssMinimizerPlugin.buildWarning(warning, name, inputSourceMap && CssMinimizerPlugin.isSourceMap(inputSourceMap) ? new _sourceMap.SourceMapConsumer(inputSourceMap) : null, compilation.requestShortener, this.options.warningsFilter)).filter(Boolean);
          }

          await cacheItem.storePromise({
            source: output.source,
            warnings: output.warnings
          });
        }

        if (output.warnings && output.warnings.length > 0) {
          output.warnings.forEach(warning => {
            const Warning = class Warning extends Error {
              constructor(message) {
                super(message);
                this.name = 'Warning';
                this.hideStack = true;
                this.file = name;
              }

            };
            compilation.warnings.push(new Warning(warning));
          });
        }

        const newInfo = {
          minimized: true
        };
        const {
          source
        } = output;
        compilation.updateAsset(name, source, newInfo);
      }));
    }

    const result = await Promise.all(scheduledTasks);

    if (initializedWorker) {
      await initializedWorker.end();
    }

    return result;
  }

  apply(compiler) {
    const pluginName = this.constructor.name;
    const availableNumberOfCores = CssMinimizerPlugin.getAvailableNumberOfCores(this.options.parallel);
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.processAssets.tapPromise({
        name: pluginName,
        stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
        additionalAssets: true
      }, assets => this.optimize(compiler, compilation, assets, {
        availableNumberOfCores
      }));
      compilation.hooks.statsPrinter.tap(pluginName, stats => {
        stats.hooks.print.for('asset.info.minimized').tap('css-minimizer-webpack-plugin', (minimized, {
          green,
          formatFlag
        }) => // eslint-disable-next-line no-undefined
        minimized ? green(formatFlag('minimized')) : '');
      });
    });
  }

}

CssMinimizerPlugin.cssnanoMinify = _utils.cssnanoMinify;
CssMinimizerPlugin.cssoMinify = _utils.cssoMinify;
CssMinimizerPlugin.cleanCssMinify = _utils.cleanCssMinify;
var _default = CssMinimizerPlugin;
exports.default = _default;