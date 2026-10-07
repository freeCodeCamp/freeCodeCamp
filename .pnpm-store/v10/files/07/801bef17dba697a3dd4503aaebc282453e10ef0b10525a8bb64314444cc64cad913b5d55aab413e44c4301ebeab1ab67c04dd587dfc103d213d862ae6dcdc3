/**
 * Provides a way to load "plugins" as provided by the user.
 *
 * Currently supports:
 *
 * - Root hooks
 * - Global fixtures (setup/teardown)
 * @private
 * @module plugin
 */

'use strict';

const debug = require('debug')('mocha:plugin-loader');
const {
  createInvalidPluginDefinitionError,
  createInvalidPluginImplementationError
} = require('./errors');
const {castArray} = require('./utils');

/**
 * Built-in plugin definitions.
 */
const MochaPlugins = [
  /**
   * Root hook plugin definition
   * @type {PluginDefinition}
   */
  {
    exportName: 'mochaHooks',
    optionName: 'rootHooks',
    validate(value) {
      if (
        Array.isArray(value) ||
        (typeof value !== 'function' && typeof value !== 'object')
      ) {
        throw createInvalidPluginImplementationError(
          `mochaHooks must be an object or a function returning (or fulfilling with) an object`
        );
      }
    },
    async finalize(rootHooks) {
      if (rootHooks.length) {
        const rootHookObjects = await Promise.all(
          rootHooks.map(async hook =>
            typeof hook === 'function' ? hook() : hook
          )
        );

        return rootHookObjects.reduce(
          (acc, hook) => {
            hook = {
              beforeAll: [],
              beforeEach: [],
              afterAll: [],
              afterEach: [],
              ...hook
            };
            return {
              beforeAll: [...acc.beforeAll, ...castArray(hook.beforeAll)],
              beforeEach: [...acc.beforeEach, ...castArray(hook.beforeEach)],
              afterAll: [...acc.afterAll, ...castArray(hook.afterAll)],
              afterEach: [...acc.afterEach, ...castArray(hook.afterEach)]
            };
          },
          {beforeAll: [], beforeEach: [], afterAll: [], afterEach: []}
        );
      }
    }
  },
  /**
   * Global setup fixture plugin definition
   * @type {PluginDefinition}
   */
  {
    exportName: 'mochaGlobalSetup',
    optionName: 'globalSetup',
    validate(value) {
      let isValid = true;
      if (Array.isArray(value)) {
        if (value.some(item => typeof item !== 'function')) {
          isValid = false;
        }
      } else if (typeof value !== 'function') {
        isValid = false;
      }
      if (!isValid) {
        throw createInvalidPluginImplementationError(
          `mochaGlobalSetup must be a function or an array of functions`,
          {pluginDef: this, pluginImpl: value}
        );
      }
    }
  },
  /**
   * Global teardown fixture plugin definition
   * @type {PluginDefinition}
   */
  {
    exportName: 'mochaGlobalTeardown',
    optionName: 'globalTeardown',
    validate(value) {
      let isValid = true;
      if (Array.isArray(value)) {
        if (value.some(item => typeof item !== 'function')) {
          isValid = false;
        }
      } else if (typeof value !== 'function') {
        isValid = false;
      }
      if (!isValid) {
        throw createInvalidPluginImplementationError(
          `mochaGlobalTeardown must be a function or an array of functions`,
          {pluginDef: this, pluginImpl: value}
        );
      }
    }
  }
];

/**
 * Contains a registry of [plugin definitions]{@link PluginDefinition} and discovers plugin implementations in user-supplied code.
 *
 * - [load()]{@link #load} should be called for all required modules
 * - The result of [finalize()]{@link #finalize} should be merged into the options for the [Mocha]{@link Mocha} constructor.
 * @private
 */
