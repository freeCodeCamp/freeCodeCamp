"use strict";

const os = require("os");
const path = require("path");
const {
  validate
} = require("schema-utils");
const {
  minify
} = require("./minify");
const schema = require("./options.json");
const {
  esbuildMinify,
  jsonMinify,
  memoize,
  swcMinify,
  terserMinify,
  throttleAll,
  uglifyJsMinify
} = require("./utils");

/** @typedef {import("schema-utils/declarations/validate").Schema} Schema */
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").Compilation} Compilation */
/** @typedef {import("webpack").Configuration} Configuration */
/** @typedef {import("webpack").Asset} Asset */
/** @typedef {import("webpack").AssetInfo} AssetInfo */
/** @typedef {import("webpack").TemplatePath} TemplatePath */
/** @typedef {import("jest-worker").Worker} JestWorker */
/** @typedef {import("@jridgewell/trace-mapping").EncodedSourceMap & { sources: string[], sourcesContent?: string[], file: string }} RawSourceMap */
/** @typedef {import("@jridgewell/trace-mapping").TraceMap} TraceMap */

/** @typedef {RegExp | string} Rule */
/** @typedef {Rule[] | Rule} Rules */

// eslint-disable-next-line jsdoc/reject-any-type
/** @typedef {any} EXPECTED_ANY */

/**
 * @callback ExtractCommentsFunction
 * @param {EXPECTED_ANY} astNode ast Node
 * @param {{ value: string, type: "comment1" | "comment2" | "comment3" | "comment4", pos: number, line: number, col: number }} comment comment node
 * @returns {boolean} true when need to extract comment, otherwise false
 */

/**
 * @typedef {boolean | "all" | "some" | RegExp | ExtractCommentsFunction} ExtractCommentsCondition
 */

/**
 * @typedef {TemplatePath} ExtractCommentsFilename
 */

/**
 * @typedef {boolean | string | ((commentsFile: string) => string)} ExtractCommentsBanner
 */

/**
 * @typedef {object} ExtractCommentsObject
 * @property {ExtractCommentsCondition=} condition condition which comments need to be expected
 * @property {ExtractCommentsFilename=} filename filename for extracted comments
 * @property {ExtractCommentsBanner=} banner banner in filename for extracted comments
 */

/**
 * @typedef {ExtractCommentsCondition | ExtractCommentsObject} ExtractCommentsOptions
 */

/**
 * @typedef {object} ErrorObject
 * @property {string} message message
 * @property {number=} line line number
 * @property {number=} column column number
 * @property {string=} stack error stack trace
 */

/**
 * @typedef {object} MinimizedResult
 * @property {string=} code code
 * @property {RawSourceMap=} map source map
 * @property {(Error | string)[]=} errors errors
 * @property {(Error | string)[]=} warnings warnings
 * @property {string[]=} extractedComments extracted comments
 */

/**
 * @typedef {{ [file: string]: string }} Input
 */

/**
 * @typedef {{ [key: string]: EXPECTED_ANY }} CustomOptions
 */

/**
 * @template T
 * @typedef {T extends infer U ? U : CustomOptions} InferDefaultType
 */

/**
 * @template T
 * @typedef {object} PredefinedOptions
 * @property {T extends { module?: infer P } ? P : boolean | string=} module true when code is a EC module, otherwise false
 * @property {T extends { ecma?: infer P } ? P : number | string=} ecma ecma version
 */

/**
 * @template T
 * @typedef {PredefinedOptions<T> & InferDefaultType<T>} MinimizerOptions
 */

/**
 * @template T
 * @callback BasicMinimizerImplementation
 * @param {Input} input
 * @param {RawSourceMap | undefined} sourceMap
 * @param {MinimizerOptions<T>} minifyOptions
 * @param {ExtractCommentsOptions | undefined} extractComments
 * @returns {Promise<MinimizedResult> | MinimizedResult}
 */

/**
 * @typedef {object} MinimizeFunctionHelpers
 * @property {() => string | undefined=} getMinimizerVersion function that returns version of minimizer
 * @property {() => boolean | undefined=} supportsWorkerThreads true when minimizer support worker threads, otherwise false
 * @property {() => boolean | undefined=} supportsWorker true when minimizer support worker, otherwise false
 */

