/**
 * @module spawn-win32
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const crossSpawn = require("cross-spawn")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Kills the new process and its sub processes forcibly.
 * @this ChildProcess
 * @returns {void}
 */
function kill() {
    crossSpawn("taskkill", ["/F", "/T", "/PID", this.pid])
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Launches a new process with the given command.
 * This is almost same as `child_process.spawn`.
 *
 * This returns a `ChildProcess` instance.
 * `kill` method of the instance kills the new process and its sub processes forcibly.
 *
 * @param {string} command - The command to run.
 * @param {string[]} args - List of string arguments.
 * @param {object} options - Options.
 * @returns {ChildProcess} A ChildProcess instance of new process.
 * @private
 */
module.exports = function spawn(command, args, options) {
    const child = crossSpawn(command, args, options)
    child.kill = kill

    return child
}
