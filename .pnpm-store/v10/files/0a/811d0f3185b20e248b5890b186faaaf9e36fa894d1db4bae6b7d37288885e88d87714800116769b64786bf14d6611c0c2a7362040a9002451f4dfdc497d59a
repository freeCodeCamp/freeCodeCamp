/**
 * @fileoverview Utility for executing npm commands.
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    spawn = require("cross-spawn"),
    path = require("path"),
    log = require("../shared/logging");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Find the closest package.json file, starting at process.cwd (by default),
 * and working up to root.
 * @param   {string} [startDir=process.cwd()] Starting directory
 * @returns {string}                          Absolute path to closest package.json file
 */
function findPackageJson(startDir) {
    let dir = path.resolve(startDir || process.cwd());

    do {
        const pkgFile = path.join(dir, "package.json");

        if (!fs.existsSync(pkgFile) || !fs.statSync(pkgFile).isFile()) {
            dir = path.join(dir, "..");
            continue;
        }
        return pkgFile;
    } while (dir !== path.resolve(dir, ".."));
    return null;
}

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Install node modules synchronously and save to devDependencies in package.json
 * @param   {string|string[]} packages Node module or modules to install
 * @returns {void}
 */
function installSyncSaveDev(packages) {
    const packageList = Array.isArray(packages) ? packages : [packages];
    const npmProcess = spawn.sync("npm", ["i", "--save-dev"].concat(packageList), { stdio: "inherit" });
    const error = npmProcess.error;

    if (error && error.code === "ENOENT") {
        const pluralS = packageList.length > 1 ? "s" : "";

        log.error(`Could not execute npm. Please install the following package${pluralS} with a package manager of your choice: ${packageList.join(", ")}`);
    }
}

/**
 * Fetch `peerDependencies` of the given package by `npm show` command.
 * @param {string} packageName The package name to fetch peerDependencies.
 * @returns {Object} Gotten peerDependencies. Returns null if npm was not found.
 */
function fetchPeerDependencies(packageName) {
    const npmProcess = spawn.sync(
        "npm",
        ["show", "--json", packageName, "peerDependencies"],
        { encoding: "utf8" }
    );

    const error = npmProcess.error;

    if (error && error.code === "ENOENT") {
        return null;
    }
    const fetchedText = npmProcess.stdout.trim();

    return JSON.parse(fetchedText || "{}");


}

/**
 * Check whether node modules are include in a project's package.json.
 * @param   {string[]} packages           Array of node module names
 * @param   {Object}  opt                 Options Object
 * @param   {boolean} opt.dependencies    Set to true to check for direct dependencies
 * @param   {boolean} opt.devDependencies Set to true to check for development dependencies
 * @param   {boolean} opt.startdir        Directory to begin searching from
 * @returns {Object}                      An object whose keys are the module names
 *                                        and values are booleans indicating installation.
 */
function check(packages, opt) {
    const deps = new Set();
    const pkgJson = (opt) ? findPackageJson(opt.startDir) : findPackageJson();
    let fileJson;

    if (!pkgJson) {
        throw new Error("Could not find a package.json file. Run 'npm init' to create one.");
    }

    try {
        fileJson = JSON.parse(fs.readFileSync(pkgJson, "utf8"));
    } catch (e) {
        const error = new Error(e);

        error.messageTemplate = "failed-to-read-json";
        error.messageData = {
            path: pkgJson,
            message: e.message
        };
        throw error;
    }

    ["dependencies", "devDependencies"].forEach(key => {
        if (opt[key] && typeof fileJson[key] === "object") {
            Object.keys(fileJson[key]).forEach(dep => deps.add(dep));
        }
    });

    return packages.reduce((status, pkg) => {
        status[pkg] = deps.has(pkg);
        return status;
    }, {});
}

/**
 * Check whether node modules are included in the dependencies of a project's
 * package.json.
 *
 * Convenience wrapper around check().
 * @param   {string[]} packages  Array of node modules to check.
 * @param   {string}   rootDir   The directory containing a package.json
 * @returns {Object}             An object whose keys are the module names
 *                               and values are booleans indicating installation.
 */
function checkDeps(packages, rootDir) {
    return check(packages, { dependencies: true, startDir: rootDir });
}

/**
 * Check whether node modules are included in the devDependencies of a project's
 * package.json.
 *
 * Convenience wrapper around check().
 * @param   {string[]} packages  Array of node modules to check.
 * @returns {Object}             An object whose keys are the module names
 *                               and values are booleans indicating installation.
 */
function checkDevDeps(packages) {
    return check(packages, { devDependencies: true });
}

/**
 * Check whether package.json is found in current path.
 * @param   {string} [startDir] Starting directory
 * @returns {boolean} Whether a package.json is found in current path.
 */
function checkPackageJson(startDir) {
    return !!findPackageJson(startDir);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    installSyncSaveDev,
    fetchPeerDependencies,
    findPackageJson,
    checkDeps,
    checkDevDeps,
    checkPackageJson
};