/**
 * @template T
 * @typedef {BasicMinimizerImplementation<T> & MinimizeFunctionHelpers} MinimizerImplementation
 */

/**
 * @template T
 * @typedef {object} InternalOptions
 * @property {string} name name
 * @property {string} input input
 * @property {RawSourceMap | undefined} inputSourceMap input source map
 * @property {ExtractCommentsOptions | undefined} extractComments extract comments option
 * @property {{ implementation: MinimizerImplementation<T>, options: MinimizerOptions<T> }} minimizer minimizer
 */

/**
 * @template T
 * @typedef {JestWorker & { transform: (options: string) => Promise<MinimizedResult>, minify: (options: InternalOptions<T>) => Promise<MinimizedResult> }} MinimizerWorker
 */

/**
 * @typedef {undefined | boolean | number} Parallel
 */

/**
 * @typedef {object} BasePluginOptions
 * @property {Rules=} test test rule
 * @property {Rules=} include include rile
 * @property {Rules=} exclude exclude rule
 * @property {ExtractCommentsOptions=} extractComments extract comments options
 * @property {Parallel=} parallel parallel option
 */

/**
 * @template T
 * @typedef {T extends import("terser").MinifyOptions ? { minify?: MinimizerImplementation<T> | undefined, terserOptions?: MinimizerOptions<T> | undefined } : { minify: MinimizerImplementation<T>, terserOptions?: MinimizerOptions<T> | undefined }} DefinedDefaultMinimizerAndOptions
 */

/**
 * @template T
 * @typedef {BasePluginOptions & { minimizer: { implementation: MinimizerImplementation<T>, options: MinimizerOptions<T> } }} InternalPluginOptions
 */

const getTraceMapping = memoize(() => require("@jridgewell/trace-mapping"));
const getSerializeJavascript = memoize(() => require("./serialize-javascript"));

/**
 * @template [T=import("terser").MinifyOptions]
 */
class TerserPlugin {
  /**
   * @param {BasePluginOptions & DefinedDefaultMinimizerAndOptions<T>=} options options
   */
  constructor(options) {
    validate(/** @type {Schema} */schema, options || {}, {
      name: "Terser Plugin",
      baseDataPath: "options"
    });

    // TODO handle json and etc in the next major release
    // TODO make `minimizer` option instead `minify` and `terserOptions` in the next major release, also rename `terserMinify` to `terserMinimize`
    const {
      minify = (/** @type {MinimizerImplementation<T>} */terserMinify),
      terserOptions = (/** @type {MinimizerOptions<T>} */{}),
      test = /\.[cm]?js(\?.*)?$/i,
      extractComments = true,
      parallel = true,
      include,
      exclude
    } = options || {};

    /**
     * @private
     * @type {InternalPluginOptions<T>}
     */
    this.options = {
      test,
      extractComments,
      parallel,
      include,
      exclude,
      minimizer: {
        implementation: minify,
        options: terserOptions
      }
    };
  }

  /**
   * @private
   * @param {unknown} input Input to check
   * @returns {boolean} Whether input is a source map
   */
  static isSourceMap(input) {
    // All required options for `new TraceMap(...options)`
    // https://github.com/jridgewell/trace-mapping#usage
    return Boolean(input && typeof input === "object" && input !== null && "version" in input && "sources" in input && Array.isArray(input.sources) && "mappings" in input && typeof input.mappings === "string");
  }

  /**
   * @private
   * @param {unknown} warning warning
   * @param {string} file file
   * @returns {Error} built warning
   */
  static buildWarning(warning, file) {
    /**
     * @type {Error & { hideStack: true, file: string }}
     */
    // @ts-expect-error
    const builtWarning = new Error(warning.toString());
    builtWarning.name = "Warning";
    builtWarning.hideStack = true;
    builtWarning.file = file;
    return builtWarning;
  }

