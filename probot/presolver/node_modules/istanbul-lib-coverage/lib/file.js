/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function percent(covered, total) {
    var tmp;
    if (total > 0) {
        tmp = 1000 * 100 * covered / total + 5;
        return Math.floor(tmp / 10) / 100;
    } else {
        return 100.00;
    }
}

function blankSummary() {
    var empty = function () {
        return {
            total: 0,
            covered: 0,
            skipped: 0,
            pct: 'Unknown'
        };
    };
    return {
        lines: empty(),
        statements: empty(),
        functions: empty(),
        branches: empty()
    };
}

// asserts that a data object "looks like" a summary coverage object
function assertValidSummary(obj) {
    var valid = obj &&
        obj.lines &&
        obj.statements &&
        obj.functions &&
        obj.branches;
    if (!valid) {
        throw new Error('Invalid summary coverage object, missing keys, found:' +
            Object.keys(obj).join(','));
    }
}
/**
 * CoverageSummary provides a summary of code coverage . It exposes 4 properties,
 * `lines`, `statements`, `branches`, and `functions`. Each of these properties
 * is an object that has 4 keys `total`, `covered`, `skipped` and `pct`.
 * `pct` is a percentage number (0-100).
 * @param {Object|CoverageSummary} [obj=undefined] an optional data object or
 * another coverage summary to initialize this object with.
 * @constructor
 */
function CoverageSummary(obj) {
    if (!obj) {
        this.data = blankSummary();
    } else if (obj instanceof CoverageSummary) {
        this.data = obj.data;
    } else {
        this.data = obj;
    }
    assertValidSummary(this.data);
}

['lines', 'statements', 'functions', 'branches'].forEach(function (p) {
    Object.defineProperty(CoverageSummary.prototype, p, {
        enumerable: true,
        get: function () {
            return this.data[p];
        }
    });
});

/**
 * merges a second summary coverage object into this one
 * @param {CoverageSummary} obj - another coverage summary object
 */
CoverageSummary.prototype.merge = function (obj) {
    var that = this,
        keys = ['lines', 'statements', 'branches', 'functions'];
    keys.forEach(function (key) {
        that[key].total += obj[key].total;
        that[key].covered += obj[key].covered;
        that[key].skipped += obj[key].skipped;
        that[key].pct = percent(that[key].covered, that[key].total);
    });
    return this;
};

/**
 * returns a POJO that is JSON serializable. May be used to get the raw
 * summary object.
 */
CoverageSummary.prototype.toJSON = function () {
    return this.data;
};

// returns a data object that represents empty coverage
function emptyCoverage(filePath) {
    return {
        path: filePath,
        statementMap: {},
        fnMap: {},
        branchMap: {},
        s: {},
        f: {},
        b: {}
    };
}
// asserts that a data object "looks like" a coverage object
function assertValidObject(obj) {
    var valid = obj &&
        obj.path &&
        obj.statementMap &&
        obj.fnMap &&
        obj.branchMap &&
        obj.s &&
        obj.f &&
        obj.b;
    if (!valid) {
        throw new Error('Invalid file coverage object, missing keys, found:' +
            Object.keys(obj).join(','));
    }
}
/**
 * provides a read-only view of coverage for a single file.
 * The deep structure of this object is documented elsewhere. It has the following
 * properties:
 *
 * * `path` - the file path for which coverage is being tracked
 * * `statementMap` - map of statement locations keyed by statement index
 * * `fnMap` - map of function metadata keyed by function index
 * * `branchMap` - map of branch metadata keyed by branch index
 * * `s` - hit counts for statements
 * * `f` - hit count for functions
 * * `b` - hit count for branches
 *
 * @param {Object|FileCoverage|String} pathOrObj is a string that initializes
 * and empty coverage object with the specified file path or a data object that
 * has all the required properties for a file coverage object.
 * @constructor
 */
function FileCoverage(pathOrObj) {
    if (!pathOrObj) {
        throw new Error("Coverage must be initialized with a path or an object");
    }
    if (typeof pathOrObj === 'string') {
        this.data = emptyCoverage(pathOrObj);
    } else if (pathOrObj instanceof FileCoverage) {
        this.data = pathOrObj.data;
    } else if (typeof pathOrObj === 'object') {
        this.data = pathOrObj;
    } else {
        throw new Error('Invalid argument to coverage constructor');
    }
    assertValidObject(this.data);
}
/**
 * returns computed line coverage from statement coverage.
 * This is a map of hits keyed by line number in the source.
 */
FileCoverage.prototype.getLineCoverage = function () {
    var statementMap = this.data.statementMap,
        statements = this.data.s,
        lineMap = {};

    Object.keys(statements).forEach(function (st) {
        if (!statementMap[st]) {
            return;
        }
        var line = statementMap[st].start.line,
            count = statements[st],
            prevVal = lineMap[line];
        if (prevVal === undefined || prevVal < count) {
            lineMap[line] = count;
        }
    });
    return lineMap;
};
/**
 * returns an array of uncovered line numbers.
 * @returns {Array} an array of line numbers for which no hits have been
 *  collected.
 */
