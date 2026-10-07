/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

/*eslint-disable no-process-env */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const OVERWRITE_OPTION = /^--([^:]+?):([^=]+?)(?:=(.+))?$/
const CONFIG_OPTION = /^--([^=]+?)(?:=(.+))$/
const PACKAGE_CONFIG_PATTERN = /^npm_package_config_(.+)$/
const CONCAT_OPTIONS = /^-[clnprs]+$/

/**
 * Overwrites a specified package config.
 *
 * @param {object} config - A config object to be overwritten.
 * @param {string} packageName - A package name to overwrite.
 * @param {string} variable - A variable name to overwrite.
 * @param {string} value - A new value to overwrite.
 * @returns {void}
 */
function overwriteConfig(config, packageName, variable, value) {
    const scope = config[packageName] || (config[packageName] = {})
    scope[variable] = value
}

/**
 * Creates a package config object.
 * This checks `process.env` and creates the default value.
 *
 * @returns {object} Created config object.
 */
function createPackageConfig() {
    const retv = {}
    const packageName = process.env.npm_package_name
    if (!packageName) {
        return retv
    }

    for (const key of Object.keys(process.env)) {
        const m = PACKAGE_CONFIG_PATTERN.exec(key)
        if (m != null) {
            overwriteConfig(retv, packageName, m[1], process.env[key])
        }
    }

    return retv
}

/**
 * Adds a new group into a given list.
 *
 * @param {object[]} groups - A group list to add.
 * @param {object} initialValues - A key-value map for the default of new value.
 * @returns {void}
 */
function addGroup(groups, initialValues) {
    groups.push(Object.assign(
        { parallel: false, patterns: [] },
        initialValues || {}
    ))
}

/**
 * ArgumentSet is values of parsed CLI arguments.
 * This class provides the getter to get the last group.
 */
class ArgumentSet {
    /**
     * @param {object} initialValues - A key-value map for the default of new value.
     * @param {object} options - A key-value map for the options.
     */
    constructor(initialValues, options) {
        this.config = {}
        this.continueOnError = false
        this.groups = []
        this.maxParallel = 0
        this.npmPath = null
        this.packageConfig = createPackageConfig()
        this.printLabel = false
        this.printName = false
        this.race = false
        this.rest = []
        this.silent = process.env.npm_config_loglevel === "silent"
        this.singleMode = Boolean(options && options.singleMode)

        addGroup(this.groups, initialValues)
    }

    /**
     * Gets the last group.
     */
    get lastGroup() {
        return this.groups[this.groups.length - 1]
    }

    /**
     * Gets "parallel" flag.
     */
    get parallel() {
        return this.groups.some(g => g.parallel)
    }
}

/**
 * Parses CLI arguments.
 *
 * @param {ArgumentSet} set - The parsed CLI arguments.
 * @param {string[]} args - CLI arguments.
 * @returns {ArgumentSet} set itself.
 */
function parseCLIArgsCore(set, args) {    // eslint-disable-line complexity
    LOOP:
    for (let i = 0; i < args.length; ++i) {
        const arg = args[i]

        switch (arg) {
            case "--":
                set.rest = args.slice(1 + i)
                break LOOP

            case "--color":
            case "--no-color":
                // do nothing.
                break

            case "-c":
            case "--continue-on-error":
                set.continueOnError = true
                break

            case "-l":
            case "--print-label":
                set.printLabel = true
                break

            case "-n":
            case "--print-name":
                set.printName = true
                break

            case "-r":
            case "--race":
                set.race = true
                break

            case "--silent":
                set.silent = true
                break

            case "--max-parallel":
                set.maxParallel = parseInt(args[++i], 10)
                if (!Number.isFinite(set.maxParallel) || set.maxParallel <= 0) {
                    throw new Error(`Invalid Option: --max-parallel ${args[i]}`)
                }
                break

            case "-s":
            case "--sequential":
            case "--serial":
                if (set.singleMode && arg === "-s") {
                    set.silent = true
                    break
                }
                if (set.singleMode) {
                    throw new Error(`Invalid Option: ${arg}`)
                }
                addGroup(set.groups)
                break

            case "--aggregate-output":
                set.aggregateOutput = true
                break

            case "-p":
            case "--parallel":
                if (set.singleMode) {
                    throw new Error(`Invalid Option: ${arg}`)
                }
                addGroup(set.groups, { parallel: true })
                break

            case "--npm-path":
                set.npmPath = args[++i] || null
                break

            default: {
                let matched = null
                if ((matched = OVERWRITE_OPTION.exec(arg))) {
                    overwriteConfig(
                        set.packageConfig,
                        matched[1],
                        matched[2],
                        matched[3] || args[++i]
                    )
                }
                else if ((matched = CONFIG_OPTION.exec(arg))) {
                    set.config[matched[1]] = matched[2]
                }
                else if (CONCAT_OPTIONS.test(arg)) {
                    parseCLIArgsCore(
                        set,
                        arg.slice(1).split("").map(c => `-${c}`)
                    )
                }
                else if (arg[0] === "-") {
                    throw new Error(`Invalid Option: ${arg}`)
                }
                else {
                    set.lastGroup.patterns.push(arg)
                }

                break
            }
        }
    }

    if (!set.parallel && set.aggregateOutput) {
        throw new Error("Invalid Option: --aggregate-output (without parallel)")
    }
    if (!set.parallel && set.race) {
        const race = args.indexOf("--race") !== -1 ? "--race" : "-r"
        throw new Error(`Invalid Option: ${race} (without parallel)`)
    }
    if (!set.parallel && set.maxParallel !== 0) {
        throw new Error("Invalid Option: --max-parallel (without parallel)")
    }

    return set
}

/**
 * Parses CLI arguments.
 *
 * @param {string[]} args - CLI arguments.
 * @param {object} initialValues - A key-value map for the default of new value.
 * @param {object} options - A key-value map for the options.
 * @param {boolean} options.singleMode - The flag to be single group mode.
 * @returns {ArgumentSet} The parsed CLI arguments.
 */
module.exports = function parseCLIArgs(args, initialValues, options) {
    return parseCLIArgsCore(new ArgumentSet(initialValues, options), args)
}

/*eslint-enable */
