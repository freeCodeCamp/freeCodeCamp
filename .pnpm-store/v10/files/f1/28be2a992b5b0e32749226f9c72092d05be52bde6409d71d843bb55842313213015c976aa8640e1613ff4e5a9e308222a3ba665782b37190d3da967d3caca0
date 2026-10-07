"use strict";

/** @typedef {import("./index.js").MinimizedResult} MinimizedResult */
/** @typedef {import("./index.js").CustomOptions} CustomOptions */

/**
 * @template T
 * @param {import("./index.js").InternalOptions<T>} options options
 * @returns {Promise<MinimizedResult>} minified result
 */
async function minify(options) {
  const {
    name,
    input,
    inputSourceMap,
    extractComments
  } = options;
  const {
    implementation,
    options: minimizerOptions
  } = options.minimizer;
  return implementation({
    [name]: input
  }, inputSourceMap, minimizerOptions, extractComments);
}

/**
 * @param {string} options options
 * @returns {Promise<MinimizedResult>} minified result
 */
async function transform(options) {
  // 'use strict' => this === undefined (Clean Scope)
  // Safer for possible security issues, albeit not critical at all here

  const evaluatedOptions =
  /**
   * @template T
   * @type {import("./index.js").InternalOptions<T>}
   */

  // eslint-disable-next-line no-new-func
  new Function("exports", "require", "module", "__filename", "__dirname", `'use strict'\nreturn ${options}`) // eslint-disable-next-line n/exports-style
  (exports, require, module, __filename, __dirname);
  return minify(evaluatedOptions);
}
module.exports = {
  minify,
  transform
};