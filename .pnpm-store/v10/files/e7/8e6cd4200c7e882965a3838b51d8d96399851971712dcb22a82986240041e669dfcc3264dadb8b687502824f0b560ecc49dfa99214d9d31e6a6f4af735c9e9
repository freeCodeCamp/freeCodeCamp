/**
 * @fileoverview `ConfigDependency` class.
 *
 * `ConfigDependency` class expresses a loaded parser or plugin.
 *
 * If the parser or plugin was loaded successfully, it has `definition` property
 * and `filePath` property. Otherwise, it has `error` property.
 *
 * When `JSON.stringify()` converted a `ConfigDependency` object to a JSON, it
 * omits `definition` property.
 *
 * `ConfigArrayFactory` creates `ConfigDependency` objects when it loads parsers
 * or plugins.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

const util = require("util");

/**
 * The class is to store parsers or plugins.
 * This class hides the loaded object from `JSON.stringify()` and `console.log`.
 * @template T
 */
class ConfigDependency {

    /**
     * Initialize this instance.
     * @param {Object} data The dependency data.
     * @param {T} [data.definition] The dependency if the loading succeeded.
     * @param {Error} [data.error] The error object if the loading failed.
     * @param {string} [data.filePath] The actual path to the dependency if the loading succeeded.
     * @param {string} data.id The ID of this dependency.
     * @param {string} data.importerName The name of the config file which loads this dependency.
     * @param {string} data.importerPath The path to the config file which loads this dependency.
     */
    constructor({
        definition = null,
        error = null,
        filePath = null,
        id,
        importerName,
        importerPath
    }) {

        /**
         * The loaded dependency if the loading succeeded.
         * @type {T|null}
         */
        this.definition = definition;

        /**
         * The error object if the loading failed.
         * @type {Error|null}
         */
        this.error = error;

        /**
         * The loaded dependency if the loading succeeded.
         * @type {string|null}
         */
        this.filePath = filePath;

        /**
         * The ID of this dependency.
         * @type {string}
         */
        this.id = id;

        /**
         * The name of the config file which loads this dependency.
         * @type {string}
         */
        this.importerName = importerName;

        /**
         * The path to the config file which loads this dependency.
         * @type {string}
         */
        this.importerPath = importerPath;
    }

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @returns {Object} a JSON compatible object.
     */
    toJSON() {
        const obj = this[util.inspect.custom]();

        // Display `error.message` (`Error#message` is unenumerable).
        if (obj.error instanceof Error) {
            obj.error = { ...obj.error, message: obj.error.message };
        }

        return obj;
    }

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @returns {Object} an object to display by `console.log()`.
     */
    [util.inspect.custom]() {
        const {
            definition: _ignore, // eslint-disable-line no-unused-vars
            ...obj
        } = this;

        return obj;
    }
}

/** @typedef {ConfigDependency<import("../../shared/types").Parser>} DependentParser */
/** @typedef {ConfigDependency<import("../../shared/types").Plugin>} DependentPlugin */

module.exports = { ConfigDependency };
