/**
 * @fileoverview `FileEnumerator` class.
 *
 * `FileEnumerator` class has two responsibilities:
 *
 * 1. Find target files by processing glob patterns.
 * 2. Tie each target file and appropriate configuration.
 *
 * It provides a method:
 *
 * - `iterateFiles(patterns)`
 *     Iterate files which are matched by given patterns together with the
 *     corresponded configuration. This is for `CLIEngine#executeOnFiles()`.
 *     While iterating files, it loads the configuration file of each directory
 *     before iterate files on the directory, so we can use the configuration
 *     files to determine target files.
 *
 * @example
 * const enumerator = new FileEnumerator();
 * const linter = new Linter();
 *
 * for (const { config, filePath } of enumerator.iterateFiles(["*.js"])) {
 *     const code = fs.readFileSync(filePath, "utf8");
 *     const messages = linter.verify(code, config, filePath);
 *
 *     console.log(messages);
 * }
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs");
const path = require("path");
const getGlobParent = require("glob-parent");
const isGlob = require("is-glob");
const escapeRegExp = require("escape-string-regexp");
const { Minimatch } = require("minimatch");

const {
    Legacy: {
        IgnorePattern,
        CascadingConfigArrayFactory
    }
} = require("@eslint/eslintrc");
const debug = require("debug")("eslint:file-enumerator");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const minimatchOpts = { dot: true, matchBase: true };
const dotfilesPattern = /(?:(?:^\.)|(?:[/\\]\.))[^/\\.].*/u;
const NONE = 0;
const IGNORED_SILENTLY = 1;
const IGNORED = 2;

// For VSCode intellisense
/** @typedef {ReturnType<CascadingConfigArrayFactory["getConfigArrayForFile"]>} ConfigArray */

/**
 * @typedef {Object} FileEnumeratorOptions
 * @property {CascadingConfigArrayFactory} [configArrayFactory] The factory for config arrays.
 * @property {string} [cwd] The base directory to start lookup.
 * @property {string[]} [extensions] The extensions to match files for directory patterns.
 * @property {boolean} [globInputPaths] Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
 * @property {boolean} [ignore] The flag to check ignored files.
 * @property {string[]} [rulePaths] The value of `--rulesdir` option.
 */

/**
 * @typedef {Object} FileAndConfig
 * @property {string} filePath The path to a target file.
 * @property {ConfigArray} config The config entries of that file.
 * @property {boolean} ignored If `true` then this file should be ignored and warned because it was directly specified.
 */

/**
 * @typedef {Object} FileEntry
 * @property {string} filePath The path to a target file.
 * @property {ConfigArray} config The config entries of that file.
 * @property {NONE|IGNORED_SILENTLY|IGNORED} flag The flag.
 * - `NONE` means the file is a target file.
 * - `IGNORED_SILENTLY` means the file should be ignored silently.
 * - `IGNORED` means the file should be ignored and warned because it was directly specified.
 */

/**
 * @typedef {Object} FileEnumeratorInternalSlots
 * @property {CascadingConfigArrayFactory} configArrayFactory The factory for config arrays.
 * @property {string} cwd The base directory to start lookup.
 * @property {RegExp|null} extensionRegExp The RegExp to test if a string ends with specific file extensions.
 * @property {boolean} globInputPaths Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
 * @property {boolean} ignoreFlag The flag to check ignored files.
 * @property {(filePath:string, dot:boolean) => boolean} defaultIgnores The default predicate function to ignore files.
 */

/** @type {WeakMap<FileEnumerator, FileEnumeratorInternalSlots>} */
const internalSlotsMap = new WeakMap();

/**
 * Check if a string is a glob pattern or not.
 * @param {string} pattern A glob pattern.
 * @returns {boolean} `true` if the string is a glob pattern.
 */
function isGlobPattern(pattern) {
    return isGlob(path.sep === "\\" ? pattern.replace(/\\/gu, "/") : pattern);
}

/**
 * Get stats of a given path.
 * @param {string} filePath The path to target file.
 * @returns {fs.Stats|null} The stats.
 * @private
 */
