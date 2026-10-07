"use strict";

const INDENT = 2;
const DEFAULT_TRANSFORM = (data) => JSON.stringify(data, null, INDENT);

/**
 * Stats writer module.
 *
 * Stats can be a string or array (we'll have array due to source maps):
 *
 * ```js
 * "assetsByChunkName": {
 *   "main": [
 *     "cd6371d4131fbfbefaa7.bundle.js",
 *     "../js-map/cd6371d4131fbfbefaa7.bundle.js.map"
 *   ]
 * },
 * ```
 *
 * **Note**: The stats object is **big**. It includes the entire source included
 * in a bundle. Thus, we default `opts.fields` to `["assetsByChunkName"]` to
 * only include those. However, if you want the _whole thing_ (maybe doing an
 * `opts.transform` function), then you can set `fields: null` in options to
 * get **all** of the stats object.
 *
 * You may also pass a custom stats config object (or string preset) via `opts.stats`
 * in order to select exactly what you want added to the data passed to the transform.
 * When `opts.stats` is passed, `opts.fields` will default to `null`.
 *
 * See:
 * - https://webpack.js.org/configuration/stats/#stats
 * - https://webpack.js.org/api/node/#stats-object
 *
 * **`filename`**: The `opts.filename` option can be a file name or path relative to
 * `output.path` in webpack configuration. It should not be absolute. It may also
 * be a function, in which case it will be passed the current compiler instance
 * and expected to return a filename to use.
 *
 * **`transform`**: By default, the retrieved stats object is `JSON.stringify`'ed
 * but by supplying an alternate transform you can target _any_ output format.
 * See [`test/scenarios/webpack5/webpack.config.js`](test/scenarios/webpack5/webpack.config.js) for
 * various examples including Markdown output.
 *
 * - **Warning**: The output of `transform` should be a `String`, not an object.
 *   On Node `v4.x` if you return a real object in `transform`, then webpack
 *   will break with a `TypeError` (See #8). Just adding a simple
 *   `JSON.stringify()` around your object is usually what you need to solve
 *   any problems.
 *
 * @param {Object}            opts           options
 * @param {String|Function}   opts.filename  output file name (Default: `"stats.json`")
 * @param {Array}             opts.fields    stats obj fields (Default: `["assetsByChunkName"]`)
 * @param {Object|String}     opts.stats     stats config object or string preset (Default: `{}`)
 * @param {Function|Promise}  opts.transform transform stats obj (Default: `JSON.stringify()`)
 * @param {Boolean}           opts.emit      add stats file to webpack output? (Default: `true`)
 *
 * @api public
 */
class StatsWriterPlugin {
  constructor(opts) {
    opts = opts || {};
    this.opts = {};
    this.opts.filename = opts.filename || "stats.json";
    this.opts.fields = typeof opts.fields !== "undefined" ? opts.fields : ["assetsByChunkName"];
    this.opts.stats = opts.stats || {};
    this.opts.transform = opts.transform || DEFAULT_TRANSFORM;
    this.opts.emit = opts.emit !== false;

    if (typeof opts.stats !== "undefined" && typeof opts.fields === "undefined") {
      // if custom stats config provided, do not filter fields unless explicitly configured
      this.opts.fields = null;
    }
  }

  apply(compiler) {
    if (compiler.hooks) {
      let emitHookSet = false;

      // Capture the compilation and then set up further hooks.
      compiler.hooks.thisCompilation.tap("stats-writer-plugin", (compilation) => {
        if (compilation.hooks.processAssets) {
          // Modern: `processAssets` is one of the last hooks before frozen assets.
          // We choose `PROCESS_ASSETS_STAGE_REPORT` which is the last possible
          // stage after which to emit.
          //
          // See:
          // - https://webpack.js.org/api/compilation-hooks/#processassets
          // - https://github.com/FormidableLabs/webpack-stats-plugin/issues/56
          compilation.hooks.processAssets.tapPromise(
            {
              name: "stats-writer-plugin",
              stage: compilation.constructor.PROCESS_ASSETS_STAGE_REPORT
            },
            () => this.emitStats(compilation)
          );
        } else if (!emitHookSet) {
          // Legacy.
          //
          // Set up the `compiler` level hook only once to avoid multiple
          // calls during `webpack --watch`. (We have to do this here because
          // we can't otherwise detect if `compilation.hooks.processAssets` is
          // available for modern mode.)
          emitHookSet = true;
          compiler.hooks.emit.tapPromise("stats-writer-plugin", this.emitStats.bind(this));
        }
      });
    } else {
      // Super-legacy.
      compiler.plugin("emit", this.emitStats.bind(this));
    }
  }

  emitStats(curCompiler, callback) {
    // Get stats.
    // The second argument automatically skips heavy options (reasons, source, etc)
    // if they are otherwise unspecified.
    let stats = curCompiler.getStats().toJson(this.opts.stats);

    // Filter to fields.
    if (this.opts.fields) {
      stats = this.opts.fields.reduce((memo, key) => {
        memo[key] = stats[key];
        return memo;
      }, {});
    }

    // Transform to string.
    let err;
    return Promise.resolve()

      // Transform.
      .then(() => this.opts.transform(stats, {
        compiler: curCompiler
      }))
      .catch((e) => { err = e; })

      // Finish up.
      // eslint-disable-next-line max-statements,complexity
      .then((statsStr) => {
        // Handle errors.
        if (err) {
          curCompiler.errors.push(err);
          // eslint-disable-next-line promise/no-callback-in-promise
          if (callback) { return void callback(err); }
          throw err;
        }

        // Short-circuit if not emitting.
        if (!this.opts.emit) {
          // eslint-disable-next-line promise/no-callback-in-promise,promise/always-return
          if (callback) { return void callback(); }
          return;
        }

        // Create simple equivalent of RawSource from webpack-sources.
        const statsBuf = Buffer.from(statsStr || "", "utf-8");
        const webpack = curCompiler.webpack || (curCompiler.compiler || {}).webpack;
        const source = webpack
          // webpack5+ abstraction
          ? new webpack.sources.RawSource(statsBuf)
          // webpack4- manual class
          : {
            source() {
              return statsBuf;
            },
            size() {
              return statsBuf.length;
            }
          };

        const filename = typeof this.opts.filename === "function"
          ? this.opts.filename(curCompiler)
          : this.opts.filename;

        // Add to assets.
        if (curCompiler.emitAsset) {
          // Modern method.
          const asset = curCompiler.getAsset(filename);
          if (asset) {
            curCompiler.updateAsset(filename, source);
          } else {
            curCompiler.emitAsset(filename, source);
          }
        } else {
          // Fallback to deprecated method.
          curCompiler.assets[filename] = source;
        }

        // eslint-disable-next-line promise/no-callback-in-promise,promise/always-return
        if (callback) { return void callback(); }
      });
  }
}

module.exports = StatsWriterPlugin;
