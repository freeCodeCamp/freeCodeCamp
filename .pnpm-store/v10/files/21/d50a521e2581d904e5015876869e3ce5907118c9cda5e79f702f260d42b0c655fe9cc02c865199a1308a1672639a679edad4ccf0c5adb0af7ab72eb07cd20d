/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Print a help text.
 *
 * @param {stream.Writable} output - A writable stream to print.
 * @returns {Promise} Always a fulfilled promise.
 * @private
 */
module.exports = function printHelp(output) {
    output.write(`
Usage:
    $ run-s [--help | -h | --version | -v]
    $ run-s [OPTIONS] <tasks>

    Run given npm-scripts sequentially.

    <tasks> : A list of npm-scripts' names and Glob-like patterns.

Options:
    -c, --continue-on-error  - Set the flag to continue executing subsequent
                               tasks even if a task threw an error. 'run-s'
                               itself will exit with non-zero code if one or
                               more tasks threw error(s).
    --npm-path <string>  - - - Set the path to npm. Default is the value of
                               environment variable npm_execpath.
                               If the variable is not defined, then it's "npm."
                               In this case, the "npm" command must be found in
                               environment variable PATH.
    -l, --print-label  - - - - Set the flag to print the task name as a prefix
                               on each line of output. Tools in tasks may stop
                               coloring their output if this option was given.
    -n, --print-name   - - - - Set the flag to print the task name before
                               running each task.
    -s, --silent   - - - - - - Set 'silent' to the log level of npm.

    Shorthand aliases can be combined.
    For example, '-clns' equals to '-c -l -n -s'.

Examples:
    $ run-s build:**
    $ run-s lint clean build:**
    $ run-s --silent --print-name lint clean build:**
    $ run-s -sn lint clean build:**

See Also:
    https://github.com/mysticatea/npm-run-all#readme
`)

    return Promise.resolve(null)
}
