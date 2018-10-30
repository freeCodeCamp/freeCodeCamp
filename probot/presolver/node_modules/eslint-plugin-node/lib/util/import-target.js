/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")
const exists = require("./exists")
const getPackageJson = require("./get-package-json")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given path is a directory.
 *
 * @param {string} filePath - A file path to check.
 * @returns {boolean} `true` if the path is a directory.
 */
function isDirectory(filePath) {
    try {
        return fs.statSync(filePath).isDirectory()
    }
    catch (_err) {
        return false
    }
}

/**
 * Resolve a given path as a file with given extensions.
 *
 * @param {string} filePath - A path to resolve.
 * @param {string[]} exts - Extensions that it checks whether or not the file exists.
 * @returns {string|null} The resolved path. Or `null` if failed to resolve.
 */
function tryExtentions(filePath, exts) {
    for (const ext of exts) {
        if (exists(filePath + ext)) {
            return filePath + ext
        }
    }

    return null
}

/**
 * Resolve a given path as a file.
 *
 * @param {string} filePath - A path to resolve.
 * @param {string[]} exts - Extensions that it checks whether or not the file exists.
 * @returns {string|null} The resolved path. Or `null` if failed to resolve.
 */
function resolveAsFile(filePath, exts) {
    if (exists(filePath)) {
        return filePath
    }
    return tryExtentions(filePath, exts)
}

/**
 * Resolve a given path as a directory.
 *
 * @param {string} filePath - A path to resolve.
 * @param {string[]} exts - Extensions that it checks whether or not the file exists.
 * @returns {string|null} The resolved path. Or `null` if failed to resolve.
 */
function resolveAsDirectory(filePath, exts) {
    if (!isDirectory(filePath)) {
        return null
    }

    const p = getPackageJson(path.join(filePath, "package.json"))
    if (p && path.dirname(p.filePath) === filePath && p.main) {
        return resolveAsFile(path.join(filePath, p.main), exts)
    }
    return tryExtentions(path.join(filePath, "index"), exts)
}

/**
 * Resolves the file.
 *
 * @param {string} basedir - The path of base directory to resolve relative path.
 * @param {string} name - The name of an import target.
 * @param {string[]} exts - Extensions that it checks whether or not the file exists.
 * @returns {string} The resolved path.
 */
function resolve(basedir, name, exts) {
    const resolvedPath = path.resolve(basedir, name)
    return (
        resolveAsFile(resolvedPath, exts) ||
        resolveAsDirectory(resolvedPath, exts) ||
        resolvedPath
    )
}

/**
 * Gets the module name of a given path.
 *
 * e.g. `eslint/lib/ast-utils` -> `eslint`
 *
 * @param {string} nameOrPath - A path to get.
 * @returns {string} The module name of the path.
 */
function getModuleName(nameOrPath) {
    let end = nameOrPath.indexOf("/")
    if (end !== -1 && nameOrPath[0] === "@") {
        end = nameOrPath.indexOf("/", 1 + end)
    }

    return end === -1 ? nameOrPath : nameOrPath.slice(0, end)
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Information of an import target.
 *
 * @constructor
 * @param {ASTNode} node - The node of a `require()` or a module declaraiton.
 * @param {string} name - The name of an import target.
 * @param {string} basedir - The path of base directory to resolve relative path.
 * @param {string[]} exts - Extensions that it checks whether or not the file exists.
 */
module.exports = function ImportTarget(node, name, basedir, exts) {
    const relative = /^\./.test(name)

    /**
     * The node of a `require()` or a module declaraiton.
     * @type {ASTNode}
     */
    this.node = node

    /**
     * The name of this import target.
     * @type {string}
     */
    this.name = name

    /**
     * The full path of this import target.
     * If the target is a module then this is `null`.
     * @type {string|null}
     */
    this.filePath = relative ? resolve(basedir, name, exts) : null

    /**
     * The module name of this import target.
     * If the target is a relative path then this is `null`.
     * @type {string|null}
     */
    this.moduleName = relative ? null : getModuleName(name)
}