  /**
   * @private
   * @param {Error | ErrorObject | string} error error
   * @param {string} file file
   * @param {TraceMap=} sourceMap source map
   * @param {Compilation["requestShortener"]=} requestShortener request shortener
   * @returns {Error} built error
   */
  static buildError(error, file, sourceMap, requestShortener) {
    /**
     * @type {Error & { file?: string }}
     */
    let builtError;
    if (typeof error === "string") {
      builtError = new Error(`${file} from Terser plugin\n${error}`);
      builtError.file = file;
      return builtError;
    }
    if (/** @type {ErrorObject} */error.line) {
      const {
        line,
        column
      } = /** @type {ErrorObject & { line: number, column: number }} */error;
      const original = sourceMap && getTraceMapping().originalPositionFor(sourceMap, {
        line,
        column
      });
      if (original && original.source && requestShortener) {
        builtError = new Error(`${file} from Terser plugin\n${error.message} [${requestShortener.shorten(original.source)}:${original.line},${original.column}][${file}:${line},${column}]${error.stack ? `\n${error.stack.split("\n").slice(1).join("\n")}` : ""}`);
        builtError.file = file;
        return builtError;
      }
      builtError = new Error(`${file} from Terser plugin\n${error.message} [${file}:${line},${column}]${error.stack ? `\n${error.stack.split("\n").slice(1).join("\n")}` : ""}`);
      builtError.file = file;
      return builtError;
    }
    if (error.stack) {
      builtError = new Error(`${file} from Terser plugin\n${typeof error.message !== "undefined" ? error.message : ""}\n${error.stack}`);
      builtError.file = file;
      return builtError;
    }
    builtError = new Error(`${file} from Terser plugin\n${error.message}`);
    builtError.file = file;
    return builtError;
  }

  /**
   * @private
   * @param {Parallel} parallel value of the `parallel` option
   * @returns {number} number of cores for parallelism
   */
  static getAvailableNumberOfCores(parallel) {
    // In some cases cpus() returns undefined
    // https://github.com/nodejs/node/issues/19022
    const cpus =
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    typeof os.availableParallelism === "function" ?
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    {
      length: os.availableParallelism()
    } : os.cpus() || {
      length: 1
    };
    return parallel === true || typeof parallel === "undefined" ? cpus.length - 1 : Math.min(parallel || 0, cpus.length - 1);
  }

