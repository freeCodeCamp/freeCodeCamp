/**
 * @typedef {Object} ErrorOverlayOptions
 * @property {string | false} [entry] Path to a JS file that sets up the error overlay integration.
 * @property {string | false} [module] The error overlay module to use.
 * @property {string} [sockHost] The socket host to use (WDS only).
 * @property {import('type-fest').LiteralUnion<'wds' | 'whm' | 'wps' | false, string>} [sockIntegration] Path to a JS file that sets up the Webpack socket integration.
 * @property {string} [sockPath] The socket path to use (WDS only).
 * @property {number} [sockPort] The socket port to use (WDS only).
 * @property {'http' | 'https' | 'ws' | 'wss'} [sockProtocol] The socket protocol to use (WDS only).
 * @property {boolean} [useURLPolyfill] Uses a polyfill for the DOM URL API (WDS only).
 */

/**
 * @typedef {import('type-fest').SetRequired<ErrorOverlayOptions, 'entry' | 'module' | 'sockIntegration'>} NormalizedErrorOverlayOptions
 */

/**
 * @typedef {Object} ReactRefreshPluginOptions
 * @property {boolean | import('../loader/types').ESModuleOptions} [esModule] Enables strict ES Modules compatible runtime.
 * @property {string | RegExp | Array<string | RegExp>} [exclude] Files to explicitly exclude from processing.
 * @property {boolean} [forceEnable] Enables the plugin forcefully.
 * @property {string | RegExp | Array<string | RegExp>} [include] Files to explicitly include for processing.
 * @property {string} [library] Name of the library bundle.
 * @property {boolean | ErrorOverlayOptions} [overlay] Modifies how the error overlay integration works in the plugin.
 */

/**
 * @typedef {Object} OverlayOverrides
 * @property {false | NormalizedErrorOverlayOptions} overlay Modifies how the error overlay integration works in the plugin.
 */

/**
 * @typedef {import('type-fest').SetRequired<import('type-fest').Except<ReactRefreshPluginOptions, 'overlay'>, 'exclude' | 'include'> & OverlayOverrides} NormalizedPluginOptions
 */

module.exports = {};
