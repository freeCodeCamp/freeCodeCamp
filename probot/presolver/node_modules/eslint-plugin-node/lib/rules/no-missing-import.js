/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const checkExistence = require("../util/check-existence")
const getAllowModules = require("../util/get-allow-modules")
const getImportExportTargets = require("../util/get-import-export-targets")
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
        "Program:exit"(node) {
            checkExistence(
                context,
                filePath,
                getImportExportTargets(context, node)
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
            description: "disallow import declarations for files that don't exist",
            category: "Possible Errors",
            recommended: false,
        },
        fixable: false,
        schema: [
            {
                type: "object",
                properties: {
                    allowModules: getAllowModules.schema,
                    tryExtensions: getTryExtensions.schema,
                },
                additionalProperties: false,
            },
        ],
    },
}
