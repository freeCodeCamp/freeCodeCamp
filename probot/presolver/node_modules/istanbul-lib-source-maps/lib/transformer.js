/*
 Copyright 2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var debug = require('debug')('istanbuljs'),
    pathutils = require('./pathutils'),
    libCoverage = require('istanbul-lib-coverage'),
    MappedCoverage = require('./mapped').MappedCoverage;

function isInvalidPosition (pos) {
    return !pos || typeof pos.line !== "number" || typeof pos.column !== "number" || pos.line < 0 || pos.column < 0;
}

/**
 * determines the original position for a given location
 * @param  {SourceMapConsumer} sourceMap the source map
 * @param  {Object} location the original location Object
 * @returns {Object} the remapped location Object
 */
function getMapping(sourceMap, location, origFile) {

    if (!location) {
        return null;
    }

    if (isInvalidPosition(location.start) || isInvalidPosition(location.end)) {
        return null;
    }

    var start = sourceMap.originalPositionFor(location.start),
        end = sourceMap.originalPositionFor(location.end);

    /* istanbul ignore if: edge case too hard to test for */
    if (!(start && end)) {
        return null;
    }
    if (!(start.source && end.source)) {
        return null;
    }
    if (start.source !== end.source) {
        return null;
    }

    /* istanbul ignore if: edge case too hard to test for */
    if (start.line === null || start.column === null) {
        return null;
    }
    /* istanbul ignore if: edge case too hard to test for */
    if (end.line === null || end.column === null) {
        return null;
    }

    if (start.line === end.line && start.column === end.column) {
        end = sourceMap.originalPositionFor({
            line: location.end.line,
            column: location.end.column,
            bias: 2
        });
        end.column = end.column - 1;
    }

    return {
        source: pathutils.relativeTo(start.source, origFile),
        loc: {
            start: {
                line: start.line,
                column: start.column
            },
            end: {
                line: end.line,
                column: end.column
            }
        }
    };
}

function SourceMapTransformer(finder, opts) {
    opts = opts || {};
    this.finder = finder;
    this.baseDir = opts.baseDir || process.cwd();
}

SourceMapTransformer.prototype.processFile = function (fc, sourceMap, coverageMapper) {
    var changes = 0;

    Object.keys(fc.statementMap).forEach(function (s) {
        var loc = fc.statementMap[s],
            hits = fc.s[s],
            mapping = getMapping(sourceMap, loc, fc.path),
            mappedCoverage;

        if (mapping) {
            changes += 1;
            mappedCoverage = coverageMapper(mapping.source);
            mappedCoverage.addStatement(mapping.loc, hits);
        }
    });

    Object.keys(fc.fnMap).forEach(function (f) {
        var fnMeta = fc.fnMap[f],
            hits = fc.f[f],
            mapping = getMapping(sourceMap, fnMeta.decl, fc.path),
            spanMapping = getMapping(sourceMap, fnMeta.loc, fc.path),
            mappedCoverage;

        if (mapping && spanMapping && mapping.source === spanMapping.source) {
            changes += 1;
            mappedCoverage = coverageMapper(mapping.source);
            mappedCoverage.addFunction(fnMeta.name, mapping.loc, spanMapping.loc, hits);
        }
    });

    Object.keys(fc.branchMap).forEach(function (b) {
        var branchMeta = fc.branchMap[b],
            source,
            hits = fc.b[b],
            mapping,
            locs = [],
            mappedHits = [],
            mappedCoverage,
            skip,
            i;
        for (i = 0; i < branchMeta.locations.length; i += 1) {
            mapping = getMapping(sourceMap, branchMeta.locations[i], fc.path);
            if (mapping) {
                if (!source) {
                    source = mapping.source;
                }
                if (mapping.source !== source) {
                    skip = true;
                }
                locs.push(mapping.loc);
                mappedHits.push(hits[i]);
            }
        }
        if (!skip && locs.length > 0) {
            changes += 1;
            mappedCoverage = coverageMapper(source);
            mappedCoverage.addBranch(branchMeta.type, locs[0] /* XXX */, locs, mappedHits);
        }
    });

    return changes > 0;
};

SourceMapTransformer.prototype.transform = function (coverageMap) {
    var that = this,
        finder = this.finder,
        output = {},
        getMappedCoverage = function (file) {
            if (!output[file]) {
                output[file] = new MappedCoverage(file);
            }
            return output[file];
        };

    coverageMap.files().forEach(function (file) {
        var fc = coverageMap.fileCoverageFor(file),
            sourceMap = finder(file),
            changed;

        if (!sourceMap) {
            output[file] = fc;
            return;
        }

        changed = that.processFile(fc, sourceMap, getMappedCoverage);
        if (!changed) {
            debug('File [' + file + '] ignored, nothing could be mapped');
        }
    });
    return libCoverage.createCoverageMap(output);
};

module.exports = {
    create: function (finder, opts) {
        return new SourceMapTransformer(finder, opts);
    }
};
