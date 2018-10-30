/*
 Copyright 2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var FileCoverage = require('istanbul-lib-coverage').classes.FileCoverage,
    util = require('util');

function MappedCoverage(pathOrObj) {
    FileCoverage.call(this, pathOrObj);
    this.meta = {
        last: {
            s: 0,
            f: 0,
            b: 0
        },
        seen: {}
    };
}

util.inherits(MappedCoverage, FileCoverage);

function locString(loc) {
    return [loc.start.line, loc.start.column, loc.end.line, loc.end.column].join(':');
}

MappedCoverage.prototype.addStatement = function (loc, hits) {
    var key = 's:' + locString(loc),
        meta = this.meta,
        index = meta.seen[key];

    if (index === undefined) {
        index = meta.last.s;
        meta.last.s += 1;
        meta.seen[key] = index;
        this.statementMap[index] = this.cloneLocation(loc);
    }
    this.s[index] = this.s[index] || 0;
    this.s[index] += hits;
    return index;
};

MappedCoverage.prototype.addFunction = function (name, decl, loc, hits) {
    var key = 'f:' + locString(decl),
        meta = this.meta,
        index = meta.seen[key];

    if (index === undefined) {
        index = meta.last.f;
        meta.last.f += 1;
        meta.seen[key] = index;
        name = name || '(unknown_' + index + ')';
        this.fnMap[index] = {
            name: name,
            decl: this.cloneLocation(decl),
            loc: this.cloneLocation(loc)
        };
    }
    this.f[index] = this.f[index] || 0;
    this.f[index] += hits;
    return index;
};

MappedCoverage.prototype.addBranch = function (type, loc, branchLocations, hits) {
    var key = ['b'],
        meta = this.meta,
        that = this,
        index,
        i;

    branchLocations.forEach(function (l) {
        key.push(locString(l));
    });

    key = key.join(':');
    index = meta.seen[key];
    if (index === undefined) {
        index = meta.last.b;
        meta.last.b += 1;
        meta.seen[key] = index;
        this.branchMap[index] = {
            loc: loc,
            type: type,
            locations: branchLocations.map(function (l) {
                return that.cloneLocation(l);
            })
        };
    }

    if (!this.b[index]) {
        this.b[index] = [];
        branchLocations.forEach(function () {
            that.b[index].push(0);
        });
    }
    for (i = 0; i < hits.length; i += 1) {
        that.b[index][i] += hits[i];
    }
    return index;
};

// returns a clone of the location object with only
// the attributes of interest
MappedCoverage.prototype.cloneLocation = function (loc) {
    return {
        start: {
            line: loc.start.line,
            column: loc.start.column
        },
        end: {
            line: loc.end.line,
            column: loc.end.column
        }
    };
};

module.exports = {
    MappedCoverage: MappedCoverage
};
