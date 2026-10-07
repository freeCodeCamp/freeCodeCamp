// @ts-check

"use strict";

// @ts-ignore
// eslint-disable-next-line camelcase, no-inline-comments, no-undef
const nativeRequire = (typeof __non_webpack_require__ === "undefined") ? require : /* c8 ignore next */ __non_webpack_require__;
// Captures the native require implementation (even under webpack).

/**
 * @typedef RequireResolveOptions
 * @property {string[]} [paths] Additional paths to resolve from.
 */

/**
 * @callback RequireResolve
 * @param {string} id Module name or path.
 * @param {RequireResolveOptions} options Options to apply.
 * @returns {string} Resolved module path.
 */

/**
 * Resolves modules according to Node's resolution rules.
 *
 * @param {RequireResolve} resolve Node-like require.resolve implementation.
 * @param {string} id Module name or path.
 * @param {string[]} [paths] Additional paths to resolve from.
 * @returns {string} Resolved module path.
 */
const resolveModuleCustomResolve = (resolve, id, paths = []) => {
  // resolve.paths is sometimes not present under webpack or VS Code
  // @ts-ignore
  const resolvePaths = resolve.paths?.("") || [];
  const allPaths = [ ...paths, ...resolvePaths ];
  return resolve(id, { "paths": allPaths });
};

/**
 * Resolves modules according to Node's resolution rules.
 *
 * @param {string} id Module name or path.
 * @param {string[]} [paths] Additional paths to resolve from.
 * @returns {string} Resolved module path.
 */
const resolveModule = (id, paths) => (
  resolveModuleCustomResolve(nativeRequire.resolve, id, paths)
);

module.exports = {
  resolveModule,
  resolveModuleCustomResolve
};
