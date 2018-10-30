/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var Reporter = require('./reporter'),
    fs = require('fs'),
    filesFor = require('./file-matcher').filesFor,
    libCoverage = require('istanbul-lib-coverage');

function run(formats, config, opts, callback) {
    if (!callback && typeof(opts) === 'function') {
        callback = opts;
        opts = {};
    }
    opts = opts || {};
    var root,
        coverageMap = libCoverage.createCoverageMap(),
        includePattern = opts.include || '**/coverage*.raw.json',
        reporter = new Reporter(config);

    if (!formats || formats.length === 0) {
        formats = config.reporting.reports();
    }
    try {
        reporter.addAll(formats);
    } catch (ex) {
        ex.inputError = true;
        return callback(ex);
    }

    root = opts.root || process.cwd();
    filesFor({
        root: root,
        includes: [ includePattern ]
    }, function (err, files) {
        /* istanbul ignore if */
        if (err) {
            return callback(err);
        }
        files.forEach(function (file) {
            var coverageObject =  JSON.parse(fs.readFileSync(file, 'utf8'));
            coverageMap.merge(coverageObject);
        });
        reporter.write(coverageMap, {});
        return callback();
    });
}

module.exports = {
    run: run
};


