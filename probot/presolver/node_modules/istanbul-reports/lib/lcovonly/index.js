/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function LcovOnlyReport(opts) {
    this.file = opts.file || 'lcov.info';
    this.contentWriter = null;
}

LcovOnlyReport.prototype.onStart = function (root, context) {
    this.contentWriter = context.writer.writeFile(this.file);
};

LcovOnlyReport.prototype.onDetail = function (node) {

    var fc = node.getFileCoverage(),
        writer = this.contentWriter,
        functions = fc.f,
        functionMap = fc.fnMap,
        lines = fc.getLineCoverage(),
        branches = fc.b,
        branchMap = fc.branchMap,
        summary = node.getCoverageSummary();

    writer.println('TN:'); //no test name
    writer.println('SF:' + fc.path);

    Object.keys(functions).forEach(function (key) {
        var meta = functionMap[key];
        writer.println('FN:' + [meta.decl.start.line, meta.name].join(','));
    });
    writer.println('FNF:' + summary.functions.total);
    writer.println('FNH:' + summary.functions.covered);

    Object.keys(functions).forEach(function (key) {
        var stats = functions[key],
            meta = functionMap[key];
        writer.println('FNDA:' + [stats, meta.name].join(','));
    });

    Object.keys(lines).forEach(function (key) {
        var stat = lines[key];
        writer.println('DA:' + [key, stat].join(','));
    });
    writer.println('LF:' + summary.lines.total);
    writer.println('LH:' + summary.lines.covered);

    Object.keys(branches).forEach(function (key) {
        var branchArray = branches[key],
            meta = branchMap[key],
            line = meta.loc.start.line,
            i = 0;
        branchArray.forEach(function (b) {
            writer.println('BRDA:' + [line, key, i, b].join(','));
            i += 1;
        });
    });
    writer.println('BRF:' + summary.branches.total);
    writer.println('BRH:' + summary.branches.covered);
    writer.println('end_of_record');
};

LcovOnlyReport.prototype.onEnd = function () {
    this.contentWriter.close();
};

module.exports = LcovOnlyReport;
