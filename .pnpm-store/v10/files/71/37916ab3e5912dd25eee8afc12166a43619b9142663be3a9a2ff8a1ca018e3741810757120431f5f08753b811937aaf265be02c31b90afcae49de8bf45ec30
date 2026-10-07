/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
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
    $ npm-run-all [--help | -h | --version | -v]
    $ npm-run-all [tasks] [OPTIONS]

    Run given npm-scripts in parallel or sequential.

    <tasks> : A list of npm-scripts' names and Glob-like patterns.

Options:
    --aggregate-output   - - - Avoid interleaving output by delaying printing of
                               each command's output until it has finished.
    -c, --continue-on-error  - Set the flag to continue executing
                               other/subsequent tasks even if a task threw an
                               error. 'npm-run-all' itself will exit with
                               non-zero code if one or more tasks threw error(s)
    --max-parallel <number>  - Set the maximum number of parallelism. Default is
                               unlimited.
    --npm-path <string>  - - - Set the path to npm. Default is the value of
                               environment variable npm_execpath.
                               If the variable is not defined, then it's "npm".
                               In this case, the "npm" command must be found in
                               environment variable PATH.
    -l, --print-label  - - - - Set the flag to print the task name as a prefix
                               on each line of output. Tools in tasks may stop
                               coloring their output if this option was given.
    -n, --print-name   - - - - Set the flag to print the task name before
                               running each task.
    -p, --parallel <tasks>   - Run a group of tasks in parallel.
                               e.g. 'npm-run-all -p foo bar' is similar to
                                    'npm run foo & npm run bar'.
    -r, --race   - - - - - - - Set the flag to kill all tasks when a task
                               finished with zero. This option is valid only
                               with 'parallel' option.
    -s, --sequential <tasks> - Run a group of tasks sequentially.
        --serial <tasks>       e.g. 'npm-run-all -s foo bar' is similar to
                                    'npm run foo && npm run bar'.
                               '--serial' is a synonym of '--sequential'.
    --silent   - - - - - - - - Set 'silent' to the log level of npm.

Examples:
    $ npm-run-all --serial clean lint build:**
    $ npm-run-all --parallel watch:**
    $ npm-run-all clean lint --parallel "build:** -- --watch"
    $ npm-run-all -l -p start-server start-browser start-electron

See Also:
    https://github.com/mysticatea/npm-run-all#readme
`)

    return Promise.resolve(null)
}
