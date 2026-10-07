/**
 * @fileoverview Create configurations for a rule
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const builtInRules = require("../rules");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Wrap all of the elements of an array into arrays.
 * @param   {*[]}     xs Any array.
 * @returns {Array[]}    An array of arrays.
 */
function explodeArray(xs) {
    return xs.reduce((accumulator, x) => {
        accumulator.push([x]);
        return accumulator;
    }, []);
}

/**
 * Mix two arrays such that each element of the second array is concatenated
 * onto each element of the first array.
 *
 * For example:
 * combineArrays([a, [b, c]], [x, y]); // -> [[a, x], [a, y], [b, c, x], [b, c, y]]
 * @param   {Array} arr1 The first array to combine.
 * @param   {Array} arr2 The second array to combine.
 * @returns {Array}      A mixture of the elements of the first and second arrays.
 */
function combineArrays(arr1, arr2) {
    const res = [];

    if (arr1.length === 0) {
        return explodeArray(arr2);
    }
    if (arr2.length === 0) {
        return explodeArray(arr1);
    }
    arr1.forEach(x1 => {
        arr2.forEach(x2 => {
            res.push([].concat(x1, x2));
        });
    });
    return res;
}

/**
 * Group together valid rule configurations based on object properties
 *
 * e.g.:
 * groupByProperty([
 *     {before: true},
 *     {before: false},
 *     {after: true},
 *     {after: false}
 * ]);
 *
 * will return:
 * [
 *     [{before: true}, {before: false}],
 *     [{after: true}, {after: false}]
 * ]
 * @param   {Object[]} objects Array of objects, each with one property/value pair
 * @returns {Array[]}          Array of arrays of objects grouped by property
 */
function groupByProperty(objects) {
    const groupedObj = objects.reduce((accumulator, obj) => {
        const prop = Object.keys(obj)[0];

        accumulator[prop] = accumulator[prop] ? accumulator[prop].concat(obj) : [obj];
        return accumulator;
    }, {});

    return Object.keys(groupedObj).map(prop => groupedObj[prop]);
}


//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Configuration settings for a rule.
 *
 * A configuration can be a single number (severity), or an array where the first
 * element in the array is the severity, and is the only required element.
 * Configs may also have one or more additional elements to specify rule
 * configuration or options.
 * @typedef {Array|number} ruleConfig
 * @param {number}  0  The rule's severity (0, 1, 2).
 */

/**
 * Object whose keys are rule names and values are arrays of valid ruleConfig items
 * which should be linted against the target source code to determine error counts.
 * (a ruleConfigSet.ruleConfigs).
 *
 * e.g. rulesConfig = {
 *     "comma-dangle": [2, [2, "always"], [2, "always-multiline"], [2, "never"]],
 *     "no-console": [2]
 * }
 * @typedef rulesConfig
 */


/**
 * Create valid rule configurations by combining two arrays,
 * with each array containing multiple objects each with a
 * single property/value pair and matching properties.
 *
 * e.g.:
 * combinePropertyObjects(
 *     [{before: true}, {before: false}],
 *     [{after: true}, {after: false}]
 * );
 *
 * will return:
 * [
 *     {before: true, after: true},
 *     {before: true, after: false},
 *     {before: false, after: true},
 *     {before: false, after: false}
 * ]
 * @param   {Object[]} objArr1 Single key/value objects, all with the same key
 * @param   {Object[]} objArr2 Single key/value objects, all with another key
 * @returns {Object[]}         Combined objects for each combination of input properties and values
 */
function combinePropertyObjects(objArr1, objArr2) {
    const res = [];

    if (objArr1.length === 0) {
        return objArr2;
    }
    if (objArr2.length === 0) {
        return objArr1;
    }
    objArr1.forEach(obj1 => {
        objArr2.forEach(obj2 => {
            const combinedObj = {};
            const obj1Props = Object.keys(obj1);
            const obj2Props = Object.keys(obj2);

            obj1Props.forEach(prop1 => {
                combinedObj[prop1] = obj1[prop1];
            });
            obj2Props.forEach(prop2 => {
                combinedObj[prop2] = obj2[prop2];
            });
            res.push(combinedObj);
        });
    });
    return res;
}

