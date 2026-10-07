/**
 * @module index
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const shellQuote = require("shell-quote")
const matchTasks = require("./match-tasks")
const readPackageJson = require("./read-package-json")
const runTasks = require("./run-tasks")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ARGS_PATTERN = /\{(!)?([*@]|\d+)([^}]+)?}/g

/**
 * Converts a given value to an array.
 *
 * @param {string|string[]|null|undefined} x - A value to convert.
 * @returns {string[]} An array.
 */
function toArray(x) {
    if (x == null) {
        return []
    }
    return Array.isArray(x) ? x : [x]
}

/**
 * Replaces argument placeholders (such as `{1}`) by arguments.
 *
 * @param {string[]} patterns - Patterns to replace.
 * @param {string[]} args - Arguments to replace.
 * @returns {string[]} replaced
 */
function applyArguments(patterns, args) {
    const defaults = Object.create(null)

    return patterns.map(pattern => pattern.replace(ARGS_PATTERN, (whole, indirectionMark, id, options) => {
        if (indirectionMark != null) {
            throw Error(`Invalid Placeholder: ${whole}`)
        }
        if (id === "@") {
            return shellQuote.quote(args)
        }
        if (id === "*") {
            return shellQuote.quote([args.join(" ")])
        }

        const position = parseInt(id, 10)
        if (position >= 1 && position <= args.length) {
            return shellQuote.quote([args[position - 1]])
        }

        // Address default values
        if (options != null) {
            const prefix = options.slice(0, 2)

            if (prefix === ":=") {
                defaults[id] = shellQuote.quote([options.slice(2)])
                return defaults[id]
            }
            if (prefix === ":-") {
                return shellQuote.quote([options.slice(2)])
            }

            throw Error(`Invalid Placeholder: ${whole}`)
        }
        if (defaults[id] != null) {
            return defaults[id]
        }

        return ""
    }))
}

/**
 * Parse patterns.
 * In parsing process, it replaces argument placeholders (such as `{1}`) by arguments.
 *
 * @param {string|string[]} patternOrPatterns - Patterns to run.
 *      A pattern is a npm-script name or a Glob-like pattern.
 * @param {string[]} args - Arguments to replace placeholders.
 * @returns {string[]} Parsed patterns.
 */
function parsePatterns(patternOrPatterns, args) {
    const patterns = toArray(patternOrPatterns)
    const hasPlaceholder = patterns.some(pattern => ARGS_PATTERN.test(pattern))

    return hasPlaceholder ? applyArguments(patterns, args) : patterns
}

/**
 * Converts a given config object to an `--:=` style option array.
 *
 * @param {object|null} config -
 *   A map-like object to overwrite package configs.
 *   Keys are package names.
 *   Every value is a map-like object (Pairs of variable name and value).
 * @returns {string[]} `--:=` style options.
 */
function toOverwriteOptions(config) {
    const options = []

    for (const packageName of Object.keys(config)) {
        const packageConfig = config[packageName]

        for (const variableName of Object.keys(packageConfig)) {
            const value = packageConfig[variableName]

            options.push(`--${packageName}:${variableName}=${value}`)
        }
    }

    return options
}

/**
 * Converts a given config object to an `--a=b` style option array.
 *
 * @param {object|null} config -
 *   A map-like object to set configs.
 * @returns {string[]} `--a=b` style options.
 */
function toConfigOptions(config) {
    return Object.keys(config).map(key => `--${key}=${config[key]}`)
}

/**
 * Gets the maximum length.
 *
 * @param {number} length - The current maximum length.
 * @param {string} name - A name.
 * @returns {number} The maximum length.
 */
