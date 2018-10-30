/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var FileWriter = require('./file-writer'),
    XMLWriter = require('./xml-writer'),
    tree = require('./tree'),
    watermarks = require('./watermarks'),
    fs = require('fs');

function defaultSourceLookup(path) {
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (ex) {
        throw new Error('Unable to lookup source: ' + path + '(' + ex.message + ')');
    }
}

function mergeWatermarks(specified, defaults) {
    specified = specified || {};
    Object.keys(defaults).forEach(function (k) {
        var specValue = specified[k];
        if (!(specValue && Array.isArray(specValue) && specValue.length === 2)) {
            specified[k] = defaults[k];
        }
    });
    return specified;
}
/**
 * A reporting context that is passed to report implementations
 * @param {Object} [opts=null] opts options
 * @param {String} [opts.dir='coverage'] opts.dir the reporting directory
 * @param {Object} [opts.watermarks=null] opts.watermarks watermarks for
 *  statements, lines, branches and functions
 * @param {Function} [opts.sourceFinder=fsLookup] opts.sourceFinder a
 *  function that returns source code given a file path. Defaults to
 *  filesystem lookups based on path.
 * @constructor
 */
function Context(opts) {
    opts = opts || {};
    this.dir = opts.dir || 'coverage';
    this.watermarks = mergeWatermarks(opts.watermarks, watermarks.getDefault());
    this.sourceFinder = opts.sourceFinder || defaultSourceLookup;
    this.data = {};
}

Object.defineProperty(Context.prototype, 'writer', {
    enumerable: true,
    get: function () {
        if (!this.data.writer) {
            this.data.writer = new FileWriter(this.dir);
        }
        return this.data.writer;
    }
});

/**
 * returns a FileWriter implementation for reporting use. Also available
 * as the `writer` property on the context.
 * @returns {Writer}
 */
Context.prototype.getWriter = function () {
    return this.writer;
};

/**
 * returns the source code for the specified file path or throws if
 * the source could not be found.
 * @param {String} filePath the file path as found in a file coverage object
 * @returns {String} the source code
 */
Context.prototype.getSource = function (filePath) {
    return this.sourceFinder(filePath);
};

/**
 * returns the coverage class given a coverage
 * types and a percentage value.
 * @param {String} type - the coverage type, one of `statements`, `functions`,
 *  `branches`, or `lines`
 * @param {Number} value - the percentage value
 * @returns {String} one of `high`, `medium` or `low`
 */
Context.prototype.classForPercent = function (type, value) {
    var watermarks = this.watermarks[type];
    if (!watermarks) {
        return 'unknown';
    }
    if (value < watermarks[0]) {
        return 'low';
    }
    if (value >= watermarks[1]) {
        return 'high';
    }
    return 'medium';
};
/**
 * returns an XML writer for the supplied content writer
 * @param {ContentWriter} contentWriter the content writer to which the returned XML writer
 *  writes data
 * @returns {XMLWriter}
 */
Context.prototype.getXMLWriter = function (contentWriter) {
    return new XMLWriter(contentWriter);
};
/**
 * returns a full visitor given a partial one.
 * @param {Object} partialVisitor a partial visitor only having the functions of
 *  interest to the caller. These functions are called with a scope that is the
 *  supplied object.
 * @returns {Visitor}
 */
Context.prototype.getVisitor = function (partialVisitor) {
    return new tree.Visitor(partialVisitor);
};

module.exports = {
    create: function (opts) {
        return new Context(opts);
    }
};
