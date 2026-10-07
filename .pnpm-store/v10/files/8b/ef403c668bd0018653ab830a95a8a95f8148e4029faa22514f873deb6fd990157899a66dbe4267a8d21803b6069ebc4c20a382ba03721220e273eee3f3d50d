const { d, n } = require('../../options');

/**
 * Normalizes the options for the plugin.
 * @param {import('../types').ReactRefreshPluginOptions} options Non-normalized plugin options.
 * @returns {import('../types').NormalizedPluginOptions} Normalized plugin options.
 */
const normalizeOptions = (options) => {
  d(options, 'exclude', /node_modules/i);
  d(options, 'include', /\.([cm]js|[jt]sx?|flow)$/i);
  d(options, 'forceEnable');
  d(options, 'library');

  n(options, 'overlay', (overlay) => {
    /** @type {import('../types').NormalizedErrorOverlayOptions} */
    const defaults = {
      entry: require.resolve('../../client/ErrorOverlayEntry'),
      module: require.resolve('../../overlay'),
      sockIntegration: 'wds',
    };

    if (overlay === false) {
      return false;
    }
    if (typeof overlay === 'undefined' || overlay === true) {
      return defaults;
    }

    d(overlay, 'entry', defaults.entry);
    d(overlay, 'module', defaults.module);
    d(overlay, 'sockIntegration', defaults.sockIntegration);
    d(overlay, 'sockHost');
    d(overlay, 'sockPath');
    d(overlay, 'sockPort');
    d(overlay, 'sockProtocol');
    d(options, 'useURLPolyfill');

    return overlay;
  });

  return options;
};

module.exports = normalizeOptions;
