/*
 Copyright 2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var debug = require('debug')('istanbuljs'),
    path = require('path'),
    fs = require('fs'),
    pathutils = require('./pathutils'),
    sourceStore = require('./source-store'),
    transformer = require('./transformer'),
    SMC = require('source-map').SourceMapConsumer;

/**
 * tracks source maps for registered files
 * @param {Object} opts [opts=undefined] options.
 * @param {Boolean} opts.verbose [opts.verbose=false] verbose mode
 * @param {String} opts.baseDir [opts.baseDir=null] alternate base directory
 *  to resolve sourcemap files
 * @param {String} opts.sourceStore [opts.sourceStore='memory'] - store that tracks
 *  embedded sources found in source maps, one of 'memory' or 'file'
 * @param {String} opts.tmpdir [opts.tmpdir=undefined] - temporary directory
 *   to use for storing files.
 * @constructor
 */
function MapStore(opts) {
    opts = opts || {};
    this.baseDir = opts.baseDir || null;
    this.verbose = opts.verbose || false;
    this.sourceStore = sourceStore.create(opts.sourceStore, { tmpdir: opts.tmpdir});
    this.data = {};
}
/**
 * registers a source map URL with this store. It makes some input sanity checks
 * and silently fails on malformed input.
 * @param transformedFilePath - the file path for which the source map is valid.
 *  This must *exactly* match the path stashed for the coverage object to be
 *  useful.
 * @param sourceMapUrl - the source map URL, **not** a comment
 */
MapStore.prototype.registerURL = function (transformedFilePath, sourceMapUrl) {
    var d = 'data:',
        b64 = 'base64,',
        pos;

    if (sourceMapUrl.length > d.length && sourceMapUrl.substring(0, d.length) === d) {
        pos = sourceMapUrl.indexOf(b64);
        if (pos > 0) {
            this.data[transformedFilePath] = {
                type: 'encoded',
                data: sourceMapUrl.substring(pos + b64.length)
            };
        } else {
            debug('Unable to interpret source map URL: ' + sourceMapUrl);
        }
        return;
    }
    var dir = path.dirname(path.resolve(transformedFilePath)),
        file = path.resolve(dir, sourceMapUrl);
    this.data[transformedFilePath] = { type: 'file', data: file };
};
/**
 * registers a source map object with this store. Makes some basic sanity checks
 * and silently fails on malformed input.
 * @param transformedFilePath - the file path for which the source map is valid
 * @param sourceMap - the source map object
 */
MapStore.prototype.registerMap = function (transformedFilePath, sourceMap) {
    if (sourceMap && sourceMap.version) {
        this.data[transformedFilePath] = { type: 'object', data: sourceMap };
    } else {
        debug('Invalid source map object:' + JSON.stringify(sourceMap, null, 2));
    }
};
/**
 * transforms the coverage map provided into one that refers to original
 * sources when valid mappings have been registered with this store.
 * @param {CoverageMap} coverageMap - the coverage map to transform
 * @returns {Object} an object with 2 properties. `map` for the transformed
 * coverage map and `sourceFinder` which is a function to return the source
 * text for a file.
 */
MapStore.prototype.transformCoverage = function (coverageMap) {
    var that = this,
        mappedCoverage,
        sourceFinder;

    sourceFinder = function (filePath) {
        var content = that.sourceStore.getSource(filePath);
        if (content !== null) {
            return content;
        }
        if (pathutils.isAbsolute(filePath)) {
            return fs.readFileSync(filePath, 'utf8');
        }
        return fs.readFileSync(pathutils.asAbsolute(filePath, that.baseDir));
    };

    coverageMap.files().forEach(function (file) {
        var coverage = coverageMap.fileCoverageFor(file);
        if (coverage.data.inputSourceMap && !that.data[file]) {
            that.registerMap(file, coverage.data.inputSourceMap);
        }
    });

    if (Object.keys(this.data).length === 0) {
        return {
            map: coverageMap,
            sourceFinder: sourceFinder
        };
    }
    mappedCoverage = transformer.create(function (filePath) {
        try {
            if (!that.data[filePath]) {
                return null;
            }
            var d = that.data[filePath],
                obj,
                smc;

            if (d.type === 'file') {
                obj = JSON.parse(fs.readFileSync(d.data, 'utf8'));
            } else if (d.type === 'encoded') {
                obj = JSON.parse(new Buffer(d.data, 'base64').toString());
            } else {
                obj = d.data;
            }
            smc = new SMC(obj);
            smc.sources.forEach(function (s) {
                var content = smc.sourceContentFor(s),
                    sourceFilePath = pathutils.relativeTo(s, filePath);
                if (content) {
                    that.sourceStore.registerSource(sourceFilePath, content);
                }
            });
            return smc;
        } catch (ex) {
            debug('Error returning source map for ' + filePath);
            debug(ex.stack);
            return null;
        }
    }).transform(coverageMap);

    return {
        map: mappedCoverage,
        sourceFinder: sourceFinder
    };
};

/**
 * disposes temporary resources allocated by this map store
 */
MapStore.prototype.dispose = function () {
    this.sourceStore.dispose();
};

module.exports = {
    MapStore: MapStore
};
