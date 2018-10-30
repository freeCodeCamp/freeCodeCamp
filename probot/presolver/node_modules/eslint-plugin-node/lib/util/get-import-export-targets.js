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
const resolve = require("resolve")
const getTryExtensions = require("./get-try-extensions")
const ImportTarget = require("./import-target")
const stripImportPathParams = require("./strip-import-path-params")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const MODULE_TYPE = /^(?:Import|Export(?:Named|Default|All))Declaration$/

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Gets a list of `import`/`export` declaration targets.
 *
 * Core modules of Node.js (e.g. `fs`, `http`) are excluded.
 *
 * @param {RuleContext} context - The rule context.
 * @param {ASTNode} programNode - The node of Program.
 * @param {boolean} includeCore - The flag to include core modules.
 * @returns {ImportTarget[]} A list of found target's information.
 */
module.exports = function getImportExportTargets(context, programNode, includeCore) {
    const retv = []
    const basedir = path.dirname(path.resolve(context.getFilename()))
    const extensions = getTryExtensions(context)

    for (const statement of programNode.body) {
        // Skip if it's not a module declaration.
        if (!MODULE_TYPE.test(statement.type)) {
            continue
        }

        // Gets the target module.
        const node = statement.source
        const name = node && stripImportPathParams(node.value)
        if (name && (includeCore || !resolve.isCore(name))) {
            retv.push(new ImportTarget(node, name, basedir, extensions))
        }
    }

    return retv
}
