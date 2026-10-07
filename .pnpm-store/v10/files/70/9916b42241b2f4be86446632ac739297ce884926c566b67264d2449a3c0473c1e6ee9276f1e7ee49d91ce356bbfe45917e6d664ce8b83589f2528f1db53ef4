/**
 * @fileoverview `IgnorePattern` class.
 *
 * `IgnorePattern` class has the set of glob patterns and the base path.
 *
 * It provides two static methods.
 *
 * - `IgnorePattern.createDefaultIgnore(cwd)`
 *      Create the default predicate function.
 * - `IgnorePattern.createIgnore(ignorePatterns)`
 *      Create the predicate function from multiple `IgnorePattern` objects.
 *
 * It provides two properties and a method.
 *
 * - `patterns`
 *      The glob patterns that ignore to lint.
 * - `basePath`
 *      The base path of the glob patterns. If absolute paths existed in the
 *      glob patterns, those are handled as relative paths to the base path.
 * - `getPatternsRelativeTo(basePath)`
 *      Get `patterns` as modified for a given base path. It modifies the
 *      absolute paths in the patterns as prepending the difference of two base
 *      paths.
 *
 * `ConfigArrayFactory` creates `IgnorePattern` objects when it processes
 * `ignorePatterns` properties.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert");
const path = require("path");
const ignore = require("ignore");
const debug = require("debug")("eslintrc:ignore-pattern");

/** @typedef {ReturnType<import("ignore").default>} Ignore */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the path to the common ancestor directory of given paths.
 * @param {string[]} sourcePaths The paths to calculate the common ancestor.
 * @returns {string} The path to the common ancestor directory.
 */
function getCommonAncestorPath(sourcePaths) {
    let result = sourcePaths[0];

    for (let i = 1; i < sourcePaths.length; ++i) {
        const a = result;
        const b = sourcePaths[i];

        // Set the shorter one (it's the common ancestor if one includes the other).
        result = a.length < b.length ? a : b;

        // Set the common ancestor.
        for (let j = 0, lastSepPos = 0; j < a.length && j < b.length; ++j) {
            if (a[j] !== b[j]) {
                result = a.slice(0, lastSepPos);
                break;
            }
            if (a[j] === path.sep) {
                lastSepPos = j;
            }
        }
    }

    let resolvedResult = result || path.sep;

    // if Windows common ancestor is root of drive must have trailing slash to be absolute.
    if (resolvedResult && resolvedResult.endsWith(":") && process.platform === "win32") {
        resolvedResult += path.sep;
    }
    return resolvedResult;
}

/**
 * Make relative path.
 * @param {string} from The source path to get relative path.
 * @param {string} to The destination path to get relative path.
 * @returns {string} The relative path.
 */
function relative(from, to) {
    const relPath = path.relative(from, to);

    if (path.sep === "/") {
        return relPath;
    }
    return relPath.split(path.sep).join("/");
}

/**
 * Get the trailing slash if existed.
 * @param {string} filePath The path to check.
 * @returns {string} The trailing slash if existed.
 */
function dirSuffix(filePath) {
    const isDir = (
        filePath.endsWith(path.sep) ||
        (process.platform === "win32" && filePath.endsWith("/"))
    );

    return isDir ? "/" : "";
}

const DefaultPatterns = Object.freeze(["/**/node_modules/*"]);
const DotPatterns = Object.freeze([".*", "!.eslintrc.*", "!../"]);

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

class IgnorePattern {

    /**
     * The default patterns.
     * @type {string[]}
     */
    static get DefaultPatterns() {
        return DefaultPatterns;
    }

    /**
     * Create the default predicate function.
     * @param {string} cwd The current working directory.
     * @returns {((filePath:string, dot:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createDefaultIgnore(cwd) {
        return this.createIgnore([new IgnorePattern(DefaultPatterns, cwd)]);
    }

    /**
     * Create the predicate function from multiple `IgnorePattern` objects.
     * @param {IgnorePattern[]} ignorePatterns The list of ignore patterns.
     * @returns {((filePath:string, dot?:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createIgnore(ignorePatterns) {
        debug("Create with: %o", ignorePatterns);

        const basePath = getCommonAncestorPath(ignorePatterns.map(p => p.basePath));
        const patterns = [].concat(
            ...ignorePatterns.map(p => p.getPatternsRelativeTo(basePath))
        );
        const ig = ignore().add([...DotPatterns, ...patterns]);
        const dotIg = ignore().add(patterns);

        debug("  processed: %o", { basePath, patterns });

        return Object.assign(
            (filePath, dot = false) => {
                assert(path.isAbsolute(filePath), "'filePath' should be an absolute path.");
                const relPathRaw = relative(basePath, filePath);
                const relPath = relPathRaw && (relPathRaw + dirSuffix(filePath));
                const adoptedIg = dot ? dotIg : ig;
                const result = relPath !== "" && adoptedIg.ignores(relPath);

                debug("Check", { filePath, dot, relativePath: relPath, result });
                return result;
            },
            { basePath, patterns }
        );
    }

    /**
     * Initialize a new `IgnorePattern` instance.
     * @param {string[]} patterns The glob patterns that ignore to lint.
     * @param {string} basePath The base path of `patterns`.
     */
    constructor(patterns, basePath) {
        assert(path.isAbsolute(basePath), "'basePath' should be an absolute path.");

        /**
         * The glob patterns that ignore to lint.
         * @type {string[]}
         */
        this.patterns = patterns;

        /**
         * The base path of `patterns`.
         * @type {string}
         */
        this.basePath = basePath;

        /**
         * If `true` then patterns which don't start with `/` will match the paths to the outside of `basePath`. Defaults to `false`.
         *
         * It's set `true` for `.eslintignore`, `package.json`, and `--ignore-path` for backward compatibility.
         * It's `false` as-is for `ignorePatterns` property in config files.
         * @type {boolean}
         */
        this.loose = false;
    }

    /**
     * Get `patterns` as modified for a given base path. It modifies the
     * absolute paths in the patterns as prepending the difference of two base
     * paths.
     * @param {string} newBasePath The base path.
     * @returns {string[]} Modifired patterns.
     */
    getPatternsRelativeTo(newBasePath) {
        assert(path.isAbsolute(newBasePath), "'newBasePath' should be an absolute path.");
        const { basePath, loose, patterns } = this;

        if (newBasePath === basePath) {
            return patterns;
        }
        const prefix = `/${relative(newBasePath, basePath)}`;

        return patterns.map(pattern => {
            const negative = pattern.startsWith("!");
            const head = negative ? "!" : "";
            const body = negative ? pattern.slice(1) : pattern;

            if (body.startsWith("/") || body.startsWith("../")) {
                return `${head}${prefix}${body}`;
            }
            return loose ? pattern : `${head}${prefix}/**/${body}`;
        });
    }
}

module.exports = { IgnorePattern };
