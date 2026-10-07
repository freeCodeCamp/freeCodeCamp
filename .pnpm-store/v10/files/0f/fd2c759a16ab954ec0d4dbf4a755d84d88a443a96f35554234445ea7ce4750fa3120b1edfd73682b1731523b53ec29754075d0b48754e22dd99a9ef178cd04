/**
 * @fileoverview `OverrideTester` class.
 *
 * `OverrideTester` class handles `files` property and `excludedFiles` property
 * of `overrides` config.
 *
 * It provides one method.
 *
 * - `test(filePath)`
 *      Test if a file path matches the pair of `files` property and
 *      `excludedFiles` property. The `filePath` argument must be an absolute
 *      path.
 *
 * `ConfigArrayFactory` creates `OverrideTester` objects when it processes
 * `overrides` properties.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

import assert from "node:assert";
import path from "node:path";
import util from "node:util";
import minimatch from "minimatch";

const { Minimatch } = minimatch;

const minimatchOpts = { dot: true, matchBase: true };

/**
 * @typedef {Object} Pattern
 * @property {InstanceType<Minimatch>[] | null} includes The positive matchers.
 * @property {InstanceType<Minimatch>[] | null} excludes The negative matchers.
 */

/**
 * Normalize a given pattern to an array.
 * @param {string|string[]|undefined} patterns A glob pattern or an array of glob patterns.
 * @returns {string[]|null} Normalized patterns.
 * @private
 */
function normalizePatterns(patterns) {
    if (Array.isArray(patterns)) {
        return patterns.filter(Boolean);
    }
    if (typeof patterns === "string" && patterns) {
        return [patterns];
    }
    return [];
}

/**
 * Create the matchers of given patterns.
 * @param {string[]} patterns The patterns.
 * @returns {InstanceType<Minimatch>[] | null} The matchers.
 */
function toMatcher(patterns) {
    if (patterns.length === 0) {
        return null;
    }
    return patterns.map(pattern => {
        if (/^\.[/\\]/u.test(pattern)) {
            return new Minimatch(
                pattern.slice(2),

                // `./*.js` should not match with `subdir/foo.js`
                { ...minimatchOpts, matchBase: false }
            );
        }
        return new Minimatch(pattern, minimatchOpts);
    });
}

/**
 * Convert a given matcher to string.
 * @param {Pattern} matchers The matchers.
 * @returns {string} The string expression of the matcher.
 */
function patternToJson({ includes, excludes }) {
    return {
        includes: includes && includes.map(m => m.pattern),
        excludes: excludes && excludes.map(m => m.pattern)
    };
}

/**
 * The class to test given paths are matched by the patterns.
 */
class OverrideTester {

    /**
     * Create a tester with given criteria.
     * If there are no criteria, returns `null`.
     * @param {string|string[]} files The glob patterns for included files.
     * @param {string|string[]} excludedFiles The glob patterns for excluded files.
     * @param {string} basePath The path to the base directory to test paths.
     * @returns {OverrideTester|null} The created instance or `null`.
     * @throws {Error} When invalid patterns are given.
     */
    static create(files, excludedFiles, basePath) {
        const includePatterns = normalizePatterns(files);
        const excludePatterns = normalizePatterns(excludedFiles);
        let endsWithWildcard = false;

        if (includePatterns.length === 0) {
            return null;
        }

        // Rejects absolute paths or relative paths to parents.
        for (const pattern of includePatterns) {
            if (path.isAbsolute(pattern) || pattern.includes("..")) {
                throw new Error(`Invalid override pattern (expected relative path not containing '..'): ${pattern}`);
            }
            if (pattern.endsWith("*")) {
                endsWithWildcard = true;
            }
        }
        for (const pattern of excludePatterns) {
            if (path.isAbsolute(pattern) || pattern.includes("..")) {
                throw new Error(`Invalid override pattern (expected relative path not containing '..'): ${pattern}`);
            }
        }

        const includes = toMatcher(includePatterns);
        const excludes = toMatcher(excludePatterns);

        return new OverrideTester(
            [{ includes, excludes }],
            basePath,
            endsWithWildcard
        );
    }

    /**
     * Combine two testers by logical and.
     * If either of the testers was `null`, returns the other tester.
     * The `basePath` property of the two must be the same value.
     * @param {OverrideTester|null} a A tester.
     * @param {OverrideTester|null} b Another tester.
     * @returns {OverrideTester|null} Combined tester.
     */
    static and(a, b) {
        if (!b) {
            return a && new OverrideTester(
                a.patterns,
                a.basePath,
                a.endsWithWildcard
            );
        }
        if (!a) {
            return new OverrideTester(
                b.patterns,
                b.basePath,
                b.endsWithWildcard
            );
        }

        assert.strictEqual(a.basePath, b.basePath);
        return new OverrideTester(
            a.patterns.concat(b.patterns),
            a.basePath,
            a.endsWithWildcard || b.endsWithWildcard
        );
    }

    /**
     * Initialize this instance.
     * @param {Pattern[]} patterns The matchers.
     * @param {string} basePath The base path.
     * @param {boolean} endsWithWildcard If `true` then a pattern ends with `*`.
     */
    constructor(patterns, basePath, endsWithWildcard = false) {

        /** @type {Pattern[]} */
        this.patterns = patterns;

        /** @type {string} */
        this.basePath = basePath;

        /** @type {boolean} */
        this.endsWithWildcard = endsWithWildcard;
    }

    /**
     * Test if a given path is matched or not.
     * @param {string} filePath The absolute path to the target file.
     * @returns {boolean} `true` if the path was matched.
     * @throws {Error} When invalid `filePath` is given.
     */
    test(filePath) {
        if (typeof filePath !== "string" || !path.isAbsolute(filePath)) {
            throw new Error(`'filePath' should be an absolute path, but got ${filePath}.`);
        }
        const relativePath = path.relative(this.basePath, filePath);

        return this.patterns.every(({ includes, excludes }) => (
            (!includes || includes.some(m => m.match(relativePath))) &&
            (!excludes || !excludes.some(m => m.match(relativePath)))
        ));
    }

    /**
     * Converts this instance to a JSON compatible object.
     * @returns {Object} a JSON compatible object.
     */
    toJSON() {
        if (this.patterns.length === 1) {
            return {
                ...patternToJson(this.patterns[0]),
                basePath: this.basePath
            };
        }
        return {
            AND: this.patterns.map(patternToJson),
            basePath: this.basePath
        };
    }

    /**
     * Custom inspect method for Node.js `console.log()`.
     * @returns {Object} an object to display by `console.log()`.
     */
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

export { OverrideTester };
