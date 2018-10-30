/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path")
const getConvertPath = require("../util/get-convert-path")
const getNpmignore = require("../util/get-npmignore")
const getPackageJson = require("../util/get-package-json")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given path is a `bin` file.
 *
 * @param {string} filePath - A file path to check.
 * @param {string|object|undefined} binField - A value of the `bin` field of `package.json`.
 * @param {string} basedir - A directory path that `package.json` exists.
 * @returns {boolean} `true` if the file is a `bin` file.
 */
function isBinFile(filePath, binField, basedir) {
    if (!binField) {
        return false
    }
    if (typeof binField === "string") {
        return filePath === path.resolve(basedir, binField)
    }
    return Object.keys(binField).some(key => filePath === path.resolve(basedir, binField[key]))
}

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    return {
        Program(node) {
            // Check file path.
            let rawFilePath = context.getFilename()
            if (rawFilePath === "<input>") {
                return
            }
            rawFilePath = path.resolve(rawFilePath)

            // Find package.json
            const p = getPackageJson(rawFilePath)
            if (!p) {
                return
            }

            // Convert by convertPath option
            const basedir = path.dirname(p.filePath)
            const relativePath = getConvertPath(context)(
                path.relative(basedir, rawFilePath).replace(/\\/g, "/")
            )
            const filePath = path.join(basedir, relativePath)

            // Check this file is bin.
            if (!isBinFile(filePath, p.bin, basedir)) {
                return
            }

            // Check ignored or not
            const npmignore = getNpmignore(filePath)
            if (!npmignore.match(relativePath)) {
                return
            }

            // Report.
            context.report({
                node,
                message:
                    "npm ignores '{{name}}'. " +
                    "Check 'files' field of 'package.json' or '.npmignore'.",
                data: {name: relativePath},
            })
        },
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    create,
    meta: {
        docs: {
            description: "disallow 'bin' files that npm ignores",
            category: "Possible Errors",
            recommended: false,
        },
        fixable: false,
        schema: [
            {
                type: "object",
                properties: { //
                    convertPath: getConvertPath.schema,
                },
            },
        ],
    },
}
