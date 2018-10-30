/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function JsonSummaryReport(opts) {
    this.file = opts.file || 'coverage-summary.json';
    this.contentWriter = null;
    this.first = true;
}

JsonSummaryReport.prototype.onStart = function (root, context) {
    this.contentWriter = context.writer.writeFile(this.file);
    this.contentWriter.write("{");
};

JsonSummaryReport.prototype.writeSummary = function (filePath, sc) {
    var cw = this.contentWriter;
    if (this.first) {
        this.first = false;
    } else {
        cw.write(",");
    }
    cw.write(JSON.stringify(filePath));
    cw.write(': ');
    cw.write(JSON.stringify(sc));
    cw.println("");
};

JsonSummaryReport.prototype.onSummary = function (node) {
    if (!node.isRoot()) {
        return;
    }
    this.writeSummary("total", node.getCoverageSummary());
};

JsonSummaryReport.prototype.onDetail = function (node) {
    this.writeSummary(node.getFileCoverage().path, node.getCoverageSummary());
};

JsonSummaryReport.prototype.onEnd = function () {
    var cw = this.contentWriter;
    cw.println("}");
    cw.close();
};

module.exports = JsonSummaryReport;
