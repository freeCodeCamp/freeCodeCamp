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
const assign = require("object-assign")
const getAllowModules = require("./get-allow-modules")
const getConvertPath = require("./get-convert-path")
const getNpmignore = require("./get-npmignore")
const getPackageJson = require("./get-package-json")

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Checks whether or not each requirement target is published via package.json.
 *
 * It reads package.json and checks the target exists in `dependencies`.
 *
 * @param {RuleContext} context - A context to report.
 * @param {string} filePath - The current file path.
 * @param {ImportTarget[]} targets - A list of target information to check.
 * @returns {void}
 */
module.exports = function checkForPublish(context, filePath, targets) {
    const packageInfo = getPackageJson(filePath)
    if (!packageInfo) {
        return
    }

    const allowed = getAllowModules(context)
    const convertPath = getConvertPath(context)
    const basedir = path.dirname(packageInfo.filePath)
    const toRelative = function(fullPath) { // eslint-disable-line func-style
        const retv = path.relative(basedir, fullPath).replace(/\\/g, "/")
        return convertPath(retv)
    }
    const npmignore = getNpmignore(filePath)
    const dependencies = assign(
        Object.create(null),
        packageInfo.peerDependencies || {},
        packageInfo.dependencies || {}
    )
    const devDependencies = assign(
        Object.create(null),
        packageInfo.devDependencies || {}
    )
    let i = 0
    let target = null

    if (npmignore.match(toRelative(filePath))) {
        // This file is private, so this can import private files.
        for (i = 0; i < targets.length; ++i) {
            target = targets[i]

            if (target.moduleName &&
                !dependencies[target.moduleName] &&
                !devDependencies[target.moduleName] &&
                allowed.indexOf(target.moduleName) === -1
            ) {
                context.report({
                    node: target.node,
                    loc: target.node.loc,
                    message: "\"{{name}}\" is not published.",
                    data: {name: target.moduleName},
                })
            }
        }
    }
    else {
        // This file is published, so this cannot import private files.
        for (i = 0; i < targets.length; ++i) {
            target = targets[i]

            if (target.moduleName ?
                (!dependencies[target.moduleName] && allowed.indexOf(target.moduleName) === -1) :
                npmignore.match(toRelative(target.filePath))
            ) {
                context.report({
                    node: target.node,
                    loc: target.node.loc,
                    message: "\"{{name}}\" is not published.",
                    data: {name: target.moduleName || target.name},
                })
            }
        }
    }
}
