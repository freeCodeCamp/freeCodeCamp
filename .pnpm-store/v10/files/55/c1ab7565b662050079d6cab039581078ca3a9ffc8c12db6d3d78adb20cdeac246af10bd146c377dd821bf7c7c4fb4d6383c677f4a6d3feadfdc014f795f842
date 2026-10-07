"use strict";

const webpack = require("webpack");

const {
  isColorSupported
} = require("colorette");
/** @typedef {import("webpack").Configuration} Configuration */

/** @typedef {import("webpack").Compiler} Compiler */

/** @typedef {import("webpack").MultiCompiler} MultiCompiler */

/** @typedef {import("webpack").Stats} Stats */

/** @typedef {import("webpack").MultiStats} MultiStats */

/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */

/** @typedef {import("../index.js").ServerResponse} ServerResponse */

/** @typedef {Configuration["stats"]} StatsOptions */

/** @typedef {{ children: Configuration["stats"][] }} MultiStatsOptions */

/** @typedef {Exclude<Configuration["stats"], boolean | string | undefined>} NormalizedStatsOptions */
// TODO remove `color` after dropping webpack v4

/** @typedef {{ children: StatsOptions[], colors?: any }} MultiNormalizedStatsOptions */

/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 */


function setupHooks(context) {
  function invalid() {
    if (context.state) {
      context.logger.log("Compilation starting...");
    } // We are now in invalid state
    // eslint-disable-next-line no-param-reassign


    context.state = false; // eslint-disable-next-line no-param-reassign, no-undefined

    context.stats = undefined;
  } // @ts-ignore


  const statsForWebpack4 = webpack.Stats && webpack.Stats.presetToOptions;
  /**
   * @param {Configuration["stats"]} statsOptions
   * @returns {NormalizedStatsOptions}
   */

  function normalizeStatsOptions(statsOptions) {
    if (statsForWebpack4) {
      if (typeof statsOptions === "undefined") {
        // eslint-disable-next-line no-param-reassign
        statsOptions = {};
      } else if (typeof statsOptions === "boolean" || typeof statsOptions === "string") {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        statsOptions = webpack.Stats.presetToOptions(statsOptions);
      } // @ts-ignore


      return statsOptions;
    }

    if (typeof statsOptions === "undefined") {
      // eslint-disable-next-line no-param-reassign
      statsOptions = {
        preset: "normal"
      };
    } else if (typeof statsOptions === "boolean") {
      // eslint-disable-next-line no-param-reassign
      statsOptions = statsOptions ? {
        preset: "normal"
      } : {
        preset: "none"
      };
    } else if (typeof statsOptions === "string") {
      // eslint-disable-next-line no-param-reassign
      statsOptions = {
        preset: statsOptions
      };
    }

    return statsOptions;
  }
  /**
   * @param {Stats | MultiStats} stats
   */


  function done(stats) {
    // We are now on valid state
    // eslint-disable-next-line no-param-reassign
    context.state = true; // eslint-disable-next-line no-param-reassign

    context.stats = stats; // Do the stuff in nextTick, because bundle may be invalidated if a change happened while compiling

    process.nextTick(() => {
      const {
        compiler,
        logger,
        options,
        state,
        callbacks
      } = context; // Check if still in valid state

      if (!state) {
        return;
      }

      logger.log("Compilation finished");
      const isMultiCompilerMode = Boolean(
      /** @type {MultiCompiler} */
      compiler.compilers);
      /**
       * @type {StatsOptions | MultiStatsOptions | NormalizedStatsOptions | MultiNormalizedStatsOptions}
       */

      let statsOptions;

      if (typeof options.stats !== "undefined") {
        statsOptions = isMultiCompilerMode ? {
          children:
          /** @type {MultiCompiler} */
          compiler.compilers.map(() => options.stats)
        } : options.stats;
      } else {
        statsOptions = isMultiCompilerMode ? {
          children:
          /** @type {MultiCompiler} */
          compiler.compilers.map(child => child.options.stats)
        } :
        /** @type {Compiler} */
        compiler.options.stats;
      }

      if (isMultiCompilerMode) {
        /** @type {MultiNormalizedStatsOptions} */
        statsOptions.children =
        /** @type {MultiStatsOptions} */
        statsOptions.children.map(
        /**
         * @param {StatsOptions} childStatsOptions
         * @return {NormalizedStatsOptions}
         */
        childStatsOptions => {
          // eslint-disable-next-line no-param-reassign
          childStatsOptions = normalizeStatsOptions(childStatsOptions);

          if (typeof childStatsOptions.colors === "undefined") {
            // eslint-disable-next-line no-param-reassign
            childStatsOptions.colors = isColorSupported;
          }

          return childStatsOptions;
        });
      } else {
        /** @type {NormalizedStatsOptions} */
        statsOptions = normalizeStatsOptions(
        /** @type {StatsOptions} */
        statsOptions);

        if (typeof statsOptions.colors === "undefined") {
          statsOptions.colors = isColorSupported;
        }
      } // TODO webpack@4 doesn't support `{ children: [{ colors: true }, { colors: true }] }` for stats


      if (
      /** @type {MultiCompiler} */
      compiler.compilers && statsForWebpack4) {
        /** @type {MultiNormalizedStatsOptions} */
        statsOptions.colors =
        /** @type {MultiNormalizedStatsOptions} */
        statsOptions.children.some(
        /**
         * @param {StatsOptions} child
         */
        // @ts-ignore
        child => child.colors);
      }

      const printedStats = stats.toString(statsOptions); // Avoid extra empty line when `stats: 'none'`

      if (printedStats) {
        // eslint-disable-next-line no-console
        console.log(printedStats);
      } // eslint-disable-next-line no-param-reassign


      context.callbacks = []; // Execute callback that are delayed

      callbacks.forEach(
      /**
       * @param {(...args: any[]) => Stats | MultiStats} callback
       */
      callback => {
        callback(stats);
      });
    });
  }

  context.compiler.hooks.watchRun.tap("webpack-dev-middleware", invalid);
  context.compiler.hooks.invalid.tap("webpack-dev-middleware", invalid);
  context.compiler.hooks.done.tap("webpack-dev-middleware", done);
}

module.exports = setupHooks;