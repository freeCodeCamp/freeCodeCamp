/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function TeamcityReport(opts) {
    opts = opts || {};
    this.file = opts.file || null;
    this.blockName = opts.blockName || 'Code Coverage Summary';
}

function lineForKey(value, teamcityVar) {
    return '##teamcity[buildStatisticValue key=\'' + teamcityVar + '\' value=\'' + value + '\']';
}

TeamcityReport.prototype.onStart = function (node, context) {
    var metrics = node.getCoverageSummary(),
        cw;

    cw = context.writer.writeFile(this.file);
    cw.println('');
    cw.println('##teamcity[blockOpened name=\''+ this.blockName +'\']');

    //Statements Covered
    cw.println(lineForKey(metrics.statements.covered, 'CodeCoverageAbsBCovered'));
    cw.println(lineForKey(metrics.statements.total, 'CodeCoverageAbsBTotal'));

    //Branches Covered
    cw.println(lineForKey(metrics.branches.covered, 'CodeCoverageAbsRCovered'));
    cw.println(lineForKey(metrics.branches.total, 'CodeCoverageAbsRTotal'));

    //Functions Covered
    cw.println(lineForKey(metrics.functions.covered, 'CodeCoverageAbsMCovered'));
    cw.println(lineForKey(metrics.functions.total, 'CodeCoverageAbsMTotal'));

    //Lines Covered
    cw.println(lineForKey(metrics.lines.covered, 'CodeCoverageAbsLCovered'));
    cw.println(lineForKey(metrics.lines.total, 'CodeCoverageAbsLTotal'));

    cw.println('##teamcity[blockClosed name=\''+ this.blockName +'\']');
    cw.close();
};

module.exports = TeamcityReport;
