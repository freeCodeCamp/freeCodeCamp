/**
 * @fileoverview Environments manager
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const envs = require("../../conf/environments");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

let environments = new Map();

/**
 * Loads the default environments.
 * @returns {void}
 * @private
 */
function load() {
    Object.keys(envs).forEach(envName => {
        environments.set(envName, envs[envName]);
    });
}

// always load default environments upfront
load();

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {

    load,

    /**
     * Gets the environment with the given name.
     * @param {string} name The name of the environment to retrieve.
     * @returns {Object?} The environment object or null if not found.
     */
    get(name) {
        return environments.get(name) || null;
    },

    /**
     * Defines an environment.
     * @param {string} name The name of the environment.
     * @param {Object} env The environment settings.
     * @returns {void}
     */
    define(name, env) {
        environments.set(name, env);
    },

    /**
     * Imports all environments from a plugin.
     * @param {Object} plugin The plugin object.
     * @param {string} pluginName The name of the plugin.
     * @returns {void}
     */
    importPlugin(plugin, pluginName) {
        if (plugin.environments) {
            Object.keys(plugin.environments).forEach(envName => {
                this.define(`${pluginName}/${envName}`, plugin.environments[envName]);
            });
        }
    },

    /**
     * Resets all environments. Only use for tests!
     * @returns {void}
     */
    testReset() {
        environments = new Map();
        load();
    }
};
