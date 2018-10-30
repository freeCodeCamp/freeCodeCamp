/**
 * @fileoverview Rule to check whether or not `require()` is valid.
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path")
const resolve = require("resolve")
const exists = require("./exists")
const getAllowModules = require("./get-allow-modules")

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Checks whether or not each requirement target exists.
 *
 * It looks up the target according to the logic of Node.js.
 * See Also: https://nodejs.org/api/modules.html
 *
 * @param {RuleContext} context - A context to report.
 * @param {string} filePath - The current file path.
 * @param {ImportTarget[]} targets - A list of target information to check.
 * @returns {void}
 */
module.exports = function checkForExistence(context, filePath, targets) {
    const allowed = getAllowModules(context)
    const opts = {basedir: path.dirname(path.resolve(filePath))}

    for (const target of targets) {
        // Workaround for https://github.com/substack/node-resolve/issues/78
        if (target.filePath) {
            if (exists(target.filePath)) {
                continue
            }
        }
        else if (allowed.indexOf(target.moduleName) !== -1) {
            continue
        }
        else {
            try {
                resolve.sync(target.name, opts)
                continue
            }
            catch (_err) {
                // ignore.
            }
        }

        context.report({
            node: target.node,
            loc: target.node.loc,
            message: "\"{{name}}\" is not found.",
            data: target,
        })
    }
}
