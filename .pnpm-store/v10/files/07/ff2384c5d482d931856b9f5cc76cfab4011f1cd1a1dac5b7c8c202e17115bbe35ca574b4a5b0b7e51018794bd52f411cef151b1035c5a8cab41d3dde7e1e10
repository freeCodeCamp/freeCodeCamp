/**
 * @module read-package-json
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const joinPath = require("path").join
const readPkg = require("read-pkg")

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Reads the package.json in the current directory.
 *
 * @returns {object} package.json's information.
 */
module.exports = function readPackageJson() {
    const path = joinPath(process.cwd(), "package.json")
    return readPkg(path).then(body => ({
        taskList: Object.keys(body.scripts || {}),
        packageInfo: { path, body },
    }))
}
