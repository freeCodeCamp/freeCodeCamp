/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")
const Cache = require("./cache")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const cache = new Cache()

/**
 * Reads the `package.json` data in a given path.
 *
 * Don't cache the data.
 *
 * @param {string} dir - The path to a directory to read.
 * @returns {object|null} The read `package.json` data, or null.
 */
function readPackageJson(dir) {
    const filePath = path.join(dir, "package.json")
    try {
        const text = fs.readFileSync(filePath, "utf8")
        const data = JSON.parse(text)

        if (typeof data === "object" && data !== null) {
            data.filePath = filePath
            return data
        }
    }
    catch (_err) {
        // do nothing.
    }

    return null
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Gets a `package.json` data.
 * The data is cached if found, then it's used after.
 *
 * @param {string} startPath - A file path to lookup.
 * @returns {object|null} A found `package.json` data or `null`.
 *      This object have additional property `filePath`.
 */
module.exports = function getPackageJson(startPath) {
    const startDir = path.dirname(path.resolve(startPath))
    let dir = startDir
    let prevDir = ""
    let data = null

    do {
        data = cache.get(dir)
        if (data) {
            if (dir !== startDir) {
                cache.put(startDir, data)
            }
            return data
        }

        data = readPackageJson(dir)
        if (data) {
            cache.put(dir, data)
            cache.put(startDir, data)
            return data
        }

        // Go to next.
        prevDir = dir
        dir = path.resolve(dir, "..")
    }
    while (dir !== prevDir)

    cache.put(startDir, null)
    return null
}
