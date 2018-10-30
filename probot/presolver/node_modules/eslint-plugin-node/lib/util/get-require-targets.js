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
const getValueIfString = require("./get-value-if-string")
const ImportTarget = require("./import-target")
const stripImportPathParams = require("./strip-import-path-params")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a callee.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is a callee.
 */
function isCallee(node) {
    return node.parent.type === "CallExpression" && node.parent.callee === node
}

/**
 * Gets references of "require".
 *
 * @param {escope.Scope} scope - The global scope.
 * @returns {escope.Reference[]} References of "require".
 */
function getReferencesOfRequire(scope) {
    const variable = scope.set.get("require")
    if (!variable) {
        // Not found.
        return []
    }
    return variable.references
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Gets a list of `require()` targets.
 *
 * Core modules of Node.js (e.g. `fs`, `http`) are excluded.
 *
 * @param {RuleContext} context - The rule context.
 * @param {boolean} includeCore - The flag to include core modules.
 * @returns {ImportTarget[]} A list of found target's information.
 */
module.exports = function getRequireTargets(context, includeCore) {
    const retv = []
    const basedir = path.dirname(path.resolve(context.getFilename()))
    const references = getReferencesOfRequire(context.getScope())
    const extensions = getTryExtensions(context)

    for (const reference of references) {
        const node = reference.identifier

        // Skips if it's not a call of `require`.
        if (!isCallee(node)) {
            continue
        }

        // Gets the target module.
        const targetNode = node.parent.arguments[0]
        const rawName = getValueIfString(targetNode)
        const name = rawName && stripImportPathParams(rawName)
        if (name && (includeCore || !resolve.isCore(name))) {
            retv.push(new ImportTarget(targetNode, name, basedir, extensions))
        }
    }

    return retv
}