function statSafeSync(filePath) {
    try {
        return fs.statSync(filePath);
    } catch (error) {
        /* istanbul ignore next */
        if (error.code !== "ENOENT") {
            throw error;
        }
        return null;
    }
}

/**
 * Get filenames in a given path to a directory.
 * @param {string} directoryPath The path to target directory.
 * @returns {import("fs").Dirent[]} The filenames.
 * @private
 */
function readdirSafeSync(directoryPath) {
    try {
        return fs.readdirSync(directoryPath, { withFileTypes: true });
    } catch (error) {
        /* istanbul ignore next */
        if (error.code !== "ENOENT") {
            throw error;
        }
        return [];
    }
}

/**
 * Create a `RegExp` object to detect extensions.
 * @param {string[] | null} extensions The extensions to create.
 * @returns {RegExp | null} The created `RegExp` object or null.
 */
function createExtensionRegExp(extensions) {
    if (extensions) {
        const normalizedExts = extensions.map(ext => escapeRegExp(
            ext.startsWith(".")
                ? ext.slice(1)
                : ext
        ));

        return new RegExp(
            `.\\.(?:${normalizedExts.join("|")})$`,
            "u"
        );
    }
    return null;
}

/**
 * The error type when no files match a glob.
 */
class NoFilesFoundError extends Error {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {string} pattern The glob pattern which was not found.
     * @param {boolean} globDisabled If `true` then the pattern was a glob pattern, but glob was disabled.
     */
    constructor(pattern, globDisabled) {
        super(`No files matching '${pattern}' were found${globDisabled ? " (glob was disabled)" : ""}.`);
        this.messageTemplate = "file-not-found";
        this.messageData = { pattern, globDisabled };
    }
}

/**
 * The error type when there are files matched by a glob, but all of them have been ignored.
 */
class AllFilesIgnoredError extends Error {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {string} pattern The glob pattern which was not found.
     */
    constructor(pattern) {
        super(`All files matched by '${pattern}' are ignored.`);
        this.messageTemplate = "all-files-ignored";
        this.messageData = { pattern };
    }
}

/**
 * This class provides the functionality that enumerates every file which is
 * matched by given glob patterns and that configuration.
 */
class FileEnumerator {

    /**
     * Initialize this enumerator.
     * @param {FileEnumeratorOptions} options The options.
     */
    constructor({
        cwd = process.cwd(),
        configArrayFactory = new CascadingConfigArrayFactory({
            cwd,
            eslintRecommendedPath: path.resolve(__dirname, "../../conf/eslint-recommended.js"),
            eslintAllPath: path.resolve(__dirname, "../../conf/eslint-all.js")
        }),
        extensions = null,
        globInputPaths = true,
        errorOnUnmatchedPattern = true,
        ignore = true
    } = {}) {
        internalSlotsMap.set(this, {
            configArrayFactory,
            cwd,
            defaultIgnores: IgnorePattern.createDefaultIgnore(cwd),
            extensionRegExp: createExtensionRegExp(extensions),
            globInputPaths,
            errorOnUnmatchedPattern,
            ignoreFlag: ignore
        });
    }

    /**
     * Check if a given file is target or not.
     * @param {string} filePath The path to a candidate file.
     * @param {ConfigArray} [providedConfig] Optional. The configuration for the file.
     * @returns {boolean} `true` if the file is a target.
     */
    isTargetPath(filePath, providedConfig) {
        const {
            configArrayFactory,
            extensionRegExp
        } = internalSlotsMap.get(this);

        // If `--ext` option is present, use it.
        if (extensionRegExp) {
            return extensionRegExp.test(filePath);
        }

        // `.js` file is target by default.
        if (filePath.endsWith(".js")) {
            return true;
        }

        // use `overrides[].files` to check additional targets.
        const config =
            providedConfig ||
            configArrayFactory.getConfigArrayForFile(
                filePath,
                { ignoreNotFoundError: true }
            );

        return config.isAdditionalTargetPath(filePath);
    }

