/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const checkPublish = require("../util/check-publish")
const getAllowModules = require("../util/get-allow-modules")
const getConvertPath = require("../util/get-convert-path")
const getRequireTargets = require("../util/get-require-targets")
const getTryExtensions = require("../util/get-try-extensions")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    const filePath = context.getFilename()
    if (filePath === "<input>") {
        return {}
    }

    return {
        "Program:exit"() {
            checkPublish(
                context,
                filePath,
                getRequireTargets(context)
            )
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
            description: "disallow `require()` expressions for files that npm ignores",
            category: "Possible Errors",
            recommended: false,
        },
        fixable: false,
        schema: [
            {
                type: "object",
                properties: {
                    allowModules: getAllowModules.schema,
                    convertPath: getConvertPath.schema,
                    tryExtensions: getTryExtensions.schema,
                },
                additionalProperties: false,
            },
        ],
    },
}
