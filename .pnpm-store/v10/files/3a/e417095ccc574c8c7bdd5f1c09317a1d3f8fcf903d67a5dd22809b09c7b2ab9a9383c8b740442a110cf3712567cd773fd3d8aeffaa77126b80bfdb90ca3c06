const { d, n } = require('../../options');

/**
 * Normalizes the options for the loader.
 * @param {import('../types').ReactRefreshLoaderOptions} options Non-normalized loader options.
 * @returns {import('../types').NormalizedLoaderOptions} Normalized loader options.
 */
const normalizeOptions = (options) => {
  d(options, 'const', false);

  n(options, 'esModule', (esModule) => {
    if (typeof esModule === 'boolean' || typeof esModule === 'undefined') {
      return esModule;
    }

    d(esModule, 'include');
    d(esModule, 'exclude');

    return esModule;
  });

  return options;
};

module.exports = normalizeOptions;