    /**
     * Iterate files which are matched by given glob patterns.
     * @param {string|string[]} patternOrPatterns The glob patterns to iterate files.
     * @returns {IterableIterator<FileAndConfig>} The found files.
     */
    *iterateFiles(patternOrPatterns) {
        const { globInputPaths, errorOnUnmatchedPattern } = internalSlotsMap.get(this);
        const patterns = Array.isArray(patternOrPatterns)
            ? patternOrPatterns
            : [patternOrPatterns];

        debug("Start to iterate files: %o", patterns);

        // The set of paths to remove duplicate.
        const set = new Set();

        for (const pattern of patterns) {
            let foundRegardlessOfIgnored = false;
            let found = false;

            // Skip empty string.
            if (!pattern) {
                continue;
            }

            // Iterate files of this pattern.
            for (const { config, filePath, flag } of this._iterateFiles(pattern)) {
                foundRegardlessOfIgnored = true;
                if (flag === IGNORED_SILENTLY) {
                    continue;
                }
                found = true;

                // Remove duplicate paths while yielding paths.
                if (!set.has(filePath)) {
                    set.add(filePath);
                    yield {
                        config,
                        filePath,
                        ignored: flag === IGNORED
                    };
                }
            }

            // Raise an error if any files were not found.
            if (errorOnUnmatchedPattern) {
                if (!foundRegardlessOfIgnored) {
                    throw new NoFilesFoundError(
                        pattern,
                        !globInputPaths && isGlob(pattern)
                    );
                }
                if (!found) {
                    throw new AllFilesIgnoredError(pattern);
                }
            }
        }

        debug(`Complete iterating files: ${JSON.stringify(patterns)}`);
    }

    /**
     * Iterate files which are matched by a given glob pattern.
     * @param {string} pattern The glob pattern to iterate files.
     * @returns {IterableIterator<FileEntry>} The found files.
     */
    _iterateFiles(pattern) {
        const { cwd, globInputPaths } = internalSlotsMap.get(this);
        const absolutePath = path.resolve(cwd, pattern);
        const isDot = dotfilesPattern.test(pattern);
        const stat = statSafeSync(absolutePath);

        if (stat && stat.isDirectory()) {
            return this._iterateFilesWithDirectory(absolutePath, isDot);
        }
        if (stat && stat.isFile()) {
            return this._iterateFilesWithFile(absolutePath);
        }
        if (globInputPaths && isGlobPattern(pattern)) {
            return this._iterateFilesWithGlob(absolutePath, isDot);
        }

        return [];
    }

    /**
     * Iterate a file which is matched by a given path.
     * @param {string} filePath The path to the target file.
     * @returns {IterableIterator<FileEntry>} The found files.
     * @private
     */
    _iterateFilesWithFile(filePath) {
        debug(`File: ${filePath}`);

        const { configArrayFactory } = internalSlotsMap.get(this);
        const config = configArrayFactory.getConfigArrayForFile(filePath);
        const ignored = this._isIgnoredFile(filePath, { config, direct: true });
        const flag = ignored ? IGNORED : NONE;

        return [{ config, filePath, flag }];
    }

    /**
     * Iterate files in a given path.
     * @param {string} directoryPath The path to the target directory.
     * @param {boolean} dotfiles If `true` then it doesn't skip dot files by default.
     * @returns {IterableIterator<FileEntry>} The found files.
     * @private
     */
    _iterateFilesWithDirectory(directoryPath, dotfiles) {
        debug(`Directory: ${directoryPath}`);

        return this._iterateFilesRecursive(
            directoryPath,
            { dotfiles, recursive: true, selector: null }
        );
    }

    /**
     * Iterate files which are matched by a given glob pattern.
     * @param {string} pattern The glob pattern to iterate files.
     * @param {boolean} dotfiles If `true` then it doesn't skip dot files by default.
     * @returns {IterableIterator<FileEntry>} The found files.
     * @private
     */
    _iterateFilesWithGlob(pattern, dotfiles) {
        debug(`Glob: ${pattern}`);

        const directoryPath = path.resolve(getGlobParent(pattern));
        const globPart = pattern.slice(directoryPath.length + 1);

        /*
         * recursive if there are `**` or path separators in the glob part.
         * Otherwise, patterns such as `src/*.js`, it doesn't need recursive.
         */
        const recursive = /\*\*|\/|\\/u.test(globPart);
        const selector = new Minimatch(pattern, minimatchOpts);

        debug(`recursive? ${recursive}`);

        return this._iterateFilesRecursive(
            directoryPath,
            { dotfiles, recursive, selector }
        );
    }

