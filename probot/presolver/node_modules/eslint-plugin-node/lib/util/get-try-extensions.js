/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_VALUE = Object.freeze([".js", ".json", ".node"])

/**
 * Gets `tryExtensions` property from a given option object.
 *
 * @param {object|undefined} option - An option object to get.
 * @returns {string[]|null} The `tryExtensions` value, or `null`.
 */
function get(option) {
    if (option && option.tryExtensions && Array.isArray(option.tryExtensions)) {
        return option.tryExtensions.map(String)
    }
    return null
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Gets "tryExtensions" setting.
 *
 * 1. This checks `options` property, then returns it if exists.
 * 2. This checks `settings.node` property, then returns it if exists.
 * 3. This returns `[".js", ".json", ".node"]`.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {string[]} A list of extensions.
 */
module.exports = function getTryExtensions(context) {
    return (
        get(context.options && context.options[0]) ||
        get(context.settings && context.settings.node) ||
        DEFAULT_VALUE
    )
}

module.exports.schema = {
    type: "array",
    items: {
        type: "string",
        pattern: "^\\.",
    },
    uniqueItems: true,
}