  /**
   * @private
   * @param {Compiler} compiler compiler
   * @param {Compilation} compilation compilation
   * @param {Record<string, import("webpack").sources.Source>} assets assets
   * @param {{ availableNumberOfCores: number }} optimizeOptions optimize options
   * @returns {Promise<void>}
   */
  async optimize(compiler, compilation, assets, optimizeOptions) {
    const cache = compilation.getCache("TerserWebpackPlugin");
    let numberOfAssets = 0;
    const assetsForMinify = await Promise.all(Object.keys(assets).filter(name => {
      const {
        info
      } = /** @type {Asset} */compilation.getAsset(name);
      if (
      // Skip double minimize assets from child compilation
      info.minimized ||
      // Skip minimizing for extracted comments assets
      info.extractedComments) {
        return false;
      }
      if (!compiler.webpack.ModuleFilenameHelpers.matchObject.bind(undefined, this.options)(name)) {
        return false;
      }
      return true;
    }).map(async name => {
      const {
        info,
        source
      } = /** @type {Asset} */
      compilation.getAsset(name);
      const eTag = cache.getLazyHashedEtag(source);
      const cacheItem = cache.getItemCache(name, eTag);
      const output = await cacheItem.getPromise();
      if (!output) {
        numberOfAssets += 1;
      }
      return {
        name,
        info,
        inputSource: source,
        output,
        cacheItem
      };
    }));
    if (assetsForMinify.length === 0) {
      return;
    }

    /** @type {undefined | (() => MinimizerWorker<T>)} */
    let getWorker;
    /** @type {undefined | MinimizerWorker<T>} */
    let initializedWorker;
    /** @type {undefined | number} */
    let numberOfWorkers;
    const needCreateWorker = optimizeOptions.availableNumberOfCores > 0 && (typeof this.options.minimizer.implementation.supportsWorker === "undefined" || typeof this.options.minimizer.implementation.supportsWorker === "function" && this.options.minimizer.implementation.supportsWorker());
    if (needCreateWorker) {
      // Do not create unnecessary workers when the number of files is less than the available cores, it saves memory
      numberOfWorkers = Math.min(numberOfAssets, optimizeOptions.availableNumberOfCores);
      getWorker = () => {
        if (initializedWorker) {
          return initializedWorker;
        }
        const {
          Worker
        } = require("jest-worker");
        initializedWorker = /** @type {MinimizerWorker<T>} */

        new Worker(require.resolve("./minify"), {
          numWorkers: numberOfWorkers,
          enableWorkerThreads: typeof this.options.minimizer.implementation.supportsWorkerThreads !== "undefined" ? this.options.minimizer.implementation.supportsWorkerThreads() !== false : true
        });

        // https://github.com/facebook/jest/issues/8872#issuecomment-524822081
        const workerStdout = initializedWorker.getStdout();
        if (workerStdout) {
          workerStdout.on("data", chunk => process.stdout.write(chunk));
        }
        const workerStderr = initializedWorker.getStderr();
        if (workerStderr) {
          workerStderr.on("data", chunk => process.stderr.write(chunk));
        }
        return initializedWorker;
      };
    }
    const {
      SourceMapSource,
      ConcatSource,
      RawSource
    } = compiler.webpack.sources;

    /** @typedef {{ extractedCommentsSource: import("webpack").sources.RawSource, commentsFilename: string }} ExtractedCommentsInfo */
    /** @type {Map<string, ExtractedCommentsInfo>} */
    const allExtractedComments = new Map();
    const scheduledTasks = [];
    for (const asset of assetsForMinify) {
      scheduledTasks.push(async () => {
        const {
          name,
          inputSource,
          info,
          cacheItem
        } = asset;
        let {
          output
        } = asset;
        if (!output) {
          let input;
          /** @type {RawSourceMap | undefined} */
          let inputSourceMap;
          const {
            source: sourceFromInputSource,
            map
          } = inputSource.sourceAndMap();
          input = sourceFromInputSource;
          if (map) {
            if (!TerserPlugin.isSourceMap(map)) {
              compilation.warnings.push(new Error(`${name} contains invalid source map`));
            } else {
              inputSourceMap = /** @type {RawSourceMap} */map;
            }
          }
          if (Buffer.isBuffer(input)) {
            input = input.toString();
          }

          /**
           * @type {InternalOptions<T>}
           */
          const options = {
            name,
            input,
            inputSourceMap,
            minimizer: {
              implementation: this.options.minimizer.implementation,
              options: {
                ...this.options.minimizer.options
              }
            },
            extractComments: this.options.extractComments
          };
          if (typeof options.minimizer.options.module === "undefined") {
            if (typeof info.javascriptModule !== "undefined") {
              options.minimizer.options.module = /** @type {PredefinedOptions<T>["module"]} */
              info.javascriptModule;
            } else if (/\.mjs(\?.*)?$/i.test(name)) {
              options.minimizer.options.module = /** @type {PredefinedOptions<T>["module"]} */true;
            } else if (/\.cjs(\?.*)?$/i.test(name)) {
              options.minimizer.options.module = /** @type {PredefinedOptions<T>["module"]} */false;
            }
          }
          if (typeof options.minimizer.options.ecma === "undefined") {
            options.minimizer.options.ecma = /** @type {PredefinedOptions<T>["ecma"]} */

            TerserPlugin.getEcmaVersion(compiler.options.output.environment || {});
          }
          try {
            output = await (getWorker ? getWorker().transform(getSerializeJavascript()(options)) : minify(options));
          } catch (error) {
            const hasSourceMap = inputSourceMap && TerserPlugin.isSourceMap(inputSourceMap);
            compilation.errors.push(TerserPlugin.buildError(/** @type {Error | ErrorObject | string} */
            error, name, hasSourceMap ? new (getTraceMapping().TraceMap)(/** @type {RawSourceMap} */
            inputSourceMap) : undefined, hasSourceMap ? compilation.requestShortener : undefined));
            return;
          }
          if (typeof output.code === "undefined") {
            compilation.errors.push(new Error(`${name} from Terser plugin\nMinimizer doesn't return result`));
          }
          if (output.warnings && output.warnings.length > 0) {
            output.warnings = output.warnings.map(
            /**
             * @param {Error | string} item a warning
             * @returns {Error} built warning with extra info
             */
            item => TerserPlugin.buildWarning(item, name));
          }
          if (output.errors && output.errors.length > 0) {
            const hasSourceMap = inputSourceMap && TerserPlugin.isSourceMap(inputSourceMap);
            output.errors = output.errors.map(
            /**
             * @param {Error | string} item an error
             * @returns {Error} built error with extra info
             */
            item => TerserPlugin.buildError(item, name, hasSourceMap ? new (getTraceMapping().TraceMap)(/** @type {RawSourceMap} */
            inputSourceMap) : undefined, hasSourceMap ? compilation.requestShortener : undefined));
          }

          // Custom functions can return `undefined` or `null`
          if (typeof output.code !== "undefined" && output.code !== null) {
            let shebang;
            if (/** @type {ExtractCommentsObject} */
            this.options.extractComments.banner !== false && output.extractedComments && output.extractedComments.length > 0 && output.code.startsWith("#!")) {
              const firstNewlinePosition = output.code.indexOf("\n");
              shebang = output.code.slice(0, Math.max(0, firstNewlinePosition));
              output.code = output.code.slice(Math.max(0, firstNewlinePosition + 1));
            }
            if (output.map) {
              output.source = new SourceMapSource(output.code, name, output.map, input, /** @type {RawSourceMap} */
              inputSourceMap, true);
            } else {
              output.source = new RawSource(output.code);
            }
            if (output.extractedComments && output.extractedComments.length > 0) {
              const commentsFilename = /** @type {ExtractCommentsObject} */
              this.options.extractComments.filename || "[file].LICENSE.txt[query]";
              let query = "";
              let filename = name;
              const querySplit = filename.indexOf("?");
              if (querySplit >= 0) {
                query = filename.slice(querySplit);
                filename = filename.slice(0, querySplit);
              }
              const lastSlashIndex = filename.lastIndexOf("/");
              const basename = lastSlashIndex === -1 ? filename : filename.slice(lastSlashIndex + 1);
              const data = {
                filename,
                basename,
                query
              };
              output.commentsFilename = compilation.getPath(commentsFilename, data);
              let banner;

              // Add a banner to the original file
              if (/** @type {ExtractCommentsObject} */
              this.options.extractComments.banner !== false) {
                banner = /** @type {ExtractCommentsObject} */
                this.options.extractComments.banner || `For license information please see ${path.relative(path.dirname(name), output.commentsFilename).replace(/\\/g, "/")}`;
                if (typeof banner === "function") {
                  banner = banner(output.commentsFilename);
                }
                if (banner) {
                  output.source = new ConcatSource(shebang ? `${shebang}\n` : "", `/*! ${banner} */\n`, output.source);
                }
              }
              const extractedCommentsString = output.extractedComments.sort().join("\n\n");
              output.extractedCommentsSource = new RawSource(`${extractedCommentsString}\n`);
            }
          }
          await cacheItem.storePromise({
            source: output.source,
            errors: output.errors,
            warnings: output.warnings,
            commentsFilename: output.commentsFilename,
            extractedCommentsSource: output.extractedCommentsSource
          });
        }
        if (output.warnings && output.warnings.length > 0) {
          for (const warning of output.warnings) {
            compilation.warnings.push(warning);
          }
        }
        if (output.errors && output.errors.length > 0) {
          for (const error of output.errors) {
            compilation.errors.push(error);
          }
        }
        if (!output.source) {
          return;
        }

        /** @type {AssetInfo} */
        const newInfo = {
          minimized: true
        };
        const {
          source,
          extractedCommentsSource
        } = output;

        // Write extracted comments to commentsFilename
        if (extractedCommentsSource) {
          const {
            commentsFilename
          } = output;
          newInfo.related = {
            license: commentsFilename
          };
          allExtractedComments.set(name, {
            extractedCommentsSource,
            commentsFilename
          });
        }
        compilation.updateAsset(name, source, newInfo);
      });
    }
    const limit = getWorker && numberOfAssets > 0 ? (/** @type {number} */numberOfWorkers) : scheduledTasks.length;
    await throttleAll(limit, scheduledTasks);
    if (initializedWorker) {
      await initializedWorker.end();
    }

    /** @typedef {{ source: import("webpack").sources.Source, commentsFilename: string, from: string }} ExtractedCommentsInfoWithFrom */
    await [...allExtractedComments].sort().reduce(
    /**
     * @param {Promise<unknown>} previousPromise previous result
     * @param {[string, ExtractedCommentsInfo]} extractedComments extracted comments
     * @returns {Promise<ExtractedCommentsInfoWithFrom>} extract comments with info
     */
    async (previousPromise, [from, value]) => {
      const previous = /** @type {ExtractedCommentsInfoWithFrom | undefined} * */
      await previousPromise;
      const {
        commentsFilename,
        extractedCommentsSource
      } = value;
      if (previous && previous.commentsFilename === commentsFilename) {
        const {
          from: previousFrom,
          source: prevSource
        } = previous;
        const mergedName = `${previousFrom}|${from}`;
        const name = `${commentsFilename}|${mergedName}`;
        const eTag = [prevSource, extractedCommentsSource].map(item => cache.getLazyHashedEtag(item)).reduce((previousValue, currentValue) => cache.mergeEtags(previousValue, currentValue));
        let source = await cache.getPromise(name, eTag);
        if (!source) {
          source = new ConcatSource([...new Set([... /** @type {string} */prevSource.source().split("\n\n"), ... /** @type {string} */extractedCommentsSource.source().split("\n\n")])].join("\n\n"));
          await cache.storePromise(name, eTag, source);
        }
        compilation.updateAsset(commentsFilename, source);
        return {
          source,
          commentsFilename,
          from: mergedName
        };
      }
      const existingAsset = compilation.getAsset(commentsFilename);
      if (existingAsset) {
        return {
          source: existingAsset.source,
          commentsFilename,
          from: commentsFilename
        };
      }
      compilation.emitAsset(commentsFilename, extractedCommentsSource, {
        extractedComments: true
      });
      return {
        source: extractedCommentsSource,
        commentsFilename,
        from
      };
    }, /** @type {Promise<unknown>} */Promise.resolve());
  }

