/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Minimatch = require("minimatch").Minimatch

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * @param {any} x - An any value.
 * @returns {any} Always `x`.
 */
function identity(x) {
    return x
}

/**
 * Converts old-style value to new-style value.
 *
 * @param {any} x - The value to convert.
 * @returns {({include: string[], exclude: string[], replace: string[]})[]} Normalized value.
 */
function normalizeValue(x) {
    if (Array.isArray(x)) {
        return x
    }

    return Object.keys(x).map(pattern => ({
        include: [pattern],
        exclude: [],
        replace: x[pattern],
    }))
}

/**
 * Ensures the given value is a string array.
 *
 * @param {any} x - The value to ensure.
 * @returns {string[]} The string array.
 */
function toStringArray(x) {
    if (Array.isArray(x)) {
        return x.map(String)
    }
    return []
}

/**
 * Creates the function which checks whether a file path is matched with the given pattern or not.
 *
 * @param {string[]} includePatterns - The glob patterns to include files.
 * @param {string[]} excludePatterns - The glob patterns to exclude files.
 * @returns {function} Created predicate function.
 */
function createMatch(includePatterns, excludePatterns) {
    const include = includePatterns.map(pattern => new Minimatch(pattern))
    const exclude = excludePatterns.map(pattern => new Minimatch(pattern))

    return (filePath) =>
        include.some(m => m.match(filePath)) &&
        !exclude.some(m => m.match(filePath))
}

/**
 * Creates a function which replaces a given path.
 *
 * @param {RegExp} fromRegexp - A `RegExp` object to replace.
 * @param {string} toStr - A new string to replace.
 * @returns {function} A function which replaces a given path.
 */
function defineConvert(fromRegexp, toStr) {
    return (filePath) =>
        filePath.replace(fromRegexp, toStr)
}

/**
 * Combines given converters.
 * The result function converts a given path with the first matched converter.
 *
 * @param {{match: function, convert: function}} converters - A list of converters to combine.
 * @returns {function} A function which replaces a given path.
 */
function combine(converters) {
    return (filePath) => {
        for (const converter of converters) {
            if (converter.match(filePath)) {
                return converter.convert(filePath)
            }
        }
        return filePath
    }
}

/**
 * Parses `convertPath` property from a given option object.
 *
 * @param {object|undefined} option - An option object to get.
 * @returns {function|null} A function which converts a path., or `null`.
 */
function parse(option) {
    if (!option ||
        !option.convertPath ||
        typeof option.convertPath !== "object"
    ) {
        return null
    }

    const converters = []
    for (const pattern of normalizeValue(option.convertPath)) {
        const include = toStringArray(pattern.include)
        const exclude = toStringArray(pattern.exclude)
        const fromRegexp = new RegExp(String(pattern.replace[0]))
        const toStr = String(pattern.replace[1])

        converters.push({
            match: createMatch(include, exclude),
            convert: defineConvert(fromRegexp, toStr),
        })
    }

    return combine(converters)
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Gets "convertPath" setting.
 *
 * 1. This checks `options` property, then returns it if exists.
 * 2. This checks `settings.node` property, then returns it if exists.
 * 3. This returns a function of identity.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {function} A function which converts a path.
 */
module.exports = function getConvertPath(context) {
    return (
        parse(context.options && context.options[0]) ||
        parse(context.settings && context.settings.node) ||
        identity
    )
}

/**
 * JSON Schema for `convertPath` option.
 */
module.exports.schema = {
    anyOf: [
        {
            type: "object",
            properties: {},
            patternProperties: {
                "^.+$": {
                    type: "array",
                    items: {type: "string"},
                    minItems: 2,
                    maxItems: 2,
                },
            },
            additionalProperties: false,
        },
        {
            type: "array",
            items: {
                type: "object",
                properties: {
                    include: {
                        type: "array",
                        items: {type: "string"},
                        minItems: 1,
                        uniqueItems: true,
                    },
                    exclude: {
                        type: "array",
                        items: {type: "string"},
                        uniqueItems: true,
                    },
                    replace: {
                        type: "array",
                        items: {type: "string"},
                        minItems: 2,
                        maxItems: 2,
                    },
                },
                additionalProperties: false,
                required: ["include", "replace"],
            },
            minItems: 1,
        },
    ],
}