/**
 * Creates a new instance of a rule configuration set
 *
 * A rule configuration set is an array of configurations that are valid for a
 * given rule.  For example, the configuration set for the "semi" rule could be:
 *
 * ruleConfigSet.ruleConfigs // -> [[2], [2, "always"], [2, "never"]]
 *
 * Rule configuration set class
 */
class RuleConfigSet {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {ruleConfig[]} configs Valid rule configurations
     */
    constructor(configs) {

        /**
         * Stored valid rule configurations for this instance
         * @type {Array}
         */
        this.ruleConfigs = configs || [];
    }

    /**
     * Add a severity level to the front of all configs in the instance.
     * This should only be called after all configs have been added to the instance.
     * @returns {void}
     */
    addErrorSeverity() {
        const severity = 2;

        this.ruleConfigs = this.ruleConfigs.map(config => {
            config.unshift(severity);
            return config;
        });

        // Add a single config at the beginning consisting of only the severity
        this.ruleConfigs.unshift(severity);
    }

    /**
     * Add rule configs from an array of strings (schema enums)
     * @param  {string[]} enums Array of valid rule options (e.g. ["always", "never"])
     * @returns {void}
     */
    addEnums(enums) {
        this.ruleConfigs = this.ruleConfigs.concat(combineArrays(this.ruleConfigs, enums));
    }

    /**
     * Add rule configurations from a schema object
     * @param  {Object} obj Schema item with type === "object"
     * @returns {boolean} true if at least one schema for the object could be generated, false otherwise
     */
    addObject(obj) {
        const objectConfigSet = {
            objectConfigs: [],
            add(property, values) {
                for (let idx = 0; idx < values.length; idx++) {
                    const optionObj = {};

                    optionObj[property] = values[idx];
                    this.objectConfigs.push(optionObj);
                }
            },

            combine() {
                this.objectConfigs = groupByProperty(this.objectConfigs).reduce((accumulator, objArr) => combinePropertyObjects(accumulator, objArr), []);
            }
        };

        /*
         * The object schema could have multiple independent properties.
         * If any contain enums or booleans, they can be added and then combined
         */
        Object.keys(obj.properties).forEach(prop => {
            if (obj.properties[prop].enum) {
                objectConfigSet.add(prop, obj.properties[prop].enum);
            }
            if (obj.properties[prop].type && obj.properties[prop].type === "boolean") {
                objectConfigSet.add(prop, [true, false]);
            }
        });
        objectConfigSet.combine();

        if (objectConfigSet.objectConfigs.length > 0) {
            this.ruleConfigs = this.ruleConfigs.concat(combineArrays(this.ruleConfigs, objectConfigSet.objectConfigs));
            return true;
        }

        return false;
    }
}

/**
 * Generate valid rule configurations based on a schema object
 * @param   {Object} schema  A rule's schema object
 * @returns {Array[]}        Valid rule configurations
 */
function generateConfigsFromSchema(schema) {
    const configSet = new RuleConfigSet();

    if (Array.isArray(schema)) {
        for (const opt of schema) {
            if (opt.enum) {
                configSet.addEnums(opt.enum);
            } else if (opt.type && opt.type === "object") {
                if (!configSet.addObject(opt)) {
                    break;
                }

            // TODO (IanVS): support oneOf
            } else {

                // If we don't know how to fill in this option, don't fill in any of the following options.
                break;
            }
        }
    }
    configSet.addErrorSeverity();
    return configSet.ruleConfigs;
}

/**
 * Generate possible rule configurations for all of the core rules
 * @param {boolean} noDeprecated Indicates whether ignores deprecated rules or not.
 * @returns {rulesConfig} Hash of rule names and arrays of possible configurations
 */
function createCoreRuleConfigs(noDeprecated = false) {
    return Array.from(builtInRules).reduce((accumulator, [id, rule]) => {
        const schema = (typeof rule === "function") ? rule.schema : rule.meta.schema;
        const isDeprecated = (typeof rule === "function") ? rule.deprecated : rule.meta.deprecated;

        if (noDeprecated && isDeprecated) {
            return accumulator;
        }

        accumulator[id] = generateConfigsFromSchema(schema);
        return accumulator;
    }, {});
}


//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    generateConfigsFromSchema,
    createCoreRuleConfigs
};