function maxLength(length, name) {
    return Math.max(name.length, length)
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Runs npm-scripts which are matched with given patterns.
 *
 * @param {string|string[]} patternOrPatterns - Patterns to run.
 *   A pattern is a npm-script name or a Glob-like pattern.
 * @param {object|undefined} [options] Optional.
 * @param {boolean} options.parallel -
 *   If this is `true`, run scripts in parallel.
 *   Otherwise, run scripts in sequencial.
 *   Default is `false`.
 * @param {stream.Readable|null} options.stdin -
 *   A readable stream to send messages to stdin of child process.
 *   If this is `null`, ignores it.
 *   If this is `process.stdin`, inherits it.
 *   Otherwise, makes a pipe.
 *   Default is `null`.
 * @param {stream.Writable|null} options.stdout -
 *   A writable stream to receive messages from stdout of child process.
 *   If this is `null`, cannot send.
 *   If this is `process.stdout`, inherits it.
 *   Otherwise, makes a pipe.
 *   Default is `null`.
 * @param {stream.Writable|null} options.stderr -
 *   A writable stream to receive messages from stderr of child process.
 *   If this is `null`, cannot send.
 *   If this is `process.stderr`, inherits it.
 *   Otherwise, makes a pipe.
 *   Default is `null`.
 * @param {string[]} options.taskList -
 *   Actual name list of npm-scripts.
 *   This function search npm-script names in this list.
 *   If this is `null`, this function reads `package.json` of current directly.
 * @param {object|null} options.packageConfig -
 *   A map-like object to overwrite package configs.
 *   Keys are package names.
 *   Every value is a map-like object (Pairs of variable name and value).
 *   e.g. `{"npm-run-all": {"test": 777}}`
 *   Default is `null`.
 * @param {boolean} options.silent -
 *   The flag to set `silent` to the log level of npm.
 *   Default is `false`.
 * @param {boolean} options.continueOnError -
 *   The flag to ignore errors.
 *   Default is `false`.
 * @param {boolean} options.printLabel -
 *   The flag to print task names at the head of each line.
 *   Default is `false`.
 * @param {boolean} options.printName -
 *   The flag to print task names before running each task.
 *   Default is `false`.
 * @param {number} options.maxParallel -
 *   The maximum number of parallelism.
 *   Default is unlimited.
 * @param {string} options.npmPath -
 *   The path to npm.
 *   Default is `process.env.npm_execpath`.
 * @returns {Promise}
 *   A promise object which becomes fullfilled when all npm-scripts are completed.
 */
module.exports = function npmRunAll(patternOrPatterns, options) { //eslint-disable-line complexity
    const stdin = (options && options.stdin) || null
    const stdout = (options && options.stdout) || null
    const stderr = (options && options.stderr) || null
    const taskList = (options && options.taskList) || null
    const config = (options && options.config) || null
    const packageConfig = (options && options.packageConfig) || null
    const args = (options && options.arguments) || []
    const parallel = Boolean(options && options.parallel)
    const silent = Boolean(options && options.silent)
    const continueOnError = Boolean(options && options.continueOnError)
    const printLabel = Boolean(options && options.printLabel)
    const printName = Boolean(options && options.printName)
    const race = Boolean(options && options.race)
    const maxParallel = parallel ? ((options && options.maxParallel) || 0) : 1
    const aggregateOutput = Boolean(options && options.aggregateOutput)
    const npmPath = options && options.npmPath
    try {
        const patterns = parsePatterns(patternOrPatterns, args)
        if (patterns.length === 0) {
            return Promise.resolve(null)
        }
        if (taskList != null && Array.isArray(taskList) === false) {
            throw new Error("Invalid options.taskList")
        }
        if (typeof maxParallel !== "number" || !(maxParallel >= 0)) {
            throw new Error("Invalid options.maxParallel")
        }
        if (!parallel && aggregateOutput) {
            throw new Error("Invalid options.aggregateOutput; It requires options.parallel")
        }
        if (!parallel && race) {
            throw new Error("Invalid options.race; It requires options.parallel")
        }

        const prefixOptions = [].concat(
            silent ? ["--silent"] : [],
            packageConfig ? toOverwriteOptions(packageConfig) : [],
            config ? toConfigOptions(config) : []
        )

        return Promise.resolve()
            .then(() => {
                if (taskList != null) {
                    return { taskList, packageInfo: null }
                }
                return readPackageJson()
            })
            .then(x => {
                const tasks = matchTasks(x.taskList, patterns)
                const labelWidth = tasks.reduce(maxLength, 0)

                return runTasks(tasks, {
                    stdin,
                    stdout,
                    stderr,
                    prefixOptions,
                    continueOnError,
                    labelState: {
                        enabled: printLabel,
                        width: labelWidth,
                        lastPrefix: null,
                        lastIsLinebreak: true,
                    },
                    printName,
                    packageInfo: x.packageInfo,
                    race,
                    maxParallel,
                    npmPath,
                    aggregateOutput,
                })
            })
    }
    catch (err) {
        return Promise.reject(new Error(err.message))
    }
}
