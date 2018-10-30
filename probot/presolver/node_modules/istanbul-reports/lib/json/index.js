/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function JsonReport(opts) {
    this.file = opts.file || 'coverage-final.json';
    this.first = true;
}

JsonReport.prototype.onStart = function (root, context) {
    this.contentWriter = context.writer.writeFile(this.file);
    this.contentWriter.write("{");
};

JsonReport.prototype.onDetail = function (node) {
    var fc = node.getFileCoverage(),
        key = fc.path,
        cw = this.contentWriter;

    if (this.first) {
        this.first = false;
    } else {
        cw.write(",");
    }
    cw.write(JSON.stringify(key));
    cw.write(': ');
    cw.write(JSON.stringify(fc));
    cw.println("");
};

JsonReport.prototype.onEnd = function () {
    var cw = this.contentWriter;
    cw.println("}");
    cw.close();
};

module.exports = JsonReport;