FileCoverage.prototype.getUncoveredLines = function () {
    var lc = this.getLineCoverage(),
        ret = [];
    Object.keys(lc).forEach(function (l) {
        var hits = lc[l];
        if (hits === 0) {
            ret.push(l);
        }
    });
    return ret;
};
/**
 * returns a map of branch coverage by source line number.
 * @returns {Object} an object keyed by line number. Each object
 * has a `covered`, `total` and `coverage` (percentage) property.
 */
FileCoverage.prototype.getBranchCoverageByLine = function () {
    var branchMap = this.branchMap,
        branches = this.b,
        ret = {};
    Object.keys(branchMap).forEach(function (k) {
        var line = branchMap[k].line || branchMap[k].loc.start.line,
            branchData = branches[k];
        ret[line] = ret[line] || [];
        ret[line].push.apply(ret[line], branchData);
    });
    Object.keys(ret).forEach(function (k) {
        var dataArray = ret[k],
            covered = dataArray.filter(function (item) { return item > 0; }),
            coverage = covered.length / dataArray.length * 100;
        ret[k] = { covered: covered.length, total: dataArray.length, coverage: coverage };
    });
    return ret;
};

// expose coverage data attributes
['path', 'statementMap', 'fnMap', 'branchMap', 's', 'f', 'b' ].forEach(function (p) {
    Object.defineProperty(FileCoverage.prototype, p, {
        enumerable: true,
        get: function () {
            return this.data[p];
        }
    });
});
/**
 * return a JSON-serializable POJO for this file coverage object
 */
FileCoverage.prototype.toJSON = function () {
    return this.data;
};
/**
 * merges a second coverage object into this one, updating hit counts
 * @param {FileCoverage} other - the coverage object to be merged into this one.
 *  Note that the other object should have the same structure as this one (same file).
 */
FileCoverage.prototype.merge = function (other) {
    var that = this;
    Object.keys(other.s).forEach(function (k) {
        that.data.s[k] += other.s[k];
    });
    Object.keys(other.f).forEach(function (k) {
        that.data.f[k] += other.f[k];
    });
    Object.keys(other.b).forEach(function (k) {
        var i,
            retArray = that.data.b[k],
            secondArray = other.b[k];
        if (!retArray) {
            that.data.b[k] = secondArray;
            return;
        }
        for (i = 0; i < retArray.length; i += 1) {
            retArray[i] += secondArray[i];
        }
    });
};

FileCoverage.prototype.computeSimpleTotals = function (property) {
    var stats = this[property],
        ret = {total: 0, covered: 0, skipped: 0};

    if (typeof stats === 'function') {
        stats = stats.call(this);
    }
    Object.keys(stats).forEach(function (key) {
        var covered = !!stats[key];
        ret.total += 1;
        if (covered) {
            ret.covered += 1;
        }
    });
    ret.pct = percent(ret.covered, ret.total);
    return ret;
};

FileCoverage.prototype.computeBranchTotals = function () {
    var stats = this.b,
        ret = {total: 0, covered: 0, skipped: 0};

    Object.keys(stats).forEach(function (key) {
        var branches = stats[key],
            covered;
        branches.forEach(function (branchHits) {
            covered = branchHits > 0;
            if (covered) {
                ret.covered += 1;
            }
        });
        ret.total += branches.length;
    });
    ret.pct = percent(ret.covered, ret.total);
    return ret;
};
/**
 * resets hit counts for all statements, functions and branches
 * in this coverage object resulting in zero coverage.
 */
FileCoverage.prototype.resetHits = function () {
    var statements = this.s,
        functions = this.f,
        branches = this.b;
    Object.keys(statements).forEach(function (s) {
        statements[s] = 0;
    });
    Object.keys(functions).forEach(function (f) {
        functions[f] = 0;
    });
    Object.keys(branches).forEach(function (b) {
        var hits = branches[b];
        branches[b] = hits.map(function () { return 0; });
    });
};

/**
 * returns a CoverageSummary for this file coverage object
 * @returns {CoverageSummary}
 */
FileCoverage.prototype.toSummary = function () {
    var ret = {};
    ret.lines = this.computeSimpleTotals('getLineCoverage');
    ret.functions = this.computeSimpleTotals('f', 'fnMap');
    ret.statements = this.computeSimpleTotals('s', 'statementMap');
    ret.branches = this.computeBranchTotals();
    return new CoverageSummary(ret);
};

module.exports = {
    CoverageSummary: CoverageSummary,
    FileCoverage: FileCoverage
};
