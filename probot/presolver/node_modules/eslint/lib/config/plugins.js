/**
 * @fileoverview Plugins manager
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Environments = require("./environments"),
    Rules = require("../rules");

const debug = require("debug")("eslint:plugins");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

let plugins = Object.create(null);

const PLUGIN_NAME_PREFIX = "eslint-plugin-",
    NAMESPACE_REGEX = /^@.*\//i;

/**
 * Removes the prefix `eslint-plugin-` from a plugin name.
 * @param {string} pluginName The name of the plugin which may have the prefix.
 * @returns {string} The name of the plugin without prefix.
 */
function removePrefix(pluginName) {
    return pluginName.indexOf(PLUGIN_NAME_PREFIX) === 0 ? pluginName.substring(PLUGIN_NAME_PREFIX.length) : pluginName;
}

/**
 * Gets the scope (namespace) of a plugin.
 * @param {string} pluginName The name of the plugin which may have the prefix.
 * @returns {string} The name of the plugins namepace if it has one.
 */
function getNamespace(pluginName) {
    return pluginName.match(NAMESPACE_REGEX) ? pluginName.match(NAMESPACE_REGEX)[0] : "";
}

/**
 * Removes the namespace from a plugin name.
 * @param {string} pluginName The name of the plugin which may have the prefix.
 * @returns {string} The name of the plugin without the namespace.
 */
function removeNamespace(pluginName) {
    return pluginName.replace(NAMESPACE_REGEX, "");
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {

    removePrefix,
    getNamespace,
    removeNamespace,

    /**
     * Defines a plugin with a given name rather than loading from disk.
     * @param {string} pluginName The name of the plugin to load.
     * @param {Object} plugin The plugin object.
     * @returns {void}
     */
    define(pluginName, plugin) {
        const pluginNamespace = getNamespace(pluginName),
            pluginNameWithoutNamespace = removeNamespace(pluginName),
            pluginNameWithoutPrefix = removePrefix(pluginNameWithoutNamespace),
            shortName = pluginNamespace + pluginNameWithoutPrefix;

        // load up environments and rules
        plugins[shortName] = plugin;
        Environments.importPlugin(plugin, shortName);
        Rules.importPlugin(plugin, shortName);

        // load up environments and rules for the name that '@scope/' was omitted
        // 3 lines below will be removed by 4.0.0
        plugins[pluginNameWithoutPrefix] = plugin;
        Environments.importPlugin(plugin, pluginNameWithoutPrefix);
        Rules.importPlugin(plugin, pluginNameWithoutPrefix);
    },

    /**
     * Gets a plugin with the given name.
     * @param {string} pluginName The name of the plugin to retrieve.
     * @returns {Object} The plugin or null if not loaded.
     */
    get(pluginName) {
        return plugins[pluginName] || null;
    },

    /**
     * Returns all plugins that are loaded.
     * @returns {Object} The plugins cache.
     */
    getAll() {
        return plugins;
    },

    /**
     * Loads a plugin with the given name.
     * @param {string} pluginName The name of the plugin to load.
     * @returns {void}
     * @throws {Error} If the plugin cannot be loaded.
     */
    load(pluginName) {
        const pluginNamespace = getNamespace(pluginName),
            pluginNameWithoutNamespace = removeNamespace(pluginName),
            pluginNameWithoutPrefix = removePrefix(pluginNameWithoutNamespace),
            shortName = pluginNamespace + pluginNameWithoutPrefix,
            longName = pluginNamespace + PLUGIN_NAME_PREFIX + pluginNameWithoutPrefix;
        let plugin = null;

        if (pluginName.match(/\s+/)) {
            const whitespaceError = new Error(`Whitespace found in plugin name '${pluginName}'`);

            whitespaceError.messageTemplate = "whitespace-found";
            whitespaceError.messageData = {
                pluginName: longName
            };
            throw whitespaceError;
        }

        if (!plugins[shortName]) {
            try {
                plugin = require(longName);
            } catch (pluginLoadErr) {
                try {

                    // Check whether the plugin exists
                    require.resolve(longName);
                } catch (missingPluginErr) {

                    // If the plugin can't be resolved, display the missing plugin error (usually a config or install error)
                    debug(`Failed to load plugin ${longName}.`);
                    missingPluginErr.message = `Failed to load plugin ${pluginName}: ${missingPluginErr.message}`;
                    missingPluginErr.messageTemplate = "plugin-missing";
                    missingPluginErr.messageData = {
                        pluginName: longName
                    };
                    throw missingPluginErr;
                }

                // Otherwise, the plugin exists and is throwing on module load for some reason, so print the stack trace.
                throw pluginLoadErr;
            }

            this.define(pluginName, plugin);
        }
    },

    /**
     * Loads all plugins from an array.
     * @param {string[]} pluginNames An array of plugins names.
     * @returns {void}
     * @throws {Error} If a plugin cannot be loaded.
     */
    loadAll(pluginNames) {
        pluginNames.forEach(this.load, this);
    },

    /**
     * Resets plugin information. Use for tests only.
     * @returns {void}
     */
    testReset() {
        plugins = Object.create(null);
    }
};