    /**
     * Iterate files in a given path.
     * @param {string} directoryPath The path to the target directory.
     * @param {Object} options The options to iterate files.
     * @param {boolean} [options.dotfiles] If `true` then it doesn't skip dot files by default.
     * @param {boolean} [options.recursive] If `true` then it dives into sub directories.
     * @param {InstanceType<Minimatch>} [options.selector] The matcher to choose files.
     * @returns {IterableIterator<FileEntry>} The found files.
     * @private
     */
    *_iterateFilesRecursive(directoryPath, options) {
        debug(`Enter the directory: ${directoryPath}`);
        const { configArrayFactory } = internalSlotsMap.get(this);

        /** @type {ConfigArray|null} */
        let config = null;

        // Enumerate the files of this directory.
        for (const entry of readdirSafeSync(directoryPath)) {
            const filePath = path.join(directoryPath, entry.name);
            const fileInfo = entry.isSymbolicLink() ? statSafeSync(filePath) : entry;

            if (!fileInfo) {
                continue;
            }

            // Check if the file is matched.
            if (fileInfo.isFile()) {
                if (!config) {
                    config = configArrayFactory.getConfigArrayForFile(
                        filePath,

                        /*
                         * We must ignore `ConfigurationNotFoundError` at this
                         * point because we don't know if target files exist in
                         * this directory.
                         */
                        { ignoreNotFoundError: true }
                    );
                }
                const matched = options.selector

                    // Started with a glob pattern; choose by the pattern.
                    ? options.selector.match(filePath)

                    // Started with a directory path; choose by file extensions.
                    : this.isTargetPath(filePath, config);

                if (matched) {
                    const ignored = this._isIgnoredFile(filePath, { ...options, config });
                    const flag = ignored ? IGNORED_SILENTLY : NONE;

                    debug(`Yield: ${entry.name}${ignored ? " but ignored" : ""}`);
                    yield {
                        config: configArrayFactory.getConfigArrayForFile(filePath),
                        filePath,
                        flag
                    };
                } else {
                    debug(`Didn't match: ${entry.name}`);
                }

            // Dive into the sub directory.
            } else if (options.recursive && fileInfo.isDirectory()) {
                if (!config) {
                    config = configArrayFactory.getConfigArrayForFile(
                        filePath,
                        { ignoreNotFoundError: true }
                    );
                }
                const ignored = this._isIgnoredFile(
                    filePath + path.sep,
                    { ...options, config }
                );

                if (!ignored) {
                    yield* this._iterateFilesRecursive(filePath, options);
                }
            }
        }

        debug(`Leave the directory: ${directoryPath}`);
    }

    /**
     * Check if a given file should be ignored.
     * @param {string} filePath The path to a file to check.
     * @param {Object} options Options
     * @param {ConfigArray} [options.config] The config for this file.
     * @param {boolean} [options.dotfiles] If `true` then this is not ignore dot files by default.
     * @param {boolean} [options.direct] If `true` then this is a direct specified file.
     * @returns {boolean} `true` if the file should be ignored.
     * @private
     */
    _isIgnoredFile(filePath, {
        config: providedConfig,
        dotfiles = false,
        direct = false
    }) {
        const {
            configArrayFactory,
            defaultIgnores,
            ignoreFlag
        } = internalSlotsMap.get(this);

        if (ignoreFlag) {
            const config =
                providedConfig ||
                configArrayFactory.getConfigArrayForFile(
                    filePath,
                    { ignoreNotFoundError: true }
                );
            const ignores =
                config.extractConfig(filePath).ignores || defaultIgnores;

            return ignores(filePath, dotfiles);
        }

        return !direct && defaultIgnores(filePath, dotfiles);
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = { FileEnumerator };
