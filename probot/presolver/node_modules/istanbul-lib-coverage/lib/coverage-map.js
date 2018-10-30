/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var FileCoverage = require('./file').FileCoverage,
    CoverageSummary = require('./file').CoverageSummary;

function loadMap(source) {
    var data = {};
    Object.keys(source).forEach(function (k) {
        var cov = source[k];
        if (cov instanceof FileCoverage) {
            data[k] = cov;
        } else {
            data[k] = new FileCoverage(cov);
        }
    });
    return data;
}
/**
 * CoverageMap is a map of `FileCoverage` objects keyed by file paths.
 * @param {Object} [obj=undefined] obj A coverage map from which to initialize this
 * map's contents. This can be the raw global coverage object.
 * @constructor
 */
function CoverageMap(obj) {
    if (!obj) {
        this.data = {};
    } else if (obj instanceof CoverageMap) {
        this.data = obj.data;
    } else {
        this.data = loadMap(obj);
    }
}
/**
 * merges a second coverage map into this one
 * @param {CoverageMap} obj - a CoverageMap or its raw data. Coverage is merged
 *  correctly for the same files and additional file coverage keys are created
 *  as needed.
 */
CoverageMap.prototype.merge = function (obj) {
    var that = this,
        other;
    if (obj instanceof CoverageMap) {
        other = obj;
    } else {
        other = new CoverageMap(obj);
    }
    Object.keys(other.data).forEach(function (k) {
        var fc = other.data[k];
        if (that.data[k]) {
            that.data[k].merge(fc);
        } else {
            that.data[k] = fc;
        }
    });
};
/**
 * filter the coveragemap based on the callback provided
 * @param {Function (filename)} callback - Returns true if the path
 *  should be included in the coveragemap. False if it should be
 *  removed.
 */
CoverageMap.prototype.filter = function (callback) {
     var that = this;
     Object.keys(that.data).forEach(function (k) {
         if (!callback(k)) {
             delete that.data[k];
         }
     });
};
/**
 * returns a JSON-serializable POJO for this coverage map
 * @returns {Object}
 */
CoverageMap.prototype.toJSON = function () {
    return this.data;
};
/**
 * returns an array for file paths for which this map has coverage
 * @returns {Array{string}} - array of files
 */
CoverageMap.prototype.files = function () {
    return Object.keys(this.data);
};
/**
 * returns the file coverage for the specified file.
 * @param {String} file
 * @returns {FileCoverage}
 */
CoverageMap.prototype.fileCoverageFor = function (file) {
    var fc = this.data[file];
    if (!fc) {
        throw new Error('No file coverage available for: ' + file);
    }
    return fc;
};
/**
 * adds a file coverage object to this map. If the path for the object,
 * already exists in the map, it is merged with the existing coverage
 * otherwise a new key is added to the map.
 * @param {FileCoverage} fc the file coverage to add
 */
CoverageMap.prototype.addFileCoverage = function (fc) {
    var cov = new FileCoverage(fc),
        path = cov.path;
    if (this.data[path]) {
        this.data[path].merge(cov);
    } else {
        this.data[path] = cov;
    }
};
/**
 * returns the coverage summary for all the file coverage objects in this map.
 * @returns {CoverageSummary}
 */
CoverageMap.prototype.getCoverageSummary = function () {
    var that = this,
        ret = new CoverageSummary();
    this.files().forEach(function (key) {
        ret.merge(that.fileCoverageFor(key).toSummary());
    });
    return ret;
};

module.exports = {
    CoverageMap: CoverageMap
};
