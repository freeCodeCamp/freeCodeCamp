/**
 * @module match-tasks
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Minimatch = require("minimatch").Minimatch

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const COLON_OR_SLASH = /[:/]/g
const CONVERT_MAP = { ":": "/", "/": ":" }

/**
 * Swaps ":" and "/", in order to use ":" as the separator in minimatch.
 *
 * @param {string} s - A text to swap.
 * @returns {string} The text which was swapped.
 */
function swapColonAndSlash(s) {
    return s.replace(COLON_OR_SLASH, (matched) => CONVERT_MAP[matched])
}

/**
 * Creates a filter from user-specified pattern text.
 *
 * The task name is the part until the first space.
 * The rest part is the arguments for this task.
 *
 * @param {string} pattern - A pattern to create filter.
 * @returns {{match: function, task: string, args: string}} The filter object of the pattern.
 */
function createFilter(pattern) {
    const trimmed = pattern.trim()
    const spacePos = trimmed.indexOf(" ")
    const task = spacePos < 0 ? trimmed : trimmed.slice(0, spacePos)
    const args = spacePos < 0 ? "" : trimmed.slice(spacePos)
    const matcher = new Minimatch(swapColonAndSlash(task), { nonegate: true })
    const match = matcher.match.bind(matcher)

    return { match, task, args }
}

/**
 * The set to remove overlapped task.
 */
class TaskSet {
    /**
     * Creates a instance.
     */
    constructor() {
        this.result = []
        this.sourceMap = Object.create(null)
    }

    /**
     * Adds a command (a pattern) into this set if it's not overlapped.
     * "Overlapped" is meaning that the command was added from a different source.
     *
     * @param {string} command - A pattern text to add.
     * @param {string} source - A task name to check.
     * @returns {void}
     */
    add(command, source) {
        const sourceList = this.sourceMap[command] || (this.sourceMap[command] = [])
        if (sourceList.length === 0 || sourceList.indexOf(source) !== -1) {
            this.result.push(command)
        }
        sourceList.push(source)
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Enumerates tasks which matches with given patterns.
 *
 * @param {string[]} taskList - A list of actual task names.
 * @param {string[]} patterns - Pattern texts to match.
 * @returns {string[]} Tasks which matches with the patterns.
 * @private
 */
module.exports = function matchTasks(taskList, patterns) {
    const filters = patterns.map(createFilter)
    const candidates = taskList.map(swapColonAndSlash)
    const taskSet = new TaskSet()
    const unknownSet = Object.create(null)

    // Take tasks while keep the order of patterns.
    for (const filter of filters) {
        let found = false

        for (const candidate of candidates) {
            if (filter.match(candidate)) {
                found = true
                taskSet.add(
                    swapColonAndSlash(candidate) + filter.args,
                    filter.task
                )
            }
        }

        // Built-in tasks should be allowed.
        if (!found && (filter.task === "restart" || filter.task === "env")) {
            taskSet.add(filter.task + filter.args, filter.task)
            found = true
        }
        if (!found) {
            unknownSet[filter.task] = true
        }
    }

    const unknownTasks = Object.keys(unknownSet)
    if (unknownTasks.length > 0) {
        throw new Error(`Task not found: "${unknownTasks.join("\", ")}"`)
    }
    return taskSet.result
}