class PluginLoader {
  /**
   * Initializes plugin names, plugin map, etc.
   * @param {PluginLoaderOptions} [opts] - Options
   */
  constructor({pluginDefs = MochaPlugins, ignore = []} = {}) {
    /**
     * Map of registered plugin defs
     * @type {Map<string,PluginDefinition>}
     */
    this.registered = new Map();

    /**
     * Cache of known `optionName` values for checking conflicts
     * @type {Set<string>}
     */
    this.knownOptionNames = new Set();

    /**
     * Cache of known `exportName` values for checking conflicts
     * @type {Set<string>}
     */
    this.knownExportNames = new Set();

    /**
     * Map of user-supplied plugin implementations
     * @type {Map<string,Array<*>>}
     */
    this.loaded = new Map();

    /**
     * Set of ignored plugins by export name
     * @type {Set<string>}
     */
    this.ignoredExportNames = new Set(castArray(ignore));

    castArray(pluginDefs).forEach(pluginDef => {
      this.register(pluginDef);
    });

    debug(
      'registered %d plugin defs (%d ignored)',
      this.registered.size,
      this.ignoredExportNames.size
    );
  }

  /**
   * Register a plugin
   * @param {PluginDefinition} pluginDef - Plugin definition
   */
  register(pluginDef) {
    if (!pluginDef || typeof pluginDef !== 'object') {
      throw createInvalidPluginDefinitionError(
        'pluginDef is non-object or falsy',
        pluginDef
      );
    }
    if (!pluginDef.exportName) {
      throw createInvalidPluginDefinitionError(
        `exportName is expected to be a non-empty string`,
        pluginDef
      );
    }
    let {exportName} = pluginDef;
    if (this.ignoredExportNames.has(exportName)) {
      debug(
        'refusing to register ignored plugin with export name "%s"',
        exportName
      );
      return;
    }
    exportName = String(exportName);
    pluginDef.optionName = String(pluginDef.optionName || exportName);
    if (this.knownExportNames.has(exportName)) {
      throw createInvalidPluginDefinitionError(
        `Plugin definition conflict: ${exportName}; exportName must be unique`,
        pluginDef
      );
    }
    this.loaded.set(exportName, []);
    this.registered.set(exportName, pluginDef);
    this.knownExportNames.add(exportName);
    this.knownOptionNames.add(pluginDef.optionName);
    debug('registered plugin def "%s"', exportName);
  }

  /**
   * Inspects a module's exports for known plugins and keeps them in memory.
   *
   * @param {*} requiredModule - The exports of a module loaded via `--require`
   * @returns {boolean} If one or more plugins was found, return `true`.
   */
  load(requiredModule) {
    // we should explicitly NOT fail if other stuff is exported.
    // we only care about the plugins we know about.
    if (requiredModule && typeof requiredModule === 'object') {
      return Array.from(this.knownExportNames).reduce(
        (pluginImplFound, pluginName) => {
          const pluginImpl = requiredModule[pluginName];
          if (pluginImpl) {
            const plugin = this.registered.get(pluginName);
            if (typeof plugin.validate === 'function') {
              plugin.validate(pluginImpl);
            }
            this.loaded.set(pluginName, [
              ...this.loaded.get(pluginName),
              ...castArray(pluginImpl)
            ]);
            return true;
          }
          return pluginImplFound;
        },
        false
      );
    }
    return false;
  }

  /**
   * Call the `finalize()` function of each known plugin definition on the plugins found by [load()]{@link PluginLoader#load}.
   *
   * Output suitable for passing as input into {@link Mocha} constructor.
   * @returns {Promise<object>} Object having keys corresponding to registered plugin definitions' `optionName` prop (or `exportName`, if none), and the values are the implementations as provided by a user.
   */
  async finalize() {
    const finalizedPlugins = Object.create(null);

    for await (const [exportName, pluginImpls] of this.loaded.entries()) {
      if (pluginImpls.length) {
        const plugin = this.registered.get(exportName);
        finalizedPlugins[plugin.optionName] =
          typeof plugin.finalize === 'function'
            ? await plugin.finalize(pluginImpls)
            : pluginImpls;
      }
    }

    debug('finalized plugins: %O', finalizedPlugins);
    return finalizedPlugins;
  }

  /**
   * Constructs a {@link PluginLoader}
   * @param {PluginLoaderOptions} [opts] - Plugin loader options
   */
  static create({pluginDefs = MochaPlugins, ignore = []} = {}) {
    return new PluginLoader({pluginDefs, ignore});
  }
}

module.exports = PluginLoader;

/**
 * Options for {@link PluginLoader}
 * @typedef {Object} PluginLoaderOptions
 * @property {PluginDefinition[]} [pluginDefs] - Plugin definitions
 * @property {string[]} [ignore] - A list of plugins to ignore when loading
 */
