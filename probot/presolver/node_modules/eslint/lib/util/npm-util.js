/**
 * @fileoverview Utility for executing npm commands.
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path"),
    shell = require("shelljs"),
    log = require("../logging");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Find the closest package.json file, starting at process.cwd (by default),
 * and working up to root.
 *
 * @param   {string} [startDir=process.cwd()] Starting directory
 * @returns {string}                          Absolute path to closest package.json file
 */
function findPackageJson(startDir) {
    let dir = path.resolve(startDir || process.cwd());

    do {
        const pkgfile = path.join(dir, "package.json");

        if (!shell.test("-f", pkgfile)) {
            dir = path.join(dir, "..");
            continue;
        }
        return pkgfile;
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
    if (Array.isArray(packages)) {
        packages = packages.join(" ");
    }
    shell.exec(`npm i --save-dev ${packages}`, { stdio: "inherit" });
}

/**
 * Check whether node modules are include in a project's package.json.
 *
 * @param   {string[]} packages           Array of node module names
 * @param   {Object}  opt                 Options Object
 * @param   {boolean} opt.dependencies    Set to true to check for direct dependencies
 * @param   {boolean} opt.devDependencies Set to true to check for development dependencies
 * @param   {boolean} opt.startdir        Directory to begin searching from
 * @returns {Object}                      An object whose keys are the module names
 *                                        and values are booleans indicating installation.
 */
function check(packages, opt) {
    let deps = [];
    const pkgJson = (opt) ? findPackageJson(opt.startDir) : findPackageJson();
    let fileJson;

    if (!pkgJson) {
        throw new Error("Could not find a package.json file. Run 'npm init' to create one.");
    }

    try {
        fileJson = JSON.parse(fs.readFileSync(pkgJson, "utf8"));
    } catch (e) {
        log.info("Could not read package.json file. Please check that the file contains valid JSON.");
        throw new Error(e);
    }

    if (opt.devDependencies && typeof fileJson.devDependencies === "object") {
        deps = deps.concat(Object.keys(fileJson.devDependencies));
    }
    if (opt.dependencies && typeof fileJson.dependencies === "object") {
        deps = deps.concat(Object.keys(fileJson.dependencies));
    }
    return packages.reduce((status, pkg) => {
        status[pkg] = deps.indexOf(pkg) !== -1;
        return status;
    }, {});
}

/**
 * Check whether node modules are included in the dependencies of a project's
 * package.json.
 *
 * Convienience wrapper around check().
 *
 * @param   {string[]} packages  Array of node modules to check.
 * @param   {string}   rootDir   The directory contianing a package.json
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
 * Convienience wrapper around check().
 *
 * @param   {string[]} packages  Array of node modules to check.
 * @returns {Object}             An object whose keys are the module names
 *                               and values are booleans indicating installation.
 */
function checkDevDeps(packages) {
    return check(packages, { devDependencies: true });
}

/**
 * Check whether package.json is found in current path.
 *
 * @param   {string=} startDir Starting directory
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
    checkDeps,
    checkDevDeps,
    checkPackageJson
};
