/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var path = require('path'),
    fs = require('fs'),
    filesFor = require('./file-matcher').filesFor,
    libCoverage = require('istanbul-lib-coverage'),
    inputError = require('./input-error'),
    isAbsolute = path.isAbsolute || function (file) {
            return path.resolve(file) === path.normalize(file);
        };

function removeFiles(origMap, root, files) {
    var filesObj = {},
        ret = libCoverage.createCoverageMap();

    // Create lookup table.
    files.forEach(function (file) {
        filesObj[file] = true;
    });

    origMap.files().forEach(function (key) {
        // Exclude keys will always be relative, but covObj keys can be absolute or relative
        var excludeKey = isAbsolute(key) ? path.relative(root, key) : key;
        // Also normalize for files that start with `./`, etc.
        excludeKey = path.normalize(excludeKey);
        if (filesObj[excludeKey] !== true) {
            ret.addFileCoverage(origMap.fileCoverageFor(key));
        }
    });

    return ret;
}

function run(config, opts, callback) {

    if (!callback && typeof(opts) === 'function') {
        callback = opts;
        opts = {};
    }

    opts = opts || {};

    var root = opts.root || config.instrumentation.root() || process.cwd(),
        includePattern = opts.include || '**/coverage*.json',
        errors = [],
        check,
        makeMap,
        processFiles;

    check = function (name, thresholds, actuals) {
        [
            "statements",
            "branches",
            "lines",
            "functions"
        ].forEach(function (key) {
                var actual = actuals[key].pct,
                    actualUncovered = actuals[key].total - actuals[key].covered,
                    threshold = thresholds[key];

                if (threshold < 0) {
                    if (threshold * -1 < actualUncovered) {
                        errors.push('ERROR: Uncovered count for ' + key + ' (' + actualUncovered +
                            ') exceeds ' + name + ' threshold (' + -1 * threshold + ')');
                    }
                } else {
                    if (actual < threshold) {
                        errors.push('ERROR: Coverage for ' + key + ' (' + actual +
                            '%) does not meet ' + name + ' threshold (' + threshold + '%)');
                    }
                }
            });
    };

    makeMap = function (files, callback) {
        var coverageMap = libCoverage.createCoverageMap();
        if (files.length === 0) {
            return callback(inputError.create('ERROR: No coverage files found.'));
        }
        files.forEach(function (file) {
            var coverageObject = JSON.parse(fs.readFileSync(file, 'utf8'));
            coverageMap.merge(coverageObject);
        });
        return callback(null, coverageMap);
    };

    processFiles = function (coverageMap, callback) {
        var thresholds = {
                global: {
                    statements: config.check.global.statements || 0,
                    branches: config.check.global.branches || 0,
                    lines: config.check.global.lines || 0,
                    functions: config.check.global.functions || 0,
                    excludes: config.check.global.excludes || []
                },
                each: {
                    statements: config.check.each.statements || 0,
                    branches: config.check.each.branches || 0,
                    lines: config.check.each.lines || 0,
                    functions: config.check.each.functions || 0,
                    excludes: config.check.each.excludes || []
                }
            },
            globalResults = removeFiles(coverageMap, root, thresholds.global.excludes),
            eachResults = removeFiles(coverageMap, root, thresholds.each.excludes),
            finalError;

        if (config.verbose) {
            console.error('Compare actuals against thresholds');
            console.error(JSON.stringify({
                global: globalResults,
                each: eachResults,
                thresholds: thresholds
            }, undefined, 4));
        }

        check("global", thresholds.global, globalResults.getCoverageSummary());
        eachResults.files().forEach(function (key) {
            var summary = eachResults.fileCoverageFor(key).toSummary();
            check("per-file" + " (" + key + ") ", thresholds.each, summary);
        });
        finalError = errors.length === 0 ? null : errors.join("\n");
        return callback(finalError);
    };

    filesFor({
        root: root,
        includes: [includePattern]
    }, function (err, files) {
        if (err) {
            return callback(err);
        }
        makeMap(files, function (err, map) {
            if (err) {
                return callback(err);
            }
            return processFiles(map, callback);
        });
    });
}

module.exports = {
    run: run
};


