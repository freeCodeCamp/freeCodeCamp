/**
 * @module run-tasks-in-parallel
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const MemoryStream = require("memorystream")
const NpmRunAllError = require("./npm-run-all-error")
const runTask = require("./run-task")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Remove the given value from the array.
 * @template T
 * @param {T[]} array - The array to remove.
 * @param {T} x - The item to be removed.
 * @returns {void}
 */
function remove(array, x) {
    const index = array.indexOf(x)
    if (index !== -1) {
        array.splice(index, 1)
    }
}

const signals = {
    SIGABRT: 6,
    SIGALRM: 14,
    SIGBUS: 10,
    SIGCHLD: 20,
    SIGCONT: 19,
    SIGFPE: 8,
    SIGHUP: 1,
    SIGILL: 4,
    SIGINT: 2,
    SIGKILL: 9,
    SIGPIPE: 13,
    SIGQUIT: 3,
    SIGSEGV: 11,
    SIGSTOP: 17,
    SIGTERM: 15,
    SIGTRAP: 5,
    SIGTSTP: 18,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGUSR1: 30,
    SIGUSR2: 31,
}

/**
 * Converts a signal name to a number.
 * @param {string} signal - the signal name to convert into a number
 * @returns {number} - the return code for the signal
 */
function convert(signal) {
    return signals[signal] || 0
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Run npm-scripts of given names in parallel.
 *
 * If a npm-script exited with a non-zero code, this aborts other all npm-scripts.
 *
 * @param {string} tasks - A list of npm-script name to run in parallel.
 * @param {object} options - An option object.
 * @returns {Promise} A promise object which becomes fullfilled when all npm-scripts are completed.
 * @private
 */
module.exports = function runTasks(tasks, options) {
    return new Promise((resolve, reject) => {
        if (tasks.length === 0) {
            resolve([])
            return
        }

        const results = tasks.map(task => ({ name: task, code: undefined }))
        const queue = tasks.map((task, index) => ({ name: task, index }))
        const promises = []
        let error = null
        let aborted = false

        /**
         * Done.
         * @returns {void}
         */
        function done() {
            if (error == null) {
                resolve(results)
            }
            else {
                reject(error)
            }
        }

        /**
         * Aborts all tasks.
         * @returns {void}
         */
        function abort() {
            if (aborted) {
                return
            }
            aborted = true

            if (promises.length === 0) {
                done()
            }
            else {
                for (const p of promises) {
                    p.abort()
                }
                Promise.all(promises).then(done, reject)
            }
        }

        /**
         * Runs a next task.
         * @returns {void}
         */
        function next() {
            if (aborted) {
                return
            }
            if (queue.length === 0) {
                if (promises.length === 0) {
                    done()
                }
                return
            }

            const originalOutputStream = options.stdout
            const optionsClone = Object.assign({}, options)
            const writer = new MemoryStream(null, {
                readable: false,
            })

            if (options.aggregateOutput) {
                optionsClone.stdout = writer
            }

            const task = queue.shift()
            const promise = runTask(task.name, optionsClone)

            promises.push(promise)
            promise.then(
                (result) => {
                    remove(promises, promise)
                    if (aborted) {
                        return
                    }

                    if (options.aggregateOutput) {
                        originalOutputStream.write(writer.toString())
                    }

                    // Check if the task failed as a result of a signal, and
                    // amend the exit code as a result.
                    if (result.code === null && result.signal !== null) {
                        // An exit caused by a signal must return a status code
                        // of 128 plus the value of the signal code.
                        // Ref: https://nodejs.org/api/process.html#process_exit_codes
                        result.code = 128 + convert(result.signal)
                    }

                    // Save the result.
                    results[task.index].code = result.code

                    // Aborts all tasks if it's an error.
                    if (result.code) {
                        error = new NpmRunAllError(result, results)
                        if (!options.continueOnError) {
                            abort()
                            return
                        }
                    }

                    // Aborts all tasks if options.race is true.
                    if (options.race && !result.code) {
                        abort()
                        return
                    }

                    // Call the next task.
                    next()
                },
                (thisError) => {
                    remove(promises, promise)
                    if (!options.continueOnError || options.race) {
                        error = thisError
                        abort()
                        return
                    }
                    next()
                }
            )
        }

        const max = options.maxParallel
        const end = (typeof max === "number" && max > 0)
            ? Math.min(tasks.length, max)
            : tasks.length
        for (let i = 0; i < end; ++i) {
            next()
        }
    })
}