  /**
   * @private
   * @param {NonNullable<NonNullable<Configuration["output"]>["environment"]>} environment environment
   * @returns {number} ecma version
   */
  static getEcmaVersion(environment) {
    // ES 6th
    if (environment.arrowFunction || environment.const || environment.destructuring || environment.forOf || environment.module) {
      return 2015;
    }

    // ES 11th
    if (environment.bigIntLiteral || environment.dynamicImport) {
      return 2020;
    }
    return 5;
  }

  /**
   * @param {Compiler} compiler compiler
   * @returns {void}
   */
  apply(compiler) {
    const pluginName = this.constructor.name;
    const availableNumberOfCores = TerserPlugin.getAvailableNumberOfCores(this.options.parallel);
    compiler.hooks.compilation.tap(pluginName, compilation => {
      const hooks = compiler.webpack.javascript.JavascriptModulesPlugin.getCompilationHooks(compilation);
      const data = getSerializeJavascript()({
        minimizer: typeof this.options.minimizer.implementation.getMinimizerVersion !== "undefined" ? this.options.minimizer.implementation.getMinimizerVersion() || "0.0.0" : "0.0.0",
        options: this.options.minimizer.options
      });
      hooks.chunkHash.tap(pluginName, (chunk, hash) => {
        hash.update("TerserPlugin");
        hash.update(data);
      });
      compilation.hooks.processAssets.tapPromise({
        name: pluginName,
        stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
        additionalAssets: true
      }, assets => this.optimize(compiler, compilation, assets, {
        availableNumberOfCores
      }));
      compilation.hooks.statsPrinter.tap(pluginName, stats => {
        stats.hooks.print.for("asset.info.minimized").tap("terser-webpack-plugin", (minimized, {
          green,
          formatFlag
        }) => minimized ? /** @type {(text: string) => string} */green(/** @type {(flag: string) => string} */formatFlag("minimized")) : "");
      });
    });
  }
}
TerserPlugin.terserMinify = terserMinify;
TerserPlugin.uglifyJsMinify = uglifyJsMinify;
TerserPlugin.swcMinify = swcMinify;
TerserPlugin.esbuildMinify = esbuildMinify;
TerserPlugin.jsonMinify = jsonMinify;
module.exports = TerserPlugin;