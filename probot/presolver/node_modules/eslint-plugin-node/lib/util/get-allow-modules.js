/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_VALUE = Object.freeze([])

/**
 * Gets `allowModules` property from a given option object.
 *
 * @param {object|undefined} option - An option object to get.
 * @returns {string[]|null} The `allowModules` value, or `null`.
 */
function get(option) {
    if (option && option.allowModules && Array.isArray(option.allowModules)) {
        return option.allowModules.map(String)
    }
    return null
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Gets "allowModules" setting.
 *
 * 1. This checks `options` property, then returns it if exists.
 * 2. This checks `settings.node` property, then returns it if exists.
 * 3. This returns `[]`.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {string[]} A list of extensions.
 */
module.exports = function getAllowModules(context) {
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
        pattern: "^(?:@[a-zA-Z0-9_\\-.]+/)?[a-zA-Z0-9_\\-.]+$",
    },
    uniqueItems: true,
}
