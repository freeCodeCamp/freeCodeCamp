/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var Reporter = require('./lib/reporter');
/**
 * @module Exports
 */
module.exports = {
    config: require('./lib/config'),
    cover: require('./lib/run-cover'),
    reports: require('./lib/run-reports'),
    instrument: require('./lib/run-instrument'),
    checkCoverage: require('./lib/run-check-coverage'),
    createReporter: function (cfg, opts) {
        return new Reporter(cfg, opts);
    },
    /**
     * asynchronously returns a function that can match filesystem paths.
     * The function returned in the callback may be passed directly as a `matcher`
     * to the functions in the `hook` module.
     *
     * When no options are passed, the match function is one that matches all JS
     * files under the current working directory except ones under `node_modules`
     *
     * Match patterns are `ant`-style patterns processed using the `fileset` library.
     * Examples not provided due to limitations in putting asterisks inside
     * jsdoc comments. Please refer to tests under `test/other/test-matcher.js`
     * for examples.
     *
     * @method matcherFor
     * @static
     * @param {Object} options Optional. Lookup options.
     * @param {String} [options.root] the root of the filesystem tree under
     *     which to match files. Defaults to `process.cwd()`
     * @param {Array} [options.includes] an array of include patterns to match.
     *     Defaults to all JS files under the root.
     * @param {Array} [options.excludes] and array of exclude patterns. File paths
     *     matching these patterns will be excluded by the returned matcher.
     *     Defaults to files under `node_modules` found anywhere under root.
     * @param {Function(err, matchFunction)} callback  The callback that is
     *      called with two arguments. The first is an `Error` object in case
     *      of errors or a falsy value if there were no errors. The second
     *      is a function that may be use as a matcher.
     */
    matcherFor: require('./lib/file-matcher').matcherFor,
    filesFor: require('./lib/file-matcher').filesFor
};

// export all the istanbul libraries as is so users don't have to take 5 deps
// that are potentially inconsistent

var DASH_PATTERN = /-([a-z])/g;

function camelize(word) {
    return word.replace(DASH_PATTERN, function (match, lch) {
        return lch.toUpperCase();
    });
}

[ 'coverage', 'hook', 'instrument', 'report', 'source-maps'].forEach(function (k) {
        var mod = 'lib-' + k,
            prop = camelize(mod);
        module.exports[prop] = require('istanbul-' + mod);
});

module.exports.reportsImpl = require('istanbul-reports');
