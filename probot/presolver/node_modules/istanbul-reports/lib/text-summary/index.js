/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

function TextSummaryReport(opts) {
    opts = opts || {};
    this.file = opts.file || null;
}

function lineForKey(summary, key) {
    var metrics = summary[key],
        skipped,
        result;

    key = key.substring(0, 1).toUpperCase() + key.substring(1);
    if (key.length < 12) {
        key += '                   '.substring(0, 12 - key.length);
    }
    result = [key, ':', metrics.pct + '%', '(', metrics.covered + '/' + metrics.total, ')'].join(' ');
    skipped = metrics.skipped;
    if (skipped > 0) {
        result += ', ' + skipped + ' ignored';
    }
    return result;
}

TextSummaryReport.prototype.onStart = function (node, context) {
    var summary = node.getCoverageSummary(),
        cw,
        printLine = function (key) {
            var str = lineForKey(summary, key),
                clazz = context.classForPercent(key, summary[key].pct);
            cw.println(cw.colorize(str, clazz));
        };

    cw = context.writer.writeFile(this.file);
    cw.println('');
    cw.println('=============================== Coverage summary ===============================');
    printLine('statements');
    printLine('branches');
    printLine('functions');
    printLine('lines');
    cw.println('================================================================================');
    cw.close();
};

module.exports = TextSummaryReport;
