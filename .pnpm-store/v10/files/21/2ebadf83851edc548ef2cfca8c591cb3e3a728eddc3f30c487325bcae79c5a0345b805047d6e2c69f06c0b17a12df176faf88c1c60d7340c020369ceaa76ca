/**
 * Gets current bundle's global scope identifier for React Refresh.
 * @param {Record<string, string>} runtimeGlobals The Webpack runtime globals.
 * @returns {string} The React Refresh global scope within the Webpack bundle.
 */
module.exports.getRefreshGlobalScope = (runtimeGlobals) => {
  return `${runtimeGlobals.require || '__webpack_require__'}.$Refresh$`;
};

/**
 * Gets current Webpack version according to features on the compiler instance.
 * @param {import('webpack').Compiler} compiler The current Webpack compiler instance.
 * @returns {number} The current Webpack version.
 */
module.exports.getWebpackVersion = (compiler) => {
  if (!compiler.hooks) {
    throw new Error(`[ReactRefreshPlugin] Webpack version is not supported!`);
  }

  // Webpack v5+ implements compiler caching
  return 'cache' in compiler ? 5 : 4;
};
