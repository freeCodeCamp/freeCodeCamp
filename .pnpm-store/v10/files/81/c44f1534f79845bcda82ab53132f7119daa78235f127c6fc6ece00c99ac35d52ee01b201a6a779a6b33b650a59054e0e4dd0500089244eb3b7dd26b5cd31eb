/**
 * @fileoverview Utility to get information about the execution environment.
 * @author Kai Cataldo
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path");
const spawn = require("cross-spawn");
const os = require("os");
const log = require("../shared/logging");
const packageJson = require("../../package.json");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Generates and returns execution environment information.
 * @returns {string} A string that contains execution environment information.
 */
function environment() {
    const cache = new Map();

    /**
     * Checks if a path is a child of a directory.
     * @param {string} parentPath The parent path to check.
     * @param {string} childPath The path to check.
     * @returns {boolean} Whether or not the given path is a child of a directory.
     */
    function isChildOfDirectory(parentPath, childPath) {
        return !path.relative(parentPath, childPath).startsWith("..");
    }

    /**
     * Synchronously executes a shell command and formats the result.
     * @param {string} cmd The command to execute.
     * @param {Array} args The arguments to be executed with the command.
     * @returns {string} The version returned by the command.
     */
    function execCommand(cmd, args) {
        const key = [cmd, ...args].join(" ");

        if (cache.has(key)) {
            return cache.get(key);
        }

        const process = spawn.sync(cmd, args, { encoding: "utf8" });

        if (process.error) {
            throw process.error;
        }

        const result = process.stdout.trim();

        cache.set(key, result);
        return result;
    }

    /**
     * Normalizes a version number.
     * @param {string} versionStr The string to normalize.
     * @returns {string} The normalized version number.
     */
    function normalizeVersionStr(versionStr) {
        return versionStr.startsWith("v") ? versionStr : `v${versionStr}`;
    }

    /**
     * Gets bin version.
     * @param {string} bin The bin to check.
     * @returns {string} The normalized version returned by the command.
     */
    function getBinVersion(bin) {
        const binArgs = ["--version"];

        try {
            return normalizeVersionStr(execCommand(bin, binArgs));
        } catch (e) {
            log.error(`Error finding ${bin} version running the command \`${bin} ${binArgs.join(" ")}\``);
            throw e;
        }
    }

    /**
     * Gets installed npm package version.
     * @param {string} pkg The package to check.
     * @param {boolean} global Whether to check globally or not.
     * @returns {string} The normalized version returned by the command.
     */
    function getNpmPackageVersion(pkg, { global = false } = {}) {
        const npmBinArgs = ["bin", "-g"];
        const npmLsArgs = ["ls", "--depth=0", "--json", "eslint"];

        if (global) {
            npmLsArgs.push("-g");
        }

        try {
            const parsedStdout = JSON.parse(execCommand("npm", npmLsArgs));

            /*
             * Checking globally returns an empty JSON object, while local checks
             * include the name and version of the local project.
             */
            if (Object.keys(parsedStdout).length === 0 || !(parsedStdout.dependencies && parsedStdout.dependencies.eslint)) {
                return "Not found";
            }

            const [, processBinPath] = process.argv;
            let npmBinPath;

            try {
                npmBinPath = execCommand("npm", npmBinArgs);
            } catch (e) {
                log.error(`Error finding npm binary path when running command \`npm ${npmBinArgs.join(" ")}\``);
                throw e;
            }

            const isGlobal = isChildOfDirectory(npmBinPath, processBinPath);
            let pkgVersion = parsedStdout.dependencies.eslint.version;

            if ((global && isGlobal) || (!global && !isGlobal)) {
                pkgVersion += " (Currently used)";
            }

            return normalizeVersionStr(pkgVersion);
        } catch (e) {
            log.error(`Error finding ${pkg} version running the command \`npm ${npmLsArgs.join(" ")}\``);
            throw e;
        }
    }

    return [
        "Environment Info:",
        "",
        `Node version: ${getBinVersion("node")}`,
        `npm version: ${getBinVersion("npm")}`,
        `Local ESLint version: ${getNpmPackageVersion("eslint", { global: false })}`,
        `Global ESLint version: ${getNpmPackageVersion("eslint", { global: true })}`,
        `Operating System: ${os.platform()} ${os.release()}`
    ].join("\n");
}

/**
 * Returns version of currently executing ESLint.
 * @returns {string} The version from the currently executing ESLint's package.json.
 */
function version() {
    return `v${packageJson.version}`;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    environment,
    version
};
